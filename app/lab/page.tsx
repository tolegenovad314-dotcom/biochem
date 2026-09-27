"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useState } from "react";

type Mode = "molecules" | "cell" | "dna" | "experiment";

type AtomData = {
  id: string;
  element: string;
  position: [number, number, number];
  color: string;
  radius: number;
};

type BondData = {
  from: string;
  to: string;
  order?: number;
};

type MoleculeData = {
  name: string;
  formula: string;
  description: string;
  atoms: AtomData[];
  bonds: BondData[];
};

const molecules: Record<string, MoleculeData> = {
  h2o: {
    name: "Су",
    formula: "H₂O",
    description:
      "Екі сутек атомы мен бір оттек атомынан тұратын молекула.",
    atoms: [
      {
        id: "o",
        element: "O",
        position: [0, 0, 0],
        color: "#ef4444",
        radius: 0.58,
      },
      {
        id: "h1",
        element: "H",
        position: [-0.9, 0.55, 0],
        color: "#f8fafc",
        radius: 0.3,
      },
      {
        id: "h2",
        element: "H",
        position: [0.9, 0.55, 0],
        color: "#f8fafc",
        radius: 0.3,
      },
    ],
    bonds: [
      { from: "o", to: "h1" },
      { from: "o", to: "h2" },
    ],
  },

  co2: {
    name: "Көмірқышқыл газы",
    formula: "CO₂",
    description:
      "Бір көміртек және екі оттек атомынан тұратын сызықтық молекула.",
    atoms: [
      {
        id: "c",
        element: "C",
        position: [0, 0, 0],
        color: "#374151",
        radius: 0.58,
      },
      {
        id: "o1",
        element: "O",
        position: [-1.3, 0, 0],
        color: "#ef4444",
        radius: 0.5,
      },
      {
        id: "o2",
        element: "O",
        position: [1.3, 0, 0],
        color: "#ef4444",
        radius: 0.5,
      },
    ],
    bonds: [
      { from: "c", to: "o1", order: 2 },
      { from: "c", to: "o2", order: 2 },
    ],
  },

  o2: {
    name: "Оттек",
    formula: "O₂",
    description: "Екі оттек атомынан тұратын молекула.",
    atoms: [
      {
        id: "o1",
        element: "O",
        position: [-0.65, 0, 0],
        color: "#ef4444",
        radius: 0.55,
      },
      {
        id: "o2",
        element: "O",
        position: [0.65, 0, 0],
        color: "#ef4444",
        radius: 0.55,
      },
    ],
    bonds: [{ from: "o1", to: "o2", order: 2 }],
  },

  ch4: {
    name: "Метан",
    formula: "CH₄",
    description:
      "Бір көміртек атомы және төрт сутек атомынан тұратын молекула.",
    atoms: [
      {
        id: "c",
        element: "C",
        position: [0, 0, 0],
        color: "#374151",
        radius: 0.58,
      },
      {
        id: "h1",
        element: "H",
        position: [1.05, 0.6, 0],
        color: "#f8fafc",
        radius: 0.3,
      },
      {
        id: "h2",
        element: "H",
        position: [-1.05, 0.6, 0],
        color: "#f8fafc",
        radius: 0.3,
      },
      {
        id: "h3",
        element: "H",
        position: [0, -0.6, 1.05],
        color: "#f8fafc",
        radius: 0.3,
      },
      {
        id: "h4",
        element: "H",
        position: [0, -0.6, -1.05],
        color: "#f8fafc",
        radius: 0.3,
      },
    ],
    bonds: [
      { from: "c", to: "h1" },
      { from: "c", to: "h2" },
      { from: "c", to: "h3" },
      { from: "c", to: "h4" },
    ],
  },

  nh3: {
    name: "Аммиак",
    formula: "NH₃",
    description:
      "Бір азот және үш сутек атомынан тұратын молекула.",
    atoms: [
      {
        id: "n",
        element: "N",
        position: [0, 0, 0],
        color: "#3b82f6",
        radius: 0.58,
      },
      {
        id: "h1",
        element: "H",
        position: [0.95, 0.5, 0],
        color: "#f8fafc",
        radius: 0.3,
      },
      {
        id: "h2",
        element: "H",
        position: [-0.95, 0.5, 0],
        color: "#f8fafc",
        radius: 0.3,
      },
      {
        id: "h3",
        element: "H",
        position: [0, -0.7, 0.85],
        color: "#f8fafc",
        radius: 0.3,
      },
    ],
    bonds: [
      { from: "n", to: "h1" },
      { from: "n", to: "h2" },
      { from: "n", to: "h3" },
    ],
  },
};

