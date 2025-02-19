"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MessageCircle } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#111827] shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection("inicio")}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/com.global.latinotv--54201-icon-ZXULGxti7mOm7pWk8TRV8srLBZeIzL.png"
            alt="Tele Latino Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-2xl font-bold text-white">Tele Latino</span>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["inicio", "planes", "caracteristicas"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className="text-white hover:text-red-400 transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => window.open("https://wa.me/50765799680", "_blank")}
          className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-all duration-300"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          <span className="hidden sm:inline">Contacto</span>
        </button>
      </div>
    </header>
  )
}

