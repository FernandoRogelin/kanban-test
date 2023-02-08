type UserJWT = {
  iat: number
  exp: number
  user: string
}

export function parseJwt(token: string): UserJWT {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace('-', '+').replace('_', '/')
  return JSON.parse(window.atob(base64))
}
