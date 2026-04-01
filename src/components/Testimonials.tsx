import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { testimonials } from '../data'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const { ref, inView } = useInView()

  return (
    <section style={{ padding: '5rem 2rem', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ display: 'inline-block', color: '#2d6a2d', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            Testimonials
          </span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#1c2b1c' }}>
            Our Happy Customers Say It Best
          </h2>
        </motion.div>

        <div ref={ref} className="testi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                background: '#f5fbf5', borderRadius: 16,
                padding: '2rem', border: '1px solid #e0ece0',
                display: 'grid', gridTemplateColumns: '1fr auto',
                gap: '1.5rem', alignItems: 'start',
                transition: 'all 0.3s',
              }}
              whileHover={{ boxShadow: '0 12px 40px rgba(60,120,60,0.12)' }}>
              {/* Text side */}
              <div>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p style={{ fontSize: '0.92rem', color: '#3a4f3a', lineHeight: 1.8, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={t.image} alt={t.name}
                    style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: '2px solid #e0ece0' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', color: '#1c2b1c' }}>{t.name}</strong>
                    <span style={{ fontSize: '0.76rem', color: '#7a8f7a' }}>{t.location}</span>
                  </div>
                </div>
              </div>

              {/* Image side */}
              <img src={t.image} alt={t.name}
                style={{ width: 160, height: 200, borderRadius: 12, objectFit: 'cover', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
