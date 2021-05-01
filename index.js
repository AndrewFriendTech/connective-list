/**
 * 
 * Takes a string of words and forms them into a grammatically correct list.
 * Example: ["dog","cat","mouse"] will be turned into "dog, cat and mouse"
 * 
 * **Notes**
 * 
 * Doesn't perform any validation on the words themselves.
 * Also does not punctuate the end of the list automatically nor changes capitalization. 
 *  
 * @param {string[]} items words to include in the list 
 * @param {string} [connective = and ] connective for the list.
 * @returns {string} The string of the list of words.
 */

function connectiveList(items,connective){
    if(!items.length){
        throw "items must be an array"
    }
    //allow non english users to set own connective otherwise default to and
    if(!connective){
        connective = "and"
    }

    if(items.length==1){
        return items[0]
    }
    else{
        var string = "";
        //append all the items bar the final two
        for(var i = 0; i < items.length-2;i++)
        {
            string += items[i]+", ";
        }
        //now append the final two
        string += items[items.length-2] + " and " + items[items.length-1];
        return string
    }
}

module.exports = connectiveList;
