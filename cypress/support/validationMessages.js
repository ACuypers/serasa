const Messages = {
   API_ERRORS: {
        UNAUTHORIZED: "Usuário não autorizado.",
        NOT_FOUND: "Recurso não encontrado.",
        SERVER_ERROR: "Erro interno no servidor. Tente novamente mais tarde.",
        INVALID_CREDENTIALS: "Credenciais inválidas.",
        INVALID_EMAIL: "E-mail inválido.",
    },

    FRONT_ERRORS: {
        LOGIN_PAGE:{
            LOGIN_INVALIDO: "Credenciais inválidas, por favor tente novamente.",
            EMAIL_INVALIDO: "O email é inválido."
        }
    },

    VALIDATIONS: {
        TITLE_PAGE: {
            TITLE: ""
        },
        LOGIN_PAGE: {
            TITLE: "Acessar minha conta",
            SUBTITLE: "Informe seus dados para acessar sua conta.",
            EMAIL_TITULO: 'E-mail',
            PLACEHOLDER_EMAIL: 'Insira seu e-mail',
            PLACEHOLDER_SENHA: 'Insira sua senha',
            SENHA_TITULO: 'Senha'
        },
        RECUPERAR_SENHA: {
            BOTÃO_RECUPERAR_SENHA: 'Esqueceu sua senha?'
        }
    }
};

export default Messages;
