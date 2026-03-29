import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Nav({ onSubmitClick }) {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()

  /* ── Scroll detection: darken + blur nav when user scrolls ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Nav link handler ── */
  function handleNav(link, closeMobile = false) {
    if (closeMobile) setOpen(false)

    if (link === 'SUBMIT') { onSubmitClick?.(); return }

    if (link === 'REVIEWS') {
      navigate('/reviews')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (link === 'HOME') {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }

    if (link === 'ARTISTS') {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          document.getElementById('artists')?.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      } else {
        document.getElementById('artists')?.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }
  }

  const NAV_LINKS = ['HOME', 'ARTISTS', 'REVIEWS']

  /* Active route helper */
  const isActive = (link) => {
    if (link === 'HOME')    return location.pathname === '/'
    if (link === 'REVIEWS') return location.pathname === '/reviews'
    return false
  }

  return (
    <nav
      className={`w-full sticky top-0 z-50 border-b
        ${scrolled
          ? 'bg-[#3d1a22]/95 backdrop-blur-md border-[#e3d1b8]/15'
          : 'bg-[#5c2a35] border-[#e3d1b8]/20'}
      `}
      style={{ transition: 'background-color 300ms cubic-bezier(0.22,1,0.36,1), border-color 300ms cubic-bezier(0.22,1,0.36,1)' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 h-[80px] flex items-center justify-between">

        {/* ── Logo ── */}
        <button
          onClick={() => handleNav('HOME')}
          className="flex-shrink-0 bg-transparent border-none p-0 cursor-pointer"
          style={{ transition: 'opacity 200ms cubic-bezier(0.22,1,0.36,1), transform 150ms cubic-bezier(0.64,0,0.78,0)' }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          onMouseDown={e => e.currentTarget.style.transform = 'scale(0.97)'}
          onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
          aria-label="Go to home"
        >
          <img
            src="/logo.png"
            alt="The Definition of R&B"
            className="h-16 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'block'
            }}
          />
          <div className="border-2 border-[#e3d1b8] p-[3px] hidden">
            <div className="border border-[#e3d1b8] px-2 py-[3px]">
              <p className="font-display font-black text-[#e3d1b8] text-[9px] leading-[1.15] tracking-[0.08em] uppercase">
                THE DEFINITION<br />OF R&amp;B
              </p>
            </div>
          </div>
        </button>

        {/* ── Desktop links ── */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link} className="relative">
              <button
                onClick={() => handleNav(link)}
                className={`font-oswald text-[11px] font-medium tracking-[0.18em] uppercase bg-transparent border-none cursor-pointer pb-[2px]
                  ${isActive(link) ? 'text-[#e3d1b8]' : 'text-[#e3d1b8]/60'}
                `}
                style={{ transition: 'color 200ms cubic-bezier(0.22,1,0.36,1)' }}
                onMouseEnter={e => { if (!isActive(link)) e.currentTarget.style.color = '#e3d1b8' }}
                onMouseLeave={e => { if (!isActive(link)) e.currentTarget.style.color = 'rgba(227,209,184,0.6)' }}
              >
                {link}
              </button>
              {/* Active underline */}
              <span
                className="absolute bottom-[-22px] left-0 right-0 h-[1px] bg-[#e3d1b8]/60 origin-left"
                style={{
                  transform: isActive(link) ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 300ms cubic-bezier(0.22,1,0.36,1)',
                }}
              />
            </li>
          ))}
        </ul>

        {/* ── Submit CTA ── */}
        <div className="hidden md:block flex-shrink-0">
          <button
            onClick={() => handleNav('SUBMIT')}
            className="bg-[#e3d1b8] text-[#5c2a35] font-oswald font-bold text-[11px] tracking-[0.2em] uppercase px-5 py-2.5"
            style={{ transition: 'background-color 200ms cubic-bezier(0.22,1,0.36,1), transform 150ms cubic-bezier(0.64,0,0.78,0)' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#fff'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#e3d1b8'}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.97)'}
            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            SUBMIT MUSIC
          </button>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 flex flex-col gap-[5px]"
          style={{ transition: 'transform 150ms cubic-bezier(0.64,0,0.78,0)' }}
          onMouseDown={e => e.currentTarget.style.transform = 'scale(0.9)'}
          onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-[#e3d1b8] origin-center ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`}
            style={{ transition: 'transform 300ms cubic-bezier(0.22,1,0.36,1)' }} />
          <span className={`block w-5 h-[1.5px] bg-[#e3d1b8] ${open ? 'opacity-0' : ''}`}
            style={{ transition: 'opacity 250ms cubic-bezier(0.22,1,0.36,1)' }} />
          <span className={`block w-5 h-[1.5px] bg-[#e3d1b8] origin-center ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`}
            style={{ transition: 'transform 300ms cubic-bezier(0.22,1,0.36,1)' }} />
        </button>
      </div>

      {/* ── Mobile menu — CSS-driven reveal, no abrupt mount/unmount ── */}
      <div
        className="md:hidden bg-[#3d1a22] border-t border-[#e3d1b8]/20 px-6 overflow-hidden"
        style={{
          maxHeight: open ? '400px' : '0px',
          paddingTop: open ? '20px' : '0px',
          paddingBottom: open ? '20px' : '0px',
          opacity: open ? 1 : 0,
          transition: open
            ? 'max-height 350ms cubic-bezier(0.22,1,0.36,1), opacity 250ms cubic-bezier(0.22,1,0.36,1), padding 350ms cubic-bezier(0.22,1,0.36,1)'
            : 'max-height 250ms cubic-bezier(0.64,0,0.78,0), opacity 150ms cubic-bezier(0.64,0,0.78,0), padding 250ms cubic-bezier(0.64,0,0.78,0)',
        }}
      >
        <ul className="flex flex-col gap-4 mb-5">
          {[...NAV_LINKS, 'SUBMIT'].map((link) => (
            <li key={link}>
              <button
                onClick={() => handleNav(link, true)}
                className={`font-oswald text-sm tracking-widest uppercase bg-transparent border-none cursor-pointer p-0
                  ${isActive(link) ? 'text-[#e3d1b8]' : 'text-[#e3d1b8]/60'}`}
                style={{ transition: 'color 200ms cubic-bezier(0.22,1,0.36,1)' }}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => handleNav('SUBMIT', true)}
          className="w-full bg-[#e3d1b8] text-[#5c2a35] font-oswald font-bold text-sm tracking-widest uppercase py-2.5"
          style={{ transition: 'background-color 200ms cubic-bezier(0.22,1,0.36,1), transform 150ms cubic-bezier(0.64,0,0.78,0)' }}
          onMouseDown={e => e.currentTarget.style.transform = 'scale(0.97)'}
          onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#fff'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#e3d1b8'}
        >
          SUBMIT MUSIC
        </button>
      </div>
    </nav>
  )
}
