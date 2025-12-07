import React from 'react'
import { Link } from 'react-router-dom'

const Tickets = () => {
  const arr = localStorage.getItem("ticket")
  let arrMap = JSON.parse(arr)
  return (
    <>
    <div className="App">
     <div class="isolate h-screen from-gray-900 to-gray-900 bg-gray-900 mb-50 px-2 py-24 sm:py-14 lg:px-8">
  <div class="bg-gray-700 shadow-md rounded-md p-4 mx-auto max-w-3xl mt-16">
    <div className='flex items-center justify-between py-2 border-b border-gray-300'>
    <h2 class="text-xl text-white font-semibold mb-4">List of Tickets</h2>
    <Link to={"/"}>
    <button class="bg-blue-500 hover:bg-blue-700 mb-4 text-white font-bold   px-4 rounded">
  Add Ticket
</button>
</Link>
</div>
   <table class="ml-2 table-fixed w-full text-left border-collapse">
  <thead>
    <tr class="border-b border-gray-600">
      <th class="w-1/3 px-4 py-2 font-semibold text-white whitespace-nowrap">Ticket No.</th>
      <th class="w-1/3 px-4 py-2 font-semibold text-white whitespace-nowrap">Description</th>
      <th class="w-1/4 px-4 py-2 font-semibold text-white whitespace-nowrap text-green-400">Date</th>
    </tr>
  </thead>
    {/* Yaha Map Lgy ga */}
    {arrMap.map((item)=> (
      <tbody>
    <tr class="border-b border-gray-600">
      <td   class="px-4 py-2 whitespace-nowrap text-white break-all">{item.title}</td>
      <td class="px-4 py-2 text-white truncate">{item.des}</td>
      <td class="px-4 py-2 whitespace-nowrap text-green-400">{"item.date"}</td>
    </tr>
     </tbody>
    ))}
    </table>
</div>

</div>

</div>


    </>
  )
}

export default Tickets