import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

// Simple fragment shader for lens refraction
const lensFragmentShader = `
  uniform sampler2D uTexture;
  uniform vec2 uLensCenter;
  uniform float uLensRadius;
  uniform float uRefractStrength;
  uniform float uDistortion;
  varying vec2 vUv;

  void main() {
    vec2 toCenter = vUv - uLensCenter;
    float dist = length(toCenter);
    if (dist < uLensRadius) {
      float effect = (uLensRadius - dist) / uLensRadius;
      effect = pow(effect, uDistortion);
      vec2 refractUv = vUv + normalize(toCenter) * effect * uRefractStrength * 0.05;
      gl_FragColor = texture2D(uTexture, refractUv);
    } else {
      gl_FragColor = texture2D(uTexture, vUv);
    }
  }
`;

function LensPlane({ texture, lensCenter, lensRadius, refractStrength, distortion }) {
  const mesh = useRef()
  const material = useRef()
  useFrame(() => {
    if (material.current) {
      material.current.uniforms.uLensCenter.value = lensCenter
      material.current.uniforms.uLensRadius.value = lensRadius
      material.current.uniforms.uRefractStrength.value = refractStrength
      material.current.uniforms.uDistortion.value = distortion
    }
  })
  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={material}
        uniforms={{
          uTexture: { value: texture },
          uLensCenter: { value: lensCenter },
          uLensRadius: { value: lensRadius },
          uRefractStrength: { value: refractStrength },
          uDistortion: { value: distortion },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={lensFragmentShader}
      />
    </mesh>
  )
}

export default function GlassLensDemo2() {
  const [lens, setLens] = useState({ 
    x: 0.5, 
    y: 0.5, 
    radius: 0.18, 
    strength: 1.2, 
    distortion: 1.5 
  })
  const [showControls, setShowControls] = useState(true)
  const dragging = useRef(false)

  // Use a different background image
  const texture = new THREE.TextureLoader().load('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80')

  // Convert mouse to uv
  function handlePointerMove(e) {
    if (!dragging.current) return
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.clientX - left) / width
    const y = 1 - (e.clientY - top) / height
    setLens(lens => ({ ...lens, x, y }))
  }

  const updateLens = (key, value) => {
    setLens(prev => ({ ...prev, [key]: value }))
  }

  const resetLens = () => {
    setLens({ x: 0.5, y: 0.5, radius: 0.18, strength: 1.2, distortion: 1.5 })
  }

  const presets = {
    subtle: { radius: 0.12, strength: 0.8, distortion: 1.2 },
    medium: { radius: 0.18, strength: 1.2, distortion: 1.5 },
    strong: { radius: 0.25, strength: 2.0, distortion: 2.0 },
    extreme: { radius: 0.35, strength: 3.0, distortion: 3.0 }
  }

  const applyPreset = (presetName) => {
    const preset = presets[presetName]
    setLens(prev => ({ ...prev, ...preset }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Glass Lens Effect Demo 2</h1>
          <p className="text-gray-300 text-lg">Interactive WebGL refraction with real-time controls</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Demo Area */}
          <div className="lg:col-span-2">
            <div style={{ 
            }}>
              <Canvas
                orthographic
                camera={{ zoom: 1, position: [0, 0, 10] }}
                onPointerDown={() => (dragging.current = true)}
                onPointerUp={() => (dragging.current = false)}
                onPointerMove={handlePointerMove}
              >
                <LensPlane
                  texture={texture}
                  lensCenter={new THREE.Vector2(lens.x, lens.y)}
                  lensRadius={lens.radius}
                  refractStrength={lens.strength}
                  distortion={lens.distortion}
                />
              </Canvas>
              
              {/* Instructions */}
              <div style={{
                position: 'absolute',
                top: 10,
                left: 10,
                color: '#fff',
                background: 'rgba(0,0,0,0.7)',
                padding: '12px 16px',
                borderRadius: 8,
                fontSize: 14,
                backdropFilter: 'blur(10px)'
              }}>
                <b>🎯 Drag to move lens</b><br/>
                <span className="text-gray-300">Adjust settings on the right</span>
              </div>

              {/* Current Values Display */}
              <div style={{
                position: 'absolute',
                bottom: 10,
                right: 10,
                color: '#fff',
                background: 'rgba(0,0,0,0.7)',
                padding: '12px 16px',
                borderRadius: 8,
                fontSize: 12,
                backdropFilter: 'blur(10px)',
                fontFamily: 'monospace'
              }}>
                <div>Radius: {lens.radius.toFixed(3)}</div>
                <div>Strength: {lens.strength.toFixed(2)}</div>
                <div>Distortion: {lens.distortion.toFixed(2)}</div>
              </div>
            </div>
          </div>

          {/* Controls Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Controls</h2>
                <button
                  onClick={() => setShowControls(!showControls)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {showControls ? '−' : '+'}
                </button>
              </div>

              {showControls && (
                <div className="space-y-6">
                  {/* Presets */}
                  <div>
                    <h3 className="text-white font-semibold mb-3">Quick Presets</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(presets).map(([name, preset]) => (
                        <button
                          key={name}
                          onClick={() => applyPreset(name)}
                          className="px-3 py-2 bg-pink-600/30 hover:bg-pink-600/50 text-white rounded-lg text-sm transition-colors border border-pink-500/30"
                        >
                          {name.charAt(0).toUpperCase() + name.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Lens Radius */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Lens Radius: {lens.radius.toFixed(3)}
                    </label>
                    <input
                      type="range"
                      min="0.05"
                      max="0.5"
                      step="0.01"
                      value={lens.radius}
                      onChange={(e) => updateLens('radius', parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>Small</span>
                      <span>Large</span>
                    </div>
                  </div>

                  {/* Refraction Strength */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Refraction Strength: {lens.strength.toFixed(2)}
                    </label>
                    <input
                      type="range"
                      min="0.1"
                      max="5.0"
                      step="0.1"
                      value={lens.strength}
                      onChange={(e) => updateLens('strength', parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>Subtle</span>
                      <span>Strong</span>
                    </div>
                  </div>

                  {/* Distortion */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Distortion: {lens.distortion.toFixed(2)}
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="4.0"
                      step="0.1"
                      value={lens.distortion}
                      onChange={(e) => updateLens('distortion', parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>Linear</span>
                      <span>Curved</span>
                    </div>
                  </div>

                  {/* Reset Button */}
                  <button
                    onClick={resetLens}
                    className="w-full px-4 py-3 bg-red-600/30 hover:bg-red-600/50 text-white rounded-lg transition-colors border border-red-500/30 font-medium"
                  >
                    Reset to Default
                  </button>

                  {/* Tips */}
                  <div className="bg-pink-900/30 border border-pink-500/30 rounded-lg p-4">
                    <h4 className="text-pink-300 font-semibold mb-2">💡 Tips</h4>
                    <ul className="text-pink-200 text-sm space-y-1">
                      <li>• Start with presets, then fine-tune</li>
                      <li>• Radius affects lens size</li>
                      <li>• Strength controls refraction intensity</li>
                      <li>• Distortion changes the curve shape</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ec4899, #f472b6);
          cursor: pointer;
          border: 2px solid white;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ec4899, #f472b6);
          cursor: pointer;
          border: 2px solid white;
        }
      `}</style>
    </div>
  )
} 