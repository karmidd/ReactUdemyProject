export default function CoreConcept({image, title, description}){ //or can use props as param, then props.image, and so on
    return (
        <li>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}