function Atom({
  atom,
  onSelect,
}: {
  atom: AtomData;
  onSelect: (atom: AtomData) => void;
}) {
  return (
    <mesh
      position={atom.position}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(atom);
      }}
    >
      <sphereGeometry args={[atom.radius, 64, 64]} />

      <meshStandardMaterial
        color={atom.color}
        roughness={0.2}
        metalness={0.12}
      />
    </mesh>
  );
}

function Bond({
  start,
  end,
  order = 1,
}: {
  start: [number, number, number];
  end: [number, number, number];
  order?: number;
}) {
  const data = useMemo(() => {
    const a = new THREE.Vector3(...start);
    const b = new THREE.Vector3(...end);

    const direction = b.clone().sub(a);
    const length = direction.length();

    const midpoint = a.clone().add(b).multiplyScalar(0.5);

    const quaternion = new THREE.Quaternion();

    quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      direction.clone().normalize()
    );

    return {
      position: midpoint,
      quaternion,
      length,
    };
  }, [start, end]);

  const offsets = order === 2 ? [-0.09, 0.09] : [0];

  return (
    <>
      {offsets.map((offset) => (
        <mesh
          key={offset}
          position={[
            data.position.x + offset,
            data.position.y,
            data.position.z,
          ]}
          quaternion={data.quaternion}
        >
          <cylinderGeometry args={[0.07, 0.07, data.length, 24]} />

          <meshStandardMaterial
            color="#94a3b8"
            roughness={0.3}
            metalness={0.45}
          />
        </mesh>
      ))}
    </>
  );
}

function MoleculeScene({
  molecule,
  onSelectAtom,
}: {
  molecule: MoleculeData;
  onSelectAtom: (atom: AtomData) => void;
}) {
  const atomMap = new Map(
    molecule.atoms.map((atom) => [atom.id, atom])
  );

  return (
    <group>
      {molecule.bonds.map((bond, index) => {
        const from = atomMap.get(bond.from);
        const to = atomMap.get(bond.to);

        if (!from || !to) return null;

        return (
          <Bond
            key={index}
            start={from.position}
            end={to.position}
            order={bond.order}
          />
        );
      })}

      {molecule.atoms.map((atom) => (
        <Atom
          key={atom.id}
          atom={atom}
          onSelect={onSelectAtom}
        />
      ))}
    </group>
  );
}

function CellScene({
  onSelect,
}: {
  onSelect: (name: string) => void;
}) {
  return (
    <group>
      <mesh
        onClick={(event) => {
          event.stopPropagation();
          onSelect("Жасуша мембранасы");
        }}
        scale={[2.5, 1.65, 1.65]}
      >
        <sphereGeometry args={[1, 64, 64]} />

        <meshPhysicalMaterial
          color="#38bdf8"
          transparent
          opacity={0.18}
          transmission={0.2}
          roughness={0.15}
          thickness={0.5}
        />
      </mesh>

      <mesh
        position={[0, 0.1, 0]}
        onClick={(event) => {
          event.stopPropagation();
          onSelect("Жасуша ядросы");
        }}
      >
        <sphereGeometry args={[0.8, 64, 64]} />

        <meshStandardMaterial
          color="#8b5cf6"
          roughness={0.25}
          metalness={0.1}
          emissive="#4c1d95"
          emissiveIntensity={0.3}
        />
      </mesh>

      <mesh
        position={[-1.15, 0.45, 0.45]}
        scale={[0.45, 0.2, 0.2]}
        rotation={[0, 0, 0.4]}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>

      <mesh
        position={[1.1, -0.4, 0.3]}
        scale={[0.5, 0.22, 0.22]}
        rotation={[0, 0, -0.5]}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#f97316" />
      </mesh>

      <mesh
        position={[0.95, 0.55, -0.65]}
        scale={[0.35, 0.18, 0.18]}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#22c55e" />
      </mesh>

      <mesh
        position={[-1.05, -0.55, -0.5]}
        scale={[0.4, 0.18, 0.18]}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#22c55e" />
      </mesh>
    </group>
  );
}

