import { motion } from 'framer-motion'
import { useInView } from './useInView'

const ingredients = [
  { name: 'Clove', tag: 'Antiseptic', image: '/img1.png', benefits: ['Reduces plaque and bad breath', 'Helps numb tooth pain', 'Anti-inflammatory for gums'] },
  { name: 'Alum', tag: 'Astringent', image: '/img1.png', benefits: ['Strengthens gums', 'Reduces bleeding', 'Helps with mouth ulcers'] },
  { name: 'Raw Salt', tag: 'Antibacterial', image: '/img1.png', benefits: ['Fights bacteria and plaque', 'Reduces bad breath', 'Supports gum health'] },
  { name: 'Neem', tag: 'Herbal', image: '/img1.png', benefits: ['Prevents tooth decay', 'Fights bacteria', 'Reduces gum inflammation'] },
  { name: 'Custard Apple Leaves', tag: 'Anti-inflammatory', image: '/img1.png', benefits: ['Fights plaque and bad breath', 'Reduces swelling', 'Supports gum healing'] },
]

export default function Ingredients() {
  const { ref, inView } = useInView()

  return (
    <section id="ingredients" style={{ padding: '7rem 2.5rem', background: 'var(--white)', textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <span style={labelStyle}>What's Inside</span>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--text)', marginBottom: '1rem', letterSpacing: '-0.5px' }}>
          Nature's Best Ingredients
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 500, margin: '0 auto 3rem', lineHeight: 1.75 }}>
          Each ingredient is carefully selected for its proven oral health benefits.
        </p>
      </motion.div>

      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem' }} className="ing-grid">
        {ingredients.map((ing, i) => (
          <motion.div key={ing.name}
            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{
              background: 'var(--white)', borderRadius: 20, overflow: 'hidden',
              border: '1px solid rgba(107,179,104,0.12)',
              boxShadow: '0 2px 12px rgba(60,120,60,0.08)',
              display: 'flex', flexDirection: 'column',
              transition: 'all 0.4s cubic-bezier(.22,.68,0,1.2)',
              cursor: 'default',
            }}
            whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(60,120,60,0.18)' }}>
            <div style={{ width: '100%', height: 170, overflow: 'hidden', position: 'relative' }}>
              <img src={ing.image} alt={ing.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={e => (e.currentTarget.style.transform = '')} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(to top, rgba(255,255,255,0.6), transparent)' }} />
            </div>
            <div style={{ padding: '1.3rem 1.4rem 1.6rem', flex: 1, textAlign: 'left' }}>
              <span style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, rgba(107,179,104,0.15), rgba(107,179,104,0.08))',
                color: 'var(--green)', fontSize: '0.65rem', fontWeight: 700,
                letterSpacing: '1.5px', textTransform: 'uppercase',
                padding: '0.25rem 0.7rem', borderRadius: 50, marginBottom: '0.6rem',
                border: '1px solid rgba(107,179,104,0.2)',
              }}>{ing.tag}</span>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', color: 'var(--text)', marginBottom: '0.8rem' }}>{ing.name}</h3>
              <ul style={{ listStyle: 'none' }}>
                {ing.benefits.map(b => (
                  <li key={b} style={{ fontSize: '0.8rem', color: 'var(--text-muted)', padding: '0.22rem 0 0.22rem 1.1rem', position: 'relative', lineHeight: 1.5 }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--green-mid)', fontWeight: 700, fontSize: '0.75rem' }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'inline-block',
  background: 'linear-gradient(135deg, rgba(107,179,104,0.15), rgba(107,179,104,0.08))',
  color: 'var(--green)', fontSize: '0.72rem', fontWeight: 700,
  letterSpacing: 3, textTransform: 'uppercase',
  padding: '0.4rem 1.2rem', borderRadius: 50, marginBottom: '1rem',
  border: '1px solid rgba(107,179,104,0.25)',
}
