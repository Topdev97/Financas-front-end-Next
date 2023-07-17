export const validateEqualPasswords = (
	password1: string,
	password2: string,
): boolean => {
	if (password1 != "" && password2 != "") {
		if (password1 === password2) {
			return true
		}
	}

	return false
}