function DNAScene({
  onSelect,
}: {
  onSelect: (name: string) => void;
}) {
  const points = useMemo(() => {
    const result: {
      left: [number, number, number];
      right: [number, number, number];
    }[] = [];

    for (let i = 0; i < 18; i++) {
      const y = (i - 8.5) * 0.28;
      const angle = i * 0.65;

      const x = Math.cos(angle) * 0.85;
      const z = Math.sin(angle) * 0.85;

      result.push({
        left: [x, y, z],
        right: [-x, y, -z],
      });
    }

    return result;
  }, []);

  return (
    <group
      rotation={[0, 0, Math.PI / 8]}
      onClick={(event) => {
        event.stopPropagation();
        onSelect("ДНҚ қос спиралі");
      }}
    >
      {points.map((point, index) => (
        <group key={index}>
          <mesh position={point.left}>
            <sphereGeometry args={[0.14, 32, 32]} />
            <meshStandardMaterial
              color="#38bdf8"
              emissive="#0369a1"
              emissiveIntensity={0.5}
            />
          </mesh>

          <mesh position={point.right}>
            <sphereGeometry args={[0.14, 32, 32]} />
            <meshStandardMaterial
              color="#f472b6"
              emissive="#9d174d"
              emissiveIntensity={0.5}
            />
          </mesh>

          <Bond
            start={point.left}
            end={point.right}
          />
        </group>
      ))}
    </group>
  );
}

/* ------------------------------
   ВИРТУАЛДЫ ТӘЖІРИБЕ
-------------------------------- */

type Experiment = {
  id: string;
  title: string;
  icon: string;
  description: string;
  equation: string;
  result: string;
  observation: string;
};

const experiments: Experiment[] = [
  {
    id: "indicator",
    title: "Индикатор",
    icon: "🧪",
    description:
      "Ерітінді ортасының өзгеруін виртуалды индикатор арқылы бақыла.",
    equation: "Қышқыл орта ↔ Бейтарап орта ↔ Негіздік орта",
    result:
      "Индикатордың түсі ерітінді ортасына байланысты өзгереді.",
    observation:
      "Ерітіндіге виртуалды реагент қосылған кезде түс біртіндеп өзгереді.",
  },
  {
    id: "solution",
    title: "Ерітінді",
    icon: "💧",
    description:
      "Еріген зат мөлшерін өзгертіп, концентрация ұғымын зертте.",
    equation: "Еріген зат + еріткіш → ерітінді",
    result:
      "Еріген зат мөлшері артқан сайын ерітінді концентрациясы өзгереді.",
    observation:
      "Виртуалды бөлшектердің саны мен ерітіндінің көрінісі өзгереді.",
  },
  {
    id: "gas",
    title: "Газ түзілуі",
    icon: "🫧",
    description:
      "Химиялық өзгеріс кезінде газдың бөлінуін модель ретінде бақыла.",
    equation: "Реагенттер → өнімдер + газ",
    result:
      "Виртуалды ортада газ көпіршіктері пайда болады.",
    observation:
      "Реакция басталған кезде колба ішінде көпіршіктер жоғары көтеріледі.",
  },
];

