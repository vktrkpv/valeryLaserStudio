import { useEffect, useState } from 'react';
import ClientList from './ClientList';
import AddClientForm from './AddClientForm';
import ClientCardEditor from './ClientCardEditor';
import { Client } from './types/types';
import { useLocalStorage } from './useLocalStorage';
import ConfirmDeleteModal from './ConfirmDeleteModal';

function Clients() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [clients, setClients] = useLocalStorage<Client[]>('clients', []);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [clientToDelete, setClientToDelete] = useState<Client | null>(null);

  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients));
  }, [clients]);

  const [search, setSearch] = useState('');

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase())
  );

  const updateClient = (updated: Client) => {
    setClients((prev) =>
      prev.map((client) => (client.id === updated.id ? updated : client))
    );
  };

  const handleBurgerMenuToggle = () => {
    if (!isMenuVisible) setSelectedId(null);
    setIsMenuVisible(!isMenuVisible);
  };

  const handleDeleteClick: (client: Client) => void = (client) => {
    setClientToDelete(client);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (clientToDelete) {
      setClients((prev) => prev.filter((c) => c.id !== clientToDelete.id));
      setClientToDelete(null);
      setShowDeleteModal(false);
    }
  };

  const cancelDelete = () => {
    setClientToDelete(null);
    setShowDeleteModal(false);
  };

  return (
    <div className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-[#3A5D56] mb-8 text-center">
        Valery's Clients:
      </h1>

      <div className="flex justify-center mb-6">
        {selectedId ? (
          <button
            onClick={handleBurgerMenuToggle}
            className="bg-[#3A5D56] text-white px-4 py-2 rounded-lg hover:bg-[#8cd0cb] transition-all w-48"
          >
            {isMenuVisible ? 'Hide Clients' : 'Show All Clients'}
          </button>
        ) : (
          <p className="text-gray-400 text-center">
            Select a client to view their card.
          </p>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {isMenuVisible && (
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isMenuVisible ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            } w-full lg:w-1/2 max-w-screen-md mx-auto`}
          >
            {showAddForm ? (
              <AddClientForm
                onSave={(client) => {
                  setClients([client, ...clients]);
                  setSelectedId(client.id);
                  setShowAddForm(false);
                }}
                onCancel={() => setShowAddForm(false)}
              />
            ) : (
              <button
                onClick={() => setShowAddForm(true)}
                className="w-full bg-[#3A5D56] text-white px-4 py-2 rounded-lg hover:bg-[#8cd0cb] cursor-pointer mb-4 "
              >
                Add New Client
              </button>
            )}

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search for a client..."
              className="w-full p-3 mb-6 rounded-2xl border border-gray-300 shadow-lg focus:ring-2 focus:ring-[#A2DED0] focus:outline-none transition duration-300 ease-in-out hover:shadow-xl"
            />

            <ClientList
              clients={filteredClients}
              selectedId={selectedId}
              setSelectedId={(id) => {
                setSelectedId(id);
                setIsMenuVisible(false);
              }}
              deleteClient={handleDeleteClick}
            />
          </div>
        )}

        {selectedId && (
          <div className="flex justify-center items-start w-full">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg w-full lg:max-w-[900px]">
              <ClientCardEditor
                client={clients.find((c) => c.id === selectedId)!}
                updateClient={updateClient}
              />
            </div>
          </div>
        )}

      </div>

      {showDeleteModal && (
        <ConfirmDeleteModal
          isOpen={showDeleteModal}
          clientName={clientToDelete?.name || ''}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
}

export default Clients;
