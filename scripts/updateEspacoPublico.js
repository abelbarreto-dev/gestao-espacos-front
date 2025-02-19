document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();

        // get data
        const dados = {
            nome: document.getElementById("NomeEspaco").value,
            descricao: document.getElementById("DescricaoEspaco").value,
            endereco: document.getElementById("EnderecoEspaco").value,
            capacidade: document.getElementById("CapacidadeEspaco").value
        };

        const espacoId = document.getElementById("UpdateEspacoPubID").value;

        const url = "https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/espacos-publicos/" + espacoId;

        // Envia os dados para a API
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        })
        .then(response => response.json())
        .then(data => {
            alert("Cadastro atualizado com sucesso!");
            console.log("Sucesso:", data);
        })
        .catch(error => {
            alert("Erro ao atualizar. Tente novamente.");
            console.error("Erro:", error);
        });
    });
});
