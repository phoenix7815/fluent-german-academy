import { useEffect, useState, type MouseEvent, type ReactNode } from 'react'
import { courses, galleryItems, materialItems, siteInfo } from '../content'
import type { Course, GalleryItem, Material } from '../content/types'

type IconName = 'arrow' | 'arrowUp' | 'book' | 'check' | 'chat' | 'clock' | 'close' | 'external' | 'globe' | 'menu' | 'phone' | 'pin' | 'play' | 'spark' | 'target'

const whatsappHref = (phone: string) => `https://wa.me/91${phone}`

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true }
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
    arrowUp: <><path d="M12 19V5" /><path d="m6 11 6-6 6 6" /></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" /><path d="M4 5.5v16" /><path d="M8 7h8" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chat: <><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.5 8.5 0 0 1-4-.9L4 19l1.1-3.4A7.2 7.2 0 0 1 4.5 12 7.5 7.5 0 0 1 12 4.5a7.5 7.5 0 0 1 8 7Z" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></>,
    clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3 2" /></>,
    close: <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>,
    external: <><path d="M14 5h5v5" /><path d="m19 5-8 8" /><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" /></>,
    globe: <><circle cx="12" cy="12" r="8.5" /><path d="M3.8 9h16.4M3.8 15h16.4" /><path d="M12 3.5c2 2.3 3 5.1 3 8.5s-1 6.2-3 8.5c-2-2.3-3-5.1-3-8.5s1-6.2 3-8.5Z" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    phone: <path d="M6.5 4.5 9 4l2 4-2 1.5c1 2.2 2.5 3.7 4.7 4.7l1.5-2 4 2-.5 2.5a2 2 0 0 1-2 1.6C10 18.1 5.9 14 4.7 7.2a2 2 0 0 1 1.8-2.7Z" />,
    pin: <><path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></>,
    play: <><circle cx="12" cy="12" r="9" /><path d="m10 8 5 4-5 4z" /></>,
    spark: <><path d="m12 3 1.3 5.7L19 10l-5.7 1.3L12 17l-1.3-5.7L5 10l5.7-1.3z" /><path d="m19 16 .5 2.5L22 19l-2.5.5L19 22l-.5-2.5L16 19l2.5-.5z" /></>,
    target: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></>,
  }
  return <svg {...common}>{paths[name]}</svg>
}

function usePath() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  return path
}

function Link({ href, children, className = '', onClick }: { href: string; children: ReactNode; className?: string; onClick?: () => void }) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('/')) {
      event.preventDefault()
      window.history.pushState({}, '', href)
      window.dispatchEvent(new PopStateEvent('popstate'))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    onClick?.()
  }
  return <a href={href} className={className} onClick={handleClick}>{children}</a>
}

function Button({ href, children, variant = 'primary', className = '', onClick }: { href: string; children: ReactNode; variant?: 'primary' | 'quiet' | 'outline'; className?: string; onClick?: () => void }) {
  return <Link href={href} onClick={onClick} className={`button button-${variant} ${className}`}>{children}<Icon name="arrow" size={17} /></Link>
}

function Brand() {
  return <Link href="/" className="brand" aria-label="Fluent German Academy Hisar home">
    <img className="brand-logo" src="/academy-logo.jpg" alt="Fluent German Academy Hisar logo" />
  </Link>
}

function Header() {
  const [open, setOpen] = useState(false)
  const nav = [['/', 'Home'], ['/about', 'About'], ['/courses', 'Courses'], ['/gallery', 'Gallery'], ['/material', 'Material'], ['/contact', 'Contact']]
  return <header className="site-header" id="top">
    <div className="container header-inner">
      <Brand />
      <button className="menu-button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} size={24} /></button>
      <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
        {nav.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Button href="/contact" className="header-cta" onClick={() => setOpen(false)}>Enquire now</Button>
      </nav>
    </div>
  </header>
}

function Footer() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-intro"><Brand /><p>Build your German, one confident conversation at a time.</p></div>
      <div><p className="footer-label">Explore</p><div className="footer-links"><Link href="/about">About</Link><Link href="/courses">Courses</Link><Link href="/gallery">Gallery</Link><Link href="/material">Material</Link></div></div>
      <div><p className="footer-label">Talk to us</p><div className="footer-links">{siteInfo.phones.map(phone => <a key={phone} href={`tel:${phone}`}><Icon name="phone" size={15} />{phone}</a>)}<a className="whatsapp-footer-link" href={whatsappHref(siteInfo.phones[0])} target="_blank" rel="noreferrer"><Icon name="chat" size={15} />Chat on WhatsApp</a><Link href="/contact">Admission enquiries <Icon name="arrow" size={15} /></Link></div></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Fluent German Academy Hisar</span><span>German learning, made clear.</span><a href="#top" aria-label="Back to top"><Icon name="arrowUp" size={16} /></a></div>
  </footer>
}

