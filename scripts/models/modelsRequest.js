export const autorizacaoResponse = {
    id_solicitacao: 0,
    data_emissao: "date",
    validade: "date"
};

export const espacoPublicoResponse = {
    nome: "",
    endereco: "",
    capacidade: 0,
    disponibilidade: true,
    descricao: null
};

export const periodoResponse = {
    id_solicitacao: 0,
    data_inicio: "datetime",
    data_fim: "datetime"
};

export const solicitacaoResponse = {
    id_solicitante: 0,
    id_usuario: 0,
    id_espaco: 0,
    id_tipo_evento: 0,
    status: "",
    data_solicitacao: "datetime"
};

export const solicitanteResponse = {
    nome: "",
    tipo: "",
    documento: "",
    contato: ""
};

export const tipoEventoResponse = {
    descricao: null
};

export const usuarioResponse = {
    nome: "",
    email: "",
    senha: "",
    perfil: ""
};
