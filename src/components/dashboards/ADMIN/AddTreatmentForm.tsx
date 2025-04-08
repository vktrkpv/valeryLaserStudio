import { Treatment } from "./types/types";

type Props = {
    newTreatment: Treatment;
    onChange: (field: keyof Treatment, value: string) => void;
    onAdd: () => void;
}

function AddTreatment({ newTreatment, onChange, onAdd }: Props) {


    return (
        <div className="mt-8">
            <h3 className="text-xl font-semibold text-[#3A5D56] mb-2">
        Add Treatment
      </h3>

      <div className="flex flex-col gap-4 mb-8">

      <div className="flex justify-start items-center gap-4">
          <label className="text-right font-semibold text-[#3A5D56]">Date:</label>
        </div>
        <div>
          <input
            type="date"
            value={newTreatment.date}
            onChange={(e) => onChange("date", e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#8cd0cb] transition duration-300"        />
          
        </div>

        <div className="flex justify-start items-center gap-4">
          <label className="text-right font-semibold text-[#3A5D56]">Treatment Details:</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Treatment details"
            value={newTreatment.details}
            onChange={(e) => onChange("details", e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#8cd0cb] transition duration-300"        />
          
        </div>

        <div className="flex justify-start items-center gap-4">
          <label className="text-right font-semibold text-[#3A5D56]">J/cm - Size:</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="J/cm - size"
            value={newTreatment.size}
            onChange={(e) => onChange("size", e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#8cd0cb] transition duration-300"            />
        </div>

        <div className="flex justify-start items-center gap-4">
          <label className="text-right font-semibold text-[#3A5D56]">Notes:</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Notes"
            value={newTreatment.notes}
            onChange={(e) => onChange("notes", e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#8cd0cb] transition duration-300"            />
        </div>

        <div className="flex justify-start items-center gap-4">
          <label className="text-right font-semibold text-[#3A5D56]">Price:</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Price"
            value={newTreatment.price}
            onChange={(e) => onChange("price", e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#8cd0cb] transition duration-300"            />
        </div>
    
      </div>

      <button
        onClick={onAdd}
        className="bg-[#3A5D56] text-white px-4 py-2 rounded-lg hover:bg-[#8cd0cb]"
      >
        Add Treatment
      </button>

        </div>
    )
}

export default AddTreatment;