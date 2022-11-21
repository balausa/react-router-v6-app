import React from 'react'
import CustomLink from './CustomLink'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <header>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/posts">Blog</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </header>
            <main className="container">
                <Outlet />
            </main>
            <footer className="container">2022</footer>
        </>
    )
}

export default Layout