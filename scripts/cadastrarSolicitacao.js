import { periodoRequest } from './models/modelsRequest.js';
import {
    populateSelectEspacoPublico,
    populateSelectTipoEvento,
    populateSelectSolicitante
} from './select/populateSelect.js';
import UserStore from "./singleton/userStore.js";

/** periodo */
function createNewPeriodo(solicitacaoId) {
    const dados = periodoRequest(
        id_solicitacao=solicitacaoId,
        data_inicio=document.getElementById("PeriodoDataInicioSolicita").value,
        data_fim=document.getElementById("PeriodoDataFimSolicita").value
    );

    const url = "https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/periodos";

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
        return true;
    })
    .catch(error => {
        console.error("Erro:", error);
        return false;
    });
}
/** periodo */

async function getAllEspacosPublicos() {
    const url = "https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/espacos-publicos";

    const response = await fetch(url);
    const allEspPub = await response.json();

    if (!allEspPub || !allEspPub.data) {
        alert("Nenhum Espaço Público Cadastrado!");

        throw Error("error espaco publico");
    }

    populateSelectEspacoPublico(allEspPub.data);
}

async function getAllTiposEventos() {
    const url = "https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/tipo-evento";

    const response = await fetch(url);
    const allTipoEvento = await response.json();

    if (!allTipoEvento || !allTipoEvento.data) {
        alert("Nenhum Tipo Evento Cadastrado!");

        throw Error("error tipo evento");
    }

    populateSelectTipoEvento(allTipoEvento.data);
}

async function getAllSolicitantes() {
    const url = "https://gestao-espacos-api.fly.dev/api/v1/gestao-espacos/solicitantes";

    const response = await fetch(url);
    const allSolicitantes = await response.json();

    if (!allSolicitantes || !allSolicitantes.data) {
        alert("Nenhum Solicitante Cadastrado!");

        throw Error("error solicitante");
    }

    populateSelectSolicitante(allSolicitantes.data);
}


async function fillDataSelects() {
    try {
        await getAllEspacosPublicos();
        await getAllTiposEventos();
        await getAllSolicitantes();
    }
    catch (error) {
        console.error(error);
        //window.location.href = "/pages/solicitante-dashboard";
        return;
    }
}

document.addEventListener("DOMContentLoaded", fillDataSelects);

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();

        const dados = {
            id_solicitante: parseInt(document.getElementById("SelectSolicitante").value),
            id_usuario: UserStore.getInstance().id_usuario,
            id_espaco: parseInt(document.getElementById("SelectEspacoPublico").value),
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
            alert("sucesso ao criar solicitacao");
            /*const idSolicitacao = data.id_solicitacao;

            const result = createNewPeriodo(idSolicitacao);

            if (result) {
                alert("Cadastro realizado com sucesso!");
                console.log("Sucesso!");
            } else {
                alert("Problema com o período!");
            }*/
        })
        .catch(error => {
            alert("Erro ao cadastrar. Tente novamente.");
            console.error("Erro:", error);
        });
    });
});
