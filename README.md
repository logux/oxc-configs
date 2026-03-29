# Logux Oxlint & Oxfmt Configs

<img align="right" width="95" height="148" title="Logux logotype"
     src="https://logux.org/branding/logotype.svg">

Shareable code style and best practice for [Logux] projects.

[Logux]: https://logux.org/

---

<img src="https://cdn.evilmartians.com/badges/logo-no-label.svg" alt="" width="22" height="16" />  Made at <b><a href="https://evilmartians.com/devtools?utm_source=logux-oxc-configs&utm_campaign=devtools-button&utm_medium=github">Evil Martians</a></b>, product consulting for <b>developer tools</b>.

---

## Install

```sh
pnpm add --save-dev @logux/oxc-configs oxlint
```

## Usage

Create `oxlint.config.ts`:

```js
import loguxOxlintConfig from '@logux/oxc-configs/lint.js'
import { defineConfig } from 'oxlint'

export default defineConfig(loguxOxlintConfig)
```

Create `oxfmt.config.ts`:

```js
import loguxOxfmtConfig from '@logux/oxc-configs/fmt.js'
import { defineConfig } from 'oxfmt'

export default defineConfig(loguxOxfmtConfig)
```
