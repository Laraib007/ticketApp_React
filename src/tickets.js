import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Tickets = () => {

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const getTickets = async () => {
      const res = await fetch("http://localhost:5000/api/ticket/fetchall");
      const data = await res.json();

      console.log("API DATA:", data);

      // IMPORTANT: backend me { Ticket: [...] } aa raha hai
      setTickets(data.Ticket || []); 
    };

    getTickets();
  }, []);

  return (
    <div className="App">
      <div className="isolate h-screen bg-gray-900 px-2 py-24 sm:py-14 lg:px-8">
        <div className="bg-gray-700 shadow-md rounded-md p-4 mx-auto max-w-3xl mt-16">
          
          <div className='flex items-center justify-between py-2 border-b border-gray-300'>
            <h2 className="text-xl text-white font-semibold mb-4">List of Tickets</h2>
            <Link to={"/"}>
              <button className="bg-blue-500 hover:bg-blue-700 mb-4 text-white font-bold px-4 rounded">
                Add Ticket
              </button>
            </Link>
          </div>

          <table className="ml-2 table-fixed w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="w-1/3 px-4 py-2 font-semibold text-white">Ticket No.</th>
                <th className="w-1/3 px-4 py-2 font-semibold text-white">Description</th>
                <th className="w-1/4 px-4 py-2 font-semibold text-white text-green-400">Date</th>
              </tr>
            </thead>

            <tbody>
              {tickets.map((item) => (
                <tr key={item._id} className="border-b border-gray-600">
                  <td className="px-4 py-2 text-white break-all">{item.ticket}</td>
                  <td className="px-4 py-2 text-white truncate">{item.desc}</td>
                  <td className="px-4 py-2 text-green-400">{item.date || "N/A"}</td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>
    </div>
  )
}

export default Tickets
