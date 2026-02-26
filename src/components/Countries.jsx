import { use, useState } from "react";
import Country from "./Country";

const Countries = ({ countriesPromise }) => {
    const [countriesVisited, setCountriesVisited] = useState([]);
    const handleCountriesVisited = (country) => {
        if (countriesVisited.includes(country)) {
            return;
        };
        setCountriesVisited([...countriesVisited, country]);
    }


    const countriesData = use(countriesPromise);
    const countries = countriesData.countries

    return (
        <div className="mt-10">
            <h1 className="text-2xl font-bold">This is Countries component</h1>
            <div className="flex justify-between mt-5">
                <h1 className="text-2xl font-bold">Total Countries : {countries.length}</h1>
                <h1 className="text-2xl font-bold">Countries Visited : {countriesVisited.length}</h1>
            </div>

            <div className="flex justify-between ">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                    {
                        countries.map(country => <Country key={country.cca3?.cca3} country={country} handleCountriesVisited={handleCountriesVisited}
                        />)
                    }
                </div>

                <div className="flex justify-between text-end mt-10">
                    {/* <h1 className="text-2xl font-bold">Countries Visited : {countriesVisited.length}</h1> */}
                    <div className="space-y-3 ">
                        {
                            countriesVisited.map(country =>
                                <div key={country.cca3?.cca3} className="flex justify-between gap-3">
                                    <li>{country.name.common}</li>
                                    <img className="w-16" src={country.flags?.flags?.svg} alt="" />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Countries;