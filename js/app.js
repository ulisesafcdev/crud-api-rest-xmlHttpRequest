// metodo que hará la peticion a la api
const ajax = (options) => {
  let { url, method, success, error, data } = options;

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", e => {

    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      success(json);
    } else {
      let message = xhr.statusText || "Fallo la peticion al servidor";
      error(`${message}`);
    }

  })

  xhr.open(method || "GET", url);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send(JSON.stringify(data));
}

// CRUD API REST XMLHttpRequest
const d = document;
const $templateJugadores = d.getElementById("crud-template-jugadores").content;
const $templateTecnicos = d.getElementById("crud-template-tecnicos").content;

// CRUD Porteros
const $formPorteros = d.querySelector(".crud-form-porteros");
const $tablePorteros = d.querySelector(".crud-table-porteros");
const $titlePorteros = d.querySelector(".crud-title-porteros");
const $fragmentPorteros = d.createDocumentFragment();

// CRUD Defensas
const $formDefensas = d.querySelector(".crud-form-defensas");
const $tableDefensas = d.querySelector(".crud-table-defensas");
const $titleDefensas = d.querySelector(".crud-title-defensas");
const $fragmentDefensas = d.createDocumentFragment();

// CRUD Centrocampistas
const $formCentrocampistas = d.querySelector(".crud-form-centrocampistas");
const $tableCentrocampistas = d.querySelector(".crud-table-centrocampistas");
const $titleCentrocampistas = d.querySelector(".crud-title-centrocampistas");
const $fragmentCentrocampistas = d.createDocumentFragment();

// CRUD Delanteros
const $formDelanteros = d.querySelector(".crud-form-delanteros");
const $tableDelanteros = d.querySelector(".crud-table-delanteros");
const $titleDelanteros = d.querySelector(".crud-title-delanteros");
const $fragmentDelanteros = d.createDocumentFragment();

// CRUD Cuerpo Tecnico
const $formTecnicos = d.querySelector(".crud-form-tecnicos");
const $tableTecnicos = d.querySelector(".crud-table-tecnicos");
const $titleTecnicos = d.querySelector(".crud-title-tecnicos");
const $fragmentTecnicos = d.createDocumentFragment();

const getAllPorteros = () => {

  ajax({
    url: "http://localhost:3000/porteros",
    success: (res) => {
      // console.log(res);
      res.forEach(e => {
        $templateJugadores.querySelector(".id").textContent = e.id;
        $templateJugadores.querySelector(".nombre").textContent = e.nombre;
        $templateJugadores.querySelector(".dorsal").textContent = e.dorsal;
        $templateJugadores.querySelector(".posicion").textContent = e.posicion;

        $templateJugadores.querySelector(".edit").dataset.id = e.id;
        $templateJugadores.querySelector(".edit").dataset.nombre = e.nombre;
        $templateJugadores.querySelector(".edit").dataset.dorsal = e.dorsal;
        $templateJugadores.querySelector(".edit").dataset.posicion = e.posicion;

        $templateJugadores.querySelector(".delete").dataset.id = e.id;

        let $clone = d.importNode($templateJugadores, true);
        $fragmentPorteros.appendChild($clone);
      })

      $tablePorteros.querySelector("tbody").appendChild($fragmentPorteros);
    },
    error: (err) => {

      $tablePorteros.querySelector("tbody").innerHTML = `<tr><td colspan=4>${err}</td></tr>`;
    }
  })

}

const getAllDefensas = () => {

  ajax({
    url: "http://localhost:3000/defensas",
    success: (res) => {
      // console.log(res);
      res.forEach(e => {
        $templateJugadores.querySelector(".id").textContent = e.id;
        $templateJugadores.querySelector(".nombre").textContent = e.nombre;
        $templateJugadores.querySelector(".dorsal").textContent = e.dorsal;
        $templateJugadores.querySelector(".posicion").textContent = e.posicion;

        $templateJugadores.querySelector(".edit").dataset.id = e.id;
        $templateJugadores.querySelector(".edit").dataset.nombre = e.nombre;
        $templateJugadores.querySelector(".edit").dataset.dorsal = e.dorsal;
        $templateJugadores.querySelector(".edit").dataset.posicion = e.posicion;

        $templateJugadores.querySelector(".delete").dataset.id = e.id;

        let $clone = d.importNode($templateJugadores, true);
        $fragmentDefensas.appendChild($clone);
      })

      $tableDefensas.querySelector("tbody").appendChild($fragmentDefensas);
    },
    error: (err) => {
      $tableDefensas.querySelector("tbody").innerHTML = `<tr><td colspan=4>${err}</td></tr>`;
    }
  })

}

