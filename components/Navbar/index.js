import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <div className={styles.logo}>
              <Link href='/'>
                    <a><img src='../../logo.png'></img></a>
                </Link>
            </div>
            <menu>
                <Link href='/'>
                    <a>Personajes</a>
                </Link>
                <Link href='/crews'>
                    <a>Tripulaciones</a>
                </Link>
            </menu>
        </nav>
    )
}

export default Navbar