import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "How do bees fly?",
    text: "Bees fly by rapidly beating their wings in a unique, figure-eight pattern, generating lift through both aerodynamic lift and the creation of vortices. Unlike airplanes, bees don’t rely on smooth airflow over rigid wings. Instead, their wings are flexible and beat about 200 times per second, allowing them to stay aloft despite their relatively large bodies. This rapid flapping, combined with subtle changes in wing angle and stroke, enables precise control and maneuverability in the air.",
  },
  {
    title: "How are common chairs assembled?",
    text: "Chairs are typically assembled by joining together pre-made parts such as the seat, backrest, legs, and support structures using screws, bolts, dowels, or adhesives. The process often starts with attaching the legs to the seat frame, followed by securing the backrest and any armrests. In factory settings, assembly may involve machines or hand tools, while flat-pack furniture requires users to assemble the parts themselves using provided instructions and hardware. Once assembled, the chair is checked for stability and comfort.",
  },
  {
    title: "How easy is it to import African herbs and spices into the UK?",
    text: "Importing African spices and herbs into the UK in 2025 is possible but involves several administrative steps and regulatory checks. You’ll need to clear customs declarations (via HM Revenue & Customs) and determine whether your goods are classed as “plant products” requiring phytosanitary/pre‑health certification.You’ll also need to make sure packaging, labelling (e.g., country of origin, ingredients, allergens) and food‑safety standards are met, and check whether any import licences or additional certificates are required. It is doable, but you’ll want to budget time for compliance and possibly extra costs.",
  },
];

function App() {
  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem
          key={el.title}
          title={el.title}
          text={el.text}
          number={index}
        />
      ))}
    </div>
  );
}

function AccordionItem({ number, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  <div className="item">
    <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
    <p className="title">{title}</p>
    <p className="icon">{isOpen ? "-" : "+"}</p>
    {isOpen && <div className="content-box">{text}</div>}
  </div>;
}

export default App;
