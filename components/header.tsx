"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Bot, User, LogOut, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#produto", label: "Produto" },
  { href: "#desenvolvimento", label: "Desenvolvimento" },
  { href: "#equipe", label: "Equipe" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { user, isLoggedIn, logout } = useAuth()

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLogout = () => {
    logout()
    setIsDropdownOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Bot className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">DECA</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            {isLoggedIn && user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-secondary transition-colors"
                  title={user.name || "Meu Perfil"}
                >
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                    <User className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-xl shadow-lg overflow-hidden">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 w-full px-4 py-3 text-sm text-foreground hover:bg-secondary transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sair</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button asChild variant="outline">
                <Link href="/login">Login / Cadastro</Link>
              </Button>
            )}
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            
            {isLoggedIn && user ? (
              <div className="mt-2 pt-2 border-t border-border">
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                    <User className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-medium text-foreground">Meu Perfil</span>
                </div>
                <button
                  onClick={() => {
                    handleLogout()
                    setIsMenuOpen(false)
                  }}
                  className="flex items-center gap-3 w-full px-4 py-3 text-sm text-foreground hover:bg-secondary transition-colors rounded-lg"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sair</span>
                </button>
              </div>
            ) : (
              <Button asChild className="mt-2">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  Login / Cadastro
                </Link>
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
