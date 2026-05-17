"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Bot, User, Users, Phone, Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { API_ENDPOINTS, postAPI, APIError } from "@/lib/api-config"

// Tipo da resposta do seu backend PHP
interface CadastroResponse {
  success: boolean
  message?: string
}

export default function CadastroPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const { login } = useAuth()
  const router = useRouter()

  // Nomes dos campos conforme esperado pelo backend PHP
  const [formData, setFormData] = useState({
    nome_crianca: "",
    nome_pai: "",
    celular: "",
    email: "",
    senha: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess("")

    try {
      await postAPI<CadastroResponse>(API_ENDPOINTS.cadastro, formData)

      // So chega aqui se o cadastro foi bem sucedido
      setSuccess("Cadastro realizado com sucesso!")
      login({ 
        name: formData.nome_crianca || formData.nome_pai, 
        email: formData.email 
      })
      setTimeout(() => router.push("/"), 1500)
    } catch (err) {
      // Nao redireciona - mostra mensagem de erro
      if (err instanceof APIError) {
        setError(err.message)
      } else {
        setError("Erro ao realizar cadastro. Tente novamente.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Fundo com gradiente radial */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(ellipse at center, #1a4a5e 0%, #0d2d3a 50%, #071a22 100%)"
        }}
      />
      
      {/* Card principal */}
      <div className="w-full max-w-md">
        <div 
          className="rounded-3xl p-8 shadow-2xl backdrop-blur-sm"
          style={{
            background: "rgba(15, 45, 60, 0.85)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
        >
          {/* Ícone do robô */}
          <div className="flex justify-center mb-6">
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                boxShadow: "0 8px 32px rgba(59, 130, 246, 0.3)"
              }}
            >
              <Bot className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Título */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">Cadastro</h1>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Mensagens de erro/sucesso */}
            {error && (
              <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300 text-sm text-center">
                {error}
              </div>
            )}
            {success && (
              <div className="p-3 rounded-xl bg-green-500/20 border border-green-500/30 text-green-300 text-sm text-center">
                {success}
              </div>
            )}

            {/* Nome da Criança */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="nome_crianca"
                placeholder="Nome da Crianca"
                value={formData.nome_crianca}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#0a1f2a] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                required
              />
            </div>

            {/* Nome do Responsável */}
            <div className="relative">
              <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="nome_pai"
                placeholder="Nome do Responsavel"
                value={formData.nome_pai}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#0a1f2a] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                required
              />
            </div>

            {/* Celular */}
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                name="celular"
                placeholder="Celular"
                value={formData.celular}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#0a1f2a] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#0a1f2a] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                required
              />
            </div>

            {/* Senha */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="senha"
                placeholder="Senha"
                value={formData.senha}
                onChange={handleChange}
                className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-[#0a1f2a] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Botão Cadastrar */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98] mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
                boxShadow: "0 4px 20px rgba(30, 64, 175, 0.4)"
              }}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Cadastrando...
                </>
              ) : (
                "Cadastrar"
              )}
            </button>
          </form>

          {/* Link para login */}
          <p className="text-center mt-6 text-gray-400">
            Já tem conta?{" "}
            <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              Login
            </Link>
          </p>
        </div>

        {/* Rodapé */}
        <p className="text-center mt-6 text-gray-500 text-sm">
          Projeto DECA © 2026
        </p>
      </div>
    </div>
  )
}
