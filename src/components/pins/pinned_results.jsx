import React from 'react';
import PinnedItem from '../pins/pinned_item';

const PinnedResults = (props) => {

    let pinnedItems = [...props.pinnedItems]

    pinnedItems = pinnedItems.map( (item, idx) => (
        <PinnedItem
            item={item}
            pinnedItems={props.pinnedItems}
            setPinnedItems={props.setPinnedItems}
            key={idx}
        />
    ))

    return (
        <div>
            <div>Pinned Items</div>
            <button onClick={() => props.setPinnedItems(new Set())}>Clear Pins</button>
            <div>
                {pinnedItems}
            </div>
        </div>
    )
}

export default PinnedResults;