function ExperimentScene({
  active,
}: {
  active: boolean;
}) {
  const bubbles = useMemo(() => {
    return Array.from({ length: 18 }, (_, index) => ({
      x: ((index * 37) % 100) / 100 - 0.5,
      y: ((index * 17) % 100) / 100,
      z: ((index * 23) % 100) / 100 - 0.5,
      size: 0.04 + ((index * 13) % 5) / 100,
    }));
  }, []);

  return (
    <group>
      {/* Колба */}
      <mesh position={[0, -0.85, 0]}>
        <cylinderGeometry args={[1.25, 1.0, 0.25, 64]} />
        <meshPhysicalMaterial
          color="#bae6fd"
          transparent
          opacity={0.22}
          transmission={0.5}
          roughness={0.08}
        />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 1.2, 1.6, 64]} />
        <meshPhysicalMaterial
          color="#dbeafe"
          transparent
          opacity={0.2}
          transmission={0.5}
          roughness={0.08}
        />
      </mesh>

      <mesh position={[0, 1.25, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 1, 64]} />
        <meshPhysicalMaterial
          color="#dbeafe"
          transparent
          opacity={0.2}
          transmission={0.5}
          roughness={0.08}
        />
      </mesh>

      {/* Ерітінді */}
      <mesh position={[0, -0.48, 0]}>
        <cylinderGeometry args={[0.98, 0.82, 0.7, 64]} />
        <meshStandardMaterial
          color={active ? "#a855f7" : "#38bdf8"}
          transparent
          opacity={0.75}
          roughness={0.12}
          emissive={active ? "#7e22ce" : "#0369a1"}
          emissiveIntensity={active ? 0.35 : 0.12}
        />
      </mesh>

      {/* Бөлшектер */}
      {active &&
        Array.from({ length: 14 }).map((_, index) => {
          const x = ((index * 43) % 100) / 100 - 0.5;
          const y = ((index * 29) % 100) / 100 - 0.75;
          const z = ((index * 31) % 100) / 100 - 0.5;

          return (
            <mesh
              key={`particle-${index}`}
              position={[x * 1.5, y * 0.7, z * 1.5]}
            >
              <sphereGeometry args={[0.07, 20, 20]} />
              <meshStandardMaterial
                color="#f5d0fe"
                emissive="#d946ef"
                emissiveIntensity={0.7}
              />
            </mesh>
          );
        })}

      {/* Газ көпіршіктері */}
      {active &&
        bubbles.map((bubble, index) => (
          <mesh
            key={`bubble-${index}`}
            position={[
              bubble.x * 1.4,
              -0.2 + bubble.y * 2,
              bubble.z * 1.4,
            ]}
          >
            <sphereGeometry
              args={[bubble.size, 20, 20]}
            />
            <meshStandardMaterial
              color="#e0f2fe"
              transparent
              opacity={0.7}
            />
          </mesh>
        ))}
    </group>
  );
}

export default function Lab() {
  const [mode, setMode] =
    useState<Mode>("molecules");

  const [selectedMolecule, setSelectedMolecule] =
    useState("h2o");

  const [selectedAtom, setSelectedAtom] =
    useState<AtomData | null>(null);

  const [selectedPart, setSelectedPart] =
    useState<string | null>(null);

  const [selectedExperiment, setSelectedExperiment] =
    useState("indicator");

  const [experimentStarted, setExperimentStarted] =
    useState(false);

  const molecule = molecules[selectedMolecule];

  const experiment =
    experiments.find(
      (item) => item.id === selectedExperiment
    ) ?? experiments[0];

  const resetSelection = () => {
    setSelectedAtom(null);
    setSelectedPart(null);
  };

  const resetExperiment = () => {
    setExperimentStarted(false);
  };

  return (
    <main className="min-h-screen bg-[#040712] text-white">
      <header className="border-b border-white/10 bg-white/[0.025]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="text-xl font-bold tracking-wide"
          >
            🧬 BIOCHEM
          </a>

          <a
            href="/"
            className="text-sm text-white/50 transition hover:text-white"
          >
            ← Басты бет
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-cyan-400">
            BIOCHEM • VIRTUAL LAB
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Виртуалды зертхана
          </h1>

          <p className="mt-4 max-w-3xl leading-7 text-white/50">
            Химия мен биология объектілерін үш өлшемді
            кеңістікте зертте. Модельдерді айналдыр,
            жақындат және бөлшектерін таңда.
          </p>
        </div>

        {/* Режимдер */}
        <div className="mb-6 flex flex-wrap gap-3">
          <button
            onClick={() => {
              setMode("molecules");
              resetSelection();
            }}
            className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${
              mode === "molecules"
                ? "bg-cyan-500 text-black"
                : "bg-white/[0.06] text-white/60 hover:bg-white/10"
            }`}
          >
            🧪 Молекулалар
          </button>

          <button
            onClick={() => {
              setMode("cell");
              resetSelection();
            }}
            className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${
              mode === "cell"
                ? "bg-cyan-500 text-black"
                : "bg-white/[0.06] text-white/60 hover:bg-white/10"
            }`}
          >
            🧫 Жасуша
          </button>

          <button
            onClick={() => {
              setMode("dna");
              resetSelection();
            }}
            className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${
              mode === "dna"
                ? "bg-cyan-500 text-black"
                : "bg-white/[0.06] text-white/60 hover:bg-white/10"
            }`}
          >
            🧬 ДНҚ
          </button>

          <button
            onClick={() => {
              setMode("experiment");
              resetSelection();
              resetExperiment();
            }}
            className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${
              mode === "experiment"
                ? "bg-purple-500 text-white"
                : "bg-white/[0.06] text-white/60 hover:bg-white/10"
            }`}
          >
            🔬 Тәжірибе
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[270px_1fr]">
          {/* Сол жақ панель */}
          <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.03] p-4">
            {mode === "molecules" && (
              <>
                <p className="mb-4 px-2 text-xs font-semibold tracking-widest text-white/35">
                  МОЛЕКУЛАЛАР
                </p>

                <div className="space-y-2">
                  {Object.entries(molecules).map(
                    ([key, item]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setSelectedMolecule(key);
                          resetSelection();
                        }}
                        className={`w-full rounded-2xl px-4 py-4 text-left transition ${
                          selectedMolecule === key
                            ? "bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/30"
                            : "bg-white/[0.03] text-white/65 hover:bg-white/[0.07]"
                        }`}
                      >
                        <div className="text-lg font-bold">
                          {item.formula}
                        </div>

                        <div className="mt-1 text-xs text-white/35">
                          {item.name}
                        </div>
                      </button>
                    )
                  )}
                </div>
              </>
            )}

            {mode === "cell" && (
              <>
                <p className="mb-4 px-2 text-xs font-semibold tracking-widest text-white/35">
                  ЖАСУША
                </p>

                <div className="rounded-2xl bg-cyan-400/10 p-5">
                  <div className="text-3xl">🧫</div>

                  <h2 className="mt-3 font-semibold">
                    Жануар жасушасы
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Жасушаның негізгі құрылымдарын 3D
                    форматта зертте.
                  </p>
                </div>
              </>
            )}

            {mode === "dna" && (
              <>
                <p className="mb-4 px-2 text-xs font-semibold tracking-widest text-white/35">
                  ГЕНЕТИКА
                </p>

                <div className="rounded-2xl bg-pink-400/10 p-5">
                  <div className="text-3xl">🧬</div>

                  <h2 className="mt-3 font-semibold">
                    ДНҚ
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-white/40">
                    ДНҚ-ның қос спиральды құрылысын зертте.
                  </p>
                </div>
              </>
            )}

            {mode === "experiment" && (
              <>
                <p className="mb-4 px-2 text-xs font-semibold tracking-widest text-white/35">
                  ТӘЖІРИБЕЛЕР
                </p>

                <div className="space-y-2">
                  {experiments.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedExperiment(item.id);
                        setExperimentStarted(false);
                      }}
                      className={`w-full rounded-2xl p-4 text-left transition ${
                        selectedExperiment === item.id
                          ? "bg-purple-400/10 text-purple-300 ring-1 ring-purple-400/30"
                          : "bg-white/[0.03] text-white/65 hover:bg-white/[0.07]"
                      }`}
                    >
                      <div className="text-2xl">
                        {item.icon}
                      </div>

                      <div className="mt-2 font-semibold">
                        {item.title}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs leading-5 text-white/40">
                    {experiment.description}
                  </p>

                  <button
                    onClick={() =>
                      setExperimentStarted(
                        (value) => !value
                      )
                    }
                    className="mt-4 w-full rounded-xl bg-purple-500 px-4 py-3 text-sm font-semibold transition hover:bg-purple-400"
                  >
                    {experimentStarted
                      ? "↻ Қайта бастау"
                      : "▶ Тәжірибені бастау"}
                  </button>
                </div>
              </>
            )}
          </aside>

          {/* 3D аймақ */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#070b18]">
            <div className="relative h-[650px]">
              <Canvas
                camera={{
                  position: [0, 0, 5],
                  fov: 45,
                }}
                dpr={[1, 2]}
              >
                <color
                  attach="background"
                  args={["#070b18"]}
                />

                <ambientLight intensity={1.5} />

                <directionalLight
                  position={[5, 6, 5]}
                  intensity={4}
                />

                <directionalLight
                  position={[-5, -3, 3]}
                  intensity={2}
                />

                <pointLight
                  position={[0, 2, 4]}
                  intensity={2}
                />

                {mode === "molecules" && (
                  <MoleculeScene
                    molecule={molecule}
                    onSelectAtom={setSelectedAtom}
                  />
                )}

                {mode === "cell" && (
                  <CellScene
                    onSelect={setSelectedPart}
                  />
                )}

                {mode === "dna" && (
                  <DNAScene
                    onSelect={setSelectedPart}
                  />
                )}

                {mode === "experiment" && (
                  <ExperimentScene
                    active={experimentStarted}
                  />
                )}

                <OrbitControls
                  enableRotate
                  enableZoom
                  enablePan
                  enableDamping
                  dampingFactor={0.08}
                  minDistance={2}
                  maxDistance={12}
                />
              </Canvas>

              {/* Жоғарғы ақпарат */}
              <div className="pointer-events-none absolute left-5 top-5 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 backdrop-blur-xl">
                {mode === "molecules" && (
                  <>
                    <div className="text-2xl font-bold">
                      {molecule.formula}
                    </div>

                    <div className="mt-1 text-sm text-white/45">
                      {molecule.name}
                    </div>
                  </>
                )}

                {mode === "cell" && (
                  <>
                    <div className="text-2xl font-bold">
                      🧫 Жасуша
                    </div>

                    <div className="mt-1 text-sm text-white/45">
                      3D биологиялық модель
                    </div>
                  </>
                )}

                {mode === "dna" && (
                  <>
                    <div className="text-2xl font-bold">
                      🧬 ДНҚ
                    </div>

                    <div className="mt-1 text-sm text-white/45">
                      Қос спираль
                    </div>
                  </>
                )}

                {mode === "experiment" && (
                  <>
                    <div className="text-2xl font-bold">
                      {experiment.icon} {experiment.title}
                    </div>

                    <div className="mt-1 text-sm text-white/45">
                      Виртуалды тәжірибе
                    </div>
                  </>
                )}
              </div>

              {/* Тәжірибе нәтижесі */}
              {mode === "experiment" &&
                experimentStarted && (
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-purple-400/20 bg-[#12091f]/90 p-5 backdrop-blur-xl">
                    <p className="text-xs font-semibold uppercase tracking-widest text-purple-300">
                      Тәжірибе нәтижесі
                    </p>

                    <h2 className="mt-2 text-xl font-bold">
                      {experiment.result}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-white/50">
                      {experiment.observation}
                    </p>

                    <div className="mt-4 rounded-xl bg-white/5 p-3 text-sm text-purple-200">
                      ⚗️ {experiment.equation}
                    </div>
                  </div>
                )}

              {/* Таңдалған атом/бөлік */}
              {(selectedAtom || selectedPart) &&
                mode !== "experiment" && (
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-cyan-400/20 bg-[#07101f]/90 p-5 backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                          Таңдалған объект
                        </p>

                        <h2 className="mt-1 text-2xl font-bold">
                          {selectedAtom?.element ??
                            selectedPart}
                        </h2>
                      </div>

                      <button
                        onClick={resetSelection}
                        className="rounded-xl bg-white/5 px-3 py-2 text-white/50 hover:bg-white/10"
                      >
                        ✕
                      </button>
                    </div>

                    {selectedAtom && (
                      <p className="mt-3 text-sm text-white/50">
                        {selectedAtom.element} атомы
                        3D модельде көрсетілген.
                      </p>
                    )}
                  </div>
                )}
            </div>

            <div className="border-t border-white/10 px-5 py-4">
              <div className="flex flex-wrap gap-2 text-xs text-white/45">
                <span className="rounded-xl bg-white/5 px-3 py-2">
                  🖱️ Айналдыру
                </span>

                <span className="rounded-xl bg-white/5 px-3 py-2">
                  🔍 Жақындату
                </span>

                <span className="rounded-xl bg-white/5 px-3 py-2">
                  ↔️ Панорамалау
                </span>

                <span className="rounded-xl bg-white/5 px-3 py-2">
                  👆 Таңдау
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Төменгі ақпарат */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-3xl">⚛️</div>

            <h2 className="mt-4 text-xl font-bold">
              Химиялық құрылым
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/45">
              Атомдардың кеңістіктегі орналасуын және
              олардың байланыстарын зертте.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-3xl">🧬</div>

            <h2 className="mt-4 text-xl font-bold">
              Биологиялық модель
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/45">
              Жасуша мен ДНҚ құрылымдарын үш өлшемді
              форматта қара.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-3xl">🔬</div>

            <h2 className="mt-4 text-xl font-bold">
              Виртуалды тәжірибе
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/45">
              Реакцияларды қауіпсіз виртуалды ортада
              зерттеуге арналған режим.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}