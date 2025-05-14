import axios from 'axios';
import { useEffect, useState } from 'react';
interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string; // Adjust this if role is not a string
  status: string;
  income: number;
  expenses: number;
}
const AdminTable = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [users, setUsers] = useState<IUser[]>([]); // Specify a type for users, such as { firstName: string, lastName: string, ... }
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log('sakjfsdlkf')


        const token =localStorage.getItem('accessToken');
        const response = await axios.get('http://localhost:9090/api/user/admin/getAll', {
          headers: {
            Authorization:  `Bearer ${token}`,
          },
        });
        setUsers(response.data);
        // console.log('ram')
        console.log(response);

      } catch (err) {
        console.log(err)
      }
    };

    fetchData();
  }, []);



  return (
    <div className="bg-[#262626] flex flex-col items-center justify-center text-white p-4 rounded-xl max-w-fit h-full mx-10">
      <div className="flex w-full justify-between">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>

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
          {users.map((user, index) => {
            // const { firstName, lastName, email, income, expenses, role, status } = user;

            return (
              <tr key={user.id} className="hover:bg-[#333] transition duration-200 rounded-lg">
                <td className="px-4 py-2 border-t border-[#ffffff8a]">{index + 1}</td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.firstName}</td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.lastName}</td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.email}</td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.income || 'N/A'}</td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.expenses || 'N/A'}</td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.role}</td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.status}</td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">view</td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">edit</td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
