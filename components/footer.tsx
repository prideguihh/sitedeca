import Link from "next/link"
import { Bot, Heart } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#produto", label: "Produto" },
  { href: "#desenvolvimento", label: "Desenvolvimento" },
  { href: "#equipe", label: "Equipe" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">DECA</span>
            </Link>
            <p className="text-background/70 leading-relaxed">
              Robô educacional desenvolvido para auxiliar no aprendizado de crianças, 
              tornando o estudo mais interativo, divertido e acessível.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-background/70 hover:text-background transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Projeto DECA</h3>
            <p className="text-background/70 leading-relaxed mb-4">
              Um projeto educacional desenvolvido com dedicação e paixão por 
              transformar a educação infantil através da tecnologia.
            </p>
            <p className="text-sm text-background/50">
              Projeto Educacional
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/70 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Projeto DECA. Todos os direitos reservados.
            </p>
            <p className="text-background/70 text-sm flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> pela Equipe DECA
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
