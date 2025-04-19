const SimpleTable = () => {
  const data = [
    { name: "Tara Fletcher", amount: 279 },
    { name: "Joyce Freeman", amount: 831 },
    { name: "Brittany Hale", amount: 142 },
    { name: "Luke Cook", amount: 232 },
    { name: "Eileen Horton", amount: 597 },
    { name: "Frederick Adams", amount: 72 },
    { name: "Lee Wheeler", amount: 110 },
  ];

  return (
    <div className="bg-[#1f1f1f] text-white p-4 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
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
              className="bg-[#2a2a2a] hover:bg-[#333] transition duration-200 rounded-lg"
            >
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{entry.name}</td>
              <td className="px-4 py-2">${entry.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;
