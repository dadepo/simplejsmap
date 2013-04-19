simplejsmap
===========

A light weight and simple Javascript implementation of maps

<h3>Getting Started</h3>

Include the simplejsmap.js file into your script. The variable simplejsmap would then be available. 

<pre>
<script src="//path/to/simplejsmap.js" type=”text/javascript”></script>
<script type=”text/javascript”>
// simplejsmap now available
</script>
</pre>

I am a big fan of pure Javascript first before framework, thus simplejsmap is not dependent on any Javascript framework; not even jQuery :p

So once you have the script included you ready to go.


<h3>Function reference</h3>


<strong>createMap()</strong>
<pre> var map = simplejsmap.createMap(); </pre>

Creates the map like object and assigns it to variable map. You always start using simplejsmap by calling this function.

<strong>add(key, value)</strong>
<pre>var map = simplejsmap.createMap();
map.add("key1", "value one");</pre>

Adds stuff that needs to be kept. The stuff has a value and is associated with a key. Returns true if successfully added and false if not. If the key is already present, nothing happens and false is returned also. To modify the value of a key that is already added, update() function is used.

key and value can be of any Javascript type.

<strong>update(key, value)</strong>
<pre>var map = simplejsmap.createMap();
map.update("key1", "updated value");
</pre>

Updates the value already added by a given key.  If the given key exists, its value is updated. If the key is not found, no update operationis done. False is returned instead.

<strong>remove(key)</strong>
<pre>
var map = simplejsmap.createMap();
map.remove(“key1”);
</pre>

Removes a value accessible via the given key.  If the given key is already in existence, it is removed and true is returned. If not, false is returned.

<strong>get(key)</strong>
<pre>var map = simplejsmap.createMap();
map.add(“key2”, “Hello World”);
var val = map.get(“key2”);
</pre>
Gets the value stored via given key.

<strong>getLength()</strong>
<pre>var map = simplejsmap.createMap();
var len = map.getLength();
</pre>
Returns the number of stuffs/keys that has been added.

<strong>getKeys()</strong>
<pre>var map = simplejsmap.createMap();
var keys = map.getKeys();
</pre>
Returns all the keys that has been added as an array.