const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=53b041f63e3c333dbe3d192222ec7210";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject2) => {
    console.log(jsObject2);

    var temperaTura = []; var day = 1; var weekday = [];
    var dias = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');



    for (var i = 0; i < jsObject2.list.length && day < 6; i++) {
      if (jsObject2.list[i].dt_txt.includes("18:00:00")) {
        temperaTura[i] = jsObject2.list[i].main.temp;
        var imgsrc = 'https://openweathermap.org/img/w/' + jsObject2.list[4].weather[0].icon + '.png';
        var info = jsObject2.list[i].weather[0].description;

        var now = new Date(jsObject2.list[i].dt_txt);
        weekday = dias[now.getDay()];


        document.getElementById("day" + day).innerHTML = weekday;
        document.getElementById("forecast" + day).innerHTML = temperaTura[i] + "&deg; F";
        document.getElementById('icon1').setAttribute('src', imgsrc);
        document.getElementById('icon1').setAttribute('alt', info);
        document.getElementById('icon2').setAttribute('src', imgsrc);
        document.getElementById('icon2').setAttribute('alt', info);
        document.getElementById('icon3').setAttribute('src', imgsrc);
        document.getElementById('icon3').setAttribute('alt', info);
        document.getElementById('icon4').setAttribute('src', imgsrc);
        document.getElementById('icon4').setAttribute('alt', info);
        document.getElementById('icon5').setAttribute('src', imgsrc);
        document.getElementById('icon5').setAttribute('alt', info) 
        day++;
      }
    }
  });

  



  