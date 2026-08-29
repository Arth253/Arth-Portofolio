import { useEffect, useRef, useState } from 'react'
import { FiSun, FiMoon, FiUser, FiBriefcase, FiMail, FiFolder, FiHome } from 'react-icons/fi'
import useTheme from '../hooks/useTheme'
import useElementHeight from '../hooks/useElementHeight'
import useActiveSection from '../hooks/useActiveSection'

const navItems = [
  { label: 'About', href: '#about', id: 'about', icon: FiUser },
  { label: 'Experience', href: '#experience', id: 'experience', icon: FiBriefcase },
  { label: 'Projects', href: '#projects', id: 'projects', icon: FiFolder },
  { label: 'Contact', href: '#contact', id: 'contact', icon: FiMail },
]

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { ref: navRef, height: navHeight } = useElementHeight<HTMLElement>()
  const activeId = useActiveSection(navItems.map((item) => item.id))

  const containerRef = useRef<HTMLDivElement>(null)
  const nameMeasureRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const themeRef = useRef<HTMLDivElement>(null)
  const [fits, setFits] = useState(true)

  useEffect(() => {
    const checkFit = () => {
      if (!containerRef.current || !nameMeasureRef.current || !linksRef.current || !themeRef.current) return

      const containerWidth = containerRef.current.offsetWidth
      const nameWidth = nameMeasureRef.current.scrollWidth
      const linksWidth = linksRef.current.scrollWidth
      const themeWidth = themeRef.current.offsetWidth

      const totalNeeded = nameWidth + linksWidth + themeWidth
      setFits(totalNeeded <= containerWidth)
    }

    checkFit()
    window.addEventListener('resize', checkFit)
    return () => window.removeEventListener('resize', checkFit)
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 w-full bg-background border-b border-border z-40"
      >
        <div ref={containerRef} className="max-w-5xl mx-auto px-6 py-0 flex justify-between items-center">

          {/* Left box: name, switches to icon when space is tight */}
          <div className="px-4 py-2">
            <a href="#" className="text-text hover:text-accent transition whitespace-nowrap flex items-center">
              {fits ? (
                <span className="font-bold text-lg">
                  <span className="text-accent">Arth</span> Gandhi
                </span>
              ) : (
                <FiHome size={20} />
              )}
            </a>
          </div>

          {/* Hidden measuring clones, always render full-size versions regardless of current mode */}
          <div className="absolute opacity-0 pointer-events-none -z-10 flex items-center" aria-hidden="true">
            <div ref={nameMeasureRef} className="px-4 py-2 font-bold text-lg whitespace-nowrap">
              Arth Gandhi
            </div>
            <div ref={linksRef} className="flex gap-6 px-4 py-2">
              {navItems.map((item) => (
                <span key={item.label} className="whitespace-nowrap">{item.label}</span>
              ))}
            </div>
          </div>

          {/* Center: page links */}
          <div className="flex gap-4 items-center">
            {navItems.map((item) => {
              const isActive = activeId === item.id
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-11 px-3 py-1,5 rounded-lg transition ${
                    isActive
                      ? 'border border-accent text-accent'
                      : 'border border-transparent text-text hover:text-accent'
                  }`}
                >
                  {fits ? item.label : <item.icon size={18} />}
                </a>
              )
            })}
          </div>

          {/* Right box: theme toggle */}
          <div ref={themeRef} className="px-4 py-2">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-accent text-accent hover:bg-accent hover:text-background transition"
            >
              {theme === 'light' ? <FiMoon size={16} /> : <FiSun size={16} />}
            </button>
          </div>

        </div>
      </nav>

      <div style={{ height: navHeight }} />
    </>
  )
}

export default Navbar