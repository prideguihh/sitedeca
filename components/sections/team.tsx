import { User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Ana Clara Justi",
    role: "Desenvolvedora de Software e Pesquisadora",
    description: "Estudante da ETEC Lauro Gomes - Desenvolvimento de Sistemas - Responsável pelo Desenvolvimento de Softwares e Pesquisas do projeto.",
    // PASSO 1: O caminho da imagem deve começar com /
    image: "/ana.png", 
  },
  {
    name: "Guilherme Lima",
    role: "Desenvolvedor de Software e Pesquisador",
    description: "Estudante da ETEC Lauro Gomes - Desenvolvimento de Sistemas - Responsável pelo Desenvolvimento de Softwares e Pesquisas do projeto.",
    image: "/lima.png",
  },
  {
    name: "Guilherme Duarte",
    role: "Desenvolvedor de Sistemas e Hardware",
    description: "Estudante da ETEC Lauro Gomes - Desenvolvimento de Sistemas - Responsável pelo Hardware, desenvolvimento de Softwares e Pesquisas do projeto.",
    image: "/duarte.png",
  },
  {
    name: "Lívia Proença",
    role: "Desenvolvedora Full Stack e Pesquisadora",
    description: "Estudante da ETEC Lauro Gomes - Desenvolvimento de Sistemas - Responsável pelo Hardware, desenvolvimento de Softwares e Pesquisas do projeto.",
    image: "/livia.png",
  },
  {
    name: "Leonardo Milano",
    role: "Desenvolvedor de Software e Designer de Protótipos",
    description: "Estudante da ETEC Lauro Gomes - Desenvolvimento de Sistemas - Responsável pelo Desenvolvimento de Softwares, Pesquisas do projeto, Design e protótipos.",
    image: "/leo.png",
  }
]

export function TeamSection() {
  return (
    <section id="equipe" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
            Nossa Equipe
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Conheça os Integrantes do Projeto
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Uma equipe multidisciplinar dedicada a transformar a educação através da tecnologia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow group overflow-hidden">
              <CardContent className="p-6 text-center">
                
                {/* PASSO 2: A lógica da imagem foi mudada aqui */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors relative overflow-hidden">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    // Se não tiver imagem definida, mostra o ícone original
                    <User className="w-12 h-12 text-primary" />
                  )}
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="border-border bg-primary/5 inline-block">
            <CardContent className="p-8">
              <p className="text-lg text-foreground mb-2 font-medium">
                Unidos pela educação
              </p>
              <p className="text-muted-foreground max-w-2xl">
                Nossa equipe é formada por estudantes apaixonados por tecnologia e educação, 
                trabalhando juntos para criar soluções inovadoras que impactem positivamente 
                o aprendizado infantil.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}