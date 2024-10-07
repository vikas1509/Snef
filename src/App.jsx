import React from "react";
import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const App = () => {
  const barData = [
    { name: "A", value: 20 },
    { name: "B", value: 15 },
    { name: "C", value: 15 },
    { name: "D", value: 100 },
    { name: "E", value: 100 },
    { name: "F", value: 10 },
  ];

  const pieData = [
    { name: "Group A", value: 74 },
    { name: "Group B", value: 26 },
  ];

  const events = [
    {
      id: "01",
      name: "Wedding function",
      client: "Vikas Jat",
      location: "Jaipur 07 Ridhi Sidhi",
      date: "11/11/24",
      status: "Draft",
      comments: "3 days function",
      siteManager: "Vikas",
      siteStaff: "Kailash Ji, Mohan Ji",
    },
    // ... (other events data)
  ];

  const COLORS = [
    "#008614",
    "#FFAE00",
    "#121212",
    "#EF4444",
    "#8B5CF6",
    "#3B82F6",
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white rounded-md shadow-lg p-4">
          <h2 className="text-lg font-semibold mb-2">
            Event Running Summary (Units)
          </h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <Bar dataKey="value">
                {barData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm relative">
          <h2 className="font-semibold mb-4">Shortage & Delta Event Summary</h2>
          <div className="flex justify-center items-center">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  <Cell key="cell-0" fill="#EF4444" />
                  <Cell key="cell-1" fill="#E5E7EB" />
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="text-center text-2xl font-bold mt-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            74%
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Event Status</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Today</span>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Day
              </button>
              <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Week
              </button>
              <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Month
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center">
            {["MO", "TU", "WE", "TH", "FR", "SA", "SU"].map((day, index) => (
              <div className="p-2" key={index}>
                <div className="text-sm">{day}</div>
                <div className="font-semibold">{22 + index}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Event Listing</h2>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Create Event
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-2 text-left">SL NO.</th>
                <th className="p-2 text-left">Event Name</th>
                <th className="p-2 text-left">Client Name</th>
                <th className="p-2 text-left">Client Location</th>
                <th className="p-2 text-left">Event Date</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Comments</th>
                <th className="p-2 text-left">Site Manager</th>
                <th className="p-2 text-left">Site Staff</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((ev) => (
                <tr key={ev.id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{ev.id}</td>
                  <td className="p-2">{ev.name}</td>
                  <td className="p-2">{ev.client}</td>
                  <td className="p-2">{ev.location}</td>
                  <td className="p-2">{ev.date}</td>
                  <td className="p-2">{ev.status}</td>
                  <td className="p-2">{ev.comments}</td>
                  <td className="p-2">{ev.siteManager}</td>
                  <td className="p-2">{ev.siteStaff}</td>
                  <td className="p-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
