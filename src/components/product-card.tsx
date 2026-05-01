"use client";

import Link from 'next/link'
import styles from './product-card.module.css'

interface ProductCardProps {
  id: string | number
  name: string
  sku?: string
  price: number
  originalPrice?: number
  image?: string
  category?: string
  compatible?: string
  inStock?: boolean
  badge?: string
}

export default function ProductCard({
  id,
  name,
  sku,
  price,
  originalPrice,
  image,
  category,
  compatible,
  inStock = true,
  badge,
}: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} className={styles.card}>
      {/* Image */}
      <div className={styles.imageWrap}>
        {image ? (
          <img src={image} alt={name} className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="2" y="2" width="20" height="20" rx="2"/>
              <circle cx="12" cy="10" r="3"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>
          </div>
        )}
        {badge && <div className={styles.badge}>{badge}</div>}
        <button
          className={styles.wishlist}
          aria-label="Add to wishlist"
          onClick={(e) => { e.preventDefault(); }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      {/* Body */}
      <div className={styles.body}>
        {sku && <div className={styles.sku}>{sku}</div>}
        <h3 className={styles.name}>{name}</h3>
        {compatible && (
          <p className={styles.compatible}>{compatible}</p>
        )}
        <div className={styles.footer}>
          <div className={styles.priceBlock}>
            <span className={styles.price}>₹{price.toLocaleString('en-IN')}</span>
            {originalPrice && (
              <span className={styles.originalPrice}>₹{originalPrice.toLocaleString('en-IN')}</span>
            )}
          </div>
          <span className={inStock ? styles.inStock : styles.outOfStock}>
            {inStock ? '● In Stock' : '● Out of Stock'}
          </span>
        </div>
      </div>
    </Link>
  )
}
