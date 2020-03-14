
function windChill() {
    var windForce = document.getElementById('windSp').innerHTML;
    windForce = parseFloat(windForce);
    
    var frioTemp = document.getElementById('temp').innerHTML;
    frioTemp = parseFloat(frioTemp);

    if (frioTemp<= 50 && windForce >= 3) {
        var tempWindForce = Math.pow(windForce, 0.16);
        var windChill = (35.74 + 0.6215 * frioTemp - 35.75 * tempWindForce + 0.4275 * frioTemp * tempWindForce).toFixed(0);
        return windChill;
    } else {
        return frioTemp;
    }

}

document.getElementById("displayTable").innerHTML = windChill() + "&#xb0;F";




