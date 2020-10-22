import React from 'react';
import ResultItem from './result_item';

const SearchResults = (props) => {
    const results = props.searchResults.map( (item, idx) => (
        <ResultItem 
            item={item}
            pinnedItems={props.pinnedItems}
            setPinnedItems={props.setPinnedItems}
            key={idx}
        />
    ))

    return (
        <div>
            <div>Search Results</div>
            <button onClick={() => props.setSearchResults([])}>Clear Results</button>
            <div>
                {results}
            </div>
        </div>
    )
}

export default SearchResults;