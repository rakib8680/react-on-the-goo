
const Country = ({ country }) => {
    // console.log(country);
    return (
        <div
            className="border-2 border-gray-400 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300   cursor-pointer hover:shadow-lg ">
            <img src={country.flags?.flags?.png} alt={country.flags?.flags?.alt} className="h-48 object-cover rounded-lg mt-4"
            />
            <div className="flex justify-between items-center">
                <div >
                    <h1 className="text-2xl font-bold mt-2"><span className="font-medium ">Name:</span> {country.name.common}</h1>
                    <h3 className=" text-gray-500 "><span className="font-medium ">Capital:</span> {country.capital?.capital[0]}</h3>
                    <h3 className=" text-gray-500 "><span className="font-medium ">Population:</span> {country.population.population}</h3>
                    <h3 className="text-gray-500 font-medium">Area: {country.area?.area}</h3>
                    <h3 className="text-gray-500 font-medium">Region: {country.region?.region}</h3>
                    <h3 className="text-gray-500 font-medium">Continent: {country.continents?.continents[0]}</h3>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition-all duration-300">Visited</button>
            </div>
        </div>
    )
};

export default Country;