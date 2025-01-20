import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const [theme, setThemeState] = useState<"theme-light" | "dark" | "system">(
    "theme-light"
  )

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "theme-light" : "dark"
    setThemeState(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setThemeState(isDarkMode ? "dark" : "theme-light")
  }, [])

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches

    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [theme])

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full"
      onClick={toggleTheme}
    >
      {theme === "theme-light" ? (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
    </Button>
  )
}
