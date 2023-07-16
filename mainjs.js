const apiKey="4e6b13c2768725fe2d12a188f7e76946";
const apiUrl="http://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response =await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        
    }
    else{
    var data=await response.json()
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + " %";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/hr";
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="clouds.png";
        document.getElementById("video-cloudy").style.display = "block";
        document.getElementById("video-rainy").style.display = "none";
        document.getElementById("video-misty").style.display = "none";
        document.getElementById("video-clear").style.display = "none";
        document.getElementById("video-drizzle").style.display = "none";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear.png";
        document.getElementById("video-cloudy").style.display = "none";
        document.getElementById("video-rainy").style.display = "none";
        document.getElementById("video-misty").style.display = "none";
        document.getElementById("video-clear").style.display = "block";
        document.getElementById("video-drizzle").style.display = "none";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain.png";
        document.getElementById("video-cloudy").style.display = "none";
  document.getElementById("video-rainy").style.display = "block";
  document.getElementById("video-misty").style.display = "none";
  document.getElementById("video-clear").style.display = "none";
  document.getElementById("video-drizzle").style.display = "none";
    }
    else if (data.weather[0].main=="Mist"){
        weatherIcon.src="mist.png";
        document.getElementById("video-cloudy").style.display = "none";
  document.getElementById("video-rainy").style.display = "none";
  document.getElementById("video-misty").style.display = "block";
  document.getElementById("video-clear").style.display = "none";
  document.getElementById("video-drizzle").style.display = "none";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="drizzle.png";
        document.getElementById("video-cloudy").style.display = "none";
        document.getElementById("video-rainy").style.display = "none";
        document.getElementById("video-misty").style.display = "none";
        document.getElementById("video-clear").style.display = "none";
        document.getElementById("video-drizzle").style.display = "block";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}


}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})



