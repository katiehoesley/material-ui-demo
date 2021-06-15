import IndividualItem from './IndividualItem'

const GroceryList = ( { items } ) => {
    const formattedList = items.map(item => {
        return <IndividualItem item={item} />
    })

    return(
        <div id="list">
           <h3>Grocery List</h3>
            <ul>{ formattedList }</ul>
        </div>
    )
}

export default GroceryList