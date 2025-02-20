document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();

        // get data
        const dados = {
            nome: document.getElementById("NomeEspacoCadastro").value,
            descricao: document.getElementById("DescricaoEspacoCadastro").value,
            endereco: document.getElementById("EnderecoEspacoCadastro").value,
            capacidade: document.getElementById("CapacidadeEspacoCadastro").value
        };

        const url = "https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/espacos-publicos";

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
            console.log("Sucesso:", dados);

            window.location.href = "/pages/espacos-publicos";
        })
        .catch(error => {
            alert("Erro ao cadastrar. Tente novamente.");
            console.error("Erro:", error);
        });
    });
});
