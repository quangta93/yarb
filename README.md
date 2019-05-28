# yarb
yet another react boilerplate

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
- **NEVER** export/import default
  - Enable `npm-intellisense` & `path-intellisense` support.
  - Throw compile error if accidentally importing either wrong property or from the wrong file.


## Todo
- [ ] how to set source path with react-scripts v3
- [ ] add redux devtool
- [ ] resolve TODOs marked inside the codebase
- [ ] stop vscode from auto-complete jest's `test`, `describe` & `expect`
- [ ] research about Quokka & custom TODO extension
