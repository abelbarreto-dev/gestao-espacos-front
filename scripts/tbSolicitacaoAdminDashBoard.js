export function tbSolicitacaoAdminDashBoard(data) {
    const tableBody = document.getElementById("TbSolicitacaoAdminDashBoard");

    tableBody.innerHTML = "";

    data.forEach(solicitacao => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <tr>${solicitacao.id_solicitacao}</tr>
            <tr>${solicitacao.id_solicitante}</tr>
            <tr>${solicitacao.id_usuario}</tr>
            <tr>${solicitacao.id_espaco}</tr>
            <tr>${solicitacao.id_tipo_evento}</tr>
            <tr>${solicitacao.status}</tr>
            <tr>${solicitacao.data_solicitacao}</tr>
        `;
    });
}
