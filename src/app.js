/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#excuse").innerHTML = generarExcusa();
});
function generarExcusa() {
  let who = ["El perrito", "El dragon", "El unicornio", "Un ave fénix"];
  let action = ["se comió", "mojó", "rompió", "quemó"];
  let what = ["mis deberes", "la comida", "la casa"];
  let when = [
    "después de salir.",
    "cuando llegamos.",
    "mientras no estaba.",
    "cuando salimos a pasear.",
    "mientras cantaba."
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
}
