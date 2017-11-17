module.exports = {
    "globals": {
        "module": true,
        "Cypress": true,
        "cy": true,
        "exports": true
    },
    "env": {
        "browser": true,
        "es6": true,
        "amd": true,
        "jasmine": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "align": "value",
        "mode": "strict",
        "space-in-parens": [
            "error", "always"
        ],
        "objectsInObjects": false,
        "arraysInObjects": false,
        "before": true,
        "after": true
    }
};