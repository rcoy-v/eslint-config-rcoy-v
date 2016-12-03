module.exports = {
  "rules": {
    // es5/6 overrides that conflict with react environment
    "new-cap": 0,
    "no-invalid-this": 0,
    "no-extra-parens": [2, "functions"],
    // react plugin rules
    "react/display-name": [2, {"ignoreTranspilerName": true}],
    "react/forbid-component-props": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-boolean-value": [2, "always"],
    "react/jsx-closing-bracket-location": [2, {"nonEmpty": "tag-aligned", "selfClosing": "tag-aligned"}],
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-filename-extension": 0,
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-handler-names": 0,
    "react/jsx-indent-props": [2, 4],
    "react/jsx-indent": [2, 4],
    "react/jsx-key": 0,
    "react/jsx-max-props-per-line": [2, {"maximum": 1}],
    "react/jsx-no-bind": [2, {"allowBind": true}],
    "react/jsx-no-comment-textnodes": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-literals": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-no-target-blank": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-sort-props": 2,
    "react/jsx-space-before-closing": [2, "never"],
    "react/jsx-tag-spacing": [2, {"closingSlash": "never", "beforeSelfClosing": "never", "afterOpening": "never"}],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-wrap-multilines": 2,
    "react/no-children-prop": 2,
    "react/no-danger": 2,
    "react/no-danger-with-children": 2,
    "react/no-deprecated": 0,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-find-dome-node": 0,
    "react/no-is-mounted": 2,
    "react/no-multi-comp": 2,
    "react/no-render-return-value": 0,
    "react/no-set-state": 0,
    "react/no-string-refs": 2,
    "react/no-unescaped-entities": 2,
    "react/no-unknown-property": 2,
    "react/no-unused-prop-types": 2,
    "react/prefer-es6-class": 2,
    "react/prefer-stateless-function": [2, {"ignorePureComponents": true}],
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-optimization": 0,
    "react/require-render-return": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 2,
    "react/sort-prop-types": 2,
    "react/style-prop-object": 2
  }
};
