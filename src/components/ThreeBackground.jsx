import { useRef, useMemo, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float, Sphere, Box, Torus, Octahedron, Icosahedron } from '@react-three/drei'
import * as THREE from 'three'

const TechParticles = ({ count = 80 }) => {
  const mesh = useRef()
  const [hovered, setHovered] = useState(false)

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const xFactor = -60 + Math.random() * 120
      const yFactor = -60 + Math.random() * 120
      const zFactor = -60 + Math.random() * 120
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
    }
    return temp
  }, [count])

  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle
      t = particle.t += speed / 2
      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.cos(t)
      
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      )
      dummy.scale.set(s, s, s)
      dummy.rotation.set(s * 5, s * 5, s * 5)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <octahedronGeometry args={[0.15, 0]} />
      <meshPhongMaterial 
        color={hovered ? "#00FFFF" : "#00B4D8"} 
        transparent 
        opacity={0.15}
        emissive={hovered ? "#001122" : "#000811"}
      />
    </instancedMesh>
  )
}

const HolographicNodes = () => {
  const groupRef = useRef()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { viewport } = useThree()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.005
      groupRef.current.rotation.y += 0.008
      
      // Mouse interaction
      const x = (mousePosition.x / viewport.width) * 2
      const y = (mousePosition.y / viewport.height) * 2
      groupRef.current.rotation.x += y * 0.05
      groupRef.current.rotation.y += x * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central Tech Core */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <group position={[0, 0, 0]}>
          <Icosahedron args={[1.2]} position={[0, 0, 0]}>
            <meshStandardMaterial 
              color="#00B4D8" 
              transparent 
              opacity={0.08}
              emissive="#000811"
              wireframe
            />
          </Icosahedron>
          <Sphere args={[0.8]} position={[0, 0, 0]}>
            <meshStandardMaterial 
              color="#1D2D50" 
              transparent 
              opacity={0.12}
              emissive="#000005"
            />
          </Sphere>
        </group>
      </Float>

      {/* Orbiting Tech Nodes */}
      <Float speed={2.2} rotationIntensity={2} floatIntensity={1}>
        <Octahedron args={[0.6]} position={[-3, 2, -2]}>
          <meshStandardMaterial 
            color="#00FFFF" 
            transparent 
            opacity={0.15}
            emissive="#001111"
          />
        </Octahedron>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={3}>
        <Box args={[0.8, 0.8, 0.8]} position={[4, -1, -1]}>
          <meshStandardMaterial 
            color="#00B4D8" 
            transparent 
            opacity={0.12}
            emissive="#000811"
            wireframe
          />
        </Box>
      </Float>
      
      <Float speed={1.4} rotationIntensity={2} floatIntensity={2}>
        <Torus args={[0.8, 0.3, 16, 100]} position={[-2, -3, -3]}>
          <meshStandardMaterial 
            color="#0284c7" 
            transparent 
            opacity={0.14}
            emissive="#000822"
          />
        </Torus>
      </Float>
      
      <Float speed={2.0} rotationIntensity={1} floatIntensity={2.5}>
        <Icosahedron args={[0.5]} position={[3, 3, -4]}>
          <meshStandardMaterial 
            color="#06B6D4" 
            transparent 
            opacity={0.16}
            emissive="#001122"
          />
        </Icosahedron>
      </Float>
      
      <Float speed={1.6} rotationIntensity={3} floatIntensity={1.5}>
        <Octahedron args={[0.4]} position={[-4, 1, -5]}>
          <meshStandardMaterial 
            color="#0EA5E9" 
            transparent 
            opacity={0.10}
            emissive="#000811"
            wireframe
          />
        </Octahedron>
      </Float>

      {/* Tech Ring Structure */}
      <Float speed={0.8} rotationIntensity={0.5} floatIntensity={1}>
        <group position={[0, 0, -6]}>
          <Torus args={[4, 0.1, 16, 100]}>
            <meshStandardMaterial 
              color="#00B4D8" 
              transparent 
              opacity={0.08}
              emissive="#000811"
            />
          </Torus>
          <Torus args={[3, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial 
              color="#0EA5E9" 
              transparent 
              opacity={0.06}
              emissive="#000811"
            />
          </Torus>
          <Torus args={[2.5, 0.08, 16, 100]} rotation={[0, Math.PI / 2, 0]}>
            <meshStandardMaterial 
              color="#06B6D4" 
              transparent 
              opacity={0.10}
              emissive="#001122"
            />
          </Torus>
        </group>
      </Float>
    </group>
  )
}

const DataStreams = () => {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.01
    }
  })

  return (
    <group ref={groupRef}>
      {[...Array(12)].map((_, i) => (
        <Float key={i} speed={1 + i * 0.1} rotationIntensity={0.5} floatIntensity={2}>
          <Box 
            args={[0.05, 0.05, 2]} 
            position={[
              Math.cos((i / 12) * Math.PI * 2) * 6,
              Math.sin((i / 12) * Math.PI * 2) * 6,
              -8
            ]}
            rotation={[0, 0, (i / 12) * Math.PI * 2]}
          >
            <meshStandardMaterial 
              color="#00FFFF" 
              transparent 
              opacity={0.12}
              emissive="#001111"
            />
          </Box>
        </Float>
      ))}
    </group>
  )
}

