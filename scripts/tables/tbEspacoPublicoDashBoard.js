function cancelarSolicitacao(id) {
    if (confirm("Tem certeza que deseja cancelar esta solicitação?")) {
        const url = "https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/usuarios/login/espacos-publicos/" + id;

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

export function tbEspacoPublicoDashBoard(data) {
    const tableBody = document.getElementById("TbEspacoPublicoDashBoard");

    tableBody.innerHTML = "";

    data.forEach(solicitacao => {
        const row = document.createElement("tr");

        row.innerHTML = "";

        row.innerHTML = `
            <tr>${solicitacao.id_espaco}</tr>
            <tr>${solicitacao.nome}</tr>
            <tr>${solicitacao.descricao}</tr>
            <tr>${solicitacao.endereco}</tr>
            <tr>${solicitacao.disponibilidade}</tr>
            <tr>${solicitacao.descricao}</tr>
            <tr><a href="#" onclick="window.location.href="/pages/espacos-publicos">Editar</a></tr>
            <tr><a href="#" onclick="cancelarSolicitacao(${solicitacao.id_solicitacao})">Excluir</a></tr>
        `;
    });
}

function fetchDataAll() {
    try {
        const response = fetch("https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/espacos-publicos");

        const dataEspPub = response.json();
        tbEspacoPublicoDashBoard(dataEspPub);
    } catch (error) {
        console.error("Erro ao buscar dados: ", error);
    }
}

document.addEventListener('DOMContentLoaded', fetchDataAll);
