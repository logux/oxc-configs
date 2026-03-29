export default {
  plugins: ['import', 'node', 'unicorn'],
  jsPlugins: ['eslint-plugin-prefer-let'],
  categories: {
    correctness: 'error',
    suspicious: 'error'
  },
  options: {
    typeAware: true,
    typeCheck: true
  },
  env: {
    builtin: true,
    es2024: true,
    node: true
  },
  globals: {
    document: 'readonly',
    window: 'readonly'
  },
  rules: {
    'import/first': 'error',
    'import/no-absolute-path': [
      'error',
      {
        amd: false,
        commonjs: true,
        esmodule: true
      }
    ],
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-webpack-loader-syntax': 'error',

    'prefer-let/prefer-let': [
      'error',
      {
        forceUpperCaseConst: true
      }
    ],

    'node/global-require': 'error',
    'node/handle-callback-err': ['error', '^(err|error)$'],
    'node/no-exports-assign': 'error',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',

    'accessor-pairs': [
      'error',
      {
        enforceForClassMembers: true,
        setWithoutGet: true
      }
    ],
    'array-callback-return': [
      'error',
      {
        allowImplicit: false,
        checkForEach: false
      }
    ],
    'curly': ['error', 'multi-line'],
    'default-case-last': 'error',
    'eqeqeq': [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    'new-cap': [
      'error',
      {
        capIsNew: false,
        newIsCap: true,
        properties: true
      }
    ],
    'no-array-constructor': 'error',
    'no-case-declarations': 'error',
    'no-console': 'error',
    'no-constant-condition': [
      'error',
      {
        checkLoops: false
      }
    ],
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],
    'no-fallthrough': 'error',
    'no-labels': [
      'error',
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-multi-str': 'error',
    'no-nested-ternary': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-object-constructor': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': [
      'error',
      {
        builtinGlobals: false
      }
    ],
    'no-regex-spaces': 'error',
    'no-return-assign': ['error', 'except-parens'],
    'no-self-assign': [
      'error',
      {
        props: true
      }
    ],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false
      }
    ],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true
      }
    ],
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        vars: 'all'
      }
    ],
    'no-use-before-define': [
      'error',
      {
        classes: false,
        functions: false,
        variables: false
      }
    ],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-return': 'error',
    'no-var': 'warn',
    'no-void': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'symbol-description': 'error',
    'use-isnan': [
      'error',
      {
        enforceForIndexOf: true,
        enforceForSwitchCase: true
      }
    ],
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true
      }
    ],
    'yoda': ['error', 'never']
  },
  overrides: [
    {
      files: ['**/*.test.{js,jsx}', '**/*.test.{ts,tsx}'],
      rules: {
        'node/global-require': 'off',
        'no-unused-expressions': 'off'
      }
    },
    {
      plugins: ['import', 'node', 'unicorn', 'typescript'],
      files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
      rules: {
        'import/extensions': [
          'error',
          'always',
          {
            checkTypeImports: true,
            ignorePackages: true
          }
        ],

        'typescript/ban-ts-comment': [
          'error',
          {
            minimumDescriptionLength: 10
          }
        ],
        'typescript/no-confusing-void-expression': 'error',
        'typescript/no-deprecated': 'error',
        'typescript/no-dynamic-delete': 'off',
        'typescript/no-empty-object-type': 'error',
        'typescript/no-explicit-any': 'error',
        'typescript/no-invalid-void-type': 'off',
        'typescript/no-misused-promises': 'off',
        'typescript/no-mixed-enums': 'error',
        'typescript/no-namespace': 'error',
        'typescript/no-non-null-asserted-nullish-coalescing': 'error',
        'typescript/no-non-null-assertion': 'off',
        'typescript/no-require-imports': 'error',
        'typescript/no-unsafe-argument': 'error',
        'typescript/no-unsafe-assignment': 'error',
        'typescript/no-unsafe-call': 'error',
        'typescript/no-unsafe-function-type': 'error',
        'typescript/no-unsafe-member-access': 'error',
        'typescript/no-unsafe-return': 'error',
        'typescript/only-throw-error': 'error',
        'typescript/prefer-literal-enum-member': 'error',
        'typescript/prefer-promise-reject-errors': 'error',
        'typescript/prefer-reduce-type-parameter': 'error',
        'typescript/prefer-return-this-type': 'error',
        'typescript/related-getter-setter-pairs': 'error',
        'typescript/require-await': 'error',
        'typescript/restrict-plus-operands': [
          'error',
          {
            allowAny: false,
            allowBoolean: false,
            allowNullish: false,
            allowNumberAndString: false,
            allowRegExp: false
          }
        ],
        'typescript/restrict-template-expressions': [
          'error',
          {
            allowNumber: true
          }
        ],
        'typescript/return-await': ['error', 'error-handling-correctness-only'],
        'typescript/unbound-method': 'off',
        'typescript/unified-signatures': 'error',
        'typescript/use-unknown-in-catch-callback-variable': 'error',
        'typescript/array-type': 'error',
        'typescript/consistent-type-imports': 'error',
        'typescript/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true
          }
        ],
        'typescript/no-import-type-side-effects': 'error',
        'typescript/no-unsafe-type-assertion': 'error',
        'typescript/no-var-requires': 'error',

        'constructor-super': 'off',
        'no-class-assign': 'off',
        'no-const-assign': 'off',
        'no-dupe-keys': 'off',
        'no-func-assign': 'off',
        'no-import-assign': 'off',
        'no-new-native-nonconstructor': 'off',
        'no-obj-calls': 'off',
        'no-redeclare': 'error',
        'no-setter-return': 'off',
        'no-this-before-super': 'off',
        'no-unsafe-negation': 'off',
        'no-var': 'error',
        'no-with': 'off',
        'prefer-const': 'off',
        'no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTaggedTemplates: true,
            allowTernary: true
          }
        ],
        'no-throw-literal': 'off',
        'prefer-promise-reject-errors': 'off',
        'require-await': 'off'
      }
    },
    {
      files: [
        '**/*.{test.ts,test.tsx,stories.tsx}',
        '**/types.ts',
        '**/test/*'
      ],
      rules: {
        'typescript/ban-ts-comment': 'off',
        'typescript/no-explicit-any': 'off',
        'typescript/no-floating-promises': 'off',
        'typescript/no-unsafe-argument': 'off',
        'typescript/no-unsafe-assignment': 'off',
        'typescript/no-unsafe-call': 'off',
        'typescript/no-unsafe-member-access': 'off',
        'typescript/no-unsafe-return': 'off',
        'typescript/no-unsafe-type-assertion': 'off',
        'typescript/restrict-plus-operands': 'off',
        'typescript/use-unknown-in-catch-callback-variable': 'off',

        'no-unused-expressions': 'off'
      }
    },
    {
      files: ['**/types.ts'],
      rules: {
        'typescript/no-floating-promises': 'off',

        'no-console': 'off'
      }
    },
    {
      files: ['**/*.cts'],
      rules: {
        'typescript/no-require-imports': 'off',
        'typescript/no-var-requires': 'off'
      }
    }
  ]
}
