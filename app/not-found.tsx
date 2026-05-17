import Link from "next/link"
import { Bot, Home, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Ilustracao do robo DECA confuso */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto rounded-3xl bg-primary/10 flex items-center justify-center animate-bounce">
            <Bot className="w-16 h-16 text-primary" />
          </div>
          {/* Pequenas engrenagens decorativas */}
          <div className="absolute top-0 left-1/4 w-4 h-4 rounded-full bg-secondary border-2 border-primary/30" />
          <div className="absolute bottom-4 right-1/4 w-3 h-3 rounded-full bg-secondary border-2 border-primary/30" />
        </div>

        {/* Codigo de erro */}
        <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-2">
          404
        </h1>

        {/* Mensagem principal */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Ops! Pagina nao encontrada
        </h2>

        {/* Descricao amigavel */}
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Parece que o DECA nao conseguiu encontrar a pagina que voce esta procurando. 
          Ela pode ter sido movida, removida ou talvez nunca tenha existido.
        </p>

        {/* Botoes de acao */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <Home className="w-5 h-5" />
              Voltar para Home
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link href="/#contato">
              <Search className="w-5 h-5" />
              Fale Conosco
            </Link>
          </Button>
        </div>

        {/* Rodape */}
        <p className="mt-12 text-sm text-muted-foreground">
          Projeto DECA - Robo Educacional
        </p>
      </div>
    </div>
  )
}
