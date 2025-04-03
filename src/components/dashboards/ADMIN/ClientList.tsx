type Client = {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
  
  type Props = {
    clients: Client[];
    selectedId: string | null;
    setSelectedId: (id: string) => void;
    deleteClient: (id: string) => void;
  };
  
  function ClientList({ clients, selectedId, setSelectedId, deleteClient }: Props) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {clients.map((client) => (
          <div
            key={client.id}
            className={`p-4 rounded-xl shadow-md cursor-pointer border ${
              selectedId === client.id
                ? "border-[#3A5D56] bg-[#f0fdfa]"
                : "border-gray-200 bg-white"
            }`}
            onClick={() => setSelectedId(client.id)}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{client.name}</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // не викликає setSelectedId
                  deleteClient(client.id);
                }}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Delete
              </button>
            </div>
            <p className="text-sm text-gray-600">{client.email}</p>
            <p className="text-sm text-gray-600">{client.phone}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default ClientList;
  