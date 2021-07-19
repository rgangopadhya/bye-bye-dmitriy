import logo from './logo.svg';
import './App.css';
import wall from './wall.jpeg';
import box1 from './box-1-raw.jpg';
import box2 from './box-2-raw.jpg';
import box3 from './box-3-raw.png';
import box4 from './box-4-raw.jpg';
import ReactTooltip from "react-tooltip";

const messages = [
  {
    name: "Raja",
    text: "Pizza and a lot of things"
  },
  {
    name: "Caitlin",
    text: "Dmitriy, thanks for your leadership pushing the Remix platform forward! Your depth of experience all across the Remix product and your pragmatic approach have been invaluable. We will miss your anonymous shadow Zoom appearances and your cat. Good luck on the new gig!"
  },
  {
    name: "Caroline",
    text: "Dmitriy - we'll miss you! Thank you for your amazing contributions to Remix's platform, as well as the remodeling and cat ownership advice :) Best of luck for your next chapter!"
  }
];

const boxes = [box1, box2, box3, box4];
/*
 * a clutter of boxes, one per message. 
 *  
*/

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${wall})`, height: "100vh"}}>
      <>
        {messages.map((message, index) => (
          <>
            <img src={boxes[index % boxes.length]} style={{height: '100px'}} data-tip={`${message.text}\n\n-${message.name}`} data-for={`tool-${index}`} />
            <ReactTooltip
              id={`tool-${index}`}
              multiline={true}
            />
          </>
        ))}
      </>
    </div>
  );
}

export default App;
