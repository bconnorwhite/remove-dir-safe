<div align="center">
  <h1>remove-dir-safe</h1>
  <a href="https://npmjs.com/package/remove-dir-safe">
    <img alt="NPM" src="https://img.shields.io/npm/v/remove-dir-safe.svg">
  </a>
  <a href="https://github.com/bconnorwhite/remove-dir-safe">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/remove-dir-safe.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/remove-dir-safe?branch=master">
    <img alt="Coverage Status" src="https://coveralls.io/repos/github/bconnorwhite/remove-dir-safe/badge.svg?branch=master">
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

Unless the `unsafe` flag is set, only directories inside the current working directory or OS temp directory will be removed.

## Installation

```sh
yarn add remove-dir-safe
```

```sh
npm install remove-dir-safe
```

## API

```ts
import { removeDir, removeDirSync, Options } from "remove-dir-safe";

function removeDir(path: string, options: Options): Promise<boolean | undefined>;

function removeDirSync(path: string, options: Options): boolean | undefined;

type Options = {
  /**
   * If true, perform a recursive directory removal. Default: `true`
   */
  recursive?: boolean;
  /**
   * Allow removals outside of current working directory, or OS temp directory. Default: `false`
   */
  unsafe?: boolean;
}
```

<br />

<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/remove-dir-safe.svg"></h2>

- [is-path-inside](https://www.npmjs.com/package/is-path-inside): Check if a path is inside another path

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/remove-dir-safe.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects
- [@types/mock-fs](https://www.npmjs.com/package/@types/mock-fs): TypeScript definitions for mock-fs
- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript definitions for Node.js
- [mock-fs](https://www.npmjs.com/package/mock-fs): A configurable mock file system.  You know, for testing.

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/remove-dir-safe.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)
