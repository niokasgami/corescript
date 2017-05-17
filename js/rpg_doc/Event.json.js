/**
 * The json structure of the event.
 * 
 * @typedef {Object} MV.JSON.Event
 * 
 * @property {Number} id The event id
 * 
 * @property {String} name The event name
 * 
 * @property {String} note The event note
 * 
 * @property {Number} x The event x coordinate
 * 
 * @property {Number} y The event y coordinate
 * 
 * @property {Array<MV.JSON.EventPage>} pages The array of event page
 */

/**
 * The JSON data structure of an event page.
 * 
 * @typedef {Object} MV.JSON.EventPage
 * 
 * @property {MV.JSON.EventPage} conditions The page conditions
 * 
 * @property {MV.JSON.Image} image The event image
 * 
 * @property {Number} moveType The event movement type
 * 
 * @property {Number} moveSpeed The event movement speed
 */

/**
 * The JSON data structure of an event command.
 * 
 * @typedef {Object} MV.JSON.EventCommand
 * 
 * @property {Number} code The event command code
 * 
 * @property {Number} indent The event command depth
 * 
 * @property {Array<String>} parameters The parameters according to the command code
 */

/**
 * The documentation basic info.
 * 
 * @namespace 
 */
const MV = MV || {};
MV.documentation = MV.documentation || {};
MV.documentation.author = 'Nio Kasgami';
MV.documentation.version = "1.0.0";