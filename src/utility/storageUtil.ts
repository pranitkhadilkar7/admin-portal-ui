const ACCESS_TOKEN_KEY = "ACCESS_TOKEN"

export function setAccessTokenAtLocal(accessToken: string) {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
}

export function getAccessTokenFromLocal() {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export function clearLocalStorage() {
  localStorage.clear()
}
