# Vacuum Bot Implementation

## How to setup

1. Install Node Js globally.
2. Move to the root of the folder.
3. Open command line in the folder.
4. Type `npm install` and hit enter.

```text
Special Note!!!

If `Node` is `not` available, just type `npm start`. This should run
the already published file with:

Grid Size 6 by 6
Initial bot cell: (2, 1) heading: North
with the execution of [M, L, L, M, R, M, R, R, M, M, R, M, M]

Normally, this is not committed.
```

## How to build

In the command line

1. Type `npm run build-prod` for production build
2. Type `npm run build-dev` for development build

## How to run

In the command line

1. Type `npm run start`

## Changing data

1. Find the src/index.js
2. To change the bot's initial setup alter line number *`16, 17`*.
3. To change the grid size alter line number *`22`*.
4. To change the execution alter line number *`26`*.

## Other notes

1. The source uses ES6 syntax.
2. Thus, it needs to be transpiled into ES5 using babel.
3. Webpack is to minimize the code.
4. The published content can be found in the `output` directory.
