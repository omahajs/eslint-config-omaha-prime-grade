var ALLOWED_MAGIC_NUMBERS  = [-1, 0, 1, 10, 100, 1000];
var MAX_ALLOWED_COMPLEXITY = 5;
var MAX_LINE_LENGTH        = 150;
/*
 fix --> indicates that rule can be "auto-fixed" by ESLint
*/
module.exports = {
    env: {
        // node: true,
        // es6: true,
        browser: true
    },
    globals: {
        Promise: true,
        module: true,
        exports: true
    },
    plugins: ['compat'],
    rules: {
        'compat/compat': ['error'],
 /*fix*/'arrow-body-style': ['error', 'as-needed'],
 /*fix*/'arrow-parens': ['error', 'as-needed'],
 /*fix*/'array-bracket-spacing': ['warn'],
        'block-scoped-var': ['error'],
        'brace-style': ['warn', '1tbs', {allowSingleLine: true}],
        'camelcase': ['warn'],
        'comma-dangle': ['warn', 'never'],
 /*fix*/'comma-spacing': ['warn'],
        'comma-style': ['warn'],
        'complexity': ['warn', MAX_ALLOWED_COMPLEXITY],
        'curly': ['error'],
        'default-case': ['error'],
        'dot-location': ['error', 'property'],
        'dot-notation': ['warn'],
        'eqeqeq': ['error'],
        'guard-for-in': ['error'],
 /*fix*/'indent': ['warn', 4, {SwitchCase: 1}],
        'key-spacing': ['warn', {beforeColon: false, afterColon: true, mode: 'minimum'}],
 /*fix*/'keyword-spacing': ['warn'],
 /*fix*/'linebreak-style': ['warn', 'unix'],
        'max-depth': ['warn', 3],
        'max-len': ['warn', {code: MAX_LINE_LENGTH, comments: 200}],
        'max-nested-callbacks': ['warn', 4],
        'max-params': ['warn', 5],
        'new-cap': ['warn'],
        'no-alert': ['warn'],
        'no-array-constructor': ['warn'],
        'no-console': ['warn'],
        'no-constant-condition': ['error'],
        'no-const-assign': ['error'],
        'no-debugger': ['error'],
 /*fix*/'no-extra-semi': ['error'],
        'no-empty': ['warn'],
        'no-eval': ['error'],
        'no-fallthrough': ['error'],
        'no-floating-decimal': ['warn'],
        'no-implied-eval': ['error'],
        'no-irregular-whitespace': ['error'],
        'no-magic-numbers': ['warn', {ignore: ALLOWED_MAGIC_NUMBERS}],
        'no-multiple-empty-lines': ['warn', {max: 1}],
 /*fix*/'no-multi-spaces': ['warn', {exceptions: {VariableDeclarator: true, Property: true}}],
        'no-redeclare': ['error'],
 /*fix*/'no-spaced-func': ['warn'],
 /*fix*/'no-trailing-spaces': ['warn'],
        'no-undef': ['error'],
        'no-unexpected-multiline': ['error'],
        'no-unreachable': ['error'],
        'no-unused-vars': ['error'],
        'no-use-before-define': ['error', {functions: false}],
        'no-with': ['error'],
        'one-var': ['warn', 'never'],
        'one-var-declaration-per-line': ['warn'],
 /*fix*/'prefer-const': ['error'],
 /*fix*/'prefer-spread': ['error'],
 /*fix*/'prefer-template': ['error'],
 /*fix*/'quote-props': ['warn', 'as-needed'],
 /*fix*/'quotes': ['warn', 'single'],
        'radix': ['warn'],
 /*fix*/'semi': ['error', 'always'],
        'space-before-blocks': ['warn'],
        'space-before-function-paren': ['warn', 'never'],
 /*fix*/'space-in-parens': ['warn'],
 /*fix*/'space-infix-ops': ['warn'],
 /*fix*/'space-unary-ops': ['warn'],
        'strict': ['error'],
        'valid-jsdoc': ['error'],
        'valid-typeof': ['error'],
 /*fix*/'wrap-iife': ['warn'],
        'yoda': ['warn']
    }
};
