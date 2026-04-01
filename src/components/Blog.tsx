import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { blogPosts } from '../data'
import { ArrowRight } from 'lucide-react'

export default function Blog() {
  const { ref, inView } = useInView()

  return (
    <section style={{ padding: '5rem 2rem', background: '#f5fbf5' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ display: 'inline-block', color: '#2d6a2d', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Our Blog
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#1c2b1c' }}>
              From the HerbalSmile Blog
            </h2>
          </div>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#2d6a2d', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none' }}>
            View All Posts <ArrowRight size={16} />
          </a>
        </motion.div>

        <div ref={ref} className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {blogPosts.map((post, i) => (
            <motion.article key={post.title}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: '#fff', borderRadius: 14,
                overflow: 'hidden', border: '1px solid #e0ece0',
                transition: 'all 0.3s',
                cursor: 'pointer',
              }}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(60,120,60,0.1)' }}>
              <div style={{ overflow: 'hidden', height: 180 }}>
                <img src={post.image} alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = '')} />
              </div>
              <div style={{ padding: '1.2rem' }}>
                <div style={{ fontSize: '0.7rem', color: '#7a8f7a', marginBottom: '0.5rem' }}>{post.date}</div>
                <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: '#1c2b1c', lineHeight: 1.4, marginBottom: '0.6rem' }}>{post.title}</h4>
                <p style={{ fontSize: '0.78rem', color: '#7a8f7a', lineHeight: 1.6, marginBottom: '1rem' }}>{post.excerpt}</p>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#2d6a2d', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none' }}>
                  Read More <ArrowRight size={13} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
