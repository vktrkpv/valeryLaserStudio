import { useNavigate } from "react-router-dom";
import AdminClientsLaserDashboard from "./ADMIN/Clients";

function AdminDashboard() {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6 p-6">
            <h1 className="text-3xl font-bold text-[#3A5D56] mb-8">Valery's Admin Panel</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            <button
          onClick={() => navigate("/admin/clients")}
          className="bg-white border border-gray-200 shadow-lg rounded-xl p-6 text-lg font-semibold hover:bg-[#8cd0cb] transition"
        >
          Clients
        </button>

        <button
          onClick={() => navigate("/admin/calendar")}
          className="bg-white border border-gray-200 shadow-lg rounded-xl p-6 text-lg font-semibold hover:bg-[#8cd0cb] transition"
        >
          View booking calendar
        </button>

        <button
          onClick={() => navigate("/admin/settings")}
          className="bg-white border border-gray-200 shadow-lg rounded-xl p-6 text-lg font-semibold hover:bg-[#8cd0cb] transition"
        >
          Settings
        </button>

            </div>

            
            
        </div>

        

        
    );
  }
  
  export default AdminDashboard;
  