import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Styles from './CategoryList.module.css'
const CategoryList = () => {
  return (
    <div className={Styles.cartitem}>
      <Link href="/category/bags">
        <a>
                <img src="/image/c14.jpg"  />
                <p>Men's Bags</p>
            </a>
      </Link>
    </div>
  )
}

export default CategoryList