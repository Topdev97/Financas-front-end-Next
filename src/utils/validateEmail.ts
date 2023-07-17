export const validateEmail = (email: string): boolean => {
	let regex = false

	if (email != "") regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)

	return regex
}
