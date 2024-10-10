const API_URL = 'http://localhost:3001/api/v1'

const apiCall = async (endpoint, method = 'GET', token = null, body = null) => {
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
  }

  if (token) options.headers.Authorization = `Bearer ${token}`
  if (body) options.body = JSON.stringify(body)

  const response = await fetch(`${API_URL}${endpoint}`, options)

  if (!response.ok) {
    throw new Error('Erreur dans la requête API')
  }

  return response.json()
}

export default apiCall
