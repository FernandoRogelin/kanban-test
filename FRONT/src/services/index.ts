import { fetchServiceProps } from './types'

import { Cookies } from 'react-cookie'

async function fetchService<T = string>(config: fetchServiceProps) {
  const { method = 'GET', url, body } = config

  const response = await fetch(`http://0.0.0.0:5000/${url}`, {
    method,
    headers: headerContent(),
    body: JSON.stringify(body)
  })

  return (await response.json()) as T
}

function headerContent() {
  const cookies: Cookies = new Cookies()
  const token = cookies.get('token')

  const headers = {
    'content-type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Headers': '*'
  } as HeadersInit

  if (token) {
    Object.assign(headers, {
      Authorization: `Bearer ${token}`
    })
  }

  return headers
}

export default fetchService
