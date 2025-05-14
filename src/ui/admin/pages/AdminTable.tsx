import axios from 'axios';
import { useEffect, useState } from 'react';

interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  status: string;
  income: number;
  expenses: number;
}

const AdminTable = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get('http://localhost:9090/api/user/admin/getAll', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#262626] text-white p-4 rounded-xl mx-4 md:mx-10 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
        Recent Transactions
      </h2>

      {/* Table wrapper for horizontal scrolling */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-[800px] w-full text-left border-separate border-spacing-y-2">
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
            {users.map((user, index) => (
              <tr key={user.id} className="hover:bg-[#333] transition duration-200 rounded-lg">
                <td className="px-4 py-2 border-t border-[#ffffff8a]">{index + 1}</td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.firstname}</td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.lastname}</td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.email}</td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.income || 'N/A'}</td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.expenses || 'N/A'}</td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.role}</td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">View</td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">Edit</td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">Delete</td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
