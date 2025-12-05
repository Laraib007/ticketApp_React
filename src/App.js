import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div class="isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">

  <div class="mx-auto max-w-2xl ">
    <h2 class="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Generate Ticket</h2>
    <p class="mt-2 text-lg/8 text-gray-400">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
  </div>
  <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
 
      <div class="sm:col-span-2">
        <label for="text" class="text-left block text-sm/6 font-semibold text-white">Title</label>
        <div class="mt-2.5">
          <input id="email" type="text" name="text" autocomplete="text" class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
        </div>
      </div>

      <div class="sm:col-span-2">
        <label for="message" class=" text-left block text-sm/6 font-semibold text-white">Description</label>
        <div class="mt-2.5">
          <textarea id="message" name="message" rows="4" class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"></textarea>
        </div>
      </div>
    
    </div>
    <div class="mt-10">
      <button type="submit" class="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Submit</button>
    </div>
  </form>
</div>

    </div>
  );
}

export default App;
