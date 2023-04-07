import '../index.css' 
const Dashboard = () => {
  return (
    <div className="Sidebar">
      <div className="col-span-1 bg-gray-200 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Orders</h2>
        <p className="text-3xl font-bold">125</p>
      </div>
      <div className="col-span-1 bg-gray-200 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Revenue</h2>
        <p className="text-3xl font-bold">$12,345</p>
      </div>
      <div className="col-span-2 bg-white p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
        <ul>
          <li className="mb-2">
            <span className="text-gray-500 mr-2">•</span>John Doe added a new
            product
          </li>
          <li className="mb-2">
            <span className="text-gray-500 mr-2">•</span>Jane Doe updated an
            order
          </li>
          <li>
            <span className="text-gray-500 mr-2">•</span>Bob Smith deleted a
            customer record
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard