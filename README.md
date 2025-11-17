# React Compiler Demo

This repo consists of two React v19.2 projects: 
- One app using standard React conventions (standard)
- One app using standard React conventions plus React Compiler v1.0 (react-compiler)

The purpose of these two apps is to enable simple comparison and demonstrate the effects of React Compiler.

## React Compiler
React Compiler is a babel plugin that optimises React code by memoising all components and hooks. 
Due to the fact that it runs at compile time, it has more granular control over the memoisation than developers might be able to achieve. 
For more info, see the docs: https://react.dev/learn/react-compiler/introduction 

## Using this project

### Prerequisites
You'll need node v20 or later to get this running. 

### Getting started
Clone this project & navigate to the repo in your terminal, then run:
```
cd standard
npm install
npm run dev
```
the standard app will run on port 3001.

Repeat inside the react-compiler directory, which will run on port 3002. 

### What you should see
Both apps contain console.logs in most components. You should find that in the standard app, each time the state updates (clicking the 'count' button), all the console.log calls will re-run. 
This is because the <App /> component and all of its child components re-render every time the state is updated. 
In the react-compiler app, the console.log calls will run once on first render, but no further re-renders will occur. (!) 
I haven't used useCallback, useMemo or React.Memo in this project - this is happening because our components have been memoised for us by React Compiler! 

You can check this by installing React Developer Tools in Google Chrome (https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi).

Navigate to the 'Components' tab and you should see that the component tree has 'Memo ✨' next to each component, like below:

<img width="327" height="210" alt="Screen Shot 2025-11-17 at 9 02 57 pm" src="https://github.com/user-attachments/assets/3898bb32-40b4-45f3-985c-196e5920fcea" />



