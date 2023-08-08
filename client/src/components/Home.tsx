import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()

    const navigateToSearch = () => {
        navigate("/search")
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <section className="py-16 bg-green-900 text-white">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4">Find and Book Bus Tickets</h2>
                        <p className="text-lg">Discover the best bus routes and book tickets with ease.</p>
                        <button
                            onClick={()=>navigateToSearch()}
                            className="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Popular Bus Routes</h2>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">City A to City B</h3>
                            <p>Departure: 8:00 AM</p>
                            <p>Arrival: 12:00 PM</p>
                            <p>Price: 30 DT</p>
                            <button className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg">
                                Book Now
                            </button>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">City C to City D</h3>
                            <p>Departure: 10:00 AM</p>
                            <p>Arrival: 2:00 PM</p>
                            <p>Price: 25 DT</p>
                            <button className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg">
                                Book Now
                            </button>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">City E to City F</h3>
                            <p>Departure: 1:00 PM</p>
                            <p>Arrival: 5:00 PM</p>
                            <p>Price: 35 DT</p>
                            <button className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

