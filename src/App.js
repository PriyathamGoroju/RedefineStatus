import status from "./leadership.avif";
import Section1 from "./section1";
import paragraphs from "./paragraph.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img className="Headerpic" src={status} alt="redefine status" />
      <div className="subApp">
        <header className="App-header">
          <h1 className="headerTitle">🌟Redefine Status</h1>
        </header>
        <br/>
        <p className="Question">How We Can Correct Mankind's Leaderboard </p>
        <br /><br/>
        <h3 className="Question" style={{ color: "red" }}>
          Overview of the problem
        </h3>
        <Section1 />
        <div className="quote">
          {paragraphs.quote.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <br />
        <h3 className="Question" style={{ color:'skyblue' }}>
          Deeper Dive
        </h3>
        <div className="para">
          {paragraphs.deeperDiveContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="quote">
          {paragraphs.marketQuote1.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="quote">
          {paragraphs.marketQuote2.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <h3 className="Question" style={{ color:'purple' }}>
          Simple Solution
        </h3>
        <p><b>Thought experiments make it obvious that this idea is memetic, and just has not been tried in the market. Once one initial company opens up this model, many more will follow and copy:</b></p>
        <div className="para">
          {paragraphs.simpleSol.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <h3 className="Question" style={{ color:'orange' }}>
          Large Scale Culturing
        </h3>
        <p><b>Making Altruism Culturally High Status.</b></p>
        <div className="para">
          {paragraphs.largeScale.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <h3 className="Question" style={{ color:'green' }}>
          Bringing The Inevitable Future Forward
        </h3>
        <div className="para">
          {paragraphs.future.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <h3 className="Question">
          We have a coordination test for humanity.
        </h3>
        <div className="para">
          {paragraphs.test.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="quote">
          {paragraphs.finalQuote.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="para">
          {paragraphs.test2.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <br/>
          <p><em>If we can change whats cool, then love can rule.</em></p>
          <br/>
          <p>If you are moved, then let's move mountains.</p>
        </div>
        <br/>
        <br/>
        <a href="https://redefinestatus.com/" style={{color:'white'}}>source : redefinestatus.com</a>



      </div>
    </div>
  );
}

export default App;
