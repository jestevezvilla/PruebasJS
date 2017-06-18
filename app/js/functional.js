import Immutable from 'immutable';
import $ from 'jquery';
import curry from 'lodash/curry';

const user = Immutable.OrderedMap({
  name: 'Pedro',
  age: 19,
  height: 145,
});

const setHeight = person => person.set('height', 150);

setHeight(user);

/**
 * Curried
 */
const match = curry((what, str) => str.match(what));

const hasNumberOne = match(/1+/g);

console.log(hasNumberOne('pe1rro1'));

const filter = curry((what, arr) => arr.filter(what));

const hasSpaces = match(/\s+/g);

console.log(filter(hasSpaces, ['Hola', 'Hola ']));

const replace = curry((what, rplc, str) => str.replace(what, rplc));

const vowels = replace(/[aeiouy]/ig);

const censored = vowels('*');

console.log(censored('La casa de Bernarda'));

/**
 * Memoize
 */
const memoize = (f) => {
  const cache = {};

  return () => {
    const argStr = JSON.stringify(arguments);


    cache[argStr] = cache[argStr] || f.apply(f, arguments);


    return cache[argStr];
  };
};


const getUsers = memoize(url => function () {
  return $.getJSON(url);
});


getUsers('https://api.github.com/users');
