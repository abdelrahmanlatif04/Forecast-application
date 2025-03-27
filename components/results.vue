<template>
  <div
    class="bg-[#2E8B57] gap-5 text-[#40E0D0] py-6 px-2 rounded-xl text-center shadow-lg flex flex-col justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <img src="/logo.png" class="w-2/3" />
    <div class="flex gap-2">
      <img src="/location-pin.png" class="w-8" />
      <div class="text-2xl font-bold">
        {{ weather.name }}, {{ weather.sys.country }}
      </div>
    </div>

    <div>
      <p class="text-3xl mb-1">{{ weather.main.temp }}°C</p>

      <p class="text-sm">
        Feels Like:
        <span class="font-bold"> {{ weather.main.feels_like }}°C </span>
      </p>
    </div>

    <p class="text-sm italic mt-1 capitalize">
      {{ weather.weather[0].description }}
    </p>

    <div class="grid grid-cols-2 w-full">
      <div class="flex gap-1 items-center justify-center">
        <img src="/wind.png" class="w-8 object-contain" />
        <div>
          <div class="font-bold">{{ weather.wind.speed }} m/s</div>
          <div>Wind speed</div>
        </div>
      </div>
      <!-- <div>Pressure: {{ weather.main.pressure }} hPa</div> -->
      <div class="flex gap-1 items-center justify-center">
        <img src="/percentage.png" class="w-12 object-contain" />
        <div>
          <div class="font-bold">{{ weather.main.humidity }}%</div>
          <div>Humidity</div>
        </div>
      </div>
    </div>
    <div class="mt-4 text-md flex justify-between w-2/3">
      <div class="flex gap-2 justify-center items-center">
        <img src="/sunrise.png" class="w-6" />
        <p>{{ formatTime(weather.sys.sunrise) }}</p>
      </div>
      <div class="flex gap-2 justify-center items-center">
        <p>{{ formatTime(weather.sys.sunset) }}</p>
        <img src="/sunset.png" class="w-6" />
      </div>
    </div>
  </div>
</template>

<script setup>
const weather = {
  coord: { lon: 32.907, lat: 24.0934 },
  weather: [
    { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
  ],
  base: "stations",
  main: {
    temp: 29.83,
    feels_like: 28.07,
    temp_min: 29.83,
    temp_max: 29.83,
    pressure: 1011,
    humidity: 19,
  },
  visibility: 10000,
  wind: { speed: 1.79, deg: 111, gust: 3.26 },
  clouds: { all: 70 },
  dt: 1743060236,
  sys: { country: "EG", sunrise: 1743047117, sunset: 1743091319 },
  timezone: 7200,
  id: 359792,
  name: "Aswān",
  cod: 200,
};

const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
</script>
