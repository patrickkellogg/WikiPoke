function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class patrickKellogg {
  constructor() {
  }

  all() {
    let arrAll = [];
    arrAll.push(getPokemon('diglett'));
    arrAll.push(getPokemon('magikarp'));
    arrAll.push(getPokemon('eevee'));
    return arrAll;
  }

  get(nameIn) {
    let onePoke = null;
    onePoke = getPokemon('nameIn');
    return onePoke;
  }

}

class Pokemon {
  constructor() {
    let name = "";
    let hp = 0;
    let attack = 0;
    let defense =  0;
    let abilities = null;
  }
}

function getPokemon (nameIn) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let dataBack = JSON.parse(this.responseText);
      console.log(dataBack);
      let myPoke = new Pokemon;
      myPoke.hp = dataBack.stats[5].base_stat;
      myPoke.attack = dataBack.stats[4].base_stat;
      myPoke.defense = dataBack.stats[3].base_stat;
      let abTemp = [];
      for (let i = 0; i < dataBack.abilities.length; i++) {
        abTemp.push(dataBack.abilities[i].ability.name);
      }
      myPoke.abilities = abTemp;
      return myPoke;
    }
  };
  xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/" + nameIn + ".json", true);
  xhttp.send();
}

function showPoke(nameIn) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let dataBack = JSON.parse(this.responseText);
      console.log(dataBack);
      let myPoke = new Pokemon;
      myPoke.name = capitalizeFirstLetter(dataBack.name);
      myPoke.hp = dataBack.stats[5].base_stat;
      myPoke.attack = dataBack.stats[4].base_stat;
      myPoke.defense = dataBack.stats[3].base_stat;
      let abTemp = [];
      for (let i = 0; i < dataBack.abilities.length; i++) {
        abTemp.push(dataBack.abilities[i].ability.name);
      }
      myPoke.abilities = abTemp;
      let extraDesc = "";
      let extraPic = "";
      switch(nameIn) {
        case 'diglett':
        extraDesc = "Diglett are raised in most farms. The reason is simple— wherever this Pokémon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables.";
         extraPic = "images/diglett.png";
          break;
        case 'magikarp':
        extraDesc = "Magikarp is a pathetic excuse for a Pokémon that is only capable of flopping and splashing. This behavior prompted scientists to undertake research into it.";
        extraPic = "images/magikarp.png";
          break;
        case 'eevee':
        extraDesc = "Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pokémon to evolve.";
        extraPic = "images/eevee.png";
          break;
        default:
        extraDesc = "WikiPoké is a webpage developed by Patrick Kellogg to display information for three different Pokemon characters: Diglett, Magikarp, and Eevee. Click one of the buttons or links to begin.";
        extraPic = "images/wikipoke.png";
      }

      document.getElementById('pokeHeader').innerHTML = myPoke.name;

      document.getElementById('pokeMain').innerHTML = extraDesc;

      document.getElementById('pokePic').innerHTML = "";

      let newName = document.createTextNode(myPoke.name);
      document.getElementById("pokePic").appendChild(newName);

      let newimg = document.createElement("img");
      newimg.src = extraPic;
      document.getElementById("pokePic").appendChild(newimg);

      let newHP = document.createTextNode("HP: " + myPoke.hp);
      document.getElementById("pokePic").appendChild(newHP);

      let newBR1 = document.createElement("br");
      document.getElementById("pokePic").appendChild(newBR1);

      let newAttack = document.createTextNode("Attack: " + myPoke.attack);
      document.getElementById("pokePic").appendChild(newAttack);

      let newBR2 = document.createElement("br");
      document.getElementById("pokePic").appendChild(newBR2);

      let newDefense = document.createTextNode("Defense: " + myPoke.defense);
      document.getElementById("pokePic").appendChild(newDefense);

      let newBR3 = document.createElement("br");
      document.getElementById("pokePic").appendChild(newBR3);

      let newAbilities = document.createTextNode("Abilities: ");
      document.getElementById("pokePic").appendChild(newAbilities);

      let newul = document.createElement("ul");
      for (let i = 0; i < myPoke.abilities.length; i++) {

        let newli = document.createElement("li");
        let textLi = document.createTextNode(myPoke.abilities[i]);
        newli.appendChild(textLi);
        newul.appendChild(newli);
      }
      document.getElementById("pokePic").appendChild(newul);

    }
  };
  xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/" + nameIn + ".json", true);
  xhttp.send();
}
/*
function getPokemon () {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readystate == 4 && this.status == 200) {
      // document.write(this.responceText);
    }
  };
  xhttp.open(httpVerb, url, true);
  xhttp.send();
}
*/

//var myPatrick = new patrickKellogg();
//var pokeArray = [];
//pokeArray = myPatrick.all();
showPoke('diglett');