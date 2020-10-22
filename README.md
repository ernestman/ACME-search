# ACME Co. Search

## Problem

Alice is about to head into a meeting with Acme Co. She visits https://foo.com which has a search box where she types "Acme Co." and gets content from various data sources (listed below) relevant to the upcoming meeting.

Data Sources:
- Contacts
- Dropbox file
- Slack message/thread
- Calendar Entry
- Twitter

Each item has a ```matching_terms``` field, you could treat that as the set of query terms which will retrieve that item (so you don't have to bother with actually searching content).

Feel free to edit the schema, add or remove entries, etc. The attached files are just a starting point. For example, if you'd like to add more random tweets to demonstrate scrolling updates, feel free to generate random ones. The ordering of search results is unspecified, feel free to do whatever you feel like. Do share any thoughts you have about ranking though.

## Requirements

Build a search UI that supports searching over the items contained in the JSON files. There should be a search box where the user can type, press a button, and see content that matches the search query.

Additionally, please pick one of these "advanced" features to implement:
- User interaction with search results (pin, delete, tagging)

## How to run the project
- Install Node and NPM 
- Open terminal/command line and clone the git repository
- Run ```npm install```
- Run ```npm start```
- Navigate to (http://localhost:3000)


## Main Features
- Implemented a search UI where users can search over items contained in JSON files
- The search box produces search results for items that match the query
- Implemented user interaction with search results, where users can pin and unpin certain results and items from the search data

## Approach
- One of the main design decisions/tradeoffs that I had to make for this project was how I was going to structure the application state for the pinned items. Using an array to as the main data structure was not optimal, because pinned items should be unique and users should not be able to pin the same item more than once. I figured, using a JavaScript set would be the most optimal because it would only add unique items to the set of pinned items. 
- Another main design decision I made was the use React Hooks. React hooks make it easier to follow and make our code cleaner to read when handling local state and we can group different entities separately instead of keeping one large object as the main structure of our application state. 
- The functionality of the search bar is improved by adding logic using keyboard navigation, allowing the user to search results by hitting the enter key when searching for items.