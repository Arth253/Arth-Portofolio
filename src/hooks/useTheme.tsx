// import { useEffect, useState } from 'react'

// type Theme = 'light' | 'dark'

// function useTheme() {
//   const [theme, setTheme] = useState<Theme>(() => {
//     const stored = localStorage.getItem('theme') as Theme | null
//     if (stored) return stored
//     return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
//   })

//   useEffect(() => {
//     const root = document.documentElement
//     root.classList.remove('light', 'dark')
//     root.classList.add(theme)
//     localStorage.setItem('theme', theme)

//     const tabIcon = document.getElementById('tabIconMode') as HTMLLinkElement | null
//     if (tabIcon) {
//       tabIcon.href = theme === 'dark' ? '/dark.png' : '/light.png'
//     }
//   }, [theme])

//   const toggleTheme = () => {
//     setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
//   }

//   return { theme, toggleTheme }
// }

// export default useTheme



import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

// Module-level shared state, lives outside React, shared by every component that calls useTheme()
let currentTheme: Theme = (() => {
  const stored = localStorage.getItem('theme') as Theme | null
  if (stored) return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
})()

const listeners = new Set<(theme: Theme) => void>()

function setGlobalTheme(theme: Theme) {
  currentTheme = theme
  localStorage.setItem('theme', theme)

  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(theme)

  const favicon = document.getElementById('tabIconMode') as HTMLLinkElement | null
  if (favicon) {
    favicon.href = theme === 'dark' ? '/dark.png' : '/light.png'
  }

  listeners.forEach((listener) => listener(theme))
}

if (typeof document !== 'undefined') {
  document.documentElement.classList.add(currentTheme)
}

function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  useEffect(() => {
    listeners.add(setTheme)
    return () => {
      listeners.delete(setTheme)
    }
  }, [])

  const toggleTheme = () => {
    setGlobalTheme(theme === 'light' ? 'dark' : 'light')
  }

  return { theme, toggleTheme }
}

export default useTheme