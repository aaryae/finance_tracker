import axios from 'axios';
import { useEffect, useState } from 'react';

const AdminTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9090/api/user/getAll', {
          headers: {
            Authorization: ` ${localStorage.getItem('accessToken')}`,
          },
        });
        console.log(response)
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-[#262626] flex flex-col items-center justify-center text-white p-4 rounded-xl max-w-fit h-full mx-10">
      <div className="flex w-full justify-between">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <a className="underline" href="#">more</a>
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
          {users.map((user, index) => (
            <tr key={user.email} className="hover:bg-[#333] transition duration-200 rounded-lg">
              <td className="px-4 py-2 border-t border-[#ffffff8a]">{index + 1}</td>
              <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.firstName}</td>
              <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.LastName}</td>
              <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.email}</td>
              <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.income}</td>
              <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.expenditure}</td>
              <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.role}</td>
              <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.view}</td>
              <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.edit}</td>
              <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.delete}</td>
              <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
