module.exports = {
    'parser': 'babel-eslint',

    'env': {
        'browser': true,
        'node': true
    },

    rules: {
        'comma-dangle': [2, 'never'],
        'no-console': 1,
        'no-debugger': 1,
        'no-alert': 1,
        'no-cond-assign': [2, 'always'],
        'no-constant-condition': 1,
        'no-control-regex': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty-character-class': 2,
        'no-empty': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 1,
        'no-extra-parens': [1, 'functions'],
        'no-extra-semi': 1,
        'no-func-assign': 2,
        'no-inner-declarations': 2,
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-negated-in-lhs': 2,
        'no-obj-calls': 2,
        'no-regex-spaces': 1,
        'no-sparse-arrays': 2,
        'no-unreachable': 1,
        'use-isnan': 2,
        'no-unexpected-multiline': 2,

        //best practices
        'accessor-pairs': 1,
        'consistent-return': 1,
        'curly': 1,
        'dot-notation': 1,
        eqeqeq: [2, 'smart'],
        semi: [1, 'always'],
        'no-else-return': 1,
        'no-labels': 2,
        'no-eval': 2,
        'no-implied-eval': 2,
        'no-extra-bind': 1,
        'no-invalid-this': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-multi-spaces': 1,
        'no-multi-str': 1,
        'no-native-reassign': 2,
        'no-new-func': 2,
        'no-new': 2,
        'no-redeclare': 1,
        'no-return-assign': 2,
        'no-script-url': 2,
        'no-self-compare': 1,
        'no-sequences': 2,
        'no-unused-expressions': 1,
        'no-useless-call': 2,
        'no-void': 2,
        'no-warning-comments': 1,
        'no-with': 2,
        'radix': 2,
        'yoda': 1,
        'no-delete-var': 2,
        'no-catch-shadow': 1,
        'no-shadow': 0,
        'no-undefined': 2,
        'no-unused-vars': 1,
        'no-use-before-define': [2, 'nofunc'],

        //stylistic
        'array-bracket-spacing': [1, 'never'],
        'brace-style': [2, '1tbs', {'allowSingleLine': true}],
        'camelcase': [2, {'properties': 'always'}],
        'comma-spacing': [1, {'before': false, 'after': true}],
        'comma-style': [2, 'last'],
        'consistent-this': [2, 'self'],
        'eol-last': 1,
        'indent': [1, 2, {'SwitchCase': 1}],
        'key-spacing': 2,
        'linebreak-style': 0,
        'new-cap': 1,
        'new-parens': 2,
        'no-inline-comments': 1,
        'no-lonely-if': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-nested-ternary': 2,
        'no-spaced-func': 1,
        'no-trailing-spaces': 1,
        'no-unneeded-ternary': 2,
        'object-curly-spacing': [2, 'never'],
        'padded-blocks': [1, 'never'],
        'quote-props': [1, 'as-needed', {'keywords': true, 'unnecessary': false }],
        quotes: [1, 'single', 'avoid-escape'],
        'semi-spacing': 1,
        'keyword-spacing': 1,
        'space-before-blocks': 1,
        'space-before-function-paren': [1, {'anonymous': 'always', 'named': 'never'}],
        'space-in-parens': [1, 'never'],
        'space-infix-ops': 1,
        'arrow-spacing': [1, { 'before': true, 'after': true }]
    }
};
