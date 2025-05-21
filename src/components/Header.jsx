import reactCoreConceptsImg from "../assets/react-core-concepts.png";

const reactDescriptions = ["Core", "Fundamental", "Crucial"];
function Randomizer(max){
    return Math.floor(Math.random()* (max+1));
}
export function Header(){
    return (
        <header>
            <img src={reactCoreConceptsImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {reactDescriptions[Randomizer(2)]} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}