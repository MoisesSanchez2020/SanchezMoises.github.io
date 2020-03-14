const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=95ea9cd765d91a87fa21806942a78e70";
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject2) => {
    console.log(jsObject2);

    var temperatuRa = []; var day = 1; var weekday = [];
    var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

    for (var i = 0; i < jsObject2.list.length && day < 6; i++) {
      if (jsObject2.list[i].dt_txt.includes("18:00:00")) {
        temperatuRa[i] = jsObject2.list[i].main.temp;

        var imagesrc = 'https://openweathermap.org/img/w/' + jsObject2.list[i].weather[0].icon + '.png'; 
        var otraW = jsObject2.list[i].weather[0].description; 

        var tiempoAct = new Date(jsObject2.list[i].dt_txt);
        weekday = days[tiempoAct.getDay()];
        document.getElementById("day" + day).innerHTML = weekday;
        document.getElementById("forecast" + day).innerHTML = temperatuRa[i] + "&deg; F";
        document.getElementById("icon" + day).setAttribute("src", imagesrc); 
        document.getElementById("icon" + day).setAttribute("alt", otraW);
        day++;
      }
    }
  });



  const imagesrc1 = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';
        const desc1 = jsObject.list[0].weather[0].description;
        document.getElementById('icon1').setAttribute('src', imagesrc1);
        document.getElementById('icon1').setAttribute('alt', desc1);

        const imagesrc2 = 'https://openweathermap.org/img/w/' + jsObject.list[1].weather[0].icon + '.png';
        const desc2 = jsObject.list[1].weather[0].description;
        document.getElementById('icon2').setAttribute('src', imagesrc2);
        document.getElementById('icon2').setAttribute('alt', desc2);

        const imagesrc3 = 'https://openweathermap.org/img/w/' + jsObject.list[2].weather[0].icon + '.png';
        const desc3 = jsObject.list[2].weather[0].description;
        document.getElementById('icon3').setAttribute('src', imagesrc3);
        document.getElementById('icon3').setAttribute('alt', desc3);

        const imagesrc4 = 'https://openweathermap.org/img/w/' + jsObject.list[3].weather[0].icon + '.png';
        const desc4 = jsObject.list[3].weather[0].description;
        document.getElementById('icon4').setAttribute('src', imagesrc4);
        document.getElementById('icon4').setAttribute('alt', desc4);

        const imagesrc5 = 'https://openweathermap.org/img/w/' + jsObject.list[4].weather[0].icon + '.png';
        const desc5 = jsObject.list[4].weather[0].description;
        document.getElementById('icon5').setAttribute('src', imagesrc5);
        document.getElementById('icon5').setAttribute('alt', desc5);
    });





const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=95ea9cd765d91a87fa21806942a78e70";
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject2) => {
    console.log(jsObject2);

    let highTemp = [];
    let day = 1;
    let weekday = [];
    var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

    for (let i = 0; i < jsObject2.list.length && day < 6; i++) {
      if (jsObject2.list[i].dt_txt.includes("18:00:00")) {
        highTemp[i] = jsObject2.list[i].main.temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject2.list[i].weather[0].icon + '.png'; // n0t3 th3 c0ncat3nat10n
        const desc = jsObject2.list[i].weather[0].description; // n0t3 h0w w3 r3f3r3nc3 th3 w3ath3r array








        var day = new Date().getDate();
    var week = new Array(7);
    week[0] = "Sunday";
    week[1] = "Monday";
    week[2] = "Tuesday";
    week[3] = "Wednsday";
    week[4] = "Thursday";
    week[5] = "Friday";
    week[6] = "Saturday";
    var we = week[m.getDay()];
    
    document.getElementById('weekday1').innerHTML=we;