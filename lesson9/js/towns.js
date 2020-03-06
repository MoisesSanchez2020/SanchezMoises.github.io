const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
.then(function(response){
      return response.json();
})
.then(function(jsonObject){
    Console.table(jsonObject); 

    const townIdaho = jsonObject['townIdaho'];

for (var i = 0; i < townIdaho.length; i++){
    var roJos = document.createElement('section');
    var h2 = document.createElement('h2');
    var town = document.createElement('h2');
    var state = document.createElement('p');
    var presipitacion = document.createElement('p');
    var population = document.createElement('p');
    var  image =doucment.createElement('img');

    h2.textContent = townIdaho[i].name + '' + townIdaho[i].LastnName;
    state.textContent = " State name:" + townIdaho[i].state;
    presipitacion.textContent = "Weather:" + townIdaho[i].presipitacion;
    
    image.setAttribute('src', townIdaho[i].imageurl);
    image.setAttribute('alt', "picture of : " + h2.textContent);

    roJos.appendChild(h2);
    roJos.appendChild(town);
    roJos.appendChild(state);
    roJos.appendChild(image);


    document.querySelector('div.contenido').appendChild(roJos);
    
}





});