const ALLOWED_MAGIC_NUMBERS  = [-1, 0, 1, 2, 3, 10, 100, 1000];
const MAX_ALLOWED_COMPLEXITY = 5;
const MAX_LINE_LENGTH        = 150;
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
    plugins: [
        'compat',
        'promise'
    ],
    rules: {
        'compat/compat': ['error'],
        'promise/param-names': ['warn'],
        'promise/always-return': ['error'],
        'promise/catch-or-return': ['error'],
        'promise/no-return-in-finally': ['warn'],
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
 /*fix*/'curly': ['error'],
        'default-case': ['error'],
 /*fix*/'dot-location': ['error', 'property'],
 /*fix*/'dot-notation': ['warn'],
        'eqeqeq': ['error'],
        'guard-for-in': ['error'],
 /*fix*/'indent': ['warn', 4, {SwitchCase: 1}],
 /*fix*/'key-spacing': ['warn', {beforeColon: false, afterColon: true, mode: 'minimum'}],
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
 /*fix*/'no-debugger': ['error'],
        'no-delete-var': ['error'],
        'no-dupe-keys': ['error'],
 /*fix*/'no-extra-semi': ['error'],
        'no-empty': ['warn'],
        'no-empty-pattern': ['error'],
        'no-eval': ['error'],
        'no-fallthrough': ['error'],
        'no-floating-decimal': ['warn'],
        'no-implied-eval': ['error'],
        'no-irregular-whitespace': ['error'],
        'no-magic-numbers': ['warn', {ignore: ALLOWED_MAGIC_NUMBERS}],
        'no-mixed-spaces-and-tabs': ['warn'],
        'no-multiple-empty-lines': ['warn', {max: 1}],
 /*fix*/'no-multi-spaces': ['warn', {exceptions: {VariableDeclarator: true, Property: true}}],
        'no-new-func': ['error'],
        'no-redeclare': ['error'],
 /*fix*/'no-spaced-func': ['warn'],
 /*fix*/'no-trailing-spaces': ['warn'],
        'no-undef': ['error', {typeof: true}],
 /*fix*/'no-undef-init': ['error'],
        'no-unexpected-multiline': ['error'],
        'no-unreachable': ['error'],
        'no-unused-vars': ['error'],
        'no-use-before-define': ['error', {functions: false}],
 /*fix*/'no-useless-computed-key': ['error'],
        'no-useless-concat': ['error'],
 /*fix*/'no-var': ['error'],
        'no-with': ['error'],
 /*fix*/'object-shorthand': ['error', 'properties'],
 /*fix*/'object-curly-spacing': ['error'],
        'one-var': ['warn', 'never'],
        'one-var-declaration-per-line': ['warn'],
 /*fix*/'prefer-arrow-callback': ['error'],
 /*fix*/'prefer-const': ['error'],
        'prefer-destructuring': ['error'],
        'prefer-rest-params': ['warn'],
 /*fix*/'prefer-spread': ['error'],
 /*fix*/'prefer-template': ['error'],
 /*fix*/'quote-props': ['warn', 'as-needed'],
 /*fix*/'quotes': ['warn', 'single', {allowTemplateLiterals: true}],
        'radix': ['warn'],
 /*fix*/'rest-spread-spacing': ['error', 'never'],
 /*fix*/'semi': ['error', 'always'],
 /*fix*/'space-before-blocks': ['warn'],
 /*fix*/'space-before-function-paren': ['warn', {anonymous: 'never', named: 'never', asyncArrow: 'always'}],
 /*fix*/'space-in-parens': ['warn'],
 /*fix*/'space-infix-ops': ['warn'],
 /*fix*/'space-unary-ops': ['warn'],
 /*fix*/'strict': ['error'],
 /*fix*/'template-curly-spacing': ['error'],
        'valid-jsdoc': ['error'],
        'valid-typeof': ['error'],
 /*fix*/'wrap-iife': ['warn'],
        'yoda': ['warn']
    }
};
