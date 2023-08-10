export const searchCities = async (term) => {
  const token = import.meta.env.VITE_TOKEN;
  const URL = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`;

  const response = await fetch(URL);
  const data = await response.json();
  if (!term || term.length === 0 || data.length === 0) {
    alert('Nenhuma cidade encontrada');
  }
  return data;
};

export const getWeatherByCity = async (cityURL) => {
  // seu código aqui
  const token = import.meta.env.VITE_TOKEN;
  const URL = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityURL}`;

  const response = await fetch(URL);
  const data = await response.json();
  return {
    name: data.location.name,
    country: data.location.country,
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    url: cityURL,
  };
};
