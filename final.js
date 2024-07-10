const apikey = "865c5923d76a99133ae15047efe8c70a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchInput = document.querySelector(".searchinputbar");
const searchBtn = document.querySelector(".searchbutton");
const weatherPic = document.querySelector(".weatherstatus");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    
    if(response.status==404){
        document.querySelector(".notfound").style.display = "block";
        document.querySelector(".weatherdetailscontainer").style.display= "none";

    }else{
        var data = await response.json();
    

    document.querySelector(".cityname").innerHTML = data.name;
    document.querySelector(".temheading").innerHTML = Math.round( data.main.temp) + "°C";
    document.querySelector(".humidityspan").innerHTML = data.main.humidity + "%";
    document.querySelector(".windspan").innerHTML = data.wind.speed + "km/h";


    if (data.weather[0].main === "Haze") {
        weatherPic.src = "./images/mist.png";
   } else if (data.weather[0].main === "Rain") {
    weatherPic.src = "./images/rain.png";
   } else if (data.weather[0].main === "Snow") {
    weatherPic.src = "./images/snow.png";
   } else if (data.weather[0].main === "Clear") {
    weatherPic.src = "./images/clear.png";
   } else if (data.weather[0].main === "Clouds") {
    weatherPic.src = "./images/cloud.png";
   };
    
   document.querySelector(".weatherdetailscontainer").style.display ="block";
   document.querySelector(".notfound").style.display= "none";

       
    }
    
    
};

searchBtn.addEventListener("click",() => {
    checkWeather(searchInput.value);
})


