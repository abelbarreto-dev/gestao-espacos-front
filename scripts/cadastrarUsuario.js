document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Captura os dados do formulário
        const nome = document.getElementById("CadastroNome").value;
        const email = document.getElementById("CadastroEmail").value;
        const senha = document.getElementById("CadastroSenha").value;
        const tipoUsuario = document.getElementById("CadastroTipoUsuario").value;

        // Monta o objeto para envio
        const dados = {
            nome: nome,
            email: email,
            senha: senha,
            perfil: tipoUsuario
        };

        const url = "https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/usuarios"

        // Envia os dados para a API
        fetch("https://suaapi.com/cadastro", {
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
