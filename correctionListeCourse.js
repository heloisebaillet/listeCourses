// Récupération des éléments provenant du HTML
let inputAdd = document.querySelector(".inputAdd");
let addButton = document.querySelector(".addButton");
let ulContainer = document.querySelector(".ulContainer");
let categorie = document.querySelector(".categorie");

function colorCategorie(li) {
  switch (categorie.value) {
    // Si la valeur de l'input catégorie est viande
    case "viande":
      // On colore la liste en rouge
      li.style.color = "red";
      break;
    // Si la valeur de l'input catégorie est legume
    case "legume":
      // On colore la liste en vert
      li.style.color = "green";
      break;
    // Si la valeur de l'input catégorie est viande
    case "lait":
      // On colore la liste en bleu
      li.style.color = "blue";
      break;
    default:
      break;
  }
}

// Déclencher un event sur le bouton
addButton.addEventListener("click", function () {
  if (inputAdd.value == "") {
    alert("Veuillez remplir le formulaire avant de valider");
  } else {
    // Création d'un élément LI
    let li = document.createElement("li");

    colorCategorie(li);

    // Mettre un texte intérieur dans la balise li
    li.innerText = inputAdd.value;

    // Crée un attribut à l'intérieur de la balise li
    li.innerValue = inputAdd.value;
    // Dans le parent ulContainer on veut faire apparaitre la balise LI
    ulContainer.appendChild(li);

    // Création du bouton rayer
    let strickButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    let updateButton = document.createElement("button");

    deleteButton.innerText = "X";
    strickButton.innerText = "Rayer";
    updateButton.innerText = "Update";

    // Faire apparaitre le bouton dans le parent li
    li.appendChild(strickButton);
    li.appendChild(deleteButton);
    li.appendChild(updateButton);
    // Vider l'input
    inputAdd.value = "";

    // Evenement du bouton rayer
    strickButton.addEventListener("click", function () {
      if (li.style.textDecoration == "") {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "";
      }
    });

    // DELETE EVENT
    deleteButton.addEventListener("click", function () {
      if (confirm("Voulez vous supprimez ?")) {
        li.remove();
      }
    });
    // UPDATE EVENT
    updateButton.addEventListener("click", function () {
      console.log("value" + li.innerValue);
      // Quand je clique sur l'updateButton je crée un input avec une classe à l'intérieur de la liste
      li.innerHTML = `<input type="text" value=${li.innerValue} class="updateInput"/>`;
      // Une fois l'input crée je fais un query pour le récupérer et le stocker dans la variable updateInput
      let updateInput = document.querySelector(".updateInput");

      // Je déclenche un event sur l'input stocké en variable
      updateInput.addEventListener("keydown", function (eventInfo) {
        if (eventInfo.key == "Enter") {
          // La balise input va être remplacer par ce que l'utilisateur à taper dans l'updateInput
          li.innerText = updateInput.value;

          li.innerValue = updateInput.value;
          // On fait réaparaitre tout les bouton comme avant.
          li.appendChild(strickButton);
          li.appendChild(deleteButton);
          li.appendChild(updateButton);
        }
      });
    });
  }
});
