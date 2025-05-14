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
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const [showModal, setShowModal] = useState(false);

  const fetchUsers = async () => {
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

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleView = async (id: string) => {
    try {
      const token = localStorage.getItem('accessToken');
      const res = await axios.get(`http://localhost:9090/api/user/getById/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSelectedUser(res.data);
      setShowModal(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("Are you sure you want to delete this user?");
    if (!confirm) return;

    try {
      const token = localStorage.getItem('accessToken');
      await axios.delete(`http://localhost:9090/api/user/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Refresh the user list
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-[#262626] text-white p-4 rounded-xl mx-4 md:mx-10 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
        Recent Transactions
      </h2>

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
                <td
                  className="px-4 py-2 border-t border-[#ffffff8a] cursor-pointer text-blue-400 hover:underline"
                  onClick={() => handleView(user.id)}
                >
                  View
                </td>
                <td
                  className="px-4 py-2 border-t border-[#ffffff8a] cursor-pointer text-red-400 hover:underline"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </td>
                <td className="px-4 py-2 border-t border-[#ffffff8a]">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for viewing user details */}
      {showModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-[#1e1e1e] p-6 rounded-xl w-[90%] max-w-md text-white relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h3 className="text-lg font-bold mb-4">User Details</h3>
            <p><strong>First Name:</strong> {selectedUser.firstname}</p>
            <p><strong>Last Name:</strong> {selectedUser.lastname}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Role:</strong> {selectedUser.role}</p>
            <p><strong>Status:</strong> {selectedUser.status}</p>
            <p><strong>Income:</strong> {selectedUser.income}</p>
            <p><strong>Expenses:</strong> {selectedUser.expenses}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTable;
