import { IncomeEntry } from "@type/income.type";
import { FaEdit, FaTrash } from "react-icons/fa";

interface IncomeTableProps {
  data: IncomeEntry[];
  onEdit?: (entry: IncomeEntry) => void;
  onDelete?: (id: number) => void;
}

const IncomeTable: React.FC<IncomeTableProps> = ({ data, onEdit, onDelete }) => {
  return (
    <div className="bg-[#262626] text-white p-4 rounded-xl w-full overflow-x-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
        <a className="underline text-sm text-blue-400 hover:text-blue-300" href="#">
          More
        </a>
      </div>

      <table className="w-full min-w-[500px] text-left border-separate border-spacing-y-2">
        <thead>
          <tr className="text-gray-400 text-sm">
            <th className="px-4 py-2">S.N.</th>
            <th className="px-4 py-2">Remark</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={entry.id} className="hover:bg-[#333] transition duration-200 rounded-lg">
              <td className="px-4 py-2 border-t border-[#ffffff8a]">{index + 1}</td>
              <td className="px-4 py-2 border-t border-[#ffffff8a]">{entry.remark}</td>
              <td className="px-4 py-2 border-t border-[#ffffff8a]">
                ${entry.amount.toLocaleString()}
              </td>
              <td className="px-4 py-2 border-t border-[#ffffff8a]">
                <div className="flex space-x-4">
                  <FaEdit
                    onClick={() => onEdit?.(entry)}
                    className="text-blue-500 hover:text-blue-400 cursor-pointer"
                  />
                  <FaTrash
                    onClick={() => onDelete?.(entry.id)}
                    className="text-red-500 hover:text-red-400 cursor-pointer"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeTable;
