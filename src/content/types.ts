export type CourseSectionKey = 'grammar' | 'vocabulary' | 'speaking' | 'writing' | 'listening' | 'reading' | 'examPreparation'

export type Course = {
  slug: string
  level: string
  title: string
  hero: { eyebrow: string; headline: string; description: string }
  duration: string
  fee: { amount: number; currency: string; display: string }
  entryRequirement: string
  highlights: string[]
  sections: Record<CourseSectionKey, string[]>
  whoCanJoin: string[]
  skills: string[]
}

export type SiteInfo = { name: string; phones: string[]; addressSource: string }

export type GalleryItem = {
  id: string
  title: string
  image: string
  alt: string
  category: string
  caption?: string
  visible: boolean
}

export type Material = {
  id: string
  title: string
  description: string
  type: 'pdf' | 'external link' | 'video' | 'image/resource'
  url: string
  level?: string
  available: boolean
}
