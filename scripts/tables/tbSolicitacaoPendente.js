export function tbSolicitacaoPendente(data) {
    const tableBody = document.getElementById("TbSolicitacaoPendente");
    tableBody.innerHTML = "";

    data.forEach(valor => {
        tableBody.innerHTML += `<tr>
            <td>${valor.solicitacao.id_solicitacao}</td>
            <td>${valor.espaco_publico.nome}</td>
            <td>${valor.solicitante.nome}</td>
            <td>${valor.tipo_evento.descricao}</td>
            <td>${valor.periodo.data_inicio}</td>
            <td>${valor.periodo.data_fim}</td>
            <td>Aprovar</td>
            <td>Negar</td>
        <tr>`;
    });
}
