/* eslint-disable no-unused-vars */

export enum Routes {
	LOGIN = "/login",
	PAYLOAD = "/payload",
	SAVE_USER = "/user/save",
}

export enum Messages {
	SUCCESS_IN_CREATING_USER = "Usuário cadastrado com sucesso",
	EXISTING_USER = "Um usuário com esse email já existe em nosso banco",
	SERVER_ERROR = "Houve um erro de servidor, tente novamente!",
}
