# eslint-plugin-object-css

※ This plugin has been migrated into [eslint-plugin-zss-lint](https://www.npmjs.com/package/eslint-plugin-zss-lint).

ESLint plugin for object CSS properties order and valid value verification.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next install `eslint-plugin-object-css`:

```sh
npm install eslint-plugin-object-css --save-dev
```

## Usage

Add object-css to the plugins section of your `.eslintrc` configuration file. You can omit the eslint-plugin- prefix:

```json
{
  "plugins": ["object-css"]
}
```

## Recommended

As for the recommended rules two rules will be enabled with the recess-order is "warn" valid-value is "error".

```json
  "extends": [
    "plugin:object-css/recommended"
  ]
```

## Rules

If you want to set security levels individually set them in the rules.

```json
{
  "rules": {
    "object-css/recess-order": "warn"
    "object-css/valid-value": "error"
  }
}
```

※ If you use typescript you will need a suitable parser like typescript-eslint.  
If you are using eslint v8 and below set `"eslint.useESLintClass": true` in vscode's setting.json.

## Supports ESLint v9 and higher

```sh
npm install @eslint/js typescript-eslint --save-dev
```

If you are using eslint 9 or higher do not use this `useESLintClass`.

### Example config mjs

The following file is a configuration file that contains recommended settings for TypeScript and eslint.

```js
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import objectCss from 'eslint-plugin-object-css'

const eslintConfig = tseslint.config(
  eslint.configs.recommended
  ...tseslint.configs.strict
  objectCss.flatConfigs.recommended
  {
    files: ['**/*.{ts,tsx}']
  }
)

export default eslintConfig
```

## Rule Description

### recess-order

It is created based on the sorting of [stylelint-config-recess-order](https://www.npmjs.com/package/stylelint-config-recess-order).

### valid-value

These are not validated as they have names with unique identifiers.  
Validation includes other standard properties.

- animationName
- counterIncrement
- counterReset
- counterSet
- font
- fontFamily
- gridArea
- gridColumn
- gridColumnEn
- gridColumnStart
- gridRow
- gridRowEnd
- gridRowStart
- listStyleType
- listStyle
- transitionProperty
- transition
- viewTransitionName
- willChange

## License

ISC.
