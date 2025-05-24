# JavaScript Utility Functions

A collection of JavaScript utility functions for common tasks.

## Installation

```bash
npm install @elzazo/main-utils
```

## Usage

```javascript
const utils = require("@elzazo/main-utils");

// Format a date
const formattedDate = utils.getFormattedDateTime();
console.log(formattedDate.datetime); // "DD/MM/YYYY HH:MM:SS"

// Convert seconds to duration
const duration = utils.secondsToDuration(175);
console.log(duration); // "00:02:55"
```

## Available Functions

### Date and Time

- **datetimeToDuration(datetime)** - Converts a datetime to a human-readable duration (e.g., "2 years ago")
- **getFormattedDateTime(seconds)** - Returns formatted date and time strings
- **secondsToDuration(seconds)** - Converts seconds to a formatted duration string (HH:MM:SS)

### String and Number Formatting

- **separateNumbers(number)** - Formats a number with space separators (e.g., "1 000 000")
- **setLenByCaracter(text, options)** - Sets the length of a string by adding characters
- **setLenByZero(num, len)** - Adds leading zeros to a number
- **setLenBySpace(text, len)** - Adds trailing spaces to a string

### Object Utilities

- **getKeys(obj)** - Extracts all keys from an object, including nested keys using dot notation
- **isObject(value)** - Checks if a value is a plain JavaScript object

### Random Utilities

- **getRandomNumber(max)** - Generates a random integer between 0 and the specified maximum value

## Error Handling

All functions include proper error handling and will return appropriate fallback values if errors occur.

## License

ISC
