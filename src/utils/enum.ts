/* eslint-disable no-unused-vars */

export enum Routes {
	LOGIN = "/api/login",
	PAYLOAD = "/api/payload",
	SAVE_USER = "/api/user/save",
	REDEFINE_PASSWORD = "/api/redefine_password",
	NEW_PASSWORD = "/api/new_password/",
	SAVE_SALARY = "/api/salary/save/",
	GET_SALARY = "/api/salary/",
	REFRESH_TOKEN = "/api/refresh_token",
}

export enum Messages {
	SUCCESS_IN_CREATING_USER = "Usuário cadastrado com sucesso",
	EXISTING_USER = "Um usuário com esse email já existe em nosso banco",
	SERVER_ERROR = "Houve um erro de servidor, tente novamente!",
	INCORRECT_EMAIL_OR_PASSWORD = "Email ou senha incorretos",
	UPDATED_PASSWORD = "Senha atualizada com sucesso",
	EMAIL_NOT_FOUND = "Esse email não existe em nosso banco",
	SUCCESS_IN_SAVING_SALARY = "Salário salvo com sucesso",
}

export enum Permissions {
	USER = "SAVEMONEY_USER",
}
