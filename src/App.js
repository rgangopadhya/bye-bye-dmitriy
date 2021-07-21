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
  },
  {
    name: "Stuart P",
    text: "Dmitriy: Thank you so much for your help making our platform world-class. I find myself staring at crisp, beautiful layers and you played an integral role in that. Also, I really appreciate your help in the ask-an-eng channels - I leaned on you a lot to reprocess countless layers and to get to the bottom of confusing questions, and I always knew I could rely on you. I'm sure you're gonna do great in your next role. Best of luck!",
  },
  {
    name: "Krithin",
    text: "Thanks for everything you've taught and shared starting from my first day at Remix. I've enjoyed your understated confidence and humour. Congrats on hatching from that egg!",
  },
  {
    name: "Ray",
    text: "Dmitriy: You have been such a joy to work with when needed ;) Thank you for all your contributions to the Remix product, the endless haul of car parts that live in the office, and sharing your gato with the rest of us! We'll miss you and you're probably gonna rock and do donuts in your next role.",
  },
  {
    name: "Amanjeet",
    text: "Dmitriy: We will miss you! Thank you for all you have done -- it wont be the same without you. Good luck on your next adventure!"
  },
  {
    name: "Olivia",
    text: "I'm going to miss your classic laugh and the comfort of knowing that a random box or package around the office is probably yours. Best of luck!",
  },
  {
    name: "Hari",
    text: "I’ve had the good fortune of working with you on so many different projects over the years, starting from when you were my onboarding buddy way back when we had only one engineering team. Thanks for always bringing so much humility and a sense of humor to everything you do. Best of luck in your next job, and I hope we cross paths again in the future!",
  },
  {
    name: "Rebekah",
    text: "I've enjoyed working with you over the past several years. You've contributed so much to our products. Thank you for all your hard work on all things data! :) I really appreciate it. Can't wait to see what you do next!",
  },
  {
    name: "Courtney",
    text: "It's been a pleasure, Dmitriy! Thanks for making Remix a great place to work and best of luck in your next adventure - excited for you!",
  },
  {
    name: "Joyce",
    text: "Dmitriy, thanks for being a helpful and thoughtful coworker. We didn't get to work together much but you helped me countless times on the eng-help channel and for that, I’ll always be grateful. You were also one of the elites at giving great tech talks so thanks for being a great teacher too! Good luck on your next adventure!",
  },
  {
    name: "Charlene",
    text: "Thanks for all of the work, thought, and care you’ve put into Remix–you were core to Remix success. Maybe some day I can borrow your car door so I can walk through a drive-thru. Best wishes for everything that comes next.",
  },
  {
    name: "Dan",
    text: "Dmitriy - thank you so much for all that you’ve done for Remix, and being so great to work with. I was trying to come up with a short pithy summary of what I’ve enjoyed about working with you, and found it impossible, so you’re going to get a list instead: your commitment to understanding customer needs + what’s actually important in a project, your ability to dream about what our product and infrastructure can be + push us towards it, your creative naming of variables, your willingness and flexibility to do what it takes to make something work for either a customer or a teammate, and your constant proactiveness in making sure we have as good an environment to work in and as good a product for our customers. There’s more, but these are a few of the things I’ll miss about working with you. Best of luck with everything going forward, and see you soon!",
  },
  {
    name: "Ryan T",
    text: "Dmitriy, I really appreciated all the insights and perspective you shared with me from day one. I always left our conversations with clear ideas about things we could improve in EPD. Thank you for your honesty and commitment to making the Remix product and team better. We'll miss that, and of course you, tremendously.",
  },
  {
    name: "Charlie",
    text: "We didn't work together much, but I know Remix wouldn't be what it is without you. We'll miss you!",
  },
  {
    name: "Tiffany",
    text: "Dmitriy: I have so much gratitude for everything that you have brought to every single product at Remix over our company lifetime. We would not be in the same place today without you. You've been a fundamental part of our journey and our team and we will miss you very, very much. Hope your next place loves you and Kuzy as much as we do :) ",
  },
  {
    name: "Loren",
    text: "Dmitriy! I'm really going to miss working with you. You are always a solid presence on every team you join, and I've been lucky to have you on a number of different teams I've worked with. Getting on the whiteboard together and sketching out some wild ideas have been some of my favorite Remix memories. I hope your next adventure is great, and that I see you around!",
  },
  {
    name: "Janice",
    text: "Dmitriy, thank you for bringing your thoughtfulness and passion to Remix. You've contributed so much and you will be missed, but I'm excited to see where your next adventure takes you. Best of luck! ",
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