const TechGrid = () => {
  const gridRef = useRef()
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.material.opacity = 0.1 + Math.sin(state.clock.elapsedTime) * 0.05
    }
  })

  return (
    <mesh ref={gridRef} position={[0, 0, -12]} scale={[20, 20, 1]}>
      <planeGeometry args={[1, 1, 20, 20]} />
      <meshBasicMaterial 
        color="#00B4D8" 
        transparent 
        opacity={0.03}
        wireframe
      />
    </mesh>
  )
}

const ThreeBackground = () => {
  const backgroundRef = useRef()
  const { mouse, viewport } = useThree()

  useFrame((state, delta) => {
    if (backgroundRef.current) {
      // Subtle rotation based on time
      backgroundRef.current.rotation.x += delta * 0.05
      backgroundRef.current.rotation.y += delta * 0.02
      
      // Mouse parallax effect
      backgroundRef.current.rotation.x += (mouse.y * viewport.height) / 1000
      backgroundRef.current.rotation.y += (mouse.x * viewport.width) / 1000
    }
  })

  return (
    <group ref={backgroundRef}>
      {/* Enhanced Lighting Setup */}
      <ambientLight intensity={0.15} color="#001122" />
      <pointLight position={[10, 10, 10]} intensity={0.4} color="#00B4D8" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#0EA5E9" />
      <directionalLight position={[0, 0, 5]} intensity={0.2} color="#06B6D4" />
      <spotLight 
        position={[0, 10, 0]} 
        intensity={0.3} 
        color="#00FFFF"
        angle={Math.PI / 6}
        penumbra={0.5}
      />
      
      {/* Tech Particles */}
      <TechParticles count={120} />
      
      {/* Holographic Nodes */}
      <HolographicNodes />
      
      {/* Data Streams */}
      <DataStreams />
      
      {/* Tech Grid Background */}
      <TechGrid />
      
      {/* Additional Tech Elements */}
      <Float speed={0.5} rotationIntensity={0.2} floatIntensity={1}>
        <group position={[0, 0, -15]}>
          {[...Array(6)].map((_, i) => (
            <Torus 
              key={i}
              args={[8 + i * 2, 0.05, 16, 100]} 
              rotation={[
                Math.random() * Math.PI, 
                Math.random() * Math.PI, 
                Math.random() * Math.PI
              ]}
            >
                              <meshStandardMaterial 
                  color={`hsl(${180 + i * 10}, 70%, 50%)`}
                  transparent 
                  opacity={0.05 - i * 0.005}
                  emissive={`hsl(${180 + i * 10}, 30%, 5%)`}
                />
            </Torus>
          ))}
        </group>
      </Float>
    </group>
  )
}

export default ThreeBackground 