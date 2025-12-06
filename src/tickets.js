import React from 'react'

const Tickets = () => {
  return (
    <>
    <div className="App">
     <div class="isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
    <ul role="list" class="divide-y divide-white/5">
  <li class="flex justify-center gap-x-2 py-5">
    < div class="flex min-w-0 gap-x-4">
     
      <div class="min-w-0 mr-4 flex-auto">
        <p class="text-sm/6 font-semibold text-white">Ticket No.</p>
      </div>
    </div>
    <div class="mr-4 shrink-0 sm:flex sm:flex-col sm:items-end">
      <p class="text-sm/6 text-white">Description</p>
    </div>
    <div class="ml-4 shrink-0 sm:flex sm:flex-col sm:items-end">
      <p class="text-sm/6 text-white">Co-Founder / CEO</p>
      <p class="mt-1 text-xs/5 text-gray-400">Last seen <time datetime="2023-01-23T13:23Z">3h ago</time></p>
    </div>
  </li>
</ul>
</div>
</div>
    </>
  )
}

export default Tickets