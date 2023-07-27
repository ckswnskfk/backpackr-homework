export interface CardItemProps {
  id: number
  horizontal: boolean
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
