import { use } from "react";
import Country from "./Country";

const Countries = ({ countriesPromise }) => {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    
    return (
        <div>
            <h1>This is Countries component</h1>
            <h1>Total Countries : {countries.length}</h1>
            {
                countries.map(country => <Country key={country.id} country={country} />)
            }
        </div>
    )
};

export default Countries;