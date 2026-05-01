import Link from 'next/link'
import ProductCard from '@/components/product-card'
import TrustStrip from '@/components/trust-strip'
import styles from './page.module.css'

const FEATURED_PRODUCTS = [
  { id: '1', name: 'Oil Filter – Classic 350 / Meteor 350 (J-series)', sku: 'RE-OLF-001', price: 180, compatible: 'Classic 350, Meteor 350, Bullet 350', badge: 'Bestseller', inStock: true },
  { id: '2', name: 'Air Filter – Himalayan 411', sku: 'RE-AF-002', price: 350, compatible: 'Himalayan 411 (All Years)', inStock: true },
  { id: '3', name: 'Front Brake Pads – Himalayan / Interceptor', sku: 'RE-BRK-003', price: 450, compatible: 'Himalayan, Interceptor 650', badge: 'OEM', inStock: true },
  { id: '4', name: 'Chain & Sprocket Kit – Classic 350', sku: 'RE-CHN-004', price: 1650, compatible: 'Classic 350 (All Variants)', inStock: true },
]

const CATEGORIES = [
  { name: 'Filters', slug: 'filters', icon: '🔧', count: '24 parts' },
  { name: 'Engine Parts', slug: 'engine', icon: '⚙️', count: '38 parts' },
  { name: 'Brake System', slug: 'brakes', icon: '🛞', count: '19 parts' },
  { name: 'Electricals', slug: 'electricals', icon: '⚡', count: '31 parts' },
  { name: 'Chains & Sprockets', slug: 'chains', icon: '🔗', count: '12 parts' },
  { name: 'Accessories', slug: 'accessories', icon: '🏍️', count: '42 parts' },
]

const BIKES = [
  { name: 'Classic 350', cc: '350cc · All Variants', slug: 'classic-350' },
  { name: 'Meteor 350', cc: '350cc · J-Series', slug: 'meteor-350' },
  { name: 'Himalayan 411', cc: '411cc · Adventure', slug: 'himalayan-411' },
  { name: 'Interceptor 650', cc: '648cc · Parallel Twin', slug: 'interceptor-650' },
  { name: 'Continental GT 650', cc: '648cc · Café Racer', slug: 'continental-gt-650' },
  { name: 'Bullet 350', cc: '350cc · Classic', slug: 'bullet-350' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBgText} aria-hidden>ENFIELD</div>
        <div className={styles.heroGrid}>
          {/* Left */}
          <div className={styles.heroLeft}>
            <div className={styles.heroBadge}>Trusted OEM Spare Parts</div>
            <h1 className={styles.heroTitle}>
              Genuine<br />Parts.<br />
              <span>Global Reach.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Premium OEM parts for Royal Enfield riders. Authentic components sourced from India, delivered worldwide with live tracking and expert support.
            </p>
            <div className={styles.heroBtns}>
              <Link href="/products" className="btn-primary">Shop Parts</Link>
              <Link href="/shop-by-bike" className="btn-outline">Browse by Bike</Link>
            </div>
          </div>

          {/* Right cards */}
          <div className={styles.heroRight}>
            {[
              { icon: '✅', title: '100% Genuine Parts', text: 'Factory-spec OEM components only. No aftermarket substitutes.' },
              { icon: '🌍', title: 'Worldwide Shipping', text: 'Fast logistics to 60+ countries with live parcel tracking.' },
              { icon: '🔒', title: 'Secure Checkout', text: 'Protected payments via Razorpay, PayPal & major cards.' },
            ].map((c) => (
              <div key={c.title} className={styles.heroCard}>
                <span className={styles.heroCardIcon}>{c.icon}</span>
                <div>
                  <h4>{c.title}</h4>
                  <p>{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <TrustStrip />

      {/* ── Categories ── */}
      <section className={styles.section}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Popular <span>Categories</span></h2>
            <Link href="/products" className="view-all">View All →</Link>
          </div>
          <div className={styles.catGrid}>
            {CATEGORIES.map((cat) => (
              <Link key={cat.slug} href={`/products?cat=${cat.slug}`} className={styles.catCard}>
                <span className={styles.catIcon}>{cat.icon}</span>
                <span className={styles.catName}>{cat.name}</span>
                <span className={styles.catCount}>{cat.count}</span>
                <div className={styles.catBar} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Browse by Bike ── */}
      <section className={styles.bikeSection}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Browse <span>By Bike</span></h2>
            <Link href="/shop-by-bike" className="view-all">View All →</Link>
          </div>
        </div>
        <div className={styles.bikeGrid}>
          {BIKES.map((bike) => (
            <Link key={bike.slug} href={`/shop-by-bike/${bike.slug}`} className={styles.bikeCard}>
              <svg className={styles.bikeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" width="80" height="80">
                <circle cx="6" cy="16" r="4"/><circle cx="18" cy="16" r="4"/>
                <path d="M6 16 10 8h4l2 4M10 8l2 4M14 12l4 4"/>
              </svg>
              <div className={styles.bikeLabel}>Model</div>
              <div className={styles.bikeName}>{bike.name}</div>
              <div className={styles.bikeCc}>{bike.cc}</div>
              <span className={styles.bikeArrow}>→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured Parts ── */}
      <section className={styles.featuredSection}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured <span>Parts</span></h2>
            <Link href="/products" className="view-all">View All →</Link>
          </div>
          <div className={styles.productsGrid}>
            {FEATURED_PRODUCTS.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <div className={styles.ctaStrip}>
        <h2>Built for the Long Ride.</h2>
        <p>Keep your machine running at its best with genuine OEM parts.</p>
        <Link href="/products" className={styles.ctaBtn}>Shop All Parts</Link>
      </div>
    </>
  )
}
