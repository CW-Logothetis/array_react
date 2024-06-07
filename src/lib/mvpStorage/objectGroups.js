export const objectGroups = [

    {
        category: "Property Definition & Manipulation",
        description: "Define, configure, and manipulate properties on objects, useful for setting up object structures, controlling property behavior, and managing object data.",
        methods: [
            { id: 1, name: "defineProperty", method: "Object.defineProperty()", description: "defines a new property directly on an object, or modifies an existing property on an object, and returns the object" },
            { id: 2, name: "defineProperties", method: "Object.defineProperties()", description: "defines new or modifies existing properties directly on an object, returning the object" },
            { id: 3, name: "getOwnPropertyDescriptor", method: "Object.getOwnPropertyDescriptor()", description: "returns a property descriptor for a named property on an object" },
            { id: 4, name: "getOwnPropertyDescriptors", method: "Object.getOwnPropertyDescriptors()", description: "returns an object containing all own property descriptors for an object" },
        ]
    },

    {
        category: "Prototype & Inheritance",
        description: "Manage and interact with object prototypes and inheritance chains, useful for setting up inheritance structures and prototype-based operations.",
        methods: [
            { id: 5, name: "create", method: "Object.create()", description: "creates a new object with the specified prototype object and properties" },
            { id: 6, name: "getPrototypeOf", method: "Object.getPrototypeOf()", description: "returns the prototype (i.e., the value of the internal [[Prototype]] property) of the specified object" },
            { id: 7, name: "setPrototypeOf", method: "Object.setPrototypeOf()", description: "sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null" },
            { id: 8, name: "isPrototypeOf", method: "Object.prototype.isPrototypeOf()", description: "checks if an object exists in another object's prototype chain" },
        ]
    },

    {
        category: "Property Retrieval",
        description: "Retrieve properties, keys, values, and entries from objects, useful for iterating over object properties and extracting data.",
        methods: [
            { id: 9, name: "keys", method: "Object.keys()", description: "returns an array of a given object's own enumerable property names" },
            { id: 10, name: "values", method: "Object.values()", description: "returns an array of a given object's own enumerable property values" },
            { id: 11, name: "entries", method: "Object.entries()", description: "returns an array of a given object's own enumerable string-keyed property [key, value] pairs" },
            { id: 12, name: "getOwnPropertyNames", method: "Object.getOwnPropertyNames()", description: "returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object" },
            { id: 13, name: "getOwnPropertySymbols", method: "Object.getOwnPropertySymbols()", description: "returns an array of all symbol properties found directly upon a given object" },
            { id: 14, name: "fromEntries", method: "Object.fromEntries()", description: "transforms a list of key-value pairs into an object" },
        ]
    },

    {
        category: "Property Checking",
        description: "Check for the existence and characteristics of properties on objects, useful for validation and conditional logic based on object properties.",
        methods: [
            { id: 15, name: "hasOwn", method: "Object.hasOwn()", description: "returns a boolean indicating whether the object has the specified property as its own property" },
            { id: 16, name: "hasOwnProperty", method: "Object.prototype.hasOwnProperty()", description: "returns a boolean indicating whether the object has the specified property as its own property (not inherited)" },
            { id: 17, name: "propertyIsEnumerable", method: "Object.prototype.propertyIsEnumerable()", description: "returns a boolean indicating whether the specified property is enumerable" },
        ]
    },

    {
        category: "Object Comparison & Identity",
        description: "Compare objects and check their identity, useful for equality checks and ensuring object uniqueness.",
        methods: [
            { id: 18, name: "is", method: "Object.is()", description: "determines whether two values are the same value" },
        ]
    },

    {
        category: "Object Freezing & Sealing",
        description: "Control the mutability of objects, useful for creating immutable objects and preventing extensions or modifications.",
        methods: [
            { id: 19, name: "freeze", method: "Object.freeze()", description: "freezes an object: other code cannot delete or change its properties" },
            { id: 20, name: "isFrozen", method: "Object.isFrozen()", description: "determines if an object is frozen" },
            { id: 21, name: "seal", method: "Object.seal()", description: "seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable" },
            { id: 22, name: "isSealed", method: "Object.isSealed()", description: "determines if an object is sealed" },
            { id: 23, name: "preventExtensions", method: "Object.preventExtensions()", description: "prevents new properties from ever being added to an object (i.e., prevents future extensions to the object)" },
            { id: 24, name: "isExtensible", method: "Object.isExtensible()", description: "determines if an object is extensible (whether it can have new properties added to it)" },
        ]
    },

    {
        category: "Object Grouping",
        description: "Group objects based on a specified criterion, useful for organizing data and creating categorized collections.",
        methods: [
            { id: 25, name: "groupBy", method: "Object.groupBy()", description: "groups the elements of an array based on the given function and returns an object" },
        ]
    },

    {
        category: "Instance Methods",
        description: "Methods available on object instances, useful for operations directly on object instances.",
        methods: [
            { id: 26, name: "toString", method: "Object.prototype.toString()", description: "returns a string representing the object" },
            { id: 27, name: "toLocaleString", method: "Object.prototype.toLocaleString()", description: "returns a localized string representing the object" },
            { id: 28, name: "valueOf", method: "Object.prototype.valueOf()", description: "returns the primitive value of the specified object" },
        ]
    },

    {
        category: "Object Cloning & Merging",
        description: "Clone objects and merge properties from one or more source objects to a target object, useful for creating copies and combining object data.",
        methods: [
            { id: 29, name: "assign", method: "Object.assign()", description: "copies all enumerable own properties from one or more source objects to a target object. It returns the target object." },
        ]
    },

];