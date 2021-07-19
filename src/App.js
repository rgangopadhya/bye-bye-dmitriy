import logo from './logo.svg';
import './App.css';
import remixBg from './remix-bg-sml.png';
import box1 from './box-1-raw.jpg';
import box2 from './box-2-raw.jpg';
import box3 from './box-3-raw.png';
import box4 from './box-4-raw.jpg';
import box5 from './box-5-raw.jpg';
import box6 from './box-6-raw.jpg';
import ReactTooltip from "react-tooltip";

const messages = [
  {
    name: "Caitlin",
    text: "Dmitriy, thanks for your leadership pushing the Remix platform forward! Your depth of experience all across the Remix product and your pragmatic approach have been invaluable. We will miss your anonymous shadow Zoom appearances and your cat. Good luck on the new gig!"
  },
  {
    name: "Caroline",
    text: "Dmitriy - we'll miss you! Thank you for your amazing contributions to Remix's platform, as well as the remodeling and cat ownership advice :) Best of luck for your next chapter!"
  },
  {
    name: "Raja",
    text: "Dmitriy, it's been awesome working with you for the past ~3-ish years. From Mobility to Explore and data platform, I've always been amazed at how much you know and how collaborative and humble you are at the same time. You really set the standard for what it means to be a Remix engineer, and we will be forever learning from your example! I'll miss your clever wordplay and sense of humor, and just talking to you about music (I hope to hear some of it someday!)"
  },
  {
    name: "Nichole",
    text: "Dmitry, you are an institution at Remix. Thank you for all you've contributed both technically and culturally to the team. We will miss you!!"
  },
  {
    name: "Juliana",
    text: "Hey Dmitriy, thank you so much for all the things you taught me, and everything you've done for the team (which is A LOT!). I'm going to miss pairing with you, but happy for whoever is lucky to pair with you in your next adventure. Glad your kitchen is ready, all the best, and have fun on your next gig!"
  }
];

const boxes = [box1, box2, box3, box4, box5, box6];
/*
 * a clutter of boxes, one per message. 
 *  
*/

function getBox() {
  return boxes[Math.floor(Math.random() * boxes.length)];
}

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${remixBg})`, height: "100vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", alignItems: "end", justifyContent: "center"}}>
      <div style={{display: "flex", flexDirection: "row", width: "50vw", flexWrap: "wrap-reverse"}}>
          {messages.map((message, index) => (
            <>
              <img src={getBox()} style={{height: "100px", padding: "1px"}} data-tip={`${message.text}<br/><br/>-${message.name}`} data-for={`tool-${index}`} />
              <ReactTooltip
                id={`tool-${index}`}
                multiline={true}
                className="toolTip"
              />
            </>
          ))}
      </div>
    </div>
  );
}

export default App;
