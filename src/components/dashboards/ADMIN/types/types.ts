export type Treatment = {
    date: string;
    details: string;
    size: string;
    notes: string;
    price: string;
  };
  
  export type Client = {
    id: string;
    name: string;
    email: string;
    phone: string;
    treatments: Treatment[]; 
  };

  export type ConfirmDeleteModalProps = {
    isOpen: boolean;
    clientName: string;
    onConfirm: () => void;
    onCancel: () => void;
  };

  export type Props = {
    clients: Client[];
    selectedId: string | null;
    setSelectedId: (id: string) => void;
    deleteClient: (client: Client) => void;
  };