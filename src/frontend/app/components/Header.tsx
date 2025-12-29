'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import HeaderNav from './HeaderNav'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-cream dark:bg-brown">
      {/* Stitching line above */}
      <div className="stitching-line stitch-at-bot" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 mt-1">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link className="flex items-center" href="/" onClick={closeMenu}>
            <span 
              className="font-perandory text-brown dark:text-cream text-3xl sm:text-4xl lg:text-[48px] font-normal leading-none"
              style={{
                display: 'inline-block',
                height: '0.8em',
                overflow: 'hidden',
                verticalAlign: 'top'
              }}
            >
              SEWCIETY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <HeaderNav />
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-brown dark:bg-cream transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-brown dark:bg-cream transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-brown dark:bg-cream transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Stitching line below */}
      <div className="stitching-line stitch-at-bot" />

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-brown">
          {/* Close button */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-cream focus:outline-none"
            aria-label="Close menu"
          >
            <span className="text-3xl font-light">×</span>
          </button>

          {/* Stitching line above */}
          <div className="absolute top-0 left-0 right-0 h-px opacity-30" style={{
            background: 'repeating-linear-gradient(to right, #F8F5F2 0, #F8F5F2 20px, transparent 20px, transparent 40px)'
          }} />

          {/* Menu content */}
          <nav className="flex flex-col items-center justify-center h-full px-4">
            {/* SEWCIETY branding with stitching lines */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div 
                className="h-px opacity-30"
                style={{
                  width: '3rem',
                  background: 'repeating-linear-gradient(to right, #F8F5F2 0, #F8F5F2 20px, transparent 20px, transparent 40px)'
                }}
              />
              <span className="font-perandory text-cream text-4xl sm:text-5xl font-normal">
                SEWCIETY
              </span>
              <div 
                className="h-px opacity-30"
                style={{
                  width: '3rem',
                  background: 'repeating-linear-gradient(to right, #F8F5F2 0, #F8F5F2 20px, transparent 20px, transparent 40px)'
                }}
              />
            </div>

            {/* Navigation links */}
            <ul
              role="list"
              className="flex flex-col items-center gap-8 text-cream"
            >
              <li>
                <Link
                  href="/pages/blog"
                  className="nav-menu text-cream text-2xl"
                  onClick={closeMenu}
                >
                  blog
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/resources"
                  className="nav-menu text-cream text-2xl"
                  onClick={closeMenu}
                >
                  resources
                </Link>
              </li>
              <li>
                <Link
                  className="nav-menu-join bg-cream text-brown px-8 py-3 text-xl"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdGC4JZmLCWyleveuSbKm_Sn6-CAmzaYDax7PD-y57G0dxEfw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  join us →
                </Link>
              </li>
            </ul>

            {/* Stitching line below */}
            <div className="absolute bottom-0 left-0 right-0 h-px opacity-30" style={{
              background: 'repeating-linear-gradient(to right, #F8F5F2 0, #F8F5F2 20px, transparent 20px, transparent 40px)'
            }} />
          </nav>
        </div>
      )}
    </header>
  )
}
