/**
 * The JSON data structure of an actor.
 * 
 * @typedef {Object} MV.JSON.Actor
 * @property {Number} id The actor id
 * @property {String} name The actor name
 * @property {String} profile The actor profile
 * @property {String} note The actor note field
 * @property {Array<>} traits the actor traits
 * @property {String} nickname The actor nickname
 * @property {Number} classId The actor class ID
 * @property {Number} initialLevel The actor starting level
 * @property {Number} maxLevel The actor max level
 * @property {String} characterName The actor graphics filename
 * @property {Number} characterIndex The character image index
 * @property {String} faceName The actor face graphic filename
 * @property {String} battlerName The side-view battler image filename
 * @property {Array<Number>} equips The actor initialz equipment.
 */
const MV = MV || {};
MV.documentation = MV.documentation || {};
MV.documentation.author = 'Nio Kasgami';
MV.documentation.version = "1.0.0";