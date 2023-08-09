import {useState} from 'react'
import Footer from "./Footer";

import data from "../tripData";
import Search from './Search';

interface dataType{
  date:string,
  id:number,
  departure:string,
  destination:string,
  price:number

}
export default function Home() {
 let newData:dataType[]=data;
 const[search,setSearch]= useState(false)
 const [filtredData,setFilteredData]=useState(data)
 const handleSearch=(departure:string,destination:string)=>{
  console.log('hello')
  newData= data.filter(trip=>trip.departure===departure && trip.destination===destination )
  setFilteredData(newData)
  console.log(newData)
 }
  

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Find and Book Bus Tickets
            </h2>
            <p className="text-lg">
              Discover the best bus routes and book tickets with ease.
            </p>
            <button
              onClick={() => setSearch(true)}
              className="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg"
            >
              Search a Trip
            </button>
            {search && <Search handleSearch={handleSearch} />}
          </div>
        </div>
        
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Popular Bus Routes</h2>
          <div className="grid grid-cols-3 gap-6">
            {filtredData.map((trip) => (
              <div key={trip.id} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  {trip.departure} to {trip.destination}
                </h3>
                <p>{trip.date}</p>
                <p> Trip number: {trip.id}</p>
                <p>{trip.price}</p>
                <button className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
