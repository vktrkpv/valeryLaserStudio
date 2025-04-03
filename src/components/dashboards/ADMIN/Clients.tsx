function Clients() {
    return (
        <div className="min-h-screen p-10">
                      <h1 className="text-3xl font-bold text-[#3A5D56] mb-8">Valery's Clients:</h1>

            {/* Панель з кнопками */}
      <div className="flex justify-between items-center mb-6">
        <button className="bg-[#3A5D56] text-white px-4 py-2 rounded-lg hover:bg-[#8cd0cb] cursor-pointer">
          Add new 
        </button>
        <input
          type="text"
          placeholder="Search for a client..."
          className=" p-3 rounded-2xl border border-gray-300 shadow-lg focus:ring-2 focus:ring-[#A2DED0] focus:outline-none transition duration-300 ease-in-out hover:shadow-xl cursor-pointer"
          />
      </div>

      {/* Список карток */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Тут будемо рендерити картки */}
      </div>

        </div>
      
    );
  }
  
  export default Clients;