var dog = [{ names: "Snøhvit",
            size: 3,
            prize: 1500,
            kastrert: false,
            info: "Hei, Jeg heter Snøhvit! Jeg er en liten Pomeranian.",
            bilde: "/img/dog_1.jpg"},

            { names: "Labben",
            size: 3,
            prize: 1500,
            kastrert: false,
            info: "Hei, Jeg heter Labben! Jeg er en liten Labrador retriever.",
            bilde: "/img/dog_2.jpg"},

            { names: "Hila",
            size: 1,
            prize: 2000,
            kastrert: true,
            info: "Hei, Jeg heter Hila! Jeg er en stor German Shepherd.",
            bilde: "/img/dog_3.jpg"},

            { names: "Milo",
            size: 2,
            prize: 1000,
            kastrert: true,
            info: "Hei, Jeg heter Milo! Jeg er en middels puddel.",
            bilde: "/img/dog_4.jpg"},

            { names: "Max",
            size: 1,
            prize: 1750,
            kastrert: false,
            info: "Hei, Jeg heter Max! Jeg er en stor Chow Chow",
            bilde: "/img/dog_5.jpg"},

            { names: "Brutus",
            size: 2,
            prize: 1000,
            kastrert: true,
            info: "Hei, Jeg heter Brutus! Jeg er en middels Pug",
            bilde: "/img/dog_6.jpg"},

            { names: "Leo",
            size: 1,
            prize: 800,
            kastrert: false,
            info: "Hei, Jeg heter Leo!Jeg er en stor Saint bernard",
            bilde: "/img/dog_7.jpg"},

            { names: "Doge",
            size: 2,
            prize: 3000,
            kastrert: true,
            info: "Hei, Jeg heter Doge! Jeg er en middels Shiba Inu",
            bilde: "/img/dog_8.jpg"},
        ];
var copy_dog = dog;
function reset(){
  copy_dog = dog;
  render(true);
}
function filterKastrert(_dogs){
  reset();
  copy_dog = _dogs.filter(dog1 => dog1.kastrert);
  render(true);
}
function sortPrice(_dogs){
  reset();
  copy_dog = copy_dog.sort((a, b) => {
    return a.prize - b.prize;
  });
  render(true);
}
function sortSize(_dogs){
  reset();
  copy_dog = copy_dog.sort((a, b) => {
    return a.size - b.size;
  });
  render(true);
}
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
  //Creating elements
  var div1 = document.createElement("div");
  var p_tag = document.createElement("p");
  var img = document.createElement("img");
  var text = document.createTextNode(
    x.info
  );

  //Adding class names
  img.classList.add("dogImg");
  div1.classList.add("dogInfo");
  p_tag.classList.add("dogText");
  //Adding sources
  img.src = x.bilde;

  //Appending elements
  div1.appendChild(img);
  p_tag.appendChild(text);
  div1.appendChild(p_tag);
  ourdogsbox.appendChild(div1);
  }
}
render();