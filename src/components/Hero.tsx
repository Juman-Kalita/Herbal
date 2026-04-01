import { motion } from 'framer-motion'
import { stats } from '../data'

export default function Hero() {
  return (
    <section id="home" style={{ paddingTop: 68 }}>
      {/* Main hero */}
      <div style={{
        position: 'relative',
        minHeight: '88vh',
        background: 'linear-gradient(135deg, #1a3a1a 0%, #2d6a2d 50%, #3d8b3d 100%)',
        display: 'flex', alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Background image overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1400)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.25,
        }} />

        {/* Decorative leaf shapes */}
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, background: 'rgba(255,255,255,0.04)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 300, height: 300, background: 'rgba(255,255,255,0.04)', borderRadius: '50%' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem', width: '100%', position: 'relative', zIndex: 1 }}
          className="hero-grid" >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
            {/* Left text */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span style={{
                display: 'inline-block', background: 'rgba(255,255,255,0.15)',
                color: '#fff', fontSize: '0.72rem', fontWeight: 600,
                letterSpacing: 2, textTransform: 'uppercase',
                padding: '0.4rem 1rem', borderRadius: 4, marginBottom: '1.5rem',
                border: '1px solid rgba(255,255,255,0.2)',
              }}>100% Natural · Ayurvedic</span>

              <h1 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                color: '#fff', lineHeight: 1.15,
                marginBottom: '1.5rem', letterSpacing: '-0.5px',
              }}>
                Discover the Power of<br />
                <em style={{ color: '#a8d5a8', fontStyle: 'italic' }}>Natural Oral Care</em><br />
                for Every Smile
              </h1>

              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 460 }}>
                Ancient Ayurvedic ingredients — clove, neem, alum, and raw salt — blended into a powerful tooth powder that protects, heals, and strengthens your teeth and gums naturally.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <a href="#shop" style={{
                  background: '#fff', color: '#2d6a2d',
                  padding: '0.9rem 2rem', borderRadius: 6,
                  fontWeight: 700, fontSize: '0.92rem', textDecoration: 'none',
                  transition: 'all 0.3s', boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = '')}>
                  Shop Now
                </a>
                <a href="#about" style={{
                  background: 'transparent', color: '#fff',
                  padding: '0.9rem 2rem', borderRadius: 6,
                  fontWeight: 600, fontSize: '0.92rem', textDecoration: 'none',
                  border: '1.5px solid rgba(255,255,255,0.5)',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.1)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent' }}>
                  Learn More
                </a>
              </div>
            </motion.div>

            {/* Right image */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: -20,
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '50%', filter: 'blur(40px)',
              }} />
              <motion.img
                src="/img1.png"
                alt="Herbal Tooth Care Powder"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: '100%', maxWidth: 420,
                  borderRadius: 24,
                  boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
                  objectFit: 'cover', aspectRatio: '4/5',
                  position: 'relative', zIndex: 1,
                }}
              />
              {/* Floating price card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }}
                style={{
                  position: 'absolute', bottom: 30, left: -10,
                  background: '#fff', borderRadius: 12,
                  padding: '1rem 1.4rem',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  zIndex: 2,
                }}>
                <div style={{ fontSize: '0.7rem', color: '#7a8f7a', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>Starting from</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#2d6a2d', fontFamily: 'Playfair Display, serif' }}>₹259</div>
                <div style={{ fontSize: '0.72rem', color: '#7a8f7a' }}>Free shipping above ₹499</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e0ece0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
          <div className="stats-bar" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderLeft: '1px solid #e0ece0' }}>
            {stats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                style={{
                  padding: '1.8rem 2rem',
                  borderRight: '1px solid #e0ece0',
                  textAlign: 'center',
                }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, color: '#2d6a2d' }}>{s.value}</div>
                <div style={{ fontSize: '0.8rem', color: '#7a8f7a', fontWeight: 500, marginTop: '0.2rem' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
