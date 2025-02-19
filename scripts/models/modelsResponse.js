export const autorizacaoResponse = {
    id_autorizacao: 0,
    id_solicitacao: 0,
    data_emissao: "date",
    validade: "date"
};

export const espacoPublicoResponse = {
    id_espaco: 0,
    nome: "",
    endereco: "",
    capacidade: 0,
    disponibilidade: true,
    descricao: null
};

export const periodoResponse = {
    id_periodo: 0,
    id_solicitacao: 0,
    data_inicio: "datetime",
    data_fim: "datetime"
};

export const solicitacaoResponse = {
    id_solicitacao: 0,
    id_solicitante: 0,
    id_usuario: 0,
    id_espaco: 0,
    id_tipo_evento: 0,
    status: "",
    data_solicitacao: "datetime"
};

export const solicitanteResponse = {
    id_solicitante: 0,
    nome: "",
    tipo: "",
    documento: "",
    contato: ""
};

export const tipoEventoResponse = {
    id_tipo_evento: 0,
    descricao: null
};

export const usuarioResponse = {
    id_usuario: 0,
    nome: "",
    email: "",
    senha: "",
    perfil: ""
};
