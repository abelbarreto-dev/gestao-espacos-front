export const autorizacaoRequest = {
    id_solicitacao: 0,
    data_emissao: "date",
    validade: "date"
};

export const espacoPublicoRequest = {
    nome: "",
    endereco: "",
    capacidade: 0,
    disponibilidade: true,
    descricao: null
};

export const periodoRequest = {
    id_solicitacao: 0,
    data_inicio: "datetime",
    data_fim: "datetime"
};

export const solicitacaoRequest = {
    id_solicitante: 0,
    id_usuario: 0,
    id_espaco: 0,
    id_tipo_evento: 0,
    status: "",
    data_solicitacao: "datetime"
};

export const solicitanteRequest = {
    nome: "",
    tipo: "",
    documento: "",
    contato: ""
};

export const tipoEventoRequest = {
    descricao: null
};

export const usuarioRequest = {
    nome: "",
    email: "",
    senha: "",
    perfil: ""
};
