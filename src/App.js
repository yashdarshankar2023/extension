
import './App.css';

function App() {
  return (
    <div className="App">
      <img src='mp4.jpg' style={{ width: '40px', height: "40px"}}/>
      <p>Video</p>
      
      <a href='/video.mp4' download><img src='download.png' style={{ width: '30px', height: "30px"}}/></a>

    </div>
  );
}

export default App;