const getAllCentrocampistas = () => {

  ajax({
    url: "http://localhost:3000/centrocampistas",
    success: (res) => {
      // console.log(res);
      res.forEach(e => {
        $templateJugadores.querySelector(".id").textContent = e.id;
        $templateJugadores.querySelector(".nombre").textContent = e.nombre;
        $templateJugadores.querySelector(".dorsal").textContent = e.dorsal;
        $templateJugadores.querySelector(".posicion").textContent = e.posicion;

        $templateJugadores.querySelector(".edit").dataset.id = e.id;
        $templateJugadores.querySelector(".edit").dataset.nombre = e.nombre;
        $templateJugadores.querySelector(".edit").dataset.dorsal = e.dorsal;
        $templateJugadores.querySelector(".edit").dataset.posicion = e.posicion;

        $templateJugadores.querySelector(".delete").dataset.id = e.id;

        let $clone = d.importNode($templateJugadores, true);
        $fragmentCentrocampistas.appendChild($clone);
      })

      $tableCentrocampistas.querySelector("tbody").appendChild($fragmentCentrocampistas);
    },
    error: (err) => {
      $tableCentrocampistas.querySelector("tbody").innerHTML = `<tr><td colspan=4>${err}</td></tr>`;
    }
  })

}

const getAllDelanteros = () => {

  ajax({
    url: "http://localhost:3000/delanteros",
    success: (res) => {
      // console.log(res);
      res.forEach(e => {
        $templateJugadores.querySelector(".id").textContent = e.id;
        $templateJugadores.querySelector(".nombre").textContent = e.nombre;
        $templateJugadores.querySelector(".dorsal").textContent = e.dorsal;
        $templateJugadores.querySelector(".posicion").textContent = e.posicion;

        $templateJugadores.querySelector(".edit").dataset.id = e.id;
        $templateJugadores.querySelector(".edit").dataset.nombre = e.nombre;
        $templateJugadores.querySelector(".edit").dataset.dorsal = e.dorsal;
        $templateJugadores.querySelector(".edit").dataset.posicion = e.posicion;

        $templateJugadores.querySelector(".delete").dataset.id = e.id;

        let $clone = d.importNode($templateJugadores, true);
        $fragmentDelanteros.appendChild($clone);
      })

      $tableDelanteros.querySelector("tbody").appendChild($fragmentDelanteros);
    },
    error: (err) => {
      $tableDelanteros.querySelector("tbody").innerHTML = `<tr><td colspan=4>${err}</td></tr>`;
    }
  })

}

const getAllTecnicos = () => {

  ajax({
    url: "http://localhost:3000/cuerpoTecnico",
    success: (res) => {
      // console.log(res);
      res.forEach(e => {
        $templateTecnicos.querySelector(".id").textContent = e.id;
        $templateTecnicos.querySelector(".nombre").textContent = e.nombre;
        $templateTecnicos.querySelector(".cargo").textContent = e.cargo;

        $templateTecnicos.querySelector(".edit").dataset.id = e.id;
        $templateTecnicos.querySelector(".edit").dataset.nombre = e.nombre;
        $templateTecnicos.querySelector(".edit").dataset.cargo = e.cargo;

        $templateTecnicos.querySelector(".delete").dataset.id = e.id;

        let $clone = d.importNode($templateTecnicos, true);
        $fragmentTecnicos.appendChild($clone);
      })

      $tableTecnicos.querySelector("tbody").appendChild($fragmentTecnicos);
    },
    error: (err) => {
      $tableTecnicos.querySelector("tbody").innerHTML = `<tr><td colspan=4>${err}</td></tr>`;
    }
  })

}

d.addEventListener("DOMContentLoaded", () => {
  getAllPorteros();
  getAllDefensas();
  getAllCentrocampistas();
  getAllDelanteros();
  getAllTecnicos();
})

