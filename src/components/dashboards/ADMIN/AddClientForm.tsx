import { useState } from 'react';
import { Client } from './types/types';

type Props = {
  onSave: (client: Client) => void;
  onCancel: () => void;
};

function AddClientForm({ onSave, onCancel }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newClient: Client = {
      id: crypto.randomUUID(),
      name,
      email,
      phone,
      treatments: [], // додамо treatments одразу
    };

    onSave(newClient);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-lg mb-6"
    >
      <h2 className="text-xl font-bold text-[#3A5D56] mb-4">Add New Client</h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg p-3"
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg p-3"
        />
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div className="flex justify-end gap-4 mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="text-gray-500 hover:underline"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-[#3A5D56] text-white px-4 py-2 rounded-lg hover:bg-[#8cd0cb]"
        >
          Save Client
        </button>
      </div>
    </form>
  );
}

export default AddClientForm;
