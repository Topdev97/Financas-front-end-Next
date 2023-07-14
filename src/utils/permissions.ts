export const MAX = 999999999999

export const setPermission = (permissions: Array<string>) => {
	return localStorage.setItem("userPermissions", JSON.stringify(permissions))
}

export const getPermission = (): Array<string> => {
	return JSON.parse(localStorage.getItem("userPermissions") || "[]")
}

export const getExp = (): number => {
	const data = localStorage.getItem("exp")

	if (data) {
		const exp = JSON.parse(data)
		return exp == typeof "number" ? exp : MAX
	}

	return MAX
}

export const removeItems = () => {
	localStorage.removeItem("token")
	localStorage.removeItem("refreshToken")
	localStorage.removeItem("userPermissions")
}

export const hasPermission = (permission: string[]) => {
	return getPermission().filter((e) => permission.includes(e)).length > 0
}

export const setIsAuthenticated = (token: string, refreshToken: number) => {
	localStorage.setItem("token", JSON.stringify(token))
	localStorage.setItem("refreshToken", JSON.stringify(refreshToken))
}

export const isAuthenticated = (): string => {
	return JSON.parse(localStorage.getItem("token") || "[]")
}

export const getRefreshToken = (): string => {
	return JSON.parse(localStorage.getItem("refreshToken") || "[]")
}
