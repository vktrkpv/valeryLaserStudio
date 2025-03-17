import { useState } from "react";


function ResetPassword() {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!email){
      setMessage("Please enter a valid email address");
      return;
    }
    console.log("EMail ", email);

    setIsSubmited(true);

    setMessage("If this email exists, you will receive a password reset link.");
  }



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Reset Password</h2>
          <form className="space-y-4"
          onSubmit={handleSubmit}
          >
            <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A2DED0]"
            />

            <button 
            className="w-full bg-[#A2DED0] text-white py-2 rounded-lg hover:bg-[#89CDBF] transition cursor-pointer"
            >
              Send Reset Link

            </button>
          </form>

          {isSubmited && (
    <p className="text-center text-gray-700 mt-4">{message}</p>
)}
      </div>
    </div>
  );
}

export default ResetPassword;


