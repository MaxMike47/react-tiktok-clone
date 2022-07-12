
import { useEffect, useState } from 'react';
import './App.css';
import Video from './views/Video/Video';
import axios from "./axios/axios";

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos(){
      const response = await axios.get('/tiktok/api/videos');
      setVideos(response.data);

      return response;
    }

    fetchVideos();
  }, []);

  return (
    <div className="app">

      <div className='app__videos'>
        
        {
          videos.map((eachVideos) => {
            return <Video 
              url={eachVideos.url} 
              channel={eachVideos.channel} 
              description={eachVideos.description} 
              song={eachVideos.song} 
              likes={eachVideos.likes} 
              messages={eachVideos.messages} 
              shares={eachVideos.shares}
            />
          })
        }


      </div>

    </div>
  );
}

export default App;
