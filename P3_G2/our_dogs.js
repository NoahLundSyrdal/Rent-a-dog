//Lager en lsite med dictionary om hundene 
var dog = [{ names: "Snøhvit",
            id: 169420,
            size: 3,
            prize: 1500,
            kastrert: false,
            info: "Hei, Jeg heter Snøhvit! Jeg er en liten Pomeranian. Hvis du vil ha meg, er min id:169420",
            bilde: "../img/dog_1.jpg"},

            { names: "Labben",
            id: 269420,
            size: 3,
            prize: 1500,
            kastrert: false,
            info: "Hei, Jeg heter Labben! Jeg er en liten Labrador retriever. Hvis du vil ha meg, er min id:269420",
            bilde: "../img/dog_2.jpg"},

            { names: "Hila",
            id: 369420,
            size: 1,
            prize: 2000,
            kastrert: true,
            info: "Hei, Jeg heter Hila! Jeg er en stor German Shepherd.Hvis du vil ha meg, er min id:369420",
            bilde: "../img/dog_3.jpg"},

            { names: "Milo",
            id: 469420,
            size: 2,
            prize: 1000,
            kastrert: true,
            info: "Hei, Jeg heter Milo! Jeg er en middels puddel.Hvis du vil ha meg, er min id:469420",
            bilde: "../img/dog_4.jpg"},

            { names: "Max",
            id: 569420,
            size: 1,
            prize: 1750,
            kastrert: false,
            info: "Hei, Jeg heter Max! Jeg er en stor Chow Chow. Hvis du vil ha meg, er min id:569420",
            bilde: "../img/dog_5.jpg"},

            { names: "Brutus",
            id: 669420,
            size: 2,
            prize: 1000,
            kastrert: true,
            info: "Hei, Jeg heter Brutus! Jeg er en middels Pug. Hvis du vil ha meg, er min id:669420",
            bilde: "../img/dog_6.jpg"},

            { names: "Leo",
            id: 769420,
            size: 1,
            prize: 800,
            kastrert: false,
            info: "Hei, Jeg heter Leo!Jeg er en stor Saint bernard. Hvis du vil ha meg, er min id:769420",
            bilde: "../img/dog_7.jpg"},

            { names: "Doge",
            id: 869420,
            size: 2,
            prize: 3000,
            kastrert: true,
            info: "Hei, Jeg heter Doge! Jeg er en middels Shiba Inu. Hvis du vil ha meg, er min id:869420",
            bilde: "../img/dog_8.jpg"},
        ];
// Lagrt en kopi av lista
var copy_dog = dog;
//Lager en funksjon som reseter tilbake til hovedlista dog
function reset(){
  copy_dog = dog;
  render(true);
}
//Funksjon som filtrerer om hundene er kastrert 
function filterKastrert(_dogs){
  reset();
  copy_dog = _dogs.filter(dog1 => dog1.kastrert);
  render(true);
}
//Funksjon som sorterer hundene etter pris
function sortPrice(_dogs){
  reset();
  copy_dog = copy_dog.sort((a, b) => {
    return a.prize - b.prize;
  });
  render(true);
}
//Funksjon som sorterer hundene etter størrelse
function sortSize(_dogs){
  reset();
  copy_dog = copy_dog.sort((a, b) => {
    return a.size - b.size;
  });
  render(true);
}
//Funksjon som laster inn elementene(hunde som)
function render(remove){
  var ourdogsbox = document.getElementById("genBox");
  if(remove){
    let child = ourdogsbox.firstChild;
    while(child != null){
      ourdogsbox.removeChild(child);
      child = ourdogsbox.firstChild;
    }
    }
  for (var x of copy_dog) {
  //Lager elementene 
  var div1 = document.createElement("div");
  var p_tag = document.createElement("p");
  var img = document.createElement("img");
  var text = document.createTextNode(
    x.info
  );

  //Legger til class navn fra HTML fila
  img.classList.add("dogImg");
  div1.classList.add("dogInfo");
  p_tag.classList.add("dogText");
  //Legger til kilde
  img.src = x.bilde;

  //Appending elements
  div1.appendChild(img);
  p_tag.appendChild(text);
  div1.appendChild(p_tag);
  ourdogsbox.appendChild(div1);
  }
}
render();