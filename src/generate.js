import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
const Generate = () => {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()

  // Handle input chanegs // 
  const onChange = (e)=>{
    if(e.target.name == "title"){
      setTitle(e.target.value)
    } else if(e.target.name == "description"){
      setDescription(e.target.value)
    }
 }
  const saveData = ()=>{
    const obj = {
      "des" : description,
      "title": title
    }
    if( localStorage.getItem("ticket")){
     const oldTicket =  localStorage.getItem("ticket")
     let parse = JSON.parse(oldTicket)
     let newObj =  JSON.stringify(obj)
     const pushNew = parse.newKey = newObj
   
    console.log(pushNew)  
    } 
     localStorage.setItem("ticket", JSON.stringify(obj))

  }

  return (
    <div className="App">
     <div class="isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">

  <div class="mx-auto max-w-2xl ">
    <h2 class="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Generate Ticket</h2>
  </div>
  <form class="mx-auto mt-8 max-w-xl ">
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
 
      <div class="sm:col-span-2">
        <label for="text" class="text-left block text-sm/6 font-semibold text-white">Title</label>
        <div class="mt-2.5">
          <input onChange={onChange} id="title" type="title" name="title" autocomplete="title" class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
        </div>
      </div>

      <div class="sm:col-span-2">
        <label for="description" class=" text-left block text-sm/6 font-semibold text-white">Description</label>
        <div class="mt-2.5">
          <textarea onChange={onChange} id="description" name="description" rows="4" class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"></textarea>
        </div>
      </div>
    
    </div>
      
    <div class="mt-10">
      <Link to={"/tickets"}>
  <button onClick={saveData} type='button'
  class="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400">
  Submit
</button>
</Link>
    </div>
    
  </form>
</div>

    </div>
  );
}


export default Generate