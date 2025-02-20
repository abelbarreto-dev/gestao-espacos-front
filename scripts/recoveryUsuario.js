document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Captura os dados do formulário de recuperação de senha
        const email = document.getElementById("RecoveryEmail").value;
        const senha = document.getElementById("RecoverySenha").value;
        const confirmeSenha = document.getElementById("RecoveryConfirmeSenha").value;

        // Verifica se as senhas coincidem
        if (senha !== confirmeSenha) {
            alert("As senhas não coincidem. Por favor, tente novamente.");
            return;
        }

        // Monta o objeto para envio
        const dados = {
            email: email,
            senha: senha
        };

        const url = "https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/usuarios/recovery-senha";

        // Envia os dados para a API de recuperação de senha
        fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Senha redefinida com sucesso!");
                window.location.href = "/pages/login"; // Redireciona para a página de login
            } else {
                alert("Erro ao redefinir senha. Verifique as informações fornecidas.");
            }
            console.log("Sucesso:", data);
        })
        .catch(error => {
            alert("Erro ao processar a recuperação de senha. Tente novamente.");
            console.error("Erro:", error);
        });
    });
});
