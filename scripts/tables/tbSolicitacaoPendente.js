export function tbSolicitacaoPendente(data) {
    const tableBody = document.getElementById("TbSolicitacaoPendente");

    tableBody.innerHTML = "";

    data.forEach(valor => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <tr>${valor.solicitacao.id_solicitacao}</tr>
            <tr>${valor.espaco_publico.nome}</tr>
            <tr>${valor.solicitante.nome}</tr>
            <tr>${valor.tipo_evento.descricao}</tr>
            <tr>${valor.periodo.data_inicio}</tr>
            <tr>${valor.periodo.data_fim}</tr>
            <tr>Aprovar</tr>
            <tr>Negar</tr>
        `;
    });
}
