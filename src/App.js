  import Act1Scene1 from "./a1s1/Act1Scene1";
import Act1Scene2 from "./a1s2/Act1Scene2";
import "./App.css";
import TopBar from "./topbar/TopBar";

  function App() {
    
    return (
      <div className="App">
        <TopBar />

        <div className="title-content">
          <div className="title" id="Top">
            The Phantom of the Disco
          </div>

          <div className="logline">
          In the wake of a devastating pandemic, a struggling 
          Shakespeare festival takes an unconventional path 
          to stay afloat by producing ABBA musicals. However, 
          their choice angers the ghost of Shakespeare himself, 
          who returns to haunt the theater in hilarious and 
          unexpected ways.
          </div>
        </div>

        <Act1Scene1 />
        <Act1Scene2 />

        <div className="footer">
          <p>Made with love in Providence</p>
        </div>

      </div>
    )
  }

  export default App;

  