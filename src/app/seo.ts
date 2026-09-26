import type { Course } from '../content/types'
import { courses, siteInfo } from '../content'

type PageMetadata = {
  title: string
  description: string
}

const pageMetadata: Record<string, PageMetadata> = {
  '/': {
    title: 'Learn German from A1 to B2',
    description: 'Learn German from A1 to B2 with structured courses, conversation practice, and exam preparation at Fluent German Academy Hisar.',
  },
  '/about': {
    title: 'About the Academy',
    description: 'Learn about Fluent German Academy Hisar and its structured, practical approach to German learning from A1 to B2.',
  },
  '/courses': {
    title: 'German Courses A1 to B2',
    description: 'Explore German courses from A1 to B2 at Fluent German Academy Hisar, including syllabus, duration, fees, and entry requirements.',
  },
  '/gallery': {
    title: 'Academy Gallery',
    description: 'View the Fluent German Academy Hisar gallery and approved academy media.',
  },
  '/material': {
    title: 'German Learning Material',
    description: 'Browse German learning materials and resources from Fluent German Academy Hisar.',
  },
  '/contact': {
    title: 'Contact the Academy',
    description: 'Contact Fluent German Academy Hisar in Hisar, Haryana about German courses, admissions, batches, and online classes.',
  },
}

const siteUrl = () => 'https://www.fluentgermanacademy.com'

const upsertMeta = (attribute: 'name' | 'property', key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

const upsertLink = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.rel = rel
    document.head.appendChild(element)
  }
  element.href = href
}

const upsertStructuredData = (data: Record<string, unknown>) => {
  let element = document.head.querySelector<HTMLScriptElement>('script[data-seo-schema]')
  if (!element) {
    element = document.createElement('script')
    element.type = 'application/ld+json'
    element.dataset.seoSchema = 'true'
    document.head.appendChild(element)
  }
  element.textContent = JSON.stringify(data)
}

const getCourseSchema = (course: Course, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: course.title,
  description: course.hero.description,
  url,
  provider: {
    '@type': 'EducationalOrganization',
    name: siteInfo.name,
    url: siteUrl(),
    image: `${siteUrl()}/academy-logo.jpg`,
  },
  offers: {
    '@type': 'Offer',
    price: course.fee.amount,
    priceCurrency: course.fee.currency,
    category: 'Paid',
  },
})

export function updateSeo(path: string, course?: Course) {
  const metadata = course
    ? { title: course.title, description: course.hero.description }
    : pageMetadata[path]
  const isNotFound = !metadata
  const title = isNotFound ? `Page not found | ${siteInfo.name}` : `${metadata.title} | ${siteInfo.name}`
  const description = isNotFound ? 'The requested page could not be found.' : metadata.description
  const canonical = `${siteUrl()}${path || '/'}`

  document.title = title
  upsertMeta('name', 'description', description)
  upsertMeta('name', 'robots', isNotFound ? 'noindex, nofollow' : 'index, follow')
  upsertMeta('property', 'og:title', title)
  upsertMeta('property', 'og:description', description)
  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:url', canonical)
  upsertMeta('property', 'og:image', `${siteUrl()}/academy-logo.jpg`)
  upsertMeta('name', 'twitter:image', `${siteUrl()}/academy-logo.jpg`)
  upsertLink('canonical', canonical)

  const schema = course
    ? getCourseSchema(course, canonical)
    : {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: siteInfo.name,
        url: siteUrl(),
        image: `${siteUrl()}/academy-logo.jpg`,
        telephone: siteInfo.phones.map(phone => `+91${phone}`),
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Dss 11 basement, Red Square Market, near hdfc branch, Mehta Nagar',
          addressLocality: 'Hisar',
          addressRegion: 'Haryana',
          postalCode: '125004',
          addressCountry: 'IN',
        },
        sameAs: [siteInfo.addressSource],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'German courses',
          itemListElement: courses.map(item => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Course',
              name: item.title,
              url: `${siteUrl()}/courses/${item.slug}`,
            },
          })),
        },
      }
  upsertStructuredData(schema)
}
