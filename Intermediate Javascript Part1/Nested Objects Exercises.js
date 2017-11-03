var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}

var primeNumbers = nestedData.innerData.numberData.primeNumbers
for(var i =0; i<primeNumbers.length; i++){
    console.log(primeNumbers[i])
}

var fibonnaci = nestedData.innerData.numberData.fibonnaci
for(var i =0; i<fibonnaci.length; i++){
    if(fibonnaci[i] % 2 ===0){
        console.log(fibonnaci[i])
    }
}

console.log(nestedData.innerData.order[1])

nestedData.innerData.addSnack("chocolate")

// The keyword this refers to the object the function is contained in

var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}

function addSpeaker(speaker){
    var speakers = nestedObject.speakers
    var newSpeaker = {name: speaker}
    speakers.push(newSpeaker)
}

function addLanguage(language, hello){
    var langObj = nestedObject.data.languages
    langObj[language] = {hello: hello}
}

function addCountry(country, capital, pop){
    var countries = nestedObject.data.continents.europe.countries
    countries[country] = {
        capital: capital,
        population: pop
    }
}



