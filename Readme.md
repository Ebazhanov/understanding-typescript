<img src="https://monosnap.com/image/qWvDBkhnXf9Z9I1OnsZlRKwygEDrE6"/>
- - - - - -

<details>
<summary><b>Getting started</b></summary>

- `$ sudo npm -g install typescript`

- `$ npm init`

- `$ npm install lite-server --save-dev`

- `$ tsc name-of-the-file.ts`
</details>

compile class
- `$ tsc solution3.ts`

to ES5
- `$ tsc solution3.ts -t ES5`

<details>
<summary><b>Creat one single file based on several others</b></summary>

`$ tsc --outFile examples/app.js examples/circleMath.ts examples/rectangleMath.ts examples/app.ts`

</details>

Add reference
- `$ tsc examples/app.ts --outFile examples/app.js`

Go back to ES5 
- `$ tsc examples/app.ts --outFile examples/app.js`

Use SystemJS 0.x (to improve imports)
- `$ npm install --save systemjs`
