
/**
 * The JSON data structure of a class.
 * 
 * @typedef {Object} MV.JSON.Class
 * @property {Number} id The class ID
 * @property {String} name The class name
 * @property {String} note The class note field
 * @property {MV.JSON.Traits[]} traits The class traits
 * @property {Number[]} expParams The array of value that decides the exp curve.
 * @property {Number[][]} params The two-dimensionnal array containing the parameters values
 */
const MV = MV || {};
MV.documentation = MV.documentation || {};
MV.documentation.author = 'Nio Kasgami';
MV.documentation.version = "1.0.0";