import { Link } from '@material-ui/core'
import React from 'react'
import footer from '../../styles/Footer.module.css'

export default function Footer() {
    
  
   
    return (
        <>
        <div className={footer.news}>
            RECEBA NOSSA NEWSLETTER
        
        <Link to='#'>TIKTOK</Link>
        <Link>INSTAGRAM</Link>
        <Link>FACEBOOK</Link>
        <Link>TWITTER</Link>
        <Link>PINTEREST</Link>
        <Link>YOUTUBE</Link>
        <Link>SPOTIFY</Link>
        </div>
        </>
    )
}