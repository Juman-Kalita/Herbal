import { motion } from 'framer-motion'
import { useInView } from './useInView'

const uses = [
  { icon: '🪥', title: 'Tooth Powder', desc: 'Use directly as a daily tooth powder for cleaning and whitening.' },
  { icon: '🫗', title: 'Mouthwash', desc: 'Boil in water, cool, and use as a natural herbal mouthwash.' },
  { icon: '🌿', title: 'Gum Relief', desc: 'Apply directly on gums for soothing relief from inflammation.' },
]

const pills = ['🌰 Clove oil for toothache', '🌿 Neem for daily cleansing', '🧂 Alum for bleeding gums']

export default function NaturalUses() {
  const { ref, inView } = useInView()

  return (
    <section style={{ padding: '7rem 2.5rem', background: 'linear-gradient(160deg, #f0f8f0 0%, #dceadc 100%)', textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <span style={labelStyle}>Versatile</span>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--text)', marginBottom: '3rem', letterSpacing: '-0.5px' }}>
          Natural Uses
        </h2>
      </motion.div>

      <div ref={ref} style={{ maxWidth: 960, margin: '0 auto 2.5rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.8rem' }} className="uses-grid">
        {uses.map((u, i) => (
          <motion.div key={u.title}
            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(60,120,60,0.18)' }}
            style={{
              background: 'var(--white)', borderRadius: 20, padding: '2.5rem 2rem',
              boxShadow: '0 2px 12px rgba(60,120,60,0.08)',
              border: '1px solid rgba(107,179,104,0.1)',
              position: 'relative', overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(.22,.68,0,1.2)',
            }}>
            <div style={{
              width: 64, height: 64,
              background: 'linear-gradient(135deg, rgba(107,179,104,0.15), rgba(107,179,104,0.06))',
              borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2rem', margin: '0 auto 1.2rem',
              border: '1px solid rgba(107,179,104,0.15)',
            }}>{u.icon}</div>
            <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.6rem', color: 'var(--text)' }}>{u.title}</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{u.desc}</p>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        {pills.map(p => (
          <span key={p} style={{
            background: 'var(--white)', border: '1.5px solid rgba(107,179,104,0.25)',
            color: 'var(--green)', padding: '0.55rem 1.4rem', borderRadius: 50,
            fontSize: '0.83rem', fontWeight: 500,
            boxShadow: '0 2px 12px rgba(60,120,60,0.08)',
          }}>{p}</span>
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
