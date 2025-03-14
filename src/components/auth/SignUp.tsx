import { useState } from "react";

function SignUp(){

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if( password !== confirmPassword){
            setError("Passwords do not match!");
            return;
        }

        console.log("Sign Up Data:", { fullName, email, password });

        setError('');

    }

        return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">

            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>

            
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                    type="text"
                    value={fullName}
                    placeholder="Full Name"
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A2DED0] focus:outline-none"
                    />
                    <input
                    type="email"
                    placeholder="Email adress"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A2DED0] focus:outline-none"
                    />
                    <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A2DED0] focus:outline-none"
                    />
                
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A2DED0] focus:outline-none"
                    />

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <button
            type="submit"
            className="w-full bg-[#A2DED0] text-white font-semibold py-3 rounded-lg shadow-md hover:bg-[#89CDBF] transition duration-300 cursor-pointer"
          >
            Sign Up
          </button>

                </form>
            </div>

        </div>
       

    )
}

export default SignUp;