"use client"

import { useState } from "react"
import { X, ImageIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const galleryItems = [
  {
    title: "Protótipo Inicial",
    description: "Primeira versão do design do robô DECA",
    category: "Design",
    src: "/prototipo.png", // Coloque o nome do arquivo que está na pasta public
  },
  {
    title: "Montagem do Hardware",
    description: "Processo de integração dos componentes eletrônicos",
    category: "Desenvolvimento",
    src: "/hardware.jpeg",
  },
  {
    title: "Testes com Crianças",
    description: "Validação da interação com o público-alvo",
    category: "Testes",
    src: "/emandamento.png",
  },
  {
    title: "Interface do App",
    description: "Aplicativo de monitoramento para pais e educadores",
    category: "Software",
    src: "/interface.jpeg",
  },
  {
    title: "Equipe em Ação",
    description: "Nosso time trabalhando no desenvolvimento",
    category: "Equipe",
    src: "/emandamento.png",
  },
  {
    title: "DECA Finalizado",
    description: "Versão final do robô educacional",
    category: "Produto",
    src: "/emandamento.png",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="galeria" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Galeria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Acompanhe Nossa Jornada
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Veja imagens do desenvolvimento do projeto DECA, desde os primeiros 
            esboços até os testes com crianças.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="border-border bg-card overflow-hidden cursor-pointer group hover:shadow-lg transition-all"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                {/* Lógica para mostrar a imagem real */}
                {item.src ? (
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-primary" />
                  </div>
                )}
                
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-card/90 text-xs font-medium text-foreground">
                    {item.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal da Imagem Expandida */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-secondary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
            <Card className="max-w-3xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                {galleryItems[selectedImage].src ? (
                  <img 
                    src={galleryItems[selectedImage].src} 
                    alt={galleryItems[selectedImage].title} 
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-center space-y-4">
                    <ImageIcon className="w-10 h-10 text-primary mx-auto" />
                    <p className="text-muted-foreground">Imagem não encontrada</p>
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                  {galleryItems[selectedImage].category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {galleryItems[selectedImage].title}
                </h3>
                <p className="text-muted-foreground">
                  {galleryItems[selectedImage].description}
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}