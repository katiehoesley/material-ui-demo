
const IndividualItem = ( { item }) => {
    return (
        <li id="item">
            Item: {item.name} | Price: {item.price}  
        </li>
    )
}

export default IndividualItem; 

