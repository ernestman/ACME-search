const calendarData = require('./acme-search/calendar.json');
const contactsData = require('./acme-search/contacts.json');
const dropboxData = require('./acme-search/dropbox.json');
const slackData = require('./acme-search/slack.json');
const tweetData = require('./acme-search/tweet.json');

const dataArray = [calendarData, contactsData, dropboxData, slackData, tweetData]

export const getAllData = () => {
    const data = {}
    
    for (let i = 0; i < dataArray.length; i++) {
        const file = dataArray[i];
        for (let key in file) {
            data[key] = file[key]
        }
    }
    
    return data
}

export const formatDateTime = (datetime, long=false) => {
    const date = new Date(datetime)
    const year = date.getFullYear()
    const day = date.getDate()
    const month = date.getMonth()
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ]
    let hours = date.getHours()
    const ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12 === 0 ? 12 : hours % 12

    let minutes = date.getMinutes()
    minutes = (minutes < 10 ? '0' : '') + minutes

    if (long) {
        return `${months[month]} ${day}, ${year} ${hours}:${minutes}${ampm}`
    } else {
        return `${months[month]} ${day}, ${year}`
    }
}