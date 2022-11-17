var dog = [{ names: "adolf",
            size: 1,
            prize: 1000,
            kastrert: true,
            info: "Hei",
            bilde: "german_shepard.jpg"},

            {names:"bdolf",
            size: 3,
            prize: 1500,
            kastrert: false},

            {names:"gdolf",
                size: 2,
                prize: 2000,
                kastrert: true},

            ]
    //size
    console.log(
       "dog",
      dog.sort((a, b) => {
        return a.size - b.size;
      })
    );
   // name: (Begge samtidig blir sortert på size ^)
    console.log(
        dog.sort((a, b) => {
          return a.names - b.names;
        })
    );
    //Price:
    console.log(
      dog.sort((a, b) => {
        return a.prize - b.prize;
      })
    );
    //Kastrert:
    console.log(
      dog.sort((a, b) => {
        return b.kastrert - a.kastrert;
      })
    );