# mlog
Simple Wei Xin mini program log library

## Usage

## Importing the Library

First, import the `MLog` class from the `mlog.js` file:

```js
const { MLog } = require('./mlog');
```

### Creating an Instance

Create an instance of MLog with an optional module name:

```js
const logger = new MLog('MyModule');
```

### Setting the Log Level

Set the log level to control the verbosity of the logs. Available levels are TRACE, DEBUG, INFO, WARN, and ERROR:

```js
logger.setLevel('DEBUG');
```

### Logging Messages

Use the following methods to log messages at different levels:

trace: For detailed trace information.
debug: For debugging information.
info: For informational messages.
warn: For warnings.
error: For error messages.


#### Example
Here is a complete example:

```js
const { MLog } = require('./mlog');

const logger = new MLog('MyModule');
logger.setLevel('DEBUG');

logger.trace('This is a trace message');
logger.debug('This is a debug message');
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');
```
