import { series } from './data.js';
let componente = document.getElementById('series');
let componentePromedio = document.getElementById('promedio');
cargarFilas();
componentePromedio.innerHTML = `Seasons average: ${calcularPromedio()}`;
function cargarFilas() {
    series.forEach(c => crearFila(c));
}
function crearFila(serie) {
    let fila = document.createElement('tr');
    fila.innerHTML = (`
    <td style = "font-weight: bold;"> 
        ${serie.id}
    </td>
    <td style = "color:#547dde;">
        ${serie.nombre}
    </td>
    <td>
        ${serie.cadena}
    </td>
    <td>
        ${serie.numtemporadas}
    </td>`);
    componente.appendChild(fila);
}
function calcularPromedio() {
    let promedio = 0;
    series.forEach(s => promedio += s.numtemporadas);
    promedio /= series.length;
    let promedioT = Math.round(promedio);
    return promedioT.toString();
}
