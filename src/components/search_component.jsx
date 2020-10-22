import React, { useState } from 'react';
import {getAllData} from '../util';
import SearchResults from './results/search_results';
import PinnedResults from './pins/pinned_results';

const SearchComponent = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [data] = useState(getAllData());
    const [searchResults, setSearchResults] = useState([]);
    const [pinnedItems, setPinnedItems] = useState(new Set());

    const handleInput = event => {
        setSearchQuery(event.target.value)
    }

    const reset = () => {
        setSearchQuery('');
    }

    const filterData = (query) => {
        setSearchResults([])
        let results = []

        for (let file in data) {
            for (let item of data[file]) {
                if (item.matching_terms.includes(query.toLowerCase())) {
                    item['category'] = file[0].toUpperCase() + file.slice(1)
                    results.push(item)
                }
            }
        }

        setSearchResults(results)
    }

    const handleKeyPress = e => {
        if (e.which === 13) {
            filterData(searchQuery)
        }
    }

    return (
        <div>
            <input 
                text="search"
                value={searchQuery}
                onChange={handleInput}
                onKeyPress={handleKeyPress}
            />
            <button onClick={() => filterData(searchQuery)}>Search</button>
            <button onClick={() => reset()}>Clear</button>
            <div className="results-container">
                <PinnedResults
                    pinnedItems={pinnedItems}
                    setPinnedItems={setPinnedItems}
                />
                <SearchResults
                    searchResults={searchResults}
                    setSearchResults={setSearchResults}
                    pinnedItems={pinnedItems}
                    setPinnedItems={setPinnedItems}
                />
            </div>
        </div>
    )
}

export default SearchComponent;