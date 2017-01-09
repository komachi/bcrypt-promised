import Promise from 'bluebird';
import bcrypt from 'bcrypt';

const bcryptP = Promise.promisifyAll(bcrypt);

export function genSalt(rounds) {
  return bcryptP.getSaltAsync(rounds);
}

export function hash(data, salt) {
  return bcryptP.hashAsync(data, salt);
}

export function compare(data, encrypted) {
  return bcryptP.compareAsync(data, encrypted).then(res => {
    if (res === false) {
      throw {
        name: 'MismatchError',
        message: 'MismatchError'
      };
    }
    return res;
  });
}

export const getRounds = bcrypt.getRounds;
