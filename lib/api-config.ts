// Configuracao da API do Backend PHP
// Altere esta URL para apontar para o seu servidor

export const API_BASE_URL = "https://tcc3eetecgrupo3t1.websiteseguro.com/api"

// Endpoints
export const API_ENDPOINTS = {
  login: `${API_BASE_URL}/login.php`,
  cadastro: `${API_BASE_URL}/cadastro.php`,
}

// Tipo de resposta padrao da API
export interface APIResponse {
  success: boolean
  message?: string
}

// Erro customizado para erros da API
export class APIError extends Error {
  status: number
  data?: APIResponse

  constructor(status: number, message: string, data?: APIResponse) {
    super(message)
    this.status = status
    this.data = data
    this.name = "APIError"
  }
}

// Funcao auxiliar para fazer requisicoes POST
export async function postAPI<T extends APIResponse>(endpoint: string, data: Record<string, string>): Promise<T> {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  const jsonData = await response.json() as T

  // Verifica se o servidor retornou erro HTTP (401, 403, 500, etc)
  if (!response.ok) {
    throw new APIError(
      response.status, 
      jsonData.message || "Usuario nao encontrado ou senha incorreta",
      jsonData
    )
  }

  // Verifica se a resposta indica falha mesmo com status 200
  if (!jsonData.success) {
    throw new APIError(
      response.status,
      jsonData.message || "Usuario nao encontrado ou senha incorreta",
      jsonData
    )
  }

  return jsonData
}
