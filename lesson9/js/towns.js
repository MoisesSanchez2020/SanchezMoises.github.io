 const requestURL = 'https://moisessanchez2020.github.io/SanchezMoises.github.io/lesson9/js/datatowns.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 

    const towns = jsonObject['towns'];

    for (var i = 0; i < towns.length; i++) {
        if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs" ){
   

      var contenido = document.createElement('section');
      var h2 = document.createElement('h2');
      //var h4 = document.createElement('h4');
      var year = document.createElement('p');
      var population = document.createElement('p');
      var rainfall = document.createElement('p');
      var image = document.createElement('img');
      




      h2.textContent = towns[i].name;
      //h4.textContent = towns[i].motto;
      year.textContent = "Year Founded: " + towns[i].yearFounded;
      population.textContent = "Population: " + towns[i].currentPopulation;
      rainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;

      
 ;
    image.setAttribute('src', towns[i].imageurl);
      
      image.setAttribute('alt', "picture of: " + h2.textContent);
    



      contenido.appendChild(h2);
      //contenido.appendChild(h4);
      contenido.appendChild(year);
      contenido.appendChild(population);
      contenido.appendChild(rainfall);
      contenido.appendChild(image);
   
      document.querySelector('div.contenido').appendChild(contenido);

    }
}
  });