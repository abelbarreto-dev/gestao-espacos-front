export function populateSelectEspacoPublico(data) {
    const select = document.getElementById("SelectEspacoPublico");
    select.innerHTML = "";

    data.forEach(espacoPublico => {
        const option = document.createElement("option");
        option.value = espacoPublico.id_espaco;
        option.textContent = espacoPublico.nome;
        select.appendChild(option);
    });
}

export function populateSelectTipoEvento(data) {
    const select = document.getElementById("SelectTipoEvento");
    select.innerHTML = "";

    data.forEach(tipoEvento => {
        const option = document.createElement("option");
        option.value = tipoEvento.id_tipo_evento;
        option.textContent = tipoEvento.descricao;
        select.appendChild(option);
    });
}

export function populateSelectSolicitante(data) {
    const select = document.getElementById("SelectSolicitante");
    select.innerHTML = "";

    data.forEach(solicitante => {
        const option = document.createElement("option");
        option.value = solicitante.id_solicitante;
        option.textContent = solicitante.nome;
        select.appendChild(option);
    });
}
