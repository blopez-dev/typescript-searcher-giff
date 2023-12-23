module.exports = {
    "env": {
        "es2022": true,
        "browser": true,
        "jest/globals": true,
        "worker": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        // override "simple-import-sort" config
        {
            "files": ["*.js", "*.jsx", "*.ts", "*.tsx"],
            "rules": {
                "simple-import-sort/imports": [
                    "error",
                    {
                        "groups": [
                            // Packages `react` related packages come first.
                            ["^react", "^@?\\w"],
                            // Internal packages.
                            ["^(@|components)(/.*|$)"],
                            // Side effect imports.
                            ["^\\u0000"],
                            // Parent imports. Put `..` last.
                            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                            // Other relative imports. Put same-folder imports and `.` last.
                            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                        ]
                    }
                ]
            }
        },
        {
            "files": ["*.test.js", "*.test.jsx", "*.test.ts", "*.test.tsx"],
            "rules": {
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/no-explicit-any": "off"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": ["@typescript-eslint", "simple-import-sort"],
    "globals": {
        "JSX": "readonly",
        "PUBLIC_PATH": true,
        "__VERSION": true
    },
    "settings": {
        "import/resolver": {
            "node": {
                "paths": ["./src/"],
                "extensions": [".js", ".jsx", ".ts", ".tsx", ".json"]
            },
            "alias": {
                "map": [
                    ["@", "./src"],
                    ["#", "./test"],
                    ["@env", "./env"],
                    ["config", "./config"],
                    ["resources", "./resources"],
                    ["root", "."]
                ],
                "extensions": [".js", ".jsx", ".ts", ".tsx", ".json"]
            }
        }
    },
    "rules": {
        "react/react-in-jsx-scope": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "react/no-unknown-property": ["error", { "ignore": ["test-dataid"] }],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { "vars": "all", "args": "none" }
        ],
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/naming-convention": [
            "error",
            { "selector": "default", "format": ["camelCase"] },
            { "selector": ["class", "typeLike"], "format": ["PascalCase"] },
            {
                "selector": ["variableLike", "memberLike", "method", "enum"],
                "leadingUnderscore": "allowDouble",
                "format": ["PascalCase", "UPPER_CASE", "camelCase"]
            },
            {
                "selector": ["function"],
                "format": ["PascalCase", "camelCase"]
            },
            {
                "selector": "objectLiteralProperty",
                "format": null,
                "modifiers": ["requiresQuotes"]
            }
        ]
    }
}
