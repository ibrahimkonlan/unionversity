"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./courses");
const studyGroups_1 = require("./studyGroups");
let enrolledEvents = [];
const searchEvents = (options) => {
    const events = options.eventType === 'courses' ? courses_1.default : studyGroups_1.default;
    return events.filter(event => {
        if (typeof options.query === 'number') {
            return event.id === options.query;
        }
        if (typeof options.query === 'string') {
            return event.keywords.includes(options.query);
        }
    });
};
const enroll = (events) => {
    events.forEach(event => {
        enrolledEvents.push(event);
    });
};
/**
 * Removes a course from enrolled ones.
 * @param id : number
 */
const deroll = (id) => {
    enrolledEvents = enrolledEvents.filter(event => event.id !== id);
};
/**
 * prints only the titles of your enrolled events
 */
const printList = () => {
    enrolledEvents.forEach(event => {
        console.log(event.title);
    });
};
const searchResults = searchEvents({ query: 'art', eventType: 'courses' });
// enroll(searchResults);
// deroll(1);
// printList();
console.log(searchResults); // Used for early testing in the project.
