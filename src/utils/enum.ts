/* eslint-disable no-unused-vars */

export enum Routes {
	LOGIN = "/api/login",
	PAYLOAD = "/api/payload",
	SAVE_USER = "/api/user/save",
}

export enum Messages {
	SUCCESS_IN_CREATING_USER = "Usuário cadastrado com sucesso",
	EXISTING_USER = "Um usuário com esse email já existe em nosso banco",
	SERVER_ERROR = "Houve um erro de servidor, tente novamente!",
}
