import { useState } from 'react';
import Footer from './Footer';

interface Props {
    login: (email: string, password: string) => void;
}

export default function Login({ login }: Props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-green-500 underline">
                    Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-gray-500 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-gray-500 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-green-500 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                login(email, password)
                            }}
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-700">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-green-500 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
            <Footer />
        </div>
    );
}