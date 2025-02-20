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
    tableBody.innerHTML = "";

    data.forEach(espaco => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${espaco.id_espaco}</td>
            <td>${espaco.nome}</td>
            <td>${espaco.descricao}</td>
            <td>${espaco.endereco}</td>
            <td>${espaco.disponibilidade}</td>
            <td>${espaco.descricao}</td>
            <td><a href="#" onclick="window.location.href='/pages/espacos-publicos'">Editar</a></td>
            <td><a href="#" onclick="cancelarSolicitacao(${espaco.id_espaco})">Excluir</a></td>
        `;
    });
}

async function fetchDataAll() {
    try {
        const response = await fetch("https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/espacos-publicos");

        const dataEspPub = await response.json();

        tbEspacoPublicoDashBoard(dataEspPub.data);
    } catch (error) {
        console.error("Erro ao buscar dados: ", error);
    }
}

document.addEventListener('DOMContentLoaded', fetchDataAll);
