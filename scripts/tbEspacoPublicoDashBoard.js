export function tbEspacoPublicoDashBoard(data) {
    const tableBody = document.getElementById("TbEspacoPublicoDashBoard");

    tableBody.innerHTML = "";

    data.forEach(solicitacao => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <tr>${solicitacao.id_espaco}</tr>
            <tr>${solicitacao.nome}</tr>
            <tr>${solicitacao.descricao}</tr>
            <tr>${solicitacao.endereco}</tr>
            <tr>${solicitacao.disponibilidade}</tr>
            <tr>${solicitacao.descricao}</tr>
            <tr>Editar</tr>
            <tr>Excluir</tr>
        `;
    });
}
