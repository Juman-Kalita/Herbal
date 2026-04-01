import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { whyShop } from '../data'

export default function WhyShop() {
  const { ref, inView } = useInView()

  return (
    <section style={{ padding: '5rem 2rem', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#1c2b1c', marginBottom: '0.75rem' }}>
            Why Shop with HerbalSmile?
          </h2>
          <p style={{ color: '#7a8f7a', fontSize: '0.95rem', maxWidth: 480, margin: '0 auto' }}>
            We started with a simple belief — nature has everything your smile needs.
          </p>
        </motion.div>

        {/* Center product image + 4 features around it */}
        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'center' }} className="why-layout">
          {/* Left 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {whyShop.slice(0, 2).map((w, i) => (
              <motion.div key={w.title}
                initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: 48, height: 48, flexShrink: 0,
                  background: '#f5fbf5', borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem', border: '1px solid #e0ece0',
                }}>{w.icon}</div>
                <div>
                  <h4 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.92rem', fontWeight: 600, color: '#1c2b1c', marginBottom: '0.3rem' }}>{w.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: '#7a8f7a', lineHeight: 1.6 }}>{w.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center image */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7 }}
            style={{ width: 280, flexShrink: 0 }}>
            <img src="/img1.png"
              alt="Product"
              style={{ width: '100%', borderRadius: 20, boxShadow: '0 20px 60px rgba(60,120,60,0.15)', objectFit: 'cover', aspectRatio: '3/4' }} />
          </motion.div>

          {/* Right 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {whyShop.slice(2, 4).map((w, i) => (
              <motion.div key={w.title}
                initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: 48, height: 48, flexShrink: 0,
                  background: '#f5fbf5', borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem', border: '1px solid #e0ece0',
                }}>{w.icon}</div>
                <div>
                  <h4 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.92rem', fontWeight: 600, color: '#1c2b1c', marginBottom: '0.3rem' }}>{w.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: '#7a8f7a', lineHeight: 1.6 }}>{w.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
