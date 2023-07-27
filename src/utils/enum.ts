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
	SAVE_CATEGORY = "/api/category/save/",
	GET_CATEGORIES = "/api/categories/",
	GET_CATEGORY_NAME = "/api/categories_names/",
	GET_CATEGORY_BY_ID = "/api/categorY_by_id/",
	UPDATE_CATEGORY = "/api/update_category/",
	DELETE_CATEGORY = "/api/delete_category/",
}

export enum Messages {
	SUCCESS_IN_CREATING_USER = "Usuário cadastrado com sucesso",
	SUCCESS_IN_CREATING_CATEGORY = "Categoria cadastrada com sucesso",
	SUCESS_IN_UPDATE_CATEGORY = "Categoria atualizada com sucesso",
	SUCESS_IN_DELETING_CATEGORY = "Categoria deletada com sucesso",
	ERROR_DELETING_CATEGORY = "Erro ao deletar a categoria",
	EXISTING_USER = "Um usuário com esse email já existe em nosso banco",
	EXISTING_CATEGORY = "Essa categoria já existe em nosso banco",
	SERVER_ERROR = "Houve um erro de servidor, tente novamente!",
	INCORRECT_EMAIL_OR_PASSWORD = "Email ou senha incorretos",
	UPDATED_PASSWORD = "Senha atualizada com sucesso",
	EMAIL_NOT_FOUND = "Esse email não existe em nosso banco",
	SUCCESS_IN_SAVING_SALARY = "Salário salvo com sucesso",
	THERE_ISNT_DATA = "Não há categorias criadas no momento",
}

export enum Permissions {
	USER = "SAVEMONEY_USER",
}

export enum Actions {
	CREATE = "Criar",
	UPDATE = "Atualizar",
}
