import React from 'react'
import Styles from './Hotmenu.module.css'
 import Image from 'next/image'
import Link from 'next/link'
const Hotmenu = () => {
  return (
    <div className={Styles.item}>
        
            <Link href='/fdsf'>
               <a>
               <Image src="/image/icon2.png" width="50" height="50" />
               <p className={Styles.itemp}> Daily  Cashback</p>
               </a>
               
            </Link>
      
    </div>

  )
}

export default Hotmenu