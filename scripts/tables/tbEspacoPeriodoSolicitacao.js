export function tbEspacoPeriodoSolicitacao(data) {
    const tableBody = document.getElementById("TbEspacoPeriodoSolicitacao");

    tableBody.innerHTML = "";

    data.forEach(valor => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <tr>${valor.espaco_publico.nome}</tr>
            <tr>${valor.periodo.data_inicio}</tr>
            <tr>${valor.periodo.data_fim}</tr>
            <tr>${valor.solicitacao.data_solicitacao}</tr>
        `;
    });
}
