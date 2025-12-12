'use client'

import {createContext, useContext, useEffect, useState} from 'react'

type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Helper function to get initial theme
function getInitialTheme(): Theme {
  // First check localStorage for user preference
  if (typeof window !== 'undefined') {
    try {
      const manualOverride = localStorage.getItem('theme-manual')
      const savedTheme = localStorage.getItem('theme') as Theme | null
      
      // If user has manually set a preference, always use it
      if (manualOverride === 'true' && (savedTheme === 'light' || savedTheme === 'dark')) {
        return savedTheme
      }
      
      // If no saved preference, check system preference
      // Read from DOM first (set by initial script) to avoid hydration mismatch
      const html = document.documentElement
      if (html.classList.contains('dark')) {
        return 'dark'
      }
      
      // Fallback: check system preference directly
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    } catch (e) {
      // If there's an error, default to light
      console.warn('Error reading theme preference:', e)
    }
  }
  
  return 'light'
}

export function ThemeProvider({children}: {children: React.ReactNode}) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get the initial theme - read from DOM first to sync with initial script
    const html = document.documentElement
    const isDarkFromDOM = html.classList.contains('dark')
    const initialTheme = isDarkFromDOM ? 'dark' : getInitialTheme()
    
    // Ensure state matches DOM (set by initial script)
    setTheme(initialTheme)
    setMounted(true)
    
    // Ensure the DOM matches the theme (in case there's a mismatch)
    if (initialTheme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    
    // Only listen to system preference changes if user hasn't manually set a preference
    const manualOverride = localStorage.getItem('theme-manual')
    if (manualOverride !== 'true') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
        // Only update if user hasn't manually set preference
        if (localStorage.getItem('theme-manual') !== 'true') {
          const matches = 'matches' in e ? e.matches : (e as MediaQueryList).matches
          const newTheme = matches ? 'dark' : 'light'
          setTheme(newTheme)
          if (newTheme === 'dark') {
            html.classList.add('dark')
          } else {
            html.classList.remove('dark')
          }
        }
      }
      
      // Modern browsers
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange as (e: MediaQueryListEvent) => void)
        return () => mediaQuery.removeEventListener('change', handleChange as (e: MediaQueryListEvent) => void)
      }
      // Fallback for older browsers
      else if (typeof mediaQuery.addListener === 'function') {
        // For older browsers, addListener passes MediaQueryList as 'this'
        const legacyHandleChange = function(this: MediaQueryList) {
          if (localStorage.getItem('theme-manual') !== 'true') {
            const newTheme = this.matches ? 'dark' : 'light'
            setTheme(newTheme)
            if (newTheme === 'dark') {
              html.classList.add('dark')
            } else {
              html.classList.remove('dark')
            }
          }
        }
        mediaQuery.addListener(legacyHandleChange)
        return () => {
          if (typeof mediaQuery.removeListener === 'function') {
            mediaQuery.removeListener(legacyHandleChange)
          }
        }
      }
    }
  }, [])

  const toggleTheme = () => {
    // Read directly from DOM to get current state, not from React state
    const html = document.documentElement
    const isCurrentlyDark = html.classList.contains('dark')
    const newTheme = isCurrentlyDark ? 'light' : 'dark'
    
    // Save to localStorage to override system preference
    // Use a special key to indicate user has manually set preference
    localStorage.setItem('theme', newTheme)
    localStorage.setItem('theme-manual', 'true')
    
    // Update the DOM immediately
    if (newTheme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    
    // Force a repaint to ensure pseudo-elements (like stitching lines) update
    // This triggers a reflow which forces the browser to recalculate styles
    void html.offsetHeight
    
    // Update React state
    setTheme(newTheme)
  }

  // Always provide the context, even before mounting
  return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

