import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data2023 = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 250 },
  { name: "Apr", value: 564 },
  { name: "May", value: 400 },
  { name: "June", value: 250 },
  { name: "July", value: 390 },
  { name: "Aug", value: 370 },
  { name: "Sept", value: 240 },
  { name: "Oct", value: 123 },
  { name: "Nov", value: 350 },
  { name: "Dec", value: 620 },
];

const data2024 = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 400 },
  { name: "Apr", value: 200 },
  { name: "May", value: 500 },
  { name: "June", value: 300 },
  { name: "July", value: 490 },
  { name: "Aug", value: 760 },
  { name: "Sept", value: 420 },
  { name: "Oct", value: 320 },
  { name: "Nov", value: 300 },
  { name: "Dec", value: 500 },
];

const Metrics = () => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const getCurrentData = () => {
    return selectedYear === "2023" ? data2023 : data2024;
  };

  return (
    <div className="container mx-auto w-full min-h-screen pt-8">
      <div className="relative">
        <div className="absolute right-0 top-0 z-10">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={600}>
          <LineChart data={getCurrentData()}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Metrics;
