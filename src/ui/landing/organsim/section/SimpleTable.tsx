const SimpleTable = () => {
  const data = [
    { name: "Tara Fletcher", amount: 279 },
    { name: "Joyce Freeman", amount: 831 },
    { name: "Brittany Hale", amount: 142 },
  ];

  return (
    <div className="bg-[#262626] text-white p-4 rounded-xl w-full max-w-5xl   ">
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
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Money</th>
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
                {entry.name}
              </td>
              <td className="px-4 py-2 border-t border-[#ffffff8a]">
                ${entry.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;
