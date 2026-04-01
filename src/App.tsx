import { CartProvider } from './store/CartContext'
import CartDrawer from './components/CartDrawer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyShop from './components/WhyShop'
import BannerStrip from './components/BannerStrip'
import Products from './components/Products'
import PromoBanner from './components/PromoBanner'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Blog from './components/Blog'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <CartDrawer />
      <Hero />
      <WhyShop />
      <BannerStrip />
      <Products />
      <PromoBanner />
      <Testimonials />
      <Newsletter />
      <Blog />
      <Footer />
    </CartProvider>
  )
}
