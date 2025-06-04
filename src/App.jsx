import {CORE_CONCEPTS} from "./data.js";
import {Header} from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton";

function handleSelect(selectedButton){
    switch(selectedButton){
        case "Components":
            document.getElementById("DynamicContent").innerHTML = "Components";
            break;
        case "JSX":
            document.getElementById("DynamicContent").innerHTML = "JSX";
            break;
        case "Props":
            document.getElementById("DynamicContent").innerHTML = "Props";
            break;
        case "State":
            document.getElementById("DynamicContent").innerHTML = "State";
            break;
    }
}
function App() {
  return (
    <div>
      <Header></Header>
      <main>
          <section id="core-concepts">
              <h2>Core Concepts</h2>
              <ul>
                  <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
                  <CoreConcept {... CORE_CONCEPTS[1]}/>
                  <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
                  <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>
              </ul>
          </section>
          <section id="examples">
              <h2>Examples</h2>
              <menu>
                  <TabButton onSelect={() => handleSelect("Components")}>Components</TabButton>
                  <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
                  <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
                  <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
              </menu>
              <p id="DynamicContent">Please select an example</p>
          </section>
      </main>
    </div>
  );
}
export default App;
