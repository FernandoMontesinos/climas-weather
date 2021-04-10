export class Store {

    constructor(){
        this.city;
        this.countryCode;
        this.defaultCity = 'London';
        this.defaultCountry = 'uk';
    }

    getLocationData() {
        if(localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        if(localStorage.getItem('countryCode') === null) {
            this.countryCode = this.defaultCountry;
        } else {
            this.countryCode = localStorage.getItem('countryCode');
        }
        
        return {
            city: this.city,  // Siempre return se escribe con 2 puntos : ;) . Error final pense que se había malogrado todo ;) escribiré todo mi código en try catch xd
            countryCode: this.countryCode
        }
    }

    setLocationData(city, countryCode) {
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }
}