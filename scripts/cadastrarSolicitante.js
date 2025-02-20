document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();

        const dados = {
            nome: document.getElementById("CadastroNomeSolicitante").value,
            tipo: document.getElementById("TipoDeDocumentoSolicitante").value,
            documento: document.getElementById("CadastroDocumentoSolicitante").value,
            contato: document.getElementById("CadastroContatoSolicitante").value
        };

        const url = "https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/solicitantes";

        // Envia os dados para a API
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        })
        .then(response => response.json())
        .then(data => {
            alert("Cadastro realizado com sucesso!");
            console.log("Sucesso:", data);
        })
        .catch(error => {
            alert("Erro ao cadastrar. Tente novamente.");
            console.error("Erro:", error);
        });
    });
});
