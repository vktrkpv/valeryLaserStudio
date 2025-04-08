// import { Client } from "./types/types";
import { Props } from "./types/types";

function ClientList({
  clients,
  selectedId,
  setSelectedId,
  deleteClient,
}: Props) {
  return (
    <div className="flex flex-col gap-4">
      {clients.map((client) => (
        <div
          key={client.id}
          className={`p-4 rounded-xl shadow-md cursor-pointer border ${
            selectedId === client.id
              ? 'border-[#3A5D56] bg-[#f0fdfa]'
              : 'border-gray-200 bg-white'
          }`}
          onClick={() => setSelectedId(client.id)}
        >

<h3 className="text-lg font-semibold text-[#3A5D56] mb-2">
    {client.name || "No Name"}
  </h3>

          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteClient(client);
            }}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ClientList;
