
const Country = ({ country }) => {
    console.log(country);
    return (
        <div
            className="border-2 border-gray-400 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300   cursor-pointer hover:shadow-lg ">
            <h1 className="text-2xl font-bold"><span className="font-medium ">Name:</span> {country.name.common}</h1>
            <img src={country.flags?.flags?.png} alt={country.flags?.flags?.alt} className="w-full h-48 object-cover rounded-lg mt-4"
            />
            {/* <p className="text-sm text-gray-500 mt-2"><span className="font-medium ">Capital:</span> {country.capital?.[0]}</p> */}
            {/* <p className="text-sm text-gray-500 mt-2"><span className="font-medium ">Region:</span> {country.region.region}</p> */}
            {/* <p className="text-sm text-gray-500 mt-2"><span className="font-medium ">Population:</span> {country.population}</p> */}
            {/* <p className="text-sm text-gray-500 mt-2"><span className="font-medium ">Area:</span> {country.area}</p> */}
            {/* <p className="text-sm text-gray-500 mt-2"><span className="font-medium ">Timezones:</span> {country.timezones?.join(', ')}</p> */}
            {/* <p className="text-sm text-gray-500 mt-2"><span className="font-medium ">Languages:</span> {country.languages?.languages?.eng}</p> */}
            {/* <p className="text-sm text-gray-500 mt-2"><span className="font-medium ">Currencies:</span> {country.currencies?.currencies}</p> */}
            {/* <p className="text-sm text-gray-500 mt-2"><span className="font-medium ">Borders:</span> {country.borders?.join(', ')}</p> */}
        </div>
    )
};

export default Country;