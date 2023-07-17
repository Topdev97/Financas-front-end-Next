/* eslint-disable no-unused-vars */

export enum Routes {
	LOGIN = "/api/login",
	PAYLOAD = "/api/payload",
	SAVE_USER = "/api/user/save",
	REDEFINE_PASSWORD = "/api/redefine_password",
}

export enum Messages {
	SUCCESS_IN_CREATING_USER = "Usuário cadastrado com sucesso",
	EXISTING_USER = "Um usuário com esse email já existe em nosso banco",
	SERVER_ERROR = "Houve um erro de servidor, tente novamente!",
	INCORRECT_EMAIL_OR_PASSWORD = "Email ou senha incorretos",
	UPDATED_PASSWORD = "Senha atualizada com sucesso",
	EMAIL_NOT_FOUND = "Esse email não existe em nosso banco",
}
