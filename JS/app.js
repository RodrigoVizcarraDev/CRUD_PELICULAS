// leer del localstorage el tema o usar el valor por defecto dark
let temaConfigurado = JSON.parse(localStorage.getItem("theme")) || "dark";
cambiarTema(temaConfigurado);

let btnThemeDark = document.querySelector("#btnThemeDark");
let btnThemeLight = document.querySelector("#btnThemeLight");

btnThemeDark.addEventListener("click", () => cambiarTema("dark"));
btnThemeLight.addEventListener("click", () => cambiarTema("light"));

function cambiarTema(color){
    let etiquetaHTML = document.querySelector("html");
    //console.log(etiquetaHTML);
    etiquetaHTML.setAttribute("data-bs-theme", color);
    // guardar en localstorage
    localStorage.setItem("theme", JSON.stringify(color));
}
//Mostrar sol o luna segun el valor que tengo configurado del tema