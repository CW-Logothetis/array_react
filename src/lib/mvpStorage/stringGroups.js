export const stringGroups = [

    {
        category: "Static Methods",
        description: "Methods available on the String constructor itself, useful for creating strings from character codes and raw string templates.",
        methods: [
            { id: 1, name: "fromCharCode", method: "String.fromCharCode()", description: "creates a string from the specified sequence of UTF-16 code units" },
            { id: 2, name: "fromCodePoint", method: "String.fromCodePoint()", description: "creates a string from the specified sequence of code points" },
            { id: 3, name: "raw", method: "String.raw()", description: "returns a string created from a raw template string" },
        ]
    },

    {
        category: "Character Access",
        description: "Access individual characters within a string, useful for character-level operations and manipulations.",
        methods: [
            { id: 4, name: "at", method: "at()", description: "returns the character at the specified index" },
            { id: 5, name: "charAt", method: "charAt()", description: "returns the character at the specified index" },
            { id: 6, name: "charCodeAt", method: "charCodeAt()", description: "returns the UTF-16 code unit at the specified index" },
            { id: 7, name: "codePointAt", method: "codePointAt()", description: "returns the Unicode code point at the specified index" },
        ]
    },

    {
        category: "String Comparison",
        description: "Compare strings, useful for sorting, searching, and validating string data.",
        methods: [
            { id: 8, name: "localeCompare", method: "localeCompare()", description: "compares two strings in the current locale" },
        ]
    },

    {
        category: "String Search & Matching",
        description: "Search within strings and match patterns, useful for validation, extraction, and pattern matching.",
        methods: [
            { id: 9, name: "includes", method: "includes()", description: "determines whether one string may be found within another string" },
            { id: 10, name: "indexOf", method: "indexOf()", description: "returns the index of the first occurrence of a specified value" },
            { id: 11, name: "lastIndexOf", method: "lastIndexOf()", description: "returns the index of the last occurrence of a specified value" },
            { id: 12, name: "match", method: "match()", description: "retrieves the result of matching a string against a regular expression" },
            { id: 13, name: "matchAll", method: "matchAll()", description: "returns an iterator of all results matching a string against a regular expression" },
            { id: 14, name: "search", method: "search()", description: "executes a search for a match between a regular expression and this String object" },
            { id: 15, name: "startsWith", method: "startsWith()", description: "determines whether a string begins with the characters of a specified string" },
            { id: 16, name: "endsWith", method: "endsWith()", description: "determines whether a string ends with the characters of a specified string" },
        ]
    },

    {
        category: "String Manipulation",
        description: "Manipulate and transform strings, useful for formatting, modifying, and constructing string data.",
        methods: [
            { id: 17, name: "concat", method: "concat()", description: "combines the text of two or more strings and returns a new string" },
            { id: 18, name: "padEnd", method: "padEnd()", description: "pads the current string with another string until the resulting string reaches the given length" },
            { id: 19, name: "padStart", method: "padStart()", description: "pads the current string with another string until the resulting string reaches the given length" },
            { id: 20, name: "repeat", method: "repeat()", description: "returns a new string which contains the specified number of copies of the string on which it was called" },
            { id: 21, name: "replace", method: "replace()", description: "returns a new string with some or all matches of a pattern replaced by a replacement" },
            { id: 22, name: "replaceAll", method: "replaceAll()", description: "returns a new string with all matches of a pattern replaced by a replacement" },
            { id: 23, name: "slice", method: "slice()", description: "extracts a section of a string and returns it as a new string" },
            { id: 24, name: "split", method: "split()", description: "divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array" },
            { id: 25, name: "substring", method: "substring()", description: "returns the part of the string between the start and end indexes, or to the end of the string" },
            { id: 26, name: "toLocaleLowerCase", method: "toLocaleLowerCase()", description: "returns the calling string value converted to lower case, according to any locale-specific case mappings" },
            { id: 27, name: "toLocaleUpperCase", method: "toLocaleUpperCase()", description: "returns the calling string value converted to upper case, according to any locale-specific case mappings" },
            { id: 28, name: "toLowerCase", method: "toLowerCase()", description: "returns the calling string value converted to lower case" },
            { id: 29, name: "toUpperCase", method: "toUpperCase()", description: "returns the calling string value converted to upper case" },
            { id: 30, name: "trim", method: "trim()", description: "trims whitespace from both ends of the string" },
            { id: 31, name: "trimEnd", method: "trimEnd()", description: "trims whitespace from the end of the string" },
            { id: 32, name: "trimStart", method: "trimStart()", description: "trims whitespace from the beginning of the string" },
        ]
    },

    {
        category: "String Normalization",
        description: "Normalize strings, useful for ensuring consistent string representations.",
        methods: [
            { id: 33, name: "normalize", method: "normalize()", description: "returns the Unicode Normalization Form of the string" },
        ]
    },

    {
        category: "String Conversion",
        description: "Convert strings to other formats, useful for generating string representations for display or storage.",
        methods: [
            { id: 34, name: "toString", method: "toString()", description: "returns a string representing the specified object" },
            { id: 35, name: "toLocaleString", method: "toLocaleString()", description: "returns a localized string representing the specified object" },
            { id: 36, name: "valueOf", method: "valueOf()", description: "returns the primitive value of the specified object" },
        ]
    },

    {
        category: "String Well-Formedness",
        description: "Check and ensure well-formed strings, useful for validating and correcting string data.",
        methods: [
            { id: 37, name: "isWellFormed", method: "isWellFormed()", description: "checks if the string is well-formed" },
            { id: 38, name: "toWellFormed", method: "toWellFormed()", description: "returns a well-formed version of the string" },
        ]
    },

    {
        category: "Instance Properties",
        description: "Properties available on string instances, useful for accessing string metadata.",
        methods: [
            { id: 39, name: "length", method: "length", description: "returns the length of the string" },
        ]
    },

];