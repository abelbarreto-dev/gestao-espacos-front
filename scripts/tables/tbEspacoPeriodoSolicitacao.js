export function tbEspacoPeriodoSolicitacao(data) {
    const tableBody = document.getElementById("TbEspacoPeriodoSolicitacao");
    tableBody.innerHTML = "";

    data.forEach(valor => {
        tableBody.innerHTML += `<td>
            <td>${valor.espaco_publico.nome}</td>
            <td>${valor.periodo.data_inicio}</td>
            <td>${valor.periodo.data_fim}</td>
            <td>${valor.solicitacao.data_solicitacao}</td>
        </tr>`;
    });
}
