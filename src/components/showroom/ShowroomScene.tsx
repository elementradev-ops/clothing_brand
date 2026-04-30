"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
// Lightweight scene - no heavy drei imports
import * as THREE from "three";

/* ─── Camera ─── */
function Cam({ progress }: { progress: React.MutableRefObject<number> }) {
  const { camera } = useThree();
  const lookAt = useRef(new THREE.Vector3(0, 2, 0));
  const path = useMemo(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 4, 28), new THREE.Vector3(0, 3.2, 20),
    new THREE.Vector3(0, 2.8, 14), new THREE.Vector3(0, 2.4, 8),
    new THREE.Vector3(0, 2.2, 3), new THREE.Vector3(0, 2, -2),
    new THREE.Vector3(0, 2, -8), new THREE.Vector3(0, 2.2, -14),
    new THREE.Vector3(0, 2.5, -18),
  ]), []);
  const look = useMemo(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 2.5, 0), new THREE.Vector3(0, 2.5, 0),
    new THREE.Vector3(0, 2, -4), new THREE.Vector3(0, 2, -8),
    new THREE.Vector3(0, 2, -14), new THREE.Vector3(0, 2, -18),
    new THREE.Vector3(0, 2, -24), new THREE.Vector3(0, 1.8, -28),
    new THREE.Vector3(0, 1.5, -30),
  ]), []);
  useFrame(() => {
    const t = Math.min(Math.max(progress.current, 0), 1);
    camera.position.lerp(path.getPoint(t), 0.06);
    lookAt.current.lerp(look.getPoint(t), 0.06);
    camera.lookAt(lookAt.current);
  });
  return null;
}

/* ─── Shared Materials (MeshStandardMaterial only – GPU safe) ─── */
const M = {
  wall: () => <meshStandardMaterial color="#E8E2D8" roughness={0.85} />,
  wallTrim: () => <meshStandardMaterial color="#D0C8BE" roughness={0.7} />,
  gold: () => <meshStandardMaterial color="#C9A227" metalness={0.9} roughness={0.2} />,
  goldMatte: () => <meshStandardMaterial color="#B8922A" metalness={0.6} roughness={0.4} />,
  marble: () => <meshStandardMaterial color="#F0ECE6" roughness={0.1} metalness={0.08} />,
  wood: () => <meshStandardMaterial color="#4A3728" roughness={0.55} />,
  woodLight: () => <meshStandardMaterial color="#6B4F3A" roughness={0.5} />,
  dark: () => <meshStandardMaterial color="#1E1B18" roughness={0.4} />,
  glass: () => <meshStandardMaterial color="#88AACC" transparent opacity={0.15} roughness={0.02} metalness={0.15} />,
  body: () => <meshStandardMaterial color="#E5DDD5" roughness={0.65} />,
  glow: () => <meshStandardMaterial color="#FFFAF0" emissive="#FFE8C0" emissiveIntensity={4} />,
  fabric: (c: string) => <meshStandardMaterial color={c} roughness={0.75} />,
};

