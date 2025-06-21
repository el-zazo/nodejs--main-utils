# @elzazo/main-utils

A collection of JavaScript utility functions for common tasks.

## Installation

```bash
npm install @elzazo/main-utils
```

## Usage

```javascript
const utils = require("@elzazo/main-utils");

// Use any of the utility functions
const formattedPrice = utils.formatPrice(1234.56);
```

## Available Utilities

- `arrayIncludes`: Enhanced array includes function
- `datetimeToDuration`: Convert datetime to duration
- `formatPrice`: Format number as price
- `getFormattedDatetime`: Get formatted datetime string
- `getKeys`: Get object keys
- `getRandomNumber`: Generate random number
- `isObject`: Check if value is an object
- `localStorage`: Browser localStorage wrapper
- `secondsToDuration`: Convert seconds to duration
- `separateNumbers`: Separate numbers with delimiter
- `setLen`: Set string length with options
- `wait`: Promise-based delay function
