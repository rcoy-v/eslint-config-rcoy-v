# eslint-config-rcoy-v

ESLint rules aligned with personal preference.

### Example `.eslintrc`
```
{
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "es6": true,
        "mocha": true
    },
    "extends": [
        "rcoy-v/rules/es5",
        "rcoy-v/rules/es6",
        "rcoy-v/rules/mocha",
        "rcoy-v/rules/react"
    ],
    "plugins": [
        "mocha",
        "react"
    ]
}
```
