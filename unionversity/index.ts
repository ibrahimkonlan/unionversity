import courses from './courses';
import studyGroups from './studyGroups';

 //Setting the types
type Course = {
	id: number;
	studyGroupId: number;
	title: string;
	keywords: string[];
	eventType: string;
};
type StudyGroup = {
	id: number;
	courseId: number;
	title: string;
	keywords: string[];
	eventType: string;
};
type SearchEventsOptions = {
	query: string|number;
	eventType: 'courses'|'groups';
};
let enrolledEvents: (Course|StudyGroup)[] = [];


const searchEvents=(options: SearchEventsOptions)=>{
const events: (Course|StudyGroup)[] = options.eventType === 'courses' ? courses : studyGroups;
 return events.filter(event => {
		if (typeof options.query === 'number') {
			return event.id === options.query;
		}
		if (typeof options.query === 'string') {
			return event.keywords.includes(options.query);
		}
	});
}

const enroll=(events: (Course|StudyGroup)[])=>{
 	events.forEach(event => {
		enrolledEvents.push(event);
	});
}

/**
 * Removes a course from enrolled ones.
 * @param id : number
 */
const deroll=(id: number) =>{
	enrolledEvents = enrolledEvents.filter(event => event.id !== id);
}

/**
 * prints only the titles of your enrolled events
 */
const printList=()=>{
	enrolledEvents.forEach(event => {
		console.log(event.title);
	});
}


const searchResults = searchEvents({query: 'art', eventType: 'courses'});
// enroll(searchResults);
// deroll(1);
// printList();
console.log(searchResults); // Used for early testing in the project.
