document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();

        const dados = {
            id_solicitante: parseInt(document.getElementById("SelectSolicitante").value),
            id_usuario: 0,
            id_espaco: parseInt(document.getElementById("SelectEpacoPublico").value),
            id_tipo_evento: parseInt(document.getElementById("SelectTipoEvento").value),
        };

        const url = "https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/solicitacoes";

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
