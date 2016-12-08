module.exports = {
    "parser": "babel-eslint",
    "extends": "google",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
      "react"
    ],
    "rules": {
      "no-unused-vars": 0,
      "require-jsdoc": 0,
      "max-len": 0
    }
};
