import { useEffect, useRef, useState } from 'react'

function useElementHeight<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (!ref.current) return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHeight(entry.contentRect.height)
      }
    })

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, height }
}

export default useElementHeight