export const arrayGroups = [

    {
        category: "Add/Remove Elements (Mutate)",
        description: "Directly modify the array's length or content to adjust the contents of an array on-the-fly, such as managing lists of items in user interfaces, processing data dynamically, or modifying collections based on real-time inputs.",
        methods: [
            { id: 1, name: "push", method: "push()", description: "adds one or more elements to the end of the array" },
            { id: 2, name: "pop", method: "pop()", description: "removes the last element from the array" },
            { id: 3, name: "shift", method: "shift()", description: "removes the first element from the array" },
            { id: 4, name: "unshift", method: "unshift()", description: "adds one or more elements to the beginning of the array" },
            { id: 5, name: "splice", method: "splice()", description: "adds, removes, or replaces elements in the array" },
        ]
    },

    {
        category: "Sorting & Reversing (Mutate)",
        description: "Reorder the elements of an array, useful for sorting data, reversing the order of elements, and organizing collections.",
        methods: [
            { id: 6, name: "sort", method: "sort()", description: "sorts the elements of an array in place and returns the sorted array" },
            { id: 7, name: "reverse", method: "reverse()", description: "reverses the order of the elements in the array in place" },
        ]
    },

    {
        category: "Filling & Copying (Mutate)",
        description: "Fill or copy elements within an array, useful for initializing arrays, duplicating values, and copying elements.",
        methods: [
            { id: 8, name: "fill", method: "fill()", description: "fills all the elements of an array from a start index to an end index with a static value" },
            { id: 9, name: "copyWithin", method: "copyWithin()", description: "shallow copies part of an array to another location in the same array" },
        ]
    },

    {
        category: "Actions on each element (No new array)",
        description: "Execute actions (side effects) on each element without transforming the array, ideal for actions like logging or applying classes to DOM elements.",
        methods: [
            { id: 10, name: "forEach", method: "forEach()", description: "executes a function for each element in the array. Does not return a new array or mutate the original." },
        ]
    },

    {
        category: "Iteration Utilities (Iterators)",
        description: "Loop over an array with access to the index (keys) or both the index and value (entries), making code cleaner and more readable, especially in scenarios involving complex data structures or operations.",
        methods: [
            { id: 11, name: "keys", method: "keys()", description: "returns the array's keys" },
            { id: 12, name: "values", method: "values()", description: "returns the array's values" },
            { id: 13, name: "entries", method: "entries()", description: "returns the array's key-value pairs" },
        ]
    },

    {
        category: "Direct Element Retrieval",
        description: "Locate elements or their indices in an array based on specific criteria or values, useful for direct access, performing checks, extracting specific items, or manipulating elements based on their positions.",
        methods: [
            { id: 14, name: "includes", method: "includes()", description: "checks if an element is present. Returns boolean. Useful for simple presence checks." },
            { id: 15, name: "indexOf", method: "indexOf()", description: "returns the index of the first occurrence of a specified element" },
            { id: 16, name: "lastIndexOf", method: "lastIndexOf()", description: "returns the index of the last occurrence of a specified element" },
            { id: 17, name: "at", method: "at()", description: "returns the element at a specified index, or undefined if the index is out of bounds" },
        ]
    },

    {
        category: "Conditional Element Search",
        description: "Search within arrays to locate elements or their indices based on specific criteria, useful for direct access, performing checks, extracting specific items, or manipulating elements based on their positions.",
        methods: [
            { id: 18, name: "find", method: "find()", description: "returns the first element that satisfies a condition (or undefined if no elements match)" },
            { id: 19, name: "findIndex", method: "findIndex()", description: "returns the index of the first element that satisfies a condition (or -1 if no elements match)" },
            { id: 20, name: "findLast", method: "findLast()", description: "returns the last element that satisfies a condition (or undefined if no elements match)" },
            { id: 21, name: "findLastIndex", method: "findLastIndex()", description: "returns the index of the last element that satisfies a condition (or -1 if no elements match)" },
        ]
    },

    {
        category: "Condition Testing (Boolean)",
        description: "Test conditions on elements within arrays, useful for data validation, conditional rendering in UIs, or making decisions based on the presence or characteristics of elements.",
        methods: [
            { id: 22, name: "every", method: "every()", description: "checks if all elements pass a test implemented by a function" },
            { id: 23, name: "some", method: "some()", description: "checks if at least one element passes a test implemented by a function" },
        ]
    },

    {
        category: "Transformation (New array)",
        description: "Create new arrays or values based on the original array, useful for data transformation, aggregation, and mapping operations.",
        methods: [
            { id: 24, name: "filter", method: "filter()", description: "creates a new array with all elements that pass a test implemented by a function" },
            { id: 25, name: "map", method: "map()", description: "creates a new array with the results of calling a function on every element" },
            { id: 26, name: "reduce", method: "reduce()", description: "applies a function against an accumulator and each element to reduce it to a single value" },
            { id: 27, name: "reduceRight", method: "reduceRight()", description: "applies a function against an accumulator and each element from right to left to reduce it to a single value" },
            { id: 28, name: "flatMap", method: "flatMap()", description: "maps each element using a mapping function and flattens the result into a new array" },
            { id: 29, name: "flat", method: "flat()", description: "creates a new array with all sub-array elements concatenated into it recursively up to the specified depth" },
        ]
    },

    {
        category: "Concatenation & Slicing (New array)",
        description: "Create new arrays by combining or slicing existing arrays, useful for merging arrays, creating subarrays, and copying portions of arrays.",
        methods: [
            { id: 30, name: "concat", method: "concat()", description: "merges two or more arrays into a new array" },
            { id: 31, name: "slice", method: "slice()", description: "returns a shallow copy of a portion of an array into a new array" },
        ]
    },

    {
        category: "String Conversion",
        description: "Convert arrays to strings, useful for generating string representations of arrays for display or storage.",
        methods: [
            { id: 32, name: "join", method: "join()", description: "joins all elements of an array into a string" },
            { id: 33, name: "toString", method: "toString()", description: "returns a string representing the array and its elements" },
            { id: 34, name: "toLocaleString", method: "toLocaleString()", description: "returns a localized string representing the array and its elements" },
        ]
    },

    {
        category: "Static Methods",
        description: "Methods available on the Array constructor itself, useful for creating arrays, checking if a value is an array, and other utility functions.",
        methods: [
            { id: 35, name: "from", method: "Array.from()", description: "creates a new array instance from an array-like or iterable object" },
            { id: 36, name: "isArray", method: "Array.isArray()", description: "checks if a value is an array" },
            { id: 37, name: "of", method: "Array.of()", description: "creates a new array with a variable number of arguments, regardless of number or type of arguments" },
        ]
    },

];