/* ─── Exterior ─── */
function Exterior() {
  return (
    <group>
      {/* Ground */}
      <mesh rotation-x={-Math.PI / 2} position-y={-0.02}>
        <planeGeometry args={[50, 50]} /><meshStandardMaterial color="#8A8578" roughness={0.9} />
      </mesh>
      {/* Sidewalk */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.01, 8]}>
        <planeGeometry args={[18, 12]} /><meshStandardMaterial color="#C8C0B5" roughness={0.5} />
      </mesh>

      {/* Facade walls */}
      <mesh position={[-5.5, 3.5, 0]}><boxGeometry args={[5, 7, 0.5]} />{M.wall()}</mesh>
      <mesh position={[5.5, 3.5, 0]}><boxGeometry args={[5, 7, 0.5]} />{M.wall()}</mesh>
      <mesh position={[0, 6.2, 0]}><boxGeometry args={[6, 0.8, 0.5]} />{M.wall()}</mesh>

      {/* Crown molding */}
      <mesh position={[0, 7, 0.35]}><boxGeometry args={[16, 0.15, 0.5]} />{M.wallTrim()}</mesh>
      <mesh position={[0, 6.85, 0.5]}><boxGeometry args={[16, 0.1, 0.25]} />{M.wallTrim()}</mesh>

      {/* Gold trim */}
      <mesh position={[0, 5.75, 0.27]}><boxGeometry args={[6.5, 0.06, 0.04]} />{M.gold()}</mesh>

      {/* Canopy */}
      <mesh position={[0, 7.3, 1.5]}><boxGeometry args={[16, 0.1, 3.5]} /><meshStandardMaterial color="#1A1A1A" roughness={0.2} metalness={0.7} /></mesh>

      {/* Display windows */}
      {[-5.5, 5.5].map((x, i) => (
        <group key={`w-${i}`}>
          <mesh position={[x, 2.8, 0.27]}><planeGeometry args={[3.8, 4.5]} /><meshStandardMaterial color="#0A0F18" transparent opacity={0.5} roughness={0.02} metalness={0.3} /></mesh>
          {/* Window gold frames */}
          <mesh position={[x, 5.05, 0.28]}><boxGeometry args={[3.9, 0.05, 0.05]} />{M.goldMatte()}</mesh>
          <mesh position={[x, 0.55, 0.28]}><boxGeometry args={[3.9, 0.05, 0.05]} />{M.goldMatte()}</mesh>
          <mesh position={[x - 1.95, 2.8, 0.28]}><boxGeometry args={[0.05, 4.55, 0.05]} />{M.goldMatte()}</mesh>
          <mesh position={[x + 1.95, 2.8, 0.28]}><boxGeometry args={[0.05, 4.55, 0.05]} />{M.goldMatte()}</mesh>
        </group>
      ))}

      {/* Entrance pillars */}
      {[-3.2, 3.2].map((x, i) => (
        <group key={`p-${i}`}>
          <mesh position={[x, 2.75, 0.55]}><boxGeometry args={[0.3, 5.5, 0.3]} />{M.wallTrim()}</mesh>
          <mesh position={[x, 5.6, 0.55]}><boxGeometry args={[0.4, 0.1, 0.4]} />{M.gold()}</mesh>
          <mesh position={[x, 0.03, 0.55]}><boxGeometry args={[0.38, 0.08, 0.38]} />{M.gold()}</mesh>
        </group>
      ))}

      {/* BRAND signboard (gold blocks) */}
      {[-1.5, -0.75, 0, 0.75, 1.5].map((x, i) => (
        <mesh key={`s-${i}`} position={[x, 6.6, 0.5]}><boxGeometry args={[0.55, 0.7, 0.06]} />{M.gold()}</mesh>
      ))}

      {/* Sconce lights */}
      {[-4.5, 4.5].map((x, i) => (
        <group key={`sc-${i}`} position={[x, 4.8, 0.65]}>
          <mesh><boxGeometry args={[0.15, 0.3, 0.1]} />{M.goldMatte()}</mesh>
          <mesh position-y={0.25}><sphereGeometry args={[0.08, 8, 8]} />{M.glow()}</mesh>
          <pointLight color="#FFE0B0" intensity={2} distance={6} decay={2} />
        </group>
      ))}
    </group>
  );
}

/* ─── Doors ─── */
function Doors({ progress }: { progress: React.MutableRefObject<number> }) {
  const L = useRef<THREE.Group>(null), R = useRef<THREE.Group>(null);
  useFrame(() => {
    const d = Math.min(Math.max((progress.current - 0.2) / 0.2, 0), 1);
    const a = d * (Math.PI / 2.2);
    if (L.current) L.current.rotation.y = a;
    if (R.current) R.current.rotation.y = -a;
  });
  return (
    <group>
      <group ref={L} position={[-1.5, 0, 0.25]}>
        <mesh position={[-0.75, 2.75, 0]}><boxGeometry args={[1.5, 5.5, 0.06]} />{M.glass()}</mesh>
        <mesh position={[-0.75, 2.75, 0]}><boxGeometry args={[1.52, 5.52, 0.02]} />{M.goldMatte()}</mesh>
      </group>
      <group ref={R} position={[1.5, 0, 0.25]}>
        <mesh position={[0.75, 2.75, 0]}><boxGeometry args={[1.5, 5.5, 0.06]} />{M.glass()}</mesh>
        <mesh position={[0.75, 2.75, 0]}><boxGeometry args={[1.52, 5.52, 0.02]} />{M.goldMatte()}</mesh>
      </group>
      {/* Handles */}
      <mesh position={[-0.85, 2.7, 0.3]}><boxGeometry args={[0.03, 0.3, 0.06]} />{M.gold()}</mesh>
      <mesh position={[0.85, 2.7, 0.3]}><boxGeometry args={[0.03, 0.3, 0.06]} />{M.gold()}</mesh>
    </group>
  );
}

/* ─── Interior ─── */
function Interior() {
  return (
    <group>
      {/* Polished marble floor */}
      <mesh rotation-x={-Math.PI / 2} position={[0, 0, -15]}><planeGeometry args={[14, 36]} />{M.marble()}</mesh>
      {/* Gold floor inlay lines */}
      {[-6.5, 0, 6.5].map((x, i) => (
        <mesh key={`fl-${i}`} rotation-x={-Math.PI / 2} position={[x, 0.005, -15]}><planeGeometry args={[0.02, 34]} />{M.gold()}</mesh>
      ))}
      {/* Ceiling */}
      <mesh rotation-x={Math.PI / 2} position={[0, 7, -15]}><planeGeometry args={[14, 36]} /><meshStandardMaterial color="#FDFAF5" roughness={0.95} /></mesh>
      {/* Ceiling light panels */}
      {[-5, -10, -15, -20, -25].map((z, i) => (
        <mesh key={`cl-${i}`} position={[0, 6.95, z]}><boxGeometry args={[2, 0.04, 0.8]} />{M.glow()}</mesh>
      ))}

      {/* Walls */}
      {[-7, 7].map((x, i) => (
        <group key={`w-${i}`}>
          {/* Upper wall */}
          <mesh position={[x, 4.5, -15]} rotation-y={i === 0 ? Math.PI / 2 : -Math.PI / 2}>
            <planeGeometry args={[36, 5]} /><meshStandardMaterial color="#F0EBE2" roughness={0.8} side={THREE.DoubleSide} />
          </mesh>
          {/* Wainscoting */}
          <mesh position={[x, 1, -15]} rotation-y={i === 0 ? Math.PI / 2 : -Math.PI / 2}>
            <planeGeometry args={[36, 2]} /><meshStandardMaterial color="#D8D0C5" roughness={0.6} side={THREE.DoubleSide} />
          </mesh>
          {/* Chair rail (gold) */}
          <mesh position={[x + (i === 0 ? 0.02 : -0.02), 2.05, -15]} rotation-y={i === 0 ? Math.PI / 2 : -Math.PI / 2}>
            <boxGeometry args={[36, 0.04, 0.04]} />{M.goldMatte()}
          </mesh>
        </group>
      ))}

      {/* Back wall */}
      <mesh position={[0, 3.5, -33]}><planeGeometry args={[14, 7]} />{M.dark()}</mesh>
      {/* Back wall brand blocks */}
      {[-1.8, -0.9, 0, 0.9, 1.8].map((x, i) => (
        <mesh key={`bs-${i}`} position={[x, 4.5, -32.95]}><boxGeometry args={[0.7, 0.9, 0.04]} />{M.gold()}</mesh>
      ))}
      <mesh position={[0, 3.9, -32.95]}><boxGeometry args={[5, 0.03, 0.02]} />{M.gold()}</mesh>
    </group>
  );
}

/* ─── Shelves ─── */
function Shelves() {
  const colors = ["#F5F0E8", "#C9A227", "#1B2838", "#722F37", "#87AE73", "#D4A0A0", "#4A3728", "#FFFDD0"];
  return (
    <group>
      {[0, 1, 2, 3, 4].map((i) =>
        [-6.2, 6.2].map((x, si) => (
          <group key={`s-${i}-${si}`} position={[x, 0, -3 - i * 5.5]}>
            <mesh position={[0, 2.5, 0]}><boxGeometry args={[2, 5, 0.7]} />{M.wood()}</mesh>
            <mesh position={[0, 2.5, -0.33]}><boxGeometry args={[1.9, 4.8, 0.02]} />{M.woodLight()}</mesh>
            {[0.8, 1.6, 2.4, 3.2].map((h) => (
              <group key={h}>
                <mesh position={[0, h, 0.05]}><boxGeometry args={[2.05, 0.05, 0.75]} />{M.woodLight()}</mesh>
                <mesh position={[0, h, 0.42]}><boxGeometry args={[2.06, 0.03, 0.02]} />{M.goldMatte()}</mesh>
              </group>
            ))}
            {[0.8, 1.6, 2.4].map((h, ri) => (
              <group key={`r-${ri}`}>
                <mesh position={[-0.4, h + 0.2, 0.1]} rotation-z={Math.PI / 2}>
                  <cylinderGeometry args={[0.12, 0.12, 0.5, 10]} />{M.fabric(colors[(i * 3 + si + ri) % colors.length])}
                </mesh>
                <mesh position={[0.3, h + 0.18, 0.1]} rotation-z={Math.PI / 2}>
                  <cylinderGeometry args={[0.09, 0.09, 0.4, 8]} />{M.fabric(colors[(i * 3 + si + ri + 3) % colors.length])}
                </mesh>
              </group>
            ))}
          </group>
        ))
      )}
    </group>
  );
}

/* ─── Mannequins ─── */
function Mannequins() {
  const cfgs = [
    { x: -2.5, z: -13, col: "#C9A227" },
    { x: 0, z: -15, col: "#722F37" },
    { x: 2.5, z: -13, col: "#1B2838" },
  ];
  return (
    <group>
      {/* Central platform */}
      <mesh position={[0, 0.06, -14]} rotation-x={-Math.PI / 2}>
        <circleGeometry args={[4.5, 24]} /><meshStandardMaterial color="#E8E2D8" roughness={0.2} metalness={0.05} />
      </mesh>
      <mesh position={[0, 0.03, -14]} rotation-x={-Math.PI / 2}>
        <ringGeometry args={[4.4, 4.55, 32]} /><meshStandardMaterial color="#C9A227" metalness={0.8} roughness={0.2} />
      </mesh>

      {cfgs.map((c, i) => (
        <group key={i} position={[c.x, 0, c.z]}>
          {/* Pedestal */}
          <mesh position-y={0.2}><cylinderGeometry args={[0.4, 0.45, 0.4, 16]} /><meshStandardMaterial color="#1A1A1A" metalness={0.6} roughness={0.25} /></mesh>
          <mesh position-y={0.02}><cylinderGeometry args={[0.48, 0.5, 0.04, 16]} />{M.gold()}</mesh>
          {/* Body */}
          <mesh position-y={1.7}><cylinderGeometry args={[0.26, 0.2, 1.5, 10]} />{M.body()}</mesh>
          <mesh position-y={2.5}><boxGeometry args={[0.7, 0.12, 0.25]} />{M.body()}</mesh>
          <mesh position-y={2.65}><cylinderGeometry args={[0.07, 0.09, 0.2, 8]} />{M.body()}</mesh>
          <mesh position-y={2.95}><sphereGeometry args={[0.18, 10, 10]} />{M.body()}</mesh>
          {/* Gown */}
          <mesh position-y={0.7}><coneGeometry args={[0.5, 1, 16]} />{M.fabric(c.col)}</mesh>
          <mesh position-y={1.5}><cylinderGeometry args={[0.27, 0.35, 0.6, 10]} />{M.fabric(c.col)}</mesh>
        </group>
      ))}
    </group>
  );
}

/* ─── Reception Desk ─── */
function Desk() {
  return (
    <group position={[0, 0, -29]}>
      <mesh position-y={0.55}><boxGeometry args={[5.5, 1.1, 1.3]} />{M.wood()}</mesh>
      <mesh position-y={1.15}><boxGeometry args={[5.7, 0.08, 1.5]} />{M.marble()}</mesh>
      <mesh position={[0, 0.55, 0.66]}><boxGeometry args={[5.55, 1.12, 0.015]} />{M.gold()}</mesh>
      <mesh position={[0, 1.12, 0.75]}><boxGeometry args={[5.75, 0.04, 0.04]} />{M.gold()}</mesh>
    </group>
  );
}

/* ─── Particles ─── */
function Particles() {
  const count = 80;
  const ref = useRef<THREE.Points>(null);
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) { a[i*3]=(Math.random()-0.5)*12; a[i*3+1]=Math.random()*6+0.5; a[i*3+2]=Math.random()*-30+3; }
    g.setAttribute("position", new THREE.Float32BufferAttribute(a, 3));
    return g;
  }, []);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const p = ref.current.geometry.attributes.position;
    const t = clock.getElapsedTime() * 0.08;
    for (let i = 0; i < count; i++) { (p.array as Float32Array)[i*3+1] += Math.sin(t+i*0.7)*0.0006; }
    p.needsUpdate = true;
  });
  return <points ref={ref} geometry={geo}><pointsMaterial size={0.04} color="#D4B85A" transparent opacity={0.35} sizeAttenuation /></points>;
}

/* ─── Lighting ─── */
function Lights({ progress }: { progress: React.MutableRefObject<number> }) {
  const g = useRef<THREE.Group>(null);
  useFrame(() => {
    if (!g.current) return;
    const v = Math.min(Math.max((progress.current - 0.2) / 0.3, 0), 1);
    g.current.children.forEach((c) => { if ((c as THREE.Light).isLight) (c as THREE.Light).intensity = v * 2; });
  });
  return (
    <>
      <ambientLight intensity={0.45} color="#FFF8F0" />
      <directionalLight position={[4, 10, 15]} intensity={1.5} color="#FFF5E6" />
      <hemisphereLight color="#FFF8F0" groundColor="#8B7355" intensity={0.25} />
      <group ref={g}>
        <pointLight position={[0, 6.5, -5]} color="#FFE4B5" intensity={0} distance={15} decay={2} />
        <pointLight position={[0, 6.5, -15]} color="#FFE4B5" intensity={0} distance={15} decay={2} />
        <pointLight position={[0, 6.5, -25]} color="#FFE4B5" intensity={0} distance={15} decay={2} />
      </group>
    </>
  );
}

/* ─── Main ─── */
export default function ShowroomScene({ progress }: { progress: React.MutableRefObject<number> }) {
  return (
    <>
      <color attach="background" args={["#C8BFB4"]} />
      <Cam progress={progress} />
      <Exterior />
      <Doors progress={progress} />
      <Interior />
      <Shelves />
      <Mannequins />
      <Desk />
      <Particles />
      <Lights progress={progress} />

      <fog attach="fog" args={["#C8BFB4", 25, 48]} />
    </>
  );
}