d.addEventListener("submit", e => {

  if (e.target === $formPorteros) {
    e.preventDefault();

    // si no hay ningun id en el input hidden -> CREATE - POST
    if (!e.target.id.value) {
      ajax({
        url: "http://localhost:3000/porteros",
        method: "POST",
        success: (res) => {
          location.reload();
        },
        error: (err) => {
          $formPorteros.insertAdjacentHTML("afterend", `<p class="text-normal">${err}</p>`)
        },
        data: {
          nombre: e.target.nombre.value,
          dorsal: e.target.dorsal.value,
          posicion: e.target.posicion.value
        }
      })
    } else {
      // UPDATE - PUT
      ajax({
        url: `http://localhost:3000/porteros/${e.target.id.value}`,
        method: "PUT",
        success: (res) => location.reload(),
        error: (err) => {
          $formPorteros.insertAdjacentHTML("afterend", `<p class="text-normal">${err}</p>`)
        },
        data: {
          nombre: e.target.nombre.value,
          dorsal: e.target.dorsal.value,
          posicion: e.target.posicion.value
        }
      })
    }
  }

  if (e.target === $formDefensas) {
    e.preventDefault();

    // si no hay ningun id en el input hidden -> CREATE - POST
    if (!e.target.id.value) {
      ajax({
        url: "http://localhost:3000/defensas",
        method: "POST",
        success: (res) => location.reload(),
        error: (err) => {
          $formDefensas.insertAdjacentHTML("afterbegin", `<p class="text-normal">${err}</p>`)
        },
        data: {
          nombre: e.target.nombre.value,
          dorsal: e.target.dorsal.value,
          posicion: e.target.posicion.value
        }
      })
    } else {
      // UPDATE - PUT
      ajax({
        url: `http://localhost:3000/defensas/${e.target.id.value}`,
        method: "PUT",
        success: (res) => location.reload(),
        error: (err) => {
          $formDefensas.insertAdjacentHTML("afterbegin", `<p class="text-normal">${err}</p>`)
        },
        data: {
          nombre: e.target.nombre.value,
          dorsal: e.target.dorsal.value,
          posicion: e.target.posicion.value
        }
      })
    }
  }

  if (e.target === $formCentrocampistas) {
    e.preventDefault();

    // si no hay ningun id en el input hidden -> CREATE - POST
    if (!e.target.id.value) {

      ajax({
        url: "http://localhost:3000/centrocampistas",
        method: "POST",
        success: (res) => location.reload(),
        error: (err) => {
          $formCentrocampistas.insertAdjacentHTML("afterbegin", `<p class="text-normal">${err}</p>`)
        },
        data: {
          nombre: e.target.nombre.value,
          dorsal: e.target.dorsal.value,
          posicion: e.target.posicion.value
        }
      })

    } else {
      // UPDATE - PUT
      ajax({
        url: `http://localhost:3000/centrocampistas/${e.target.id.value}`,
        method: "PUT",
        success: (res) => location.reload(),
        error: (err) => {
          $formCentrocampistas.insertAdjacentHTML("afterbegin", `<p class="text-normal">${err}</p>`)
        },
        data: {
          nombre: e.target.nombre.value,
          dorsal: e.target.dorsal.value,
          posicion: e.target.posicion.value
        }
      })
    }
  }

  if (e.target === $formDelanteros) {
    e.preventDefault();

    // si no hay ningun id en el input hidden -> CREATE - POST
    if (!e.target.id.value) {

      ajax({
        url: "http://localhost:3000/delanteros",
        method: "POST",
        success: (res) => location.reload(),
        error: (err) => {
          $formDelanteros.insertAdjacentHTML("afterbegin", `<p class="text-normal">${err}</p>`)
        },
        data: {
          nombre: e.target.nombre.value,
          dorsal: e.target.dorsal.value,
          posicion: e.target.posicion.value
        }
      })

    } else {
      // UPDATE - PUT
      ajax({
        url: `http://localhost:3000/delanteros/${e.target.id.value}`,
        method: "PUT",
        success: (res) => location.reload(),
        error: (err) => {
          $formDelanteros.insertAdjacentHTML("afterbegin", `<p class="text-normal">${err}</p>`)
        },
        data: {
          nombre: e.target.nombre.value,
          dorsal: e.target.dorsal.value,
          posicion: e.target.posicion.value
        }
      })
    }
  }

  if (e.target === $formTecnicos) {
    e.preventDefault();
    // si no hay ningun id en el input hidden -> CREATE - POST
    if (!e.target.id.value) {

      ajax({
        url: "http://localhost:3000/cuerpoTecnico",
        method: "POST",
        success: (res) => location.reload(),
        error: (err) => {
          $formTecnicos.insertAdjacentHTML("afterbegin", `<p class="text-normal">${err}</p>`)
        },
        data: {
          nombre: e.target.nombre.value,
          cargo: e.target.cargo.value
        }
      })

    } else {
      // UPDATE - PUT
      ajax({
        url: `http://localhost:3000/cuerpoTecnico/${e.target.id.value}`,
        method: "PUT",
        success: (res) => location.reload(),
        error: (err) => {
          $formTecnicos.insertAdjacentHTML("afterbegin", `<p class="text-normal">${err}</p>`)
        },
        data: {
          nombre: e.target.nombre.value,
          cargo: e.target.cargo.value
        }
      })
    }
  }

})

