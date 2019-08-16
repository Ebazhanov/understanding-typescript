In progress
-----------
[/course/understanding-typescript](https://www.udemy.com/course/understanding-typescript)
- - - - - -

- `$ sudo npm -g install typescript`

- `$ npm init`

- `$ npm install lite-server --save-dev`

- `$ tsc name-of-the-file.ts`

compile class
- `$ tsc solution3.ts`

to ES5
- `$ tsc solution3.ts -t ES5`

Creat one single file based on several others
- `$ tsc --outFile examples/app.js examples/circleMath.ts examples/rectangleMath.ts examples/app.ts`

Add reference
- `$ tsc examples/app.ts --outFile examples/app.js`

Go back to ES5 
- `$ tsc examples/app.ts --outFile examples/app.js`

Use SystemJS 0.x (to improve imports)
- `$ npm install --save systemjs`
