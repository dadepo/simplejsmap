var simplejsmap = (function(){

    var _len = {};
    var _keys = {};	
    		
    //Based on Array Remove - By John Resig (MIT Licensed)
    //http://ejohn.org/blog/javascript-array-remove/
    var _arrayRemove = function (theArray,from, to) {
        var rest = theArray.slice((to || from) + 1 || theArray.length);
        theArray.length = from < 0 ? theArray.length + from : from;
        return theArray.push.apply(theArray, rest);
    }
	
    var _getIndexPos = function (array,value) {
        for (var i in array) {
            if (array[i] === value) {
                //remove array
                return i;
                break;
            } else {
                continue;
            }
        }
    }
	
	
    /** public function that is used to create internal state for the map 
     *@return {Object} Object that maintains the seperate state used for implementing the Map
	 **/
    var createMap = function() {
        var _state = {};
        _state.guid = Math.random() + "-" + new Date().getTime();
        _state.add = add;
        _state.update = update;
        _state.get = get;
        _state.remove = remove;
        _state.getLength = getLength;
        _state.getKeys = getKeys;
        return _state;
    };
	
    
    /**
     * function that add values to a defined map
     * @param {Object | Number} key The key in the map
     * @param {Object | Number} value The value the value to be stored in the map
     * @return {Boolean} returns true if successfully added. returns false if key already exist
     */    
    var add = function(key, value) {
        // act if this key is not already added
        if (typeof this[key] === 'undefined') {
		
            this[key] = value;
			
            // update the array to keep track of keys
            if (typeof _keys[this.guid] === 'undefined') {
                _keys[this.guid] = [];
            }
            _keys[this.guid].push(key);
		
            // Update length
            _len[this.guid] = _len[this.guid] || 0;
            _len[this.guid] += 1;
            return true;
        } else {
            return false;
        }
        
    };
    
    /**
     * function that updates values to a defined map
     * @param key the key in the map
     * @param value the value to be stored in the map
     * @return returns true on success. Returns false if the key does not already exist
     */
    var update = function(key, value) {
        if (typeof this[key] !== 'undefined') {
            this[key] = value;    
            return true;
        } else {
            return false;
        }
    }
	
    /**
     * function that removes an key in a defined map
     * @param key the key in the map to remove
     * @return returns true if successful, returns false if given key does not exists
     */
    var remove = function(key) {
        if (typeof this[key] !== 'undefined') {
            // only delete if key exist
            delete this[key];
		
            _arrayRemove(_keys[this.guid], _getIndexPos(_keys[this.guid],key));
            _len[this.guid] = _len[this.guid] || 0;
            _len[this.guid] -= 1;
            return true;
        } else {
            return false;
        }
    }
	
    /**
     * function that returns the value stored in an key in a defined map
     * @param key the key in the map
     * @return returns the value found at the key. If key does not exist, returns undefined
     */    
    var get = function(key) {
        return this[key];
    };
    
    
    /**
     * function that returns the number of things stored in a particular defined state
     * @return returns int
     */ 
    var getLength = function() {
        return _len[this.guid] || 0;
    }
	
	
    /**
     * function that returns the keys as array
     * @return returns array
     */ 
    var getKeys = function() {
        return _keys[this.guid];
    }


    return {
        createMap:createMap
    }
})();