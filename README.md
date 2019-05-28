# yarb
Yet Another React Boilerplate by [@quangta93](https://github.com/quangta93). Generated by [create-react-app](https://facebook.github.io/create-react-app/).

## Folder Structure
```
/src
  index.js
  index.css
  index.module.scss
  setupTests.js
  serviceWorker.js
  /assets
    /images
  /components
    Root.js
    /base
    /common
    /pages
    /App
  /core
    store.js
    reducers.js
    sagas.js
    /feature
      index.js
      actions.js
      actions.test.js
      reducer.js
      reducer.test.js
      saga.js
      saga.test.js
```

## Coding Convention
### ES6 Module
- **NEVER** export/import default values:
  - Enable `npm-intellisense` & `path-intellisense` support.
  - Throw compile error if accidentally importing either wrong property or from the wrong file.
  - Allow `index.js` to forward all exporting values.
```
// Exporting
export const property = () => 42;

const Component = () => <div />;
export { Component }

// feature/index.js
export * from './local-file';
export * from './another-local-file';

// Importing
import { property } from 'path/to/file';
import { Component } from 'path/to/component';
import * as feature from 'path/to/feature'; // includes properties from both 'local-file' and 'another-local-file'
```


## Todo
- [ ] add redux devtool
- [ ] stop vscode from auto-complete jest's `test`, `describe` & `expect`
- [ ] research about Quokka
