function tbSolicitacaoAdminDashBoard(data) {
    const tableBody = document.getElementById("TbSolicitacaoAdminDashBoard");
    tableBody.innerHTML = "";

    data.forEach(solicitacao => {
        tableBody.innerHTML += `<tr>
            <td>${solicitacao.id_solicitacao}</td>
            <td>${solicitacao.id_solicitante}</td>
            <td>${solicitacao.id_usuario}</td>
            <td>${solicitacao.id_espaco}</td>
            <td>${solicitacao.id_tipo_evento}</td>
            <td>${solicitacao.status}</td>
            <td>${solicitacao.data_solicitacao}</td>
        <tr>`;
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

async function fetchData() {
    try {
        const response = await fetch("https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/solicitacoes");

        const espPub = await fetch("https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/espacos-publicos");

        const dataSolicicao = await response.json();
        tbSolicitacaoAdminDashBoard(dataSolicicao)

        const totalEspPub = espPub.length;

        setTotalEspPub(totalEspPub);
        setTotalSolicitAprovadas();
    } catch (error) {
        console.error("Erro ao buscar dados: ", error);
    }
}

document.addEventListener('DOMContentLoaded', fetchData);
