"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contato@projetodeca.com.br",
    description: "Envie suas dúvidas e sugestões",
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "(00) 00000-0000",
    description: "Segunda a sexta, 8h às 18h",
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "Cidade, Estado",
    description: "Brasil",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simula envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Fale Conosco
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tem alguma dúvida sobre o projeto DECA? Entre em contato conosco. 
            Ficaremos felizes em ajudar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="grid sm:grid-cols-1 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        <p className="text-primary font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="border-border bg-card">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Envie uma mensagem
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Mensagem Enviada!
                  </h4>
                  <p className="text-muted-foreground">
                    Obrigado pelo contato. Responderemos em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nome
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Escreva sua mensagem aqui..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-background resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
