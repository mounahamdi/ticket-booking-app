
import React from 'react'
const {useState}=React
interface handleSearchType {

 handleSearch:(
  departure:string,
  destination:string)=>void
}
export default function Search ({handleSearch}:handleSearchType) {
  const [departure,setDeparture]=useState<string>('')
  const [destination,setDestination]=useState<string>('')
  return (
    <div >
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find Your Bus Tickets</h2>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <form onSubmit={(e)=>{
                e.preventDefault()
                handleSearch(departure,destination)}}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fromCity" className="block font-medium mb-1">
                      From City
                    </label>
                    <input
                      type="text"
                      id="fromCity"
                      value={departure}
                      name="fromCity"
                      className="block w-full px-4 py-2 mt-2 text-green-500 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="departure city"
                      onChange={(e)=>setDeparture(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="toCity" className="block font-medium mb-1">
                      To City
                    </label>
                    <input
                      type="text"
                      value={destination}
                      id="toCity"
                      name="destination"
                      className="block w-full px-4 py-2 mt-2 text-green-500 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="destination"
                      onChange={(e)=>setDestination(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="departureDate" className="block font-medium mb-1">
                    Departure Date
                  </label>
                  <input
                    type="date"
                    id="departureDate"
                    name="departureDate"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>
                <div className="mt-4">
                  <button
                
                    type="submit"
                    className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg"
                  >
                    Search Buses
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

