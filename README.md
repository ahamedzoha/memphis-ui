![Memphis UI Logo](/src/stories/assets/logo.png)

# Welcome to memphis ui

> An opinionated React JSX component library to do the heavy liftings for you

[![NPM](https://img.shields.io/npm/v/memphis-uix.svg)](https://www.npmjs.com/package/memphis-uix) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

All the components here have been designed from scratch with minimal dependency with other libraries.
Notable libraries used in this project are:

- Material Icons

## Installation

There are two installations available.

1. Package only installation from NPM **(to be used in your projects)** ==> See [Installation 1]
2. Entire library including storybook **(for development purposes only)** ==> See [Installation 2]

<br />

### Installation 1 - via npm

---

```
npm add memphis-uix
```

Or

```
npm install --save memphis-uix@latest
```

<br />

### Installation 2 - Entire project

---

This project is initiated using the create-react-library starter boilerplate. This was for easy library publishing to NPM.
Afterwards, storybook was installed on top in order to visualize and test the components.

Clone the project in your local machine and follow the following steps:

1. Checkout develop branch if you're in master. (It usually has the latest commits).
2. cd into root directory if you haven't.
3. Run these commands:

```bash
npm install

npm run storybook

npm start
```

4. On a new terminal, cd into the example folder and also do the following:

```bash
npm install

npm start
```

## Usage

**Visit [memphis ui storybook](https://memphis-ui.netlify.app/) to get an in-depth walkthrough on using the components**

Example

```jsx
import React from 'react'
import { Card, Button } from 'memphis-uix'

const App = () => (
  <Button variant='primary'>
    How's it going!{' '}
    <span role='img' aria-label='smily'>
      😄
    </span>
  </Button>
)
```

_To see all the available props visit the Buttons story page_

#### NPM Homepage [Link](https://www.npmjs.com/package/memphis-uix)

## License

MIT © [ahamedzoha](https://github.com/ahamedzoha)
