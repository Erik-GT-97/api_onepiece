import React from 'react'
import Navbar from '../Navbar'

const Layout = ({children}) => {
    return(
        <>
        <Navbar/>
        {children}
        <footer>
            <a href='https://github.com/Erik-GT-97/api_onepiece' target='_blank'><img src='../../github-blue.png'></img></a>
        </footer>
        </>
    )
}

export default Layout