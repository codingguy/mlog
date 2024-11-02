/*
MIT License

Copyright (c) 2024 codingguy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const levels = {
    TRACE: 'TRACE',
    DEBUG: 'DEBUG',
    INFO: 'INFO',
    WARN: 'WARN',
    ERROR: 'ERROR'
};

const levelColors = {
    TRACE: 'color: gray',
    DEBUG: 'color: yellow',
    INFO: 'color: green',
    WARN: 'color: orange',
    ERROR: 'color: red'
};

class MLog {
    constructor(moduleName = null) {
        this.level = levels.TRACE;
        this.moduleName = moduleName;
        this.currentPage = this.getCurrentPage();
    }

    setLevel(level) {
        if (levels[level]) {
            this.level = level;
        } else {
            console.warn(`Invalid log level: ${level}`);
        }
    }

    getCurrentPage() {
        const pages = getCurrentPages();
        if (pages.length) {
            return pages[pages.length - 1].route;
        }
        return 'unknown';
    }

    log(level, ...args) {
        if (Object.values(levels).indexOf(level) >= Object.values(levels).indexOf(this.level)) {
            const moduleName = this.moduleName || this.currentPage;
            const color = levelColors[level] || 'color: black';
            console.log(`%c[${level}] [${moduleName}]`, color, ...args);
        }
    }

    trace(...args) {
        this.log(levels.TRACE, ...args);
    }

    debug(...args) {
        this.log(levels.DEBUG, ...args);
    }

    info(...args) {
        this.log(levels.INFO, ...args);
    }

    warn(...args) {
        this.log(levels.WARN, ...args);
    }

    error(...args) {
        this.log(levels.ERROR, ...args);
    }
}

module.exports = {
    MLog
};