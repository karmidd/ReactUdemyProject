import {CORE_CONCEPTS} from "./data.js";
import {EXAMPLES} from "./data.js";
import {Header} from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton";
import {useState} from "react";


function App() {
    const [selectedExample, setSelectedExample] = useState();

    function handleSelect(selectedButton){
        setSelectedExample(selectedButton);
    }

  return (
    <div>
      <Header></Header>
      <main>
          <section id="core-concepts">
              <h2>Core Concepts</h2>
              <ul>
                  {CORE_CONCEPTS.map((concept) => <CoreConcept key={concept.title} {... concept}/>)}
                  {/*<CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
                  <CoreConcept {... CORE_CONCEPTS[1]}/>
                  <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
                  <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>*/}
              </ul>
          </section>
          <section id="examples">
              <h2>Examples</h2>
              <menu>
                  <TabButton isSelected={selectedExample === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
                  <TabButton isSelected={selectedExample === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
                  <TabButton isSelected={selectedExample === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
                  <TabButton isSelected={selectedExample === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
              </menu>

                  {!selectedExample ? <p>Please select a topic.</p> : (<div id="tab-content">
                      <h3>{EXAMPLES[selectedExample].title}</h3>
                      <p>{EXAMPLES[selectedExample].description}</p>
                      <pre>
                      <code>{EXAMPLES[selectedExample].code}</code>
                  </pre>
                  </div>)}
          </section>
      </main>
    </div>
  );
}
export default App;
