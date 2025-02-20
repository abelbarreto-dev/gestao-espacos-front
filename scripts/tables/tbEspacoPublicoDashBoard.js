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

function tbEspacoPublicoDashBoard(data) {
    const tableBody = document.getElementById("TbEspacoPublicoDashBoard");

    tableBody.textContent = "";

    data.forEach(espaco => {
        const row = document.createElement("tr");

        row.textContent = "";

        row.innerHTML = `
            <tr>${espaco.id_espaco}</tr>
            <tr>${espaco.nome}</tr>
            <tr>${espaco.descricao}</tr>
            <tr>${espaco.endereco}</tr>
            <tr>${espaco.disponibilidade}</tr>
            <tr>${espaco.descricao}</tr>
            <tr><a href="#" onclick="window.location.href="/pages/espacos-publicos">Editar</a></tr>
            <tr><a href="#" onclick="cancelarSolicitacao(${espaco.id_espaco})">Excluir</a></tr>
        `;
    });
}

async function fetchDataAll() {
    try {
        const response = await fetch("https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/espacos-publicos");

        const dataEspPub = await response.json();

        tbEspacoPublicoDashBoard(dataEspPub);
    } catch (error) {
        console.error("Erro ao buscar dados: ", error);
    }
}

document.addEventListener('DOMContentLoaded', fetchDataAll);
