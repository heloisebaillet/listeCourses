let produitEcrit = document.querySelector("#typedItems");
let produitAjoute = document.querySelector("#addItem");
let produitListe = document.querySelector("#listeItems");
let categorie = document.querySelector(".selectList");

function colorCategorie(newLi) {
  switch (categorie.value) {
    case "prot":
      newLi.style.color = "red";
      break;
    case "fruits":
      newLi.style.color = "green";
      break;
    case "produits":
      newLi.style.color = "blue";
      break;
    case "hygiene":
      newLi.style.color = "purple";
    default:
      break;
  }
}

produitAjoute.addEventListener("click", function () {
  //demander remplissage du formulaire
  if (produitEcrit.value == "") {
    alert("Remplissez le formulaire");
    return;
  }

  //ajouter produit à la liste
  let newLi = document.createElement("li");
  newLi.innerText = produitEcrit.value;
  produitListe.appendChild(newLi);

  colorCategorie(newLi);

  //vider l'input
  produitEcrit.value = "";

  //rayer
  let strikeButton = document.createElement("button");
  strikeButton.innerHTML = "Rayer";
  produitListe.appendChild(strikeButton);
  strikeButton.addEventListener("click", function () {
    if (newLi.style.textDecoration == "") {
      newLi.style.textDecoration = "line-through";
      newLi.style.textDecorationColor = "#E6E6FA";
      newLi.style.textDecorationThickness = "2px";
      newLi.style.textDecorationStyle = "wavy";
    } else {
      newLi.style.textDecoration = "";
    }
  });

  //edit
  let editButton = document.createElement("button");
  editButton.className = "modifier";
  editButton.innerHTML = "Modifier";
  produitListe.appendChild(editButton);
  editButton.addEventListener("click", function () {
    let editInput = document.createElement("input");
    if (editButton.className == "modifier") {
      editInput.setAttribute("type", "text");
      editInput.setAttribute("id", "modifier");
      produitListe.replaceChild(editInput, newLi);
      editButton.className = "validerModifier";
    } else if (editButton.className == "validerModifier") {
      let inputModify = document.querySelector("#modifier");
      newLi = document.createElement("li");
      newLi.innerText = inputModify.value;
      produitListe.replaceChild(newLi, inputModify);
      editButton.className = "modifier";
    }
  });

  //supprimer
  let suppButton = document.createElement("button");
  suppButton.innerHTML = "Supprimer";
  produitListe.appendChild(suppButton);
  suppButton.addEventListener("click", function () {
    newLi.remove();
    strikeButton.remove();
    suppButton.remove();
    editButton.remove();
  });
});

produitEcrit.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    if (produitEcrit.value == "") {
      alert("Remplissez le formulaire");
      return;
    }

    //ajouter produit à la liste
    let newLi = document.createElement("li");
    newLi.innerText = produitEcrit.value;
    produitListe.appendChild(newLi);

    colorCategorie(newLi);

    //vider l'input
    produitEcrit.value = "";

    //rayer
    let strikeButton = document.createElement("button");
    strikeButton.innerHTML = "Rayer";
    produitListe.appendChild(strikeButton);
    strikeButton.addEventListener("click", function () {
      if (newLi.style.textDecoration == "") {
        newLi.style.textDecoration = "line-through";
        newLi.style.textDecorationColor = "#E6E6FA";
        newLi.style.textDecorationThickness = "2px";
        newLi.style.textDecorationStyle = "wavy";
      } else {
        newLi.style.textDecoration = "";
      }
    });

    //edit
    let editButton = document.createElement("button");
    editButton.className = "modifier";
    editButton.innerHTML = "Modifier";
    produitListe.appendChild(editButton);
    editButton.addEventListener("click", function () {
      let editInput = document.createElement("input");
      if (editButton.className == "modifier") {
        editInput.setAttribute("type", "text");
        editInput.setAttribute("id", "modifier");
        produitListe.replaceChild(editInput, newLi);
        editButton.className = "validerModifier";
      } else if (editButton.className == "validerModifier") {
        let inputModify = document.querySelector("#modifier");
        newLi = document.createElement("li");
        newLi.innerText = inputModify.value;
        produitListe.replaceChild(newLi, inputModify);
        editButton.className = "modifier";
      }
    });

    //supprimer
    let suppButton = document.createElement("button");
    suppButton.innerHTML = "Supprimer";
    produitListe.appendChild(suppButton);
    suppButton.addEventListener("click", function () {
      newLi.remove();
      strikeButton.remove();
      suppButton.remove();
      editButton.remove();
    });
  }
});
