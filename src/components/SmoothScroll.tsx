import { useEffect, useRef, useState, type PropsWithChildren } from "react"
import { IoBugSharp } from "react-icons/io5"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/dist/locomotive-scroll.css"

const SmoothScroll = ({ children }: PropsWithChildren) => {
  const scrollRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(true)

  useEffect(() => {
    if (!scrollRef.current) return

    const scrollEl = scrollRef.current

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.1,
      multiplier: 1,
      repeat: true,
    })

    const timeoutId = setTimeout(() => {
      scroll.update()
      setIsLoaded(false)
    }, 1000)

    return () => {
      scroll.destroy()
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div>
      {/* Loading screen */}
      {isLoaded && (
        <div className="fixed top-0 left-0 w-full h-full bg-slate-50 dark:bg-slate-950 z-50 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-slate-700 dark:text-slate-200 text-xl">
            <IoBugSharp className="animate-bounce w-9 h-9" />
            <span className="ml-2">Loading... </span>
          </div>
        </div>
      )}

      {/* Main content */}
      <div data-scroll-container ref={scrollRef}>
        {children}
      </div>
    </div>
  )
}

export default SmoothScroll
