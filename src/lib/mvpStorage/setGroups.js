export const setGroups = [

    {
        category: "Set Operations",
        description: "Methods for performing operations on sets, such as adding, deleting, and clearing elements, as well as performing set operations like union, intersection, and difference.",
        methods: [
            { id: 1, name: "add", method: "add()", description: "adds a new element with a specified value to the Set" },
            { id: 2, name: "clear", method: "clear()", description: "removes all elements from the Set" },
            { id: 3, name: "delete", method: "delete()", description: "removes the specified element from the Set" },
            { id: 4, name: "difference", method: "difference()", description: "returns a new Set containing elements that are in the first Set but not in the second Set" },
            { id: 5, name: "intersection", method: "intersection()", description: "returns a new Set containing elements that are in both Sets" },
            { id: 6, name: "symmetricDifference", method: "symmetricDifference()", description: "returns a new Set containing elements that are in either of the Sets but not in both" },
            { id: 7, name: "union", method: "union()", description: "returns a new Set containing all elements from both Sets" },
        ]
    },

    {
        category: "Set Membership",
        description: "Methods for checking membership and relationships between sets, such as checking if an element exists, or if one set is a subset or superset of another.",
        methods: [
            { id: 8, name: "has", method: "has()", description: "returns a boolean indicating whether an element with the specified value exists in the Set" },
            { id: 9, name: "isDisjointFrom", method: "isDisjointFrom()", description: "returns a boolean indicating whether the Sets have no elements in common" },
            { id: 10, name: "isSubsetOf", method: "isSubsetOf()", description: "returns a boolean indicating whether the Set is a subset of another Set" },
            { id: 11, name: "isSupersetOf", method: "isSupersetOf()", description: "returns a boolean indicating whether the Set is a superset of another Set" },
        ]
    },

    {
        category: "Iteration",
        description: "Methods for iterating over the elements of a Set, useful for performing actions on each element or retrieving entries, keys, and values.",
        methods: [
            { id: 12, name: "entries", method: "entries()", description: "returns a new Iterator object that contains an array of [value, value] for each element in the Set" },
            { id: 13, name: "forEach", method: "forEach()", description: "executes a provided function once for each value in the Set" },
            { id: 14, name: "keys", method: "keys()", description: "returns a new Iterator object that contains the values for each element in the Set" },
            { id: 15, name: "values", method: "values()", description: "returns a new Iterator object that contains the values for each element in the Set" },
            { id: 16, name: "iterator", method: "Set.prototype[@@iterator]()", description: "returns a new Iterator object that contains the values for each element in the Set" },
        ]
    },

    {
        category: "Instance Properties",
        description: "Properties available on Set instances, useful for accessing metadata about the Set.",
        methods: [
            { id: 17, name: "size", method: "size", description: "returns the number of elements in the Set" },
        ]
    },

];