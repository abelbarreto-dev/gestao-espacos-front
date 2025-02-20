function cancelarSolicitacao(id) {
    if (confirm("Tem certeza que deseja cancelar esta solicitação?")) {
        const url = "https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/usuarios/login/solicitacoes/" + id;

        // Envia os dados para a API de delete solicitacao
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                alert("Solicitação deletada!");
            } else {
                alert("Erro ao deletar solicitacao.");
            }
            console.log("Sucesso:", data);
        })
        .catch(error => {
            alert("Erro interno ao deletar solicitacao.");
            console.error("Erro:", error);
        });
    }
}

function tbSolicitacaoSolicitanteDashBoard(data) {
    const tableBody = document.getElementById("TbSolicitacaoSolicitanteDashBoard");
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
            <td><a href="#" onclick="cancelarSolicitacao(${solicitacao.id_solicitacao})">Cancelar</a></td>
        </tr>`;
    });
}

async function fetchDataAll() {
    try {
        const response = await fetch("https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/solicitacoes");

        const dataSolicicao = await response.json();
        tbSolicitacaoSolicitanteDashBoard(dataSolicicao.data);
    } catch (error) {
        console.error("Erro ao buscar dados: ", error);
    }
}

function fetchDataFilter(status) {
    try {
        const response = fetch("https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/solicitacoes/status/" + status);

        const dataSolicicao = response.json();
        tbSolicitacaoAdminDashBoard(dataSolicicao)
    } catch (error) {
        console.error("Erro ao buscar dados: ", error);
    }
}

document.addEventListener('DOMContentLoaded', fetchDataAll);

document.getElementById("CheckButtonPendente").addEventListener("change", function() {
    if (this.checked) {
        console.log("checkbox marcado");

        fetchDataFilter("pendente");
    }
});

document.getElementById("CheckButtonAprovado").addEventListener("change", function() {
    if (this.checked) {
        console.log("checkbox marcado");

        fetchDataFilter("aprovado");
    }
});

document.getElementById("CheckButtonNegado").addEventListener("change", function() {
    if (this.checked) {
        console.log("checkbox marcado");

        fetchDataFilter("negado");
    }
});
