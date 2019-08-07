class Forecast{
    constructor(){
        this.key = 's7IPThmPxbA3msqeUfOF7T4rIVZJLPUB'
        this.weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/'
        this.cityURI = 'https://dataservice.accuweather.com/locations/v1/cities/search'
    }
    async updateCity(city){
        
    const cityDetails = await this.getCity(city);
    const weather = await this.getWeather(cityDetails.Key);

    return { cityDetails, weather }
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
    
       return data[0];
    }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
    
        const response = await fetch(this.weatherURI + query);
        const data = await response.json()
    
        return data[0];
    
    }
}

// OLD CODE NOT USING CLASSES

// get weather information
// const getWeather = async (id) => {
//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const query = `${id}?apikey=${key}`;

//     const response = await fetch(base + query);
//     const data = await response.json()

//     return data[0];

   
// }


// Update City

// const updateCity = async city => {

//     const cityDetails = await getCity(city);
//     const weather = await getWeather(cityDetails.Key);

//     return {
//         cityDetails,
//         weather
//     }

// };



// get city information
// const getCity = async (city) => {

//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`;

//     const response = await fetch(base + query);
//     const data = await response.json();


//    return data[0];
// };