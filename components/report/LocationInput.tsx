import dynamic from 'next/dynamic'

const LocationInputClient = dynamic(
  () => import('./LocationInput.client').then(mod => mod.LocationInput),
  { ssr: false }
)

export const LocationInput = LocationInputClient