import { useState, useEffect } from 'react'
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react'
import { navLinks } from '../data'
import { useCart } from '../store/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { count, setIsOpen } = useCart()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: '#fff',
      borderBottom: scrolled ? '1px solid #e0ece0' : '1px solid transparent',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <span style={{ fontSize: '1.4rem' }}>🌿</span>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 700, color: '#2d6a2d' }}>HerbalSmile</span>
        </a>

        {/* Desktop nav */}
        <ul className="nav-links-desktop" style={{ display: 'flex', listStyle: 'none', gap: '2rem' }}>
          {navLinks.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} style={{ textDecoration: 'none', color: '#3a4f3a', fontSize: '0.88rem', fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#2d6a2d')}
                onMouseLeave={e => (e.currentTarget.style.color = '#3a4f3a')}>
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Right icons */}
        <div className="nav-cta-desktop" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Search size={18} color="#3a4f3a" style={{ cursor: 'pointer' }} />
          <User size={18} color="#3a4f3a" style={{ cursor: 'pointer' }} />
          {/* Cart icon with badge */}
          <button onClick={() => setIsOpen(true)} style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <ShoppingCart size={20} color="#3a4f3a" />
            {count > 0 && (
              <span style={{
                position: 'absolute', top: -8, right: -8,
                background: '#2d6a2d', color: '#fff',
                fontSize: '0.65rem', fontWeight: 700,
                width: 18, height: 18, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{count}</span>
            )}
          </button>
          <a href="#shop" style={{
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            background: '#2d6a2d', color: '#fff',
            padding: '0.55rem 1.3rem', borderRadius: 6,
            fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#1a4a1a')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#2d6a2d')}>
            Shop Now
          </a>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#2d6a2d', alignItems: 'center' }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#fff', borderTop: '1px solid #e0ece0', padding: '1rem 2rem 1.5rem' }}>
          {navLinks.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '0.6rem 0', color: '#3a4f3a', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', borderBottom: '1px solid #f0f8f0' }}>
              {l}
            </a>
          ))}
          <button onClick={() => { setIsOpen(true); setOpen(false) }}
            style={{ marginTop: '1rem', width: '100%', background: '#2d6a2d', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: 6, fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <ShoppingCart size={16} /> Cart {count > 0 && `(${count})`}
          </button>
        </div>
      )}
    </nav>
  )
}
