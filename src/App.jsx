import React, { useState } from 'react';
import { SlSocialSpotify } from "react-icons/sl";
import axios from 'axios';
function App() {
  const [URL ,setURL] = useState("")

  const handleURL = (e)=>{
    e.preventDefault()
    setURL(e.target.value)
  }

  const downloadSong = async()=>{
    const options = {
      method: 'GET',
      url: 'https://spotify-downloader9.p.rapidapi.com/downloadSong',
      params: {
        songId: `${URL}`
      },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data.data.downloadLink);
      window.location.href=response.data.data.downloadLink;
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="h-screen w-screen bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-rose-600 via-emerald-600 to-amber-500 flex items-center justify-center flex-col gap-y-5">
       <div className="flex items-center justify-center gap-x-2 text-xl font-bold">
       <SlSocialSpotify size={70}/>
       <p>Song Downloader</p>
       </div>
       <div className="flex gap-x-2">
        <input type="url" className="h-10 w-[450px] border-none outline-none px-5 rounded-lg" onChange={handleURL} />
        <button className="bg-white h-10 px-2 rounded-lg font-bold hover:bg-black hover:text-white" onClick={downloadSong}>Dowload</button>
       </div>
       <div>
        <h5>@Created By Chanchal</h5>
       </div>
    </div>
  )
}

export default App
