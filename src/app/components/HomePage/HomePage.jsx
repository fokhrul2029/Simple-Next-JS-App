"use client"
import { useEffect, useState } from "react";

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="pt-10">
      <table className="bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Id</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">UserName</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border text-center">{item.id}</td>
              <td className="py-2 px-4 border">{item.name}</td>
              <td className="py-2 px-4 border">{item.username}</td>
              <td className="py-2 px-4 border">{item.email}</td>
              <td className="py-2 px-4 border">{item.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