function Layout({ children }: { children: ReactNode }) {
  return <><Header /><main>{children}</main><Footer /></>
}

function SectionHeading({ eyebrow, title, text, align = 'left' }: { eyebrow: string; title: string; text?: string; align?: 'left' | 'center' }) {
  return <div className={`section-heading align-${align}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="section-lede">{text}</p>}</div>
}

function CourseLevelBadge({ level }: { level: string }) { return <span className={`level-badge level-${level.toLowerCase()}`}>{level}</span> }

function CourseCard({ course, featured = false }: { course: Course; featured?: boolean }) {
  return <article className={`course-card ${featured ? 'featured' : ''}`}>
    <div className="course-card-top"><CourseLevelBadge level={course.level} /><span className="course-card-index">0{courses.indexOf(course) + 1}</span></div>
    <h3>{course.title}</h3><p className="course-positioning">{course.hero.eyebrow}</p>
    <p className="course-description">{course.hero.description}</p>
    <div className="course-meta"><span><Icon name="clock" size={17} />{course.duration.replace('Approximately ', '')}</span><span className="course-fee">{course.fee.display}</span></div>
    <div className="course-entry"><span>Entry point</span><strong>{course.entryRequirement}</strong></div>
    <Link href={`/courses/${course.slug}`} className="text-link">View course <Icon name="arrow" size={17} /></Link>
  </article>
}

function StatStrip() {
  return <div className="stat-strip"><div><strong>A1</strong><span>Start here</span></div><div><strong>A2</strong><span>Build confidence</span></div><div><strong>B1</strong><span>Speak independently</span></div><div><strong>B2</strong><span>Go advanced</span></div></div>
}

function Home() {
  return <>
    <section className="hero home-hero"><div className="container hero-grid"><div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot" />German for your next chapter</p><h1>Find your voice<br />in <em>German.</em></h1><p className="hero-text">Structured courses. Everyday conversation. A clear path from your first “Hallo” to confident German communication. Online classes are also available through Zoom or Google Meet links.</p><div className="hero-actions"><Button href="/courses">Explore courses</Button><Button href="/contact" variant="quiet">Talk to the academy</Button></div><div className="hero-note"><span className="avatar-stack"><i>A</i><i>G</i><i>Du</i></span><span>Four levels, one clear learning journey</span></div></div><div className="hero-art" role="img" aria-label="Abstract illustration of a German learning journey"><div className="art-sun" /><div className="art-arc arc-one" /><div className="art-arc arc-two" /><div className="art-card card-top"><span>DEUTSCH</span><strong>Sprich<br />mit Mut.</strong></div><div className="art-card card-bottom"><span className="mini-level">B2</span><span>Advanced<br />communication</span><Icon name="arrow" size={17} /></div><div className="art-word word-one">Hallo</div><div className="art-word word-two">Lernen</div><div className="art-line" /></div></div><div className="container"><StatStrip /></div></section>
    <section className="section courses-preview"><div className="container"><div className="split-heading"><SectionHeading eyebrow="The learning path" title="A level for every next step." text="Whether you are starting from zero or polishing advanced German, your next level is easy to find." /><Link href="/courses" className="text-link heading-link">See all courses <Icon name="arrow" size={17} /></Link></div><div className="course-grid">{courses.map((course, index) => <CourseCard key={course.slug} course={course} featured={index === 0} />)}</div></div></section>
    <section className="section dark-section"><div className="container journey-grid"><div><p className="eyebrow eyebrow-light">A simple way forward</p><h2>Learn with a map,<br /><em>not a maze.</em></h2><p className="dark-lede">Each level builds on the last, with the grammar, vocabulary and practice you need to keep moving.</p><Button href="/about" variant="outline">How we teach</Button></div><div className="journey-path">{courses.map((course, index) => <div className="journey-step" key={course.slug}><div className="journey-node"><CourseLevelBadge level={course.level} /></div><div><strong>{course.level}</strong><span>{index === 0 ? 'Your foundation' : course.hero.eyebrow}</span></div></div>)}</div></div></section>
    <section className="section skills-section"><div className="container"><SectionHeading eyebrow="What gets stronger" title="The four skills behind real progress." text="German is more than memorising rules. Every course gives you space to understand, express and use the language." align="center" /><div className="skills-grid"><SkillCard number="01" icon="globe" title="Sprechen" text="Find the words, make yourself understood, and grow comfortable in everyday conversations." /><SkillCard number="02" icon="play" title="Hören" text="Train your ear for natural German, from announcements to authentic conversations." /><SkillCard number="03" icon="book" title="Lesen" text="Build the confidence to understand messages, articles, information and ideas." /><SkillCard number="04" icon="target" title="Schreiben" text="Write clearly for everyday situations and structured exam tasks." /></div></div></section>
    <section className="section exam-section"><div className="container exam-card"><div className="exam-stamp"><Icon name="spark" size={30} /><span>ready<br />when<br />you are</span></div><div><p className="eyebrow">Prepared for the moment</p><h2>Practice that makes<br /><em>progress visible.</em></h2><p>Regular tests, mock examinations and exam-focused exercises are part of the journey across every level.</p></div><Button href="/courses">See the syllabus</Button></div></section>
    <section className="section muted-section"><div className="container"><div className="split-heading"><SectionHeading eyebrow="Inside the academy" title="A place to keep learning." text="We are preparing more ways for you to learn, practise and stay connected." /><div className="preview-note">Gallery and learning resources will appear here as approved academy content becomes available.</div></div><div className="empty-preview-grid"><Link href="/gallery" className="preview-tile gallery-tile"><span>Gallery</span><strong>See the learning<br />in motion <Icon name="arrow" size={18} /></strong></Link><Link href="/material" className="preview-tile material-tile"><span>Material</span><strong>Useful resources,<br />all in one place <Icon name="arrow" size={18} /></strong></Link></div></div></section>
    <ContactBand />
  </>
}

function SkillCard({ number, icon, title, text }: { number: string; icon: IconName; title: string; text: string }) { return <article className="skill-card"><div className="skill-top"><span>{number}</span><Icon name={icon} size={23} /></div><h3>{title}</h3><p>{text}</p></article> }

function ContactBand() { return <section className="contact-band"><div className="container contact-band-inner"><div><p className="eyebrow eyebrow-light">Your next chapter starts here</p><h2>Ready to say<br /><em>“Ich bin bereit”?</em></h2></div><div><p>Ask about the right level, upcoming batches and admission.</p><Button href="/contact">Start a conversation</Button></div></div></section> }

function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text: string }) { return <section className="page-intro"><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-lede">{text}</p></div></section> }

function Courses() { return <><PageIntro eyebrow="The course collection" title={<>Your route to <em>German.</em></>} text="A clear progression from first words to confident, advanced communication. Explore a level and see exactly what you will work on." /><section className="section courses-list-section"><div className="container"><div className="course-list-intro"><p>Four levels</p><span>Choose your starting point</span></div><div className="course-grid course-grid-page">{courses.map(course => <CourseCard key={course.slug} course={course} />)}</div></div></section><ContactBand /></> }

function About() { return <><PageIntro eyebrow="About the academy" title={<>German learning with<br /><em>direction.</em></>} text="Fluent German Academy Hisar helps learners move through German levels with a structured, practical course journey." /><section className="section about-story"><div className="container about-grid"><div className="about-big-type">fg<span>.</span></div><div className="about-copy"><p className="eyebrow">What we can promise</p><h2>A clear place to<br /><em>begin and belong.</em></h2><p>The academy offers German courses from A1 to B2, built around the four essential skills: speaking, listening, reading and writing.</p><p>Course content, practice and exam preparation are organised by level, so you always know what you are learning and where it can take you next.</p><div className="about-rule" /><div className="about-facts"><div><strong>A1 → B2</strong><span>Course progression</span></div><div><strong>4 skills</strong><span>In every level</span></div></div></div></div></section><section className="section philosophy-section"><div className="container philosophy-grid"><div><p className="eyebrow">The learning approach</p><h2>Small steps.<br /><em>Real use.</em></h2></div><div className="philosophy-list"><div><span>01</span><p><strong>Know your level.</strong> Start from where you are and build with a course designed for that stage.</p></div><div><span>02</span><p><strong>Practise all four.</strong> Speaking, listening, reading and writing work together to make German usable.</p></div><div><span>03</span><p><strong>Keep moving.</strong> Regular tests and exam preparation help turn study into visible progress.</p></div></div></div></section><ContactBand /></> }

const sectionLabels: Record<string, { label: string; icon: IconName }> = { grammar: { label: 'Grammar', icon: 'book' }, vocabulary: { label: 'Vocabulary', icon: 'spark' }, speaking: { label: 'Speaking', icon: 'globe' }, writing: { label: 'Writing', icon: 'arrow' }, listening: { label: 'Listening', icon: 'play' }, reading: { label: 'Reading', icon: 'book' }, examPreparation: { label: 'Exam preparation', icon: 'target' } }

function SyllabusSection({ sectionKey, items }: { sectionKey: string; items: string[] }) { const meta = sectionLabels[sectionKey]; return <article className="syllabus-card"><div className="syllabus-heading"><span className="syllabus-icon"><Icon name={meta.icon} size={20} /></span><h3>{meta.label}</h3><span className="syllabus-count">{String(items.length).padStart(2, '0')}</span></div><ul>{items.map(item => <li key={item}><Icon name="check" size={15} />{item}</li>)}</ul></article> }

function CourseDetail({ course }: { course: Course }) { const order = ['grammar', 'vocabulary', 'speaking', 'writing', 'listening', 'reading', 'examPreparation']; const current = courses.findIndex(item => item.slug === course.slug); const next = courses[current + 1]; return <><section className={`course-detail-hero detail-${course.slug}`}><div className="container detail-hero-grid"><div><div className="detail-hero-top"><CourseLevelBadge level={course.level} /><span>Course 0{current + 1} of 04</span></div><p className="eyebrow">{course.hero.eyebrow}</p><h1>{course.hero.headline}</h1><p className="hero-text">{course.hero.description}</p><div className="detail-hero-meta"><span><Icon name="clock" size={18} />{course.duration}</span><span><Icon name="target" size={18} />{course.entryRequirement}</span></div></div><div className="detail-number">{course.level}</div></div></section><section className="section detail-overview"><div className="container detail-overview-grid"><div><p className="eyebrow">Course overview</p><h2>Everything you need<br />to <em>move forward.</em></h2></div><div><p>This {course.title.toLowerCase()} is a focused path for learners ready to build practical German communication skills.</p><div className="detail-price"><span>Course fee</span><strong>{course.fee.display}</strong></div></div></div></section><section className="section syllabus-section"><div className="container"><div className="split-heading"><SectionHeading eyebrow="What you will work on" title="The complete syllabus." text="Explore the topics and skills covered in this level." /><div className="syllabus-side-note"><Icon name="spark" size={20} /><span>{course.highlights.length} course<br />highlights</span></div></div><div className="syllabus-grid">{order.map(key => <SyllabusSection key={key} sectionKey={key} items={course.sections[key as keyof Course['sections']]} />)}</div></div></section><section className="section detail-lower"><div className="container detail-lower-grid"><div className="join-card"><p className="eyebrow">Who can join</p><h2>Is this your<br /><em>next step?</em></h2><ul>{course.whoCanJoin.map(item => <li key={item}><Icon name="check" size={16} />{item}</li>)}</ul></div><div className="highlights-card"><p className="eyebrow">Course highlights</p><h2>Built for<br /><em>steady progress.</em></h2><div className="highlight-pills">{course.highlights.map(item => <span key={item}>{item}</span>)}</div></div></div></section>{next && <section className="next-course"><div className="container next-course-inner"><div><p className="eyebrow eyebrow-light">Keep going</p><h2>Next up: <em>{next.level}.</em></h2></div><Link href={`/courses/${next.slug}`} className="next-course-link"><span>{next.hero.eyebrow}</span><Icon name="arrow" size={22} /></Link></div></section>}<ContactBand /></> }

function GalleryGrid({ items }: { items: GalleryItem[] }) { return <div className="gallery-grid">{items.filter(item => item.visible).map(item => <figure className="gallery-item" key={item.id}><img src={item.image} alt={item.alt} /><figcaption><strong>{item.title}</strong>{item.caption && <span>{item.caption}</span>}</figcaption></figure>)}</div> }

function MaterialCard({ item }: { item: Material }) { const external = item.url.startsWith('http'); return <a className="material-card" href={item.url} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}><div className="material-card-top"><span className="material-type">{item.type}</span>{item.level && <CourseLevelBadge level={item.level} />}</div><h3>{item.title}</h3><p>{item.description}</p><span className="text-link">Open resource <Icon name={external ? 'external' : 'arrow'} size={16} /></span></a> }

function EmptyState({ type }: { type: 'gallery' | 'material' }) { const gallery = type === 'gallery'; return <div className="empty-state"><div className="empty-icon"><Icon name={gallery ? 'spark' : 'book'} size={28} /></div><h2>{gallery ? 'The gallery is taking shape.' : 'Learning material is on its way.'}</h2><p>{gallery ? 'Approved academy photos will be added here as they become available.' : 'Approved PDFs, links and resources will be added here as they become available.'}</p><Button href="/contact" variant="outline">Ask the academy</Button></div> }

function Gallery() { return <><PageIntro eyebrow="Inside the academy" title={<>Learning looks good<br /><em>on you.</em></>} text="A glimpse into Fluent German Academy Hisar, coming soon. This space will grow with approved academy moments." /><section className="section empty-section"><div className="container">{galleryItems.some(item => item.visible) ? <GalleryGrid items={galleryItems} /> : <EmptyState type="gallery" />}</div></section><ContactBand /></> }

function Material() { return <><PageIntro eyebrow="Your learning shelf" title={<>Resources for the<br /><em>road ahead.</em></>} text="Find approved learning resources, practice material and useful links in one place." /><section className="section empty-section"><div className="container">{materialItems.some(item => item.available) ? <div className="material-grid">{materialItems.filter(item => item.available).map(item => <MaterialCard key={item.id} item={item} />)}</div> : <EmptyState type="material" />}</div></section><ContactBand /></> }

function Contact() { return <><PageIntro eyebrow="Contact the academy" title={<>Let’s start a<br /><em>conversation.</em></>} text="Choose a number below to chat directly with Fluent German Academy Hisar on WhatsApp." /><section className="section contact-section"><div className="container simple-contact-layout"><div className="contact-card simple-contact-card"><p className="eyebrow">Fluent German Academy Hisar</p><h2>Chat with us<br /><em>on WhatsApp.</em></h2><p>Choose either academy number to ask about courses, admissions, upcoming batches and online classes through Zoom or Google Meet.</p><div className="whatsapp-number-list">{siteInfo.phones.map((phone, index) => <a key={phone} href={whatsappHref(phone)} target="_blank" rel="noreferrer"><span className="whatsapp-number-index">0{index + 1}</span><span className="whatsapp-number-copy"><small>WhatsApp chat</small><strong>{phone}</strong></span><Icon name="external" size={19} /></a>)}</div></div></div></section></> }

function NotFound() { return <section className="not-found"><div><p className="eyebrow">404 / page not found</p><h1>Looks like this<br /><em>path wandered off.</em></h1><Button href="/">Back to home</Button></div></section> }

function App() { const path = usePath(); const normalizedPath = path !== '/' ? path.replace(/\/+$/, '') : path; const detailSlug = normalizedPath.match(/^\/courses\/([^/]+)$/)?.[1]; const detailCourse = detailSlug ? courses.find(item => item.slug === detailSlug) : undefined; useEffect(() => { const pageNames: Record<string, string> = { '/': 'Learn German from A1 to B2', '/about': 'About the Academy', '/courses': 'German Courses A1 to B2', '/gallery': 'Academy Gallery', '/material': 'Learning Material', '/contact': 'Contact the Academy' }; const pageName = detailCourse?.title ?? pageNames[normalizedPath] ?? 'Page not found'; document.title = `${pageName} | ${siteInfo.name}`; document.querySelector('meta[name="description"]')?.setAttribute('content', detailCourse?.hero.description ?? `Explore German courses and contact ${siteInfo.name} in Hisar.`); }, [detailCourse, normalizedPath]); let page: ReactNode; if (normalizedPath === '/') page = <Home />; else if (normalizedPath === '/about') page = <About />; else if (normalizedPath === '/courses') page = <Courses />; else if (normalizedPath === '/gallery') page = <Gallery />; else if (normalizedPath === '/material') page = <Material />; else if (normalizedPath === '/contact') page = <Contact />; else if (detailSlug) page = detailCourse ? <CourseDetail course={detailCourse} /> : <NotFound />; else page = <NotFound />; return <Layout>{page}</Layout> }

export default App
