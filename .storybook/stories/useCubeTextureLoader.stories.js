import React, { Suspense } from 'react'

import { setupDecorator } from '../setup-decorator'

import { useCubeTextureLoader } from '../../src/useCubeTextureLoader'
import { Icosahedron, Sphere } from '../../src/shapes'

export default {
  title: 'Loaders/useCubeTextureLoader',
  component: useCubeTextureLoader,
  decorators: [
    setupDecorator(),
  ],
}

export function TexturedMeshes() {
  const envMap = useCubeTextureLoader(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], { path: 'cube/' })

  return (
    <Icosahedron args={[3, 4]}>
      <meshStandardMaterial envMap={envMap} attach="material" roughness={0} metalness={0.9} color="#010101" />
    </Icosahedron>
  )
}

TexturedMeshes.story = {
  name: 'Default',
}