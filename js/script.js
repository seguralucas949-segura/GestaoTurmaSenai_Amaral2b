// script.js

function mostrarMensagem(){
  alert("Bem-vindo ao sistema de Gestão de Turmas do SENAI!");
}

const form = document.getElementById("formTurma");
const lista = document.getElementById("listaTurmas");

form.addEventListener("submit", function(event){

  event.preventDefault();

  // PEGAR VALORES
  const curso = document.getElementById("curso").value;
  const professor = document.getElementById("professor").value;
  const sala = document.getElementById("sala").value;
  const turno = document.getElementById("turno").value;
  const alunos = document.getElementById("alunos").value;

  // CRIAR CARD
  const card = document.createElement("article");

  card.classList.add("card");

  card.innerHTML = `
  
    <h3>${curso}</h3>

    <p><strong>Professor:</strong> ${professor}</p>

    <p><strong>Sala:</strong> ${sala}</p>

    <p><strong>Turno:</strong> ${turno}</p>

    <p><strong>Alunos:</strong> ${alunos}</p>

  `;

  // ADICIONAR NA TELA
  lista.appendChild(card);

  // LIMPAR FORMULÁRIO
  form.reset();

});