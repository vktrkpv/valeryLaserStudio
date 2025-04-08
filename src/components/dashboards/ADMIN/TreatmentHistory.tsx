import { Treatment } from "./types/types";

type Props = {
    treatments: Treatment[];
  };

  function TreatmentHistory({ treatments }: Props) {
    return (
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-[#3A5D56] mb-2">
          Treatment History
        </h3>
  
        {treatments && treatments.length > 0 ? (
          <table className="w-full table-auto border mt-2 text-sm">
            <thead className="bg-[#f0fdfa] text-[#3A5D56]">
              <tr>
                <th className="border p-2">Date</th>
                <th className="border p-2">Details</th>
                <th className="border p-2">Size</th>
                <th className="border p-2">Notes</th>
                <th className="border p-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {treatments.map((t, index) => (
                <tr key={index}>
                  <td className="border p-2">{t.date}</td>
                  <td className="border p-2">{t.details}</td>
                  <td className="border p-2">{t.size}</td>
                  <td className="border p-2">{t.notes}</td>
                  <td className="border p-2">{t.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No treatments added yet.</p>
        )}
      </div>
    );
  }
  
  export default TreatmentHistory;