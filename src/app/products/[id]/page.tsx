'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

// Mock data — replace with your actual DB/API fetch
const PRODUCT = {
  id: '1',
  name: 'Oil Filter – Classic 350 / Meteor 350 (J-series)',
  sku: 'RE-OLF-001',
  price: 180,
  originalPrice: undefined as number | undefined,
  rating: 4.8,
  reviewCount: 25,
  inStock: true,
  description: '100% Genuine Royal Enfield Oil Filter. High quality filtration for smooth engine performance and long engine life. Ensures optimal lubrication across all J-series engines.',
  compatible: ['Classic 350 (All Models)', 'Meteor 350 (J-series)', 'Bullet 350 (B56)'],
  features: [
    'Ensures optimal oil filtration',
    'Enhances engine performance and longevity',
    'Long-lasting and reliable',
    'Easy to install — no special tools required',
    'Genuine OEM part, not aftermarket',
  ],
  specs: [
    { label: 'Part Number', value: 'RE-OLF-001' },
    { label: 'Thread Size', value: 'M20 x 1.5mm' },
    { label: 'Height', value: '65mm' },
    { label: 'Outer Diameter', value: '68mm' },
    { label: 'Weight', value: '112g' },
    { label: 'Material', value: 'Steel / Filter Paper' },
  ],
  note: 'We recommend replacing the oil filter every 3000–4000 km for best performance.',
  category: 'Filters',
  badge: 'Bestseller',
}

const RELATED = [
  { id: '2', name: 'Air Filter – Himalayan 411', sku: 'RE-AF-002', price: 350, compatible: 'Himalayan 411', inStock: true },
  { id: '5', name: 'Clutch Cable – Classic 350', sku: 'RE-CLT-005', price: 250, compatible: 'Classic 350', inStock: true },
  { id: '6', name: 'Spark Plug – NGK (RE Compatible)', sku: 'RE-SPK-006', price: 120, compatible: 'All Models', inStock: true },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const [qty, setQty] = useState(1)
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description')
  const [thumbIndex, setThumbIndex] = useState(0)
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/products">Shop Parts</Link>
        <span>/</span>
        <Link href="/products?cat=filters">Filters</Link>
        <span>/</span>
        <span className={styles.breadcrumbCurrent}>{PRODUCT.name}</span>
      </div>

      {/* Main Product Layout */}
      <div className={styles.layout}>
        {/* Gallery */}
        <div className={styles.gallery}>
          <div className={styles.galleryMain}>
            {/* In production, use an <Image> here */}
            <div className={styles.imagePlaceholder}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.3">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 12h8M12 8v8"/>
              </svg>
              <span>RE Oil Filter</span>
            </div>
            {PRODUCT.badge && <div className={styles.galleryBadge}>{PRODUCT.badge}</div>}
          </div>
          <div className={styles.thumbs}>
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                className={`${styles.thumb} ${thumbIndex === i ? styles.thumbActive : ''}`}
                onClick={() => setThumbIndex(i)}
                aria-label={`View image ${i + 1}`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5">
                  <circle cx="12" cy="12" r="8"/>
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className={styles.info}>
          <div className={styles.inStockBadge}>
            <span className={styles.dot} />
            In Stock
          </div>

          <h1 className={styles.productName}>{PRODUCT.name}</h1>
          <p className={styles.sku}>SKU: {PRODUCT.sku}</p>

          {/* Stars */}
          <div className={styles.stars}>
            {'★'.repeat(Math.round(PRODUCT.rating))}{'☆'.repeat(5 - Math.round(PRODUCT.rating))}
            <span>{PRODUCT.rating} ({PRODUCT.reviewCount} reviews)</span>
          </div>

          {/* Price */}
          <div className={styles.priceRow}>
            <span className={styles.price}>₹{PRODUCT.price.toLocaleString('en-IN')}</span>
            {PRODUCT.originalPrice !== undefined && (
              <span className={styles.originalPrice}>₹{PRODUCT.originalPrice.toLocaleString('en-IN')}</span>
            )}
          </div>

          <p className={styles.description}>{PRODUCT.description}</p>

          {/* Compatible */}
          <div className={styles.compatSection}>
            <p className={styles.compatTitle}>Compatible With</p>
            <div className={styles.compatTags}>
              {PRODUCT.compatible.map(c => (
                <span key={c} className={styles.compatTag}>{c}</span>
              ))}
            </div>
          </div>

          {/* Qty + Actions */}
          <div className={styles.qtyRow}>
            <span className={styles.qtyLabel}>Qty</span>
            <div className={styles.qtyCtrl}>
              <button className={styles.qtyBtn} onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
              <span className={styles.qtyVal}>{qty}</span>
              <button className={styles.qtyBtn} onClick={() => setQty(q => q + 1)}>+</button>
            </div>
          </div>

          <div className={styles.actions}>
            <button className={`${styles.addCartBtn} ${added ? styles.addedBtn : ''}`} onClick={handleAddToCart}>
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>
            <button className={styles.buyNowBtn}>Buy Now</button>
            <button className={styles.wishlistBtn} aria-label="Add to wishlist">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
          </div>

          {/* Trust Badges */}
          <div className={styles.trustBadges}>
            {[
              { icon: '✅', label: '100% Genuine Parts' },
              { icon: '🌍', label: 'Worldwide Shipping' },
              { icon: '🔒', label: 'Secure Payments' },
              { icon: '↩️', label: '7 Days Returns' },
            ].map(b => (
              <div key={b.label} className={styles.trustBadge}>
                <span>{b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabsSection}>
        <div className={styles.tabNav}>
          {(['description', 'specs', 'reviews'] as const).map(tab => (
            <button
              key={tab}
              className={`${styles.tabBtn} ${activeTab === tab ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'description' ? 'Description' : tab === 'specs' ? 'Specifications' : `Reviews (${PRODUCT.reviewCount})`}
            </button>
          ))}
        </div>

        <div className={styles.tabContent}>
          {activeTab === 'description' && (
            <div className={styles.tabPane}>
              <p>{PRODUCT.description}</p>
              <h4>Key Features</h4>
              <ul>
                {PRODUCT.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              {PRODUCT.note && (
                <p className={styles.note}>
                  <strong>Note:</strong> {PRODUCT.note}
                </p>
              )}
            </div>
          )}

          {activeTab === 'specs' && (
            <div className={styles.tabPane}>
              <table className={styles.specsTable}>
                <tbody>
                  {PRODUCT.specs.map(s => (
                    <tr key={s.label}>
                      <td>{s.label}</td>
                      <td>{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className={styles.tabPane}>
              <div className={styles.reviewSummary}>
                <div className={styles.reviewScore}>{PRODUCT.rating}</div>
                <div>
                  <div className={styles.starsLarge}>{'★'.repeat(5)}</div>
                  <p>Based on {PRODUCT.reviewCount} reviews</p>
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Reviews functionality coming soon.</p>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className={styles.related}>
        <div className={styles.relatedInner}>
          <h2>You May Also <span>Need</span></h2>
          <div className={styles.relatedGrid}>
            {RELATED.map(p => (
              <Link key={p.id} href={`/products/${p.id}`} className={styles.relatedCard}>
                <div className={styles.relatedImg}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
                <div className={styles.relatedBody}>
                  <p className={styles.relatedSku}>{p.sku}</p>
                  <p className={styles.relatedName}>{p.name}</p>
                  <p className={styles.relatedCompat}>{p.compatible}</p>
                  <p className={styles.relatedPrice}>₹{p.price.toLocaleString('en-IN')}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
