<div align="center">
  <a href="https://github.com/bconnorwhite/remove-dir-safe">
    <img alt="remove-dir-safe" src="assets/header.svg" />
  </a>
  <a href="https://npmjs.com/package/remove-dir-safe">
    <img alt="NPM" src="https://img.shields.io/npm/v/remove-dir-safe.svg">
  </a>
  <a href="https://github.com/bconnorwhite/remove-dir-safe">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/remove-dir-safe.svg">
  </a>
  <a href='https://coveralls.io/github/bconnorwhite/remove-dir-safe?branch=master'>
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/remove-dir-safe.svg?branch=master">
  </a>
  <a href="https://github.com/bconnorwhite/remove-dir-safe">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/bconnorwhite/remove-dir-safe?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Remove directories recursively or non-recursively.

- Returns `true` if directory no longer exists.
- Returns `false` if unable to remove directory.
- Returns `undefined` on other errors (ex: permission denied) rather than throwing.

## Installation

```sh
yarn add remove-dir-safe
```

```sh
npm install remove-dir-safe
```

## API

```ts
import { removeDir, removeDirSync, Options } from "write-dir-safe";

function removeDir(path: string, options: Options): Promise<boolean | undefined>;

function removeDirSync(path: string, options: Options): boolean | undefined;

type Options = {
  /**
   * If true, perform a recursive directory removal. Default: `true`
   */
  recursive?: boolean;
}
```

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/remove-dir-safe.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): undefined
- [@types/mock-fs](https://www.npmjs.com/package/@types/mock-fs): TypeScript definitions for mock-fs
- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript definitions for Node.js
- [mock-fs](https://www.npmjs.com/package/mock-fs): A configurable mock file system.  You know, for testing.

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/remove-dir-safe.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)

<br />

## Related Packages

- [fs-safe](https://www.npmjs.com/package/fs-safe): A simple fs wrapper that doesn't throw
- [read-dir-safe](https://www.npmjs.com/package/read-dir-safe): Read directories recursively or non-recursively
- [write-dir-safe](https://www.npmjs.com/package/write-dir-safe): Create directories and their parents recursively
- [read-file-safe](https://www.npmjs.com/package/read-file-safe): Read files without try catch
- [write-file-safe](https://www.npmjs.com/package/write-file-safe): Write files, and parent directories if necessary
- [remove-file-safe](https://www.npmjs.com/package/remove-file-safe): Remove a file without try catch
