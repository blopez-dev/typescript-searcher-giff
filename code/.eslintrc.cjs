module.exports = {
  "env": {
    "es2022": true
  },
  "parser": "@typescript-eslint/parser",
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [
          "./src/"
        ],
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".d.ts",
          ".tsx",
          ".json"
        ]
      },
      "alias": {
        "map": [
          [
            "@",
            "./src"
          ],
          [
            "#",
            "./test"
          ],
          [
            "@env",
            "./env"
          ],
          [
            "config",
            "./config"
          ],
          [
            "resources",
            "./resources"
          ],
          [
            "root",
            "."
          ]
        ],
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".d.ts",
          ".tsx",
          ".json"
        ]
      }
    }
  },
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "no-unused-expressions": "off",
    "jest/valid-title": "off",
    "@typescript-eslint/no-empty-function": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  },
  "overrides": [
    {
      "files": [
        "*.js",
        "*.jsx",
        "*.ts",
        "*.tsx"
      ],
      "rules": {
        "simple-import-sort/imports": [
          "error",
          {
            "groups": [
              // Packages `react` related packages come first.
              [
                "^react",
                "^@?\\w"
              ],
              // amiga-fwk
              [
                "^@amiga-fwk-web"
              ],
              // sisu-ds
              [
                "^sisu-ds"
              ],
              // Internal packages.
              [
                "^(@|components)(/.*|$)"
              ],
              // Side effect imports.
              [
                "^\\u0000"
              ],
              // Parent imports. Put `..` last.
              [
                "^\\.\\.(?!/?$)",
                "^\\.\\./?$"
              ],
              // Other relative imports. Put same-folder imports and `.` last.
              [
                "^\\./(?=.*/)(?!/?$)",
                "^\\.(?!/?$)",
                "^\\./?$"
              ],
              // Style imports.
              [
                "^.+\\.?(css)$"
              ]
            ]
          }
        ]
      }
    },
    {
      "files": [
        "*.test.js",
        "*.test.jsx",
        "*.test.ts",
        "*.test.tsx"
      ],
      "rules": {
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off"
      }
    },
    {
      "files": [
        "*.ts",
        "*.tsx"
      ],
      "rules": {
        "no-undef": "off"
      }
    }
  ],
  "extends": [
    "@inditex/eslint-config/typescript",
    "@inditex/eslint-config/react-ts"
  ],
  "plugins": [
    "simple-import-sort"
  ],
  "globals": {
    "JSX": "readonly"
  }
}