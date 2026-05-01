'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

const INITIAL_CART = [
  { id: '1', name: 'Oil Filter – Classic 350 / Meteor 350 (J-series)', sku: 'RE-OLF-001', price: 180, qty: 2 },
  { id: '3', name: 'Front Brake Pads – Himalayan / Interceptor', sku: 'RE-BRK-003', price: 450, qty: 1 },
]

export default function CartPage() {
  const [items, setItems] = useState(INITIAL_CART)

  const updateQty = (id: string, delta: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    )
  }

  const removeItem = (id: string) => setItems(prev => prev.filter(i => i.id !== id))

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const shipping = 0  // free shipping placeholder
  const total = subtotal + shipping

  return (
    <>
      <div className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <h1>Your <span>Cart</span></h1>
          <p>{items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
        </div>
      </div>

      <div className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <span>/</span>
        <span>Cart</span>
      </div>

      {items.length === 0 ? (
        <div className={styles.emptyCart}>
          <span className={styles.emptyIcon}>🛒</span>
          <h2>Your cart is empty</h2>
          <p>Browse our genuine OEM parts and find what your bike needs.</p>
          <Link href="/products" className="btn-primary">Shop Parts</Link>
        </div>
      ) : (
        <div className={styles.layout}>
          {/* Items */}
          <div className={styles.cartItems}>
            <div className={styles.cartHeader}>
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span></span>
            </div>

            {items.map(item => (
              <div key={item.id} className={styles.cartRow}>
                <div className={styles.cartProduct}>
                  <div className={styles.cartImg}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4">
                      <circle cx="12" cy="12" r="10"/>
                    </svg>
                  </div>
                  <div>
                    <Link href={`/products/${item.id}`} className={styles.cartItemName}>{item.name}</Link>
                    <p className={styles.cartItemSku}>SKU: {item.sku}</p>
                  </div>
                </div>
                <div className={styles.cartPrice}>₹{item.price.toLocaleString('en-IN')}</div>
                <div className={styles.qtyCtrl}>
                  <button className={styles.qtyBtn} onClick={() => updateQty(item.id, -1)}>−</button>
                  <span className={styles.qtyVal}>{item.qty}</span>
                  <button className={styles.qtyBtn} onClick={() => updateQty(item.id, 1)}>+</button>
                </div>
                <div className={styles.cartTotal}>₹{(item.price * item.qty).toLocaleString('en-IN')}</div>
                <button className={styles.removeBtn} onClick={() => removeItem(item.id)} aria-label="Remove">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            ))}

            <div className={styles.cartActions}>
              <Link href="/products" className="btn-outline">← Continue Shopping</Link>
            </div>
          </div>

          {/* Summary */}
          <div className={styles.summary}>
            <h3>Order Summary</h3>
            <div className={styles.summaryRows}>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span className={styles.freeShip}>Calculated at checkout</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                <span>Total</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className={styles.couponRow}>
              <input type="text" placeholder="Coupon code" className={styles.couponInput} />
              <button className={styles.couponBtn}>Apply</button>
            </div>

            <Link href="/checkout" className="btn-primary" style={{ width: '100%', marginTop: '16px', justifyContent: 'center' }}>
              Proceed to Checkout →
            </Link>

            <div className={styles.summaryTrust}>
              <span>🔒 Secure Checkout</span>
              <span>↩️ 7-Day Returns</span>
              <span>✅ Genuine OEM</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
