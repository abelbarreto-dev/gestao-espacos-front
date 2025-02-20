import {
    populateSelectEspacoPublico,
    populateSelectTipoEvento,
    populateSelectSolicitante
} from './select/populateSelect';
import UserStore from "./singleton/userStore";

function getAllEspacosPublicos() {
    const url = "https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/espacos-publicos";

    const allEspPub = fetch(url);

    if (!allEspPub) {
        alert("Nenhum Espaço Público Cadastrado!");

        throw Error("error espaco publico");
    }

    populateSelectEspacoPublico(allEspPub.data);
}

function getAllTiposEventos() {
    const url = "https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/tipo-evento";

    const allTipoEvento = fetch(url);

    if (!allTipoEvento) {
        alert("Nenhum Tipo Evento Cadastrado!");

        throw Error("error tipo evento");
    }

    populateSelectTipoEvento(allTipoEvento.data);
}

function getAllSolicitantes() {
    const url = "https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/solicitantes";

    const allSolicitantes = fetch(url);

    if (!allSolicitantes) {
        alert("Nenhum Solicitante Cadastrado!");

        throw Error("error solicitante");
    }

    populateSelectSolicitante(allSolicitantes.data);
}


document.addEventListener("DOMContentLoaded", function () {
    try {
        getAllEspacosPublicos();
        getAllTiposEventos();
        getAllSolicitantes();
    }
    catch (error) {
        window.location.href = "/pages/solicitante-dashboard";
        return;
    }

    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();

        const dados = {
            id_solicitante: parseInt(document.getElementById("SelectSolicitante").value),
            id_usuario: UserStore.getInstance().id_usuario,
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
