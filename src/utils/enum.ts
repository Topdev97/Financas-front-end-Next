/* eslint-disable no-unused-vars */

export enum Routes {
	LOGIN = "/api/login",
	PAYLOAD = "/api/payload",
	SAVE_USER = "/api/user/save",
	REDEFINE_PASSWORD = "/api/redefine_password",
	REFRESH_TOKEN = "/api/refresh_token",
	CHANGE_PASSWORD = "/api/change_password/",
	SAVE_SALARY = "/api/salary/save/",
	GET_SALARY = "/api/salary/",
	SAVE_CATEGORY = "/api/category/save/",
	GET_CATEGORIES = "/api/categories/",
	GET_CATEGORY_NAME = "/api/categories_names/",
	GET_CATEGORY_BY_ID = "/api/categorY_by_id/",
	UPDATE_CATEGORY = "/api/update_category/",
	DELETE_CATEGORY = "/api/delete_category/",
	SAVE_RELEASE = "/api/release/save/",
	GET_RELEASES = "/api/release/",
	DELETE_RELEASE = "/api/delete_release/",
	UPDATE_RELEASE = "/api/update_release/",
}

export enum Messages {
	SUCCESS_IN_CREATING_USER = "Você receberá um email em instantes",
	SUCCESS_IN_CREATING_CATEGORY = "Categoria cadastrada com sucesso",
	SUCESS_IN_UPDATE_CATEGORY = "Categoria atualizada com sucesso",
	SUCESS_IN_CREATING_RELEASE = "Lançamento efetuado com sucesso",
	SUCESS_IN_UPDATE_RELEASE = "Lançamento atualizado com sucesso",
	SUCESS_IN_DELETING_CATEGORY = "Categoria deletada com sucesso",
	ERROR_DELETING_CATEGORY = "Erro ao deletar a categoria",
	EXISTING_USER = "Um usuário com esse email já existe em nosso banco",
	EXISTING_CATEGORY = "Essa categoria já existe em nosso banco",
	SERVER_ERROR = "Houve um erro de servidor, tente novamente!",
	INCORRECT_EMAIL_OR_PASSWORD = "Email ou senha incorretos",
	UPDATED_PASSWORD = "Senha atualizada com sucesso",
	CHANGE_PASSWORD = "Você receberá um email para redefinir a senha",
	EMAIL_NOT_FOUND = "Esse email não existe em nosso banco",
	SUCCESS_IN_SAVING_SALARY = "Salário salvo com sucesso",
	THERE_ISNT_DATA = "Não há dados pra essa busca no momento",
}

export enum Permissions {
	USER = "SAVEMONEY_USER",
}

export enum Actions {
	CREATE = "Criar",
	UPDATE = "Atualizar",
}

export enum Service {
	SAVEMONEY = "SaveMoney",
}
