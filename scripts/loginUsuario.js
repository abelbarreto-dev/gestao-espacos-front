document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Captura os dados do formulário de login
        const email = document.getElementById("LoginEmail").value;
        const senha = document.getElementById("LoginSenha").value;

        // Monta o objeto para envio
        const dados = {
            email: email,
            senha: senha
        };

        // Envia os dados para a API de login
        fetch("https://suaapi.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Login realizado com sucesso!");

                // Redireciona após login bem-sucedido
                if (data.perfil === "administrador") {
                    window.location.href = "/pages/admin-dashboard";
                }
                else if (data.perfil === "solicitante") {
                    window.location.href = "/pages/solicitante-dashboard";
                }
            } else {
                alert("Erro no login. Verifique suas credenciais.");
            }
            console.log("Sucesso:", data);
        })
        .catch(error => {
            alert("Erro ao acessar o sistema. Tente novamente.");
            console.error("Erro:", error);
        });
    });
});
