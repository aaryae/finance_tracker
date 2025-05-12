const data = [
  { firstName: 'Srijan', LastName: 'Shrestha', email: 'srijan@gmail.com', income: 'income', expenditure: 'expenditure', role: 'user', view: 'view', edit: 'edit', delete: 'delete', status: 'status' },
  { firstName: 'Srijan', LastName: 'Shrestha', email: 'srijan@gmail.com', income: 'income', expenditure: 'expenditure', role: 'user', view: 'view', edit: 'edit', delete: 'delete', status: 'status' },
  { firstName: 'Srijan', LastName: 'Shrestha', email: 'srijan@gmail.com', income: 'income', expenditure: 'expenditure', role: 'user', view: 'view', edit: 'edit', delete: 'delete', status: 'status' },
  { firstName: 'Srijan', LastName: 'Shrestha', email: 'srijan@gmail.com', income: 'income', expenditure: 'expenditure', role: 'user', view: 'view', edit: 'edit', delete: 'delete', status: 'status' },
  { firstName: 'Srijan', LastName: 'Shrestha', email: 'srijan@gmail.com', income: 'income', expenditure: 'expenditure', role: 'user', view: 'view', edit: 'edit', delete: 'delete', status: 'status' },
  { firstName: 'Srijan', LastName: 'Shrestha', email: 'srijan@gmail.com', income: 'income', expenditure: 'expenditure', role: 'user', view: 'view', edit: 'edit', delete: 'delete', status: 'status' },
  { firstName: 'Srijan', LastName: 'Shrestha', email: 'srijan@gmail.com', income: 'income', expenditure: 'expenditure', role: 'user', view: 'view', edit: 'edit', delete: 'delete', status: 'status' },
  { firstName: 'Srijan', LastName: 'Shrestha', email: 'srijan@gmail.com', income: 'income', expenditure: 'expenditure', role: 'user', view: 'view', edit: 'edit', delete: 'delete', status: 'status' },
  { firstName: 'Srijan', LastName: 'Shrestha', email: 'srijan@gmail.com', income: 'income', expenditure: 'expenditure', role: 'user', view: 'view', edit: 'edit', delete: 'delete', status: 'status' },

];

const AdminTable = () => {
  return (
    <div className="bg-[#262626] flex flex-col items-center justify-center text-white p-4 rounded-xl max-w-fit h-full  mx-10   ">
      <div className="flex w-full justify-between">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <a className="underline" href="#">
          more
        </a>
      </div>
      <table className="w-full text-left border-separate border-spacing-y-2">
        <thead>
          <tr className="text-gray-400 text-sm">
            <th className="px-4 py-2">S.N.</th>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Income</th>
            <th className="px-4 py-2">Expenditure</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">View</th>
            <th className="px-4 py-2">Edit</th>
            <th className="px-4 py-2">Delete</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr
              key={index}
              className="hover:bg-[#333] transition duration-200 rounded-lg"
            >
              <td className="px-4 py-2 border-t border-[#ffffff8a]">
                {index + 1}
              </td>
              <td className="px-4 py-2 border-t border-[#ffffff8a]">
                {entry.firstName}
              </td>
              <td className="px-4 py-2 border-t border-[#ffffff8a]">
                {entry.LastName}
              </td>
              <td className="px-4 py-2 border-t border-[#ffffff8a]">
                {entry.email}
              </td>
              <td className="px-4 py-2 border-t border-[#ffffff8a]">
                {entry.income}
              </td>
              <td className="px-4 py-2 border-t border-[#ffffff8a]">
                {entry.expenditure}
              </td>
              {/* <td className="px-4 py-2 border-t border-[#ffffff8a]">
                ${entry.amount.toFixed(2)}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
