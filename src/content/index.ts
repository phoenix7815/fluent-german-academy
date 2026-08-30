import a1 from '../../specs/content/courses/a1.json'
import a2 from '../../specs/content/courses/a2.json'
import b1 from '../../specs/content/courses/b1.json'
import b2 from '../../specs/content/courses/b2.json'
import site from '../../specs/content/site/site.json'
import type { Course, GalleryItem, Material, SiteInfo } from './types'

export const courses = [a1, a2, b1, b2] as Course[]
export const siteInfo = site as SiteInfo
export const galleryItems: GalleryItem[] = []
export const materialItems: Material[] = []
