function App() {
  return <div className="App"></div>;
}

function Accordion() {
  return <div>TODO</div>;
}

function AccordionItem({ number, title, text }) {
  <div className="item">
    <p className="number">{number}</p>
    <p className="title">{title}</p>
    <p className="icon">-</p>
    <div className="content-box">{text}</div>
  </div>;
}

export default App;