d.addEventListener("click", e => {

  if (e.target.matches(".crud-table-porteros .edit")) {
    $titlePorteros.textContent = "Actualizar registro de Porteros";
    $formPorteros.id.value = e.target.dataset.id;
    $formPorteros.nombre.value = e.target.dataset.nombre;
    $formPorteros.dorsal.value = e.target.dataset.dorsal;
    $formPorteros.posicion.value = e.target.dataset.posicion;
  }

  if (e.target.matches(".crud-table-defensas .edit")) {
    $titleDefensas.textContent = "Actualizar registro de Defensas";
    $formDefensas.id.value = e.target.dataset.id;
    $formDefensas.nombre.value = e.target.dataset.nombre;
    $formDefensas.dorsal.value = e.target.dataset.dorsal;
    $formDefensas.posicion.value = e.target.dataset.posicion;
  }

  if (e.target.matches(".crud-table-centrocampistas .edit")) {
    $titleCentrocampistas.textContent = "Actualizar registro de Centrocampistas";
    $formCentrocampistas.id.value = e.target.dataset.id;
    $formCentrocampistas.nombre.value = e.target.dataset.nombre;
    $formCentrocampistas.dorsal.value = e.target.dataset.dorsal;
    $formCentrocampistas.posicion.value = e.target.dataset.posicion;
  }

  if (e.target.matches(".crud-table-delanteros .edit")) {
    $titleDelanteros.textContent = "Actualizar registro de Delanteros";
    $formDelanteros.id.value = e.target.dataset.id;
    $formDelanteros.nombre.value = e.target.dataset.nombre;
    $formDelanteros.dorsal.value = e.target.dataset.dorsal;
    $formDelanteros.posicion.value = e.target.dataset.posicion;
  }

  if (e.target.matches(".crud-table-tecnicos .edit")) {
    $titleTecnicos.textContent = "Actualizar registro del Cuerpo Tecnico";
    $formTecnicos.id.value = e.target.dataset.id;
    $formTecnicos.nombre.value = e.target.dataset.nombre;
    $formTecnicos.cargo.value = e.target.dataset.cargo;
  }

  // eliminar jugador porteros
  if(e.target.matches(".crud-table-porteros .delete")){
    let yesOrNot = confirm("¿Desea eliminar el registro?");

    if(yesOrNot){

      ajax({
        url: `http://localhost:3000/porteros/${e.target.dataset.id}`,
        method: "DELETE",
        success: (res) => location.reload(),
        error: (err) => {
          alert(err);
        }
      })

    }
  }

  // eliminar jugador defensa
  if(e.target.matches(".crud-table-defensas .delete")){
    let yesOrNot = confirm("¿Desea eliminar el registro?");

    if(yesOrNot){

      ajax({
        url: `http://localhost:3000/defensas/${e.target.dataset.id}`,
        method: "DELETE",
        success: (res) => location.reload(),
        error: (err) => alert(err)
      })

    }
  }

  // eliminar jugador centrocampista
  if(e.target.matches(".crud-table-centrocampistas .delete")){
    let yesOrNot = confirm("¿Desea eliminar el registro?");

    if(yesOrNot){

      ajax({
        url: `http://localhost:3000/centrocampistas/${e.target.dataset.id}`,
        method: "DELETE",
        success: (res) => location.reload(),
        error: (err) => alert(err)
      })

    }
  }

  // eliminar jugador delantero
  if(e.target.matches(".crud-table-delanteros .delete")){
    let yesOrNot = confirm("¿Desea eliminar el registro?");

    if(yesOrNot){

      ajax({
        url: `http://localhost:3000/delanteros/${e.target.dataset.id}`,
        method: "DELETE",
        success: (res) => location.reload(),
        error: (err) => alert(err)
      })

    }
  }

  // eliminar registro tecnicos
  if(e.target.matches(".crud-table-tecnicos .delete")){
    let yesOrNot = confirm("¿Desea eliminar el registro?");

    if(yesOrNot){

      ajax({
        url: `http://localhost:3000/cuerpoTecnico/${e.target.dataset.id}`,
        method: "DELETE",
        success: (res) => location.reload(),
        error: (err) => alert(err)
      })

    }
  }
})