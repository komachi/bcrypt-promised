# bcrypt-promised

> A promised version of [bcrypt](https://github.com/kelektiv/node.bcrypt.js).

## Installation

Take note that you need also to add bcrypt to your package.json as it linked as peer dependency.

```
npm i bcrypt-promised bcrypt --save
```

## API

*Take note that this module return error (**MismatchError**) when compare fails.*

Check out [README of original bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme) to get meaning of all this.

```js
import bcrypt from 'bcrypt-promised';

bcrypt.genSalt(saltRounds).then(salt => {
  console.log(salt);
});

bcrypt.hash(myPlaintextPassword, saltRounds).then(hash => {
  console.log(hash);
});

bcrypt.compare(plaintextPassword, hash).then(password => {
  console.log(password);
}).catch(err => {
  console.log(err);
});

bcrypt.getRounds(encrypted);
```
