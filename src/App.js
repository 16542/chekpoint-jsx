import './App.css';
import imageFromSrc from "./imageInSrc.jpg";
import './style.css';

function App() {
  return (
    <div className="App">
    <div className="Container"style={{border:"solid 1px blue",maxWidth:"100vw"}}>

          <h1 className="title red ">Ahmed Benkahla</h1>
          <br />
          <img src={imageFromSrc} alt=''/>

          <br />

          <img src="/imageInPublic.jpg"  alt=''/>

        
    </div>
          <video width="320" height="240" controls>

               <source src="myVideo.mp4" type="video/mp4" />

          </video>
</div>
  );
}
  

export default App;
