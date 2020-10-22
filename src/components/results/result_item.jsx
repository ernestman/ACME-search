import React from 'react';
import {formatDateTime} from '../../util';

const ResultItem = (props) => {
    const {item} = props
    const {category} = item

    const handlePinItem = () => {
        const newSet = new Set(props.pinnedItems)
        if (!props.pinnedItems.has(item)) {
            newSet.add(item)
            props.setPinnedItems(newSet)
        }
    }

    if (category === 'Calendar') {
        return (
            <div className="result-item-container">
                <div className="item-top">
                    <div id="item-header">{category}</div>
                    <button onClick={handlePinItem}>Pin</button>
                </div>
                <div className="item-info">
                    <div><span className="title">Title:</span> {item.title}</div>
                    <div><span className="title">Date:</span> {formatDateTime(item.date, true)}</div>
                    <div><span className="title">Invitees:</span> {item.invitees}</div>
                    <div><span className="title">ID:</span> {item.id}</div>
                </div>
            </div>
        )
    } else if (category === 'Contacts') {
        return (
            <div className="result-item-container">
                <div className="item-top">
                    <div id="item-header">{category}</div>
                    <button onClick={handlePinItem}>Pin</button>
                </div>
                <div className="item-info">
                    <div><span className="title">Name:</span> {item.name}</div>
                    <div><span className="title">Phones:</span> {item.phones.join(' | ')}</div>
                    <div><span className="title">Emails:</span> {item.emails.join(' | ')}</div>
                    <div><span className="title">Company:</span> {item.company}</div>
                    <div><span className="title">Last Contact:</span> {formatDateTime(item.last_contact)}</div>
                    <div><span className="title">ID:</span> {item.id}</div>
                </div>
            </div>
        )
    } else if (category === 'Dropbox') {
        return (
            <div className="result-item-container">
                <div className="item-top">
                    <div id="item-header">{category}</div>
                    <button onClick={handlePinItem}>Pin</button>
                </div>
                <div className="item-info">
                    <div><span className="title">Title:</span> {item.title}</div>
                    <div><span className="title">Created:</span> {formatDateTime(item.created)}</div>
                    <div><span className="title">Shared with:</span> {item.shared_with.join(', ')}</div>
                    <div><span className="title">Path:</span> {item.path}</div>
                    <div><span className="title">ID:</span> {item.id}</div>
                </div>
            </div>
        )
    } else if (category === 'Slack') {
        return (
            <div className="result-item-container">
                <div className="item-top">
                    <div id="item-header">{category}</div>
                    <button onClick={handlePinItem}>Pin</button>
                </div>
                <div className="item-info">
                    <div><span className="title">Message:</span> {item.message}</div>
                    <div><span className="title">Author:</span> {item.author}</div>
                    <div><span className="title">Channel:</span> {item.channel}</div>
                    <div><span className="title">Timestamp:</span> {formatDateTime(item.timestamp, true)}</div>
                    <div><span className="title">ID:</span> {item.id}</div>
                </div>
            </div>
        )
    } else if (category === 'Tweet') {
        return (
            <div className="result-item-container">
                <div className="item-top">
                    <div id="item-header">{category}</div>
                    <button onClick={handlePinItem}>Pin</button>
                </div>
                <div className="item-info">
                    <div><span className="title">Message:</span> {item.message}</div>
                    <div>User: {item.user}</div>
                    <div><span className="title">Timestamp:</span> {formatDateTime(item.timestamp)}</div>
                </div>
            </div>
        )
    } 

}

export default ResultItem;