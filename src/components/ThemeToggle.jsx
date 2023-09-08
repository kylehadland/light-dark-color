import { useEffect, useState } from "preact/hooks"

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light")

  const handleClick = () => {
    switch (theme) {
      case "light":
        setTheme("dark")
        break
      case "dark":
        setTheme("color")
        break
      default:
        setTheme("light")
    }
  }

  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.remove("color")
        document.documentElement.classList.add("dark")
        break
      case "color":
        document.documentElement.classList.add("color")
        document.documentElement.classList.remove("dark")
        break
      default:
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.remove("color")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  const ThemeButton = () => {
    switch (theme) {
      case "light":
        return "Dark"
      case "dark":
        return "Color"
      default:
        return "Light"
    }
  }
  return (
    <button
      onClick={handleClick}
      className='py-2 px-3  dark:bg-gray-200 color:bg-gray-50 bg-gray-400 text-black rounded-md shadow-md'
    >
      <span className='capitalize'>{theme}</span> mode, click to change to{" "}
      {ThemeButton()}
    </button>
  )
}
