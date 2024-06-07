export const mapGroups = [

    {
        category: "Map Operations",
        description: "Methods for performing operations on maps, such as adding, deleting, and clearing key-value pairs.",
        methods: [
            { id: 1, name: "clear", method: "clear()", description: "removes all key-value pairs from the Map" },
            { id: 2, name: "delete", method: "delete()", description: "removes the specified element from the Map by key" },
            { id: 3, name: "set", method: "set()", description: "adds or updates an element with a specified key and value to the Map" },
        ]
    },

    {
        category: "Map Retrieval",
        description: "Methods for retrieving values and checking for the existence of keys in a map.",
        methods: [
            { id: 4, name: "get", method: "get()", description: "returns the value associated with the specified key, or undefined if the key does not exist" },
            { id: 5, name: "has", method: "has()", description: "returns a boolean indicating whether an element with the specified key exists in the Map" },
        ]
    },

    {
        category: "Iteration",
        description: "Methods for iterating over the elements of a Map, useful for performing actions on each key-value pair or retrieving entries, keys, and values.",
        methods: [
            { id: 6, name: "entries", method: "entries()", description: "returns a new Iterator object that contains an array of [key, value] for each element in the Map" },
            { id: 7, name: "forEach", method: "forEach()", description: "executes a provided function once for each key-value pair in the Map" },
            { id: 8, name: "keys", method: "keys()", description: "returns a new Iterator object that contains the keys for each element in the Map" },
            { id: 9, name: "values", method: "values()", description: "returns a new Iterator object that contains the values for each element in the Map" },
        ]
    },

    {
        category: "Static Methods",
        description: "Methods available on the Map constructor itself, useful for grouping elements based on a specified criterion.",
        methods: [
            { id: 10, name: "groupBy", method: "groupBy()", description: "groups the elements of an array based on the given function and returns a Map" },
        ]
    },

    {
        category: "Instance Properties",
        description: "Properties available on Map instances, useful for accessing metadata about the Map.",
        methods: [
            { id: 11, name: "size", method: "size", description: "returns the number of key-value pairs in the Map" },
        ]
    },

];