function tbSolicitacaoAdminDashBoard(data) {
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

function setTotalEspPub(espPubLen) {
    document.getElementById("AdminTotalEspacosPublicos").textContent = espPubLen;
}

function setTotalSolicitAprovadas() {
    try {
        const solictAprovadas = fetch("https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/solicitacoes/status/aprovado");
        const totalSolicitAprovadas = solictAprovadas.length;
    
        document.getElementById("AdminTotalSolicitacoesAprovadas").textContent = totalSolicitAprovadas;
    } catch (error) {
        document.getElementById("AdminTotalSolicitacoesAprovadas").textContent = 0;
    }
}

function fetchData() {
    try {
        const response = fetch("https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/solicitacoes");

        const espPub = fetch("https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/espacos-publicos");

        const dataSolicicao = response.json();
        tbSolicitacaoAdminDashBoard(dataSolicicao)

        const totalEspPub = espPub.length;

        setTotalEspPub(totalEspPub);
        setTotalSolicitAprovadas();
    } catch (error) {
        console.error("Erro ao buscar dados: ", error);
    }
}

document.addEventListener('DOMContentLoaded', fetchData);
