import { useState, useEffect } from 'react';
import { Client, Treatment } from './types/types';
import AddTreatment from './AddTreatmentForm';
import TreatmentHistory from './TreatmentHistory';

type Props = {
  client: Client;
  updateClient: (updated: Client) => void;
};

function ClientCardEditor({ client, updateClient }: Props) {
  const [editedClient, setEditedClient] = useState(client);
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [newTreatment, setNewTreatment] = useState<Treatment>({
    date: '',
    details: '',
    size: '',
    notes: '',
    price: '',
  });

  useEffect(() => {
    setEditedClient(client);
  }, [client]);

  const handleFieldChange = (field: keyof Client, value: string) => {
    const updated = { ...editedClient, [field]: value };
    setEditedClient(updated);
    updateClient(updated);
  };

  const handleTreatmentChange = (field: keyof Treatment, value: string) => {
    setNewTreatment({ ...newTreatment, [field]: value });
  };

  const addTreatment = () => {
    if (!newTreatment.date.trim()) return;

    const updated = {
      ...editedClient,
      treatments: [...(editedClient.treatments || []), newTreatment],
    };

    setEditedClient(updated);
    updateClient(updated);
    setNewTreatment({ date: '', details: '', size: '', notes: '', price: '' });
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <div>
      <div >
        <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-[#3A5D56]">Client Info</h2>
        {!isEditing ? (
          <button
          onClick={() => setIsEditing(true)}
          className="text-[#3A5D56] border border-[#3A5D56] px-3 py-1 rounded-lg hover:bg-[#8cd0cb] hover:text-white transition"
        >
          Edit
        </button>
        ) : (
          <button
        onClick={() => setIsEditing(false)}
        className="bg-[#3A5D56] text-white px-4 py-2 rounded-lg hover:bg-[#8cd0cb] transition"
      >
        Save
      </button>

        )}
          
        </div>

        <div className="space-y-6 transition-all duration-500">
          {isEditing ? (
            <div>
              <input
          type="text"
          value={editedClient.name}
          onChange={(e) => handleFieldChange('name', e.target.value)}
          placeholder="Full name"
          className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#8cd0cb] transition duration-300"        />
        <input
          type="email"
          value={editedClient.email}
          onChange={(e) => handleFieldChange('email', e.target.value)}
          placeholder="Email"
          className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#8cd0cb] transition duration-300"        />
        <input
          type="tel"
          value={editedClient.phone}
          onChange={(e) => handleFieldChange('phone', e.target.value)}
          placeholder="Phone"
          className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#8cd0cb] transition duration-300"        />
            </div>

          ) : (
            <div>
              <div className="text-lg">
          <span className="font-semibold text-[#3A5D56]">Name: </span>
          {editedClient.name || <span className="text-gray-400">No name</span>}
        </div>
        <div className="text-lg">
          <span className="font-semibold text-[#3A5D56]">Email: </span>
          {editedClient.email || <span className="text-gray-400">No email</span>}
        </div>
        <div className="text-lg">
          <span className="font-semibold text-[#3A5D56]">Phone: </span>
          {editedClient.phone || <span className="text-gray-400">No phone</span>}
        </div>
              
              
            </div>
          )}

        </div>
        

        
      </div>

      <div>
        <AddTreatment 
        newTreatment={newTreatment}
        onChange={handleTreatmentChange}
        onAdd={addTreatment}/>

{showSuccessMessage && (
  <p className="text-green-600 mt-2 text-sm animate-fade-in">
    Treatment added successfully!
  </p>
)}

      </div>

      <div>
        <TreatmentHistory 
        treatments={editedClient.treatments || []}/>
      </div>


     

      
    </div>
  );
}

export default ClientCardEditor;


