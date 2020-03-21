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






    const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=f7dad340bc2e67bd09fa4951917cee86';
    fetch(apiURL)
  
   
    
    
      .then((response) => response.json())
      .then((jsObject) => {
        console.log(jsObject);
       
       
        var cTmp;
      

      

        
        wSpeed = jsObject.wind.speed;
        const humidity = jsObject.main.humidity;

        document.getElementById('current-temp').textContent = Math.round(((jsObject.main.temp - 273.15) * 9/5 + 32) * 100) / 100;
        
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        
        document.getElementById('imagesrc').textContent = imagesrc; // display image source in paragraph
        document.getElementById('icon').setAttribute('src', imagesrc); // set the icon source 
        document.getElementById('icon').setAttribute('alt', desc);
        document.getElementById("humidty").textContent = humidity;
        document.getElementById('currently').textContent = desc;
        // Windchill
        
        const windChillDisp = document.getElementById("wChill");
        // const cTmp = parseFloat(document.getElementById("current-temp").textContent);
        cTmp = Math.round(((jsObject.main.temp - 273.15) * 9/5 + 32) * 100) / 100;
    
      });





    
    // const wSpeed = parseFloat(document.getElementById("wSpeed").textContent);
    
    let calcWindChill = checkInput(wSpeed, cTmp);
    
    
    function checkInput(ws, ct) {
    
      if (ws >= 4.8 && ct <= 50) { // make sure windspeed is at or above 4.8 mph and temp is at or below 50 degrees Fahrenheit. 
        
        let windchill = (35.74 + (.6215 * ct) - (35.75 * (Math.pow(ws, .16))) + (.4275 * (ct * (Math.pow(ws, .16)))));
    
        // document.getElementById("wChill").textContent = Math.floor(windchill);
        windChillDisp.innerHTML = Math.floor(windchill) + "&deg F";
      }
      else {
        
        windChillDisp = "Error";
      }
    });




    const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=95ea9cd765d91a87fa21806942a78e70";
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject2) => {
   // console.log(jsObject2); We don't need this in production version.
    let fivedayforecast = [];
    let day = 1;
    let weekday = [];
    var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

    for (let i = 0; i < jsObject2.list.length && day < 6; i++) {
      if (jsObject2.list[i].dt_txt.includes("18:00:00")) {
        fivedayforecast[i] = jsObject2.list[i].main.temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject2.list[i].weather[0].icon + '.png'; // n0t3 th3 c0ncat3nat10n
        const desc = jsObject2.list[i].weather[0].description; // n0t3 h0w w3 r3f3r3nc3 th3 w3ath3r array

        let now = new Date(jsObject2.list[i].dt_txt);
        weekday = days[now.getDay()];
        document.getElementById("day" + day).innerHTML = weekday;
        document.getElementById("forecast" + day).innerHTML = fivedayforecast[i] + "&deg; F";
        document.getElementById("icon" + day).setAttribute("src", imagesrc); // f0cus 0n th3 s3tAttribut3() m3th0d
        document.getElementById("icon" + day).setAttribute("alt", desc);
        day++;
      }
    }
  });




  const forecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=88b895fa4815bc85c2b6ee08540fbf86';

fetch(forecast)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    var i = 0;
    var k = 0;

    while (k < 5 && i < 40) {
        var time = jsObject.list[i].dt_txt;
        if (time.includes('18:00:00')) {      
        let date = new Date(time);
        let weekdayOption = {
            weekday: 'short'
        };
        
        let weekday = date.toLocaleDateString('en-US', weekdayOption);
        let labelId = 'day' + k;
        document.getElementById(labelId).textContent = weekday;

        let iconId = 'weather-icon' + k;
        let icon = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png'
        let description = jsObject.list[i].weather[0].description;
        document.getElementById(iconId).setAttribute('src', icon);
        document.getElementById(iconId).setAttribute('alt', description);
        
        let tempId = 'forcast' + k;
        let temp = document.getElementById(tempId).textContent = Math.round(jsObject.list[i].main.temp) + " °F";


        k++;
    }
    i++;
}
})


const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=imperial&APPID=${apiKey}`;
 
  
fetch(forecastURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) { 
    const items = jsObject.list['items'];    
    let i = 0;

      let card = document.createElement('div');  
      card.setAttribute('class', 'gridforecast');

    jsObject.list.forEach(item => {
      let datetime = jsObject.list[i].dt_txt;

      if (datetime.includes("18:00:00")) {
        var newdate = new Date(datetime);
        var shortdate = newdate.toLocaleDateString( 'en-US', { weekday: 'short' }); 

        var divdate = document.createElement('h4'); 
        var divtemp = document.createElement('div');  
        divdate.textContent = shortdate
        divdate.setAttribute('class', 'forecast-item');
        divtemp.setAttribute('class', 'forecast-item');
        let temp = `${jsObject.list[i].main.temp.toFixed(0)}`;
        divtemp.textContent = temp + " °F"; 

        

        let imgURL = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
        let desc = jsObject.list[i].weather[0].description;  
        let icon1 = document.createElement('img');

        icon1.setAttribute('src', imgURL);
        icon1.setAttribute('alt', desc);
        icon1.setAttribute('height', 'auto');
        icon1.setAttribute('width', '100px');
        
        divdate.appendChild(divtemp);
        divdate.appendChild(icon1);
        card.appendChild(divdate);
        document.querySelector('.fiveDayForcast').appendChild(card);      
        
        i++;        
      } else {
        i++;
      }
        
      
    });
  });
  


/*--MIO*/
/*const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=53b041f63e3c333dbe3d192222ec7210";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject2) => {
    console.log(jsObject2);

    var temperaTura = [];  day = 1;  weekday = [];
    var dias = new Array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','sunday');



    for (var i = 0; i < jsObject2.list.length && day < 6; i++) {
      if (jsObject2.list[i].dt_txt.includes("18:00:00")) {
        temperaTura[i] = jsObject2.list[i].main.temp;
        



        
        var imgsrc = 'https://openweathermap.org/img/w/' + jsObject2.list[1].weather[0].icon + '.png';
        var info = jsObject2.list[i].weather[0].description;

        var now = new Date(jsObject2.list[i].dt_txt);
        weekday = dias[now.getDay()];


        document.getElementById("clima" + day).innerHTML = weekday;
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
        document.getElementById('icon5').setAttribute('alt', info), day++;
         
      }
      
    }
    
  });*/