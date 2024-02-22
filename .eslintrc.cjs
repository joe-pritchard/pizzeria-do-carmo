module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        // this section used to parse the contents of <script> tags in .vue files
        parser: '@typescript-eslint/parser',
    },
    extends: ['@nuxt/eslint-config', 'plugin:prettier/recommended'],
    rules: {
        'vue/multi-word-component-names': 'off',
        'prettier/prettier': [
            'warn',
            {
                '#': 'prettier config in here :)',
                singleQuote: true,
                semi: false,
                trailingComma: 'all',
                tabWidth: 4,
                tabs: false,
                arrowParens: 'avoid',
                printWidth: 120,
            },
        ],
    },
}
