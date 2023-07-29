export interface ProductInfoSimple {
  id: number
  img: {
    path: string
    alt: string
  }
  info: { label: string; title: string; hilight: string; cross: string }
  review?: {
    rating: number
    desc?: string
  }
}
