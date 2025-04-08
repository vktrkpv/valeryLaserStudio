import { ConfirmDeleteModalProps } from "./types/types";


function ConfirmDeleteModal( { isOpen, clientName, onConfirm, onCancel }: ConfirmDeleteModalProps) {


    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4 text-[#3A5D56]">Are you sure?</h2>
        <p className="mb-6 text-gray-600">
          Do you really want to delete this client? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    )
}

export default ConfirmDeleteModal;