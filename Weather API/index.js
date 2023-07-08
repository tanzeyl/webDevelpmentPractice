const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4907769bf0msh62b871fda7da43ep12caacjsnf2e678188f31",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

async function getWeather() {
  let url = "https://weatherapi-com.p.rapidapi.com/current.json?q=";
  url += lat + "%2C" + long;
  let html = "";
  let element = document.getElementById("answer");
  try {
    let response = await fetch(url, options);
    let result = await response.json();
    html += `<p class="coords">Latitude: ${result["location"]["lat"]} and Longitude: ${result["location"]["lon"]}</p>`;
    html += `<span>City: ${result["location"]["name"]}</span><br/>`;
    html += `<span>State: ${result["location"]["region"]}</span><br/>`;
    html += `<span>Country: ${result["location"]["country"]}</span><br/>`;
    html += `<span>Local Time: ${result["location"]["localtime"]}</span><br/>`;
    html += `<span>Temperature: ${result["current"]["temp_c"]}&deg;C</span><br/>`;
    html += `<span>Condition: ${result["current"]["condition"]["text"]}</span><br/>`;
    html += `<span>Wind Speed: ${result["current"]["wind_kph"]}&nbsp;KM/hr</span><br/>`;
    html += `<span>Wind Degree: ${result["current"]["wind_degree"]}&deg;</span><br/>`;
    html += `<span>Wind Direction: ${result["current"]["wind_dir"]}</span><br/>`;
    html += `<span>Pressure: ${result["current"]["pressure_mb"]}&nbsp;milliBars</span><br/>`;
    html += `<span>Precipitation: ${result["current"]["precip_mm"]}&nbsp;mm</span><br/>`;
    html += `<span>Humidity: ${result["current"]["humidity"]}</span><br/>`;
    html += `<span>Cloud: ${result["current"]["cloud"]}</span><br/>`;
    html += `<span>Feels Like: ${result["current"]["feelslike_c"]}&deg;C</span><br/>`;
    html += `<img src="${result["current"]["condition"]["icon"]}" class="img" />`;
    if (result["current"]["is_day"] == "0") {
      element.style.backgroundImage = "url('day.jpg')";
      element.style.color = "black";
    } else {
      element.style.backgroundImage = "url('night.jpg')";
      element.style.color = "white";
    }
    element.style.textAlign = "left";
    element.innerHTML = html;
  } catch (error) {
    element.innerHTML = error;
  }
}

// {"current":{"is_day":1,}}
