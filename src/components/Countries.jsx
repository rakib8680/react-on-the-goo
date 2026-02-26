import { use } from "react";
import Country from "./Country";

const Countries = ({ countriesPromise }) => {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries

    return (
        <div className="mt-10">
            <h1 className="text-2xl font-bold">This is Countries component</h1>
            <h1 className="text-2xl font-bold">Total Countries : {countries.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {
                    countries.map(country => <Country key={country.cca3?.cca3} country={country} />)
                }
            </div>
        </div>
    )
};

export default Countries;