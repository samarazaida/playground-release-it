const soma = (...args) => args.reduce((acc, cur) => acc + cur,
  0);

const subtracao = (...args) => args.reduce((acc, cur, index) => (index === 0 ? acc : acc - cur),
  args[0]);

const multiplicacao = (...args) => args.reduce((acc, cur, index) => (index === 0 ? acc : acc * cur),
  args[0]);

const divisao = (...args) => args.reduce((acc, cur, index) => (index === 0 ? acc : acc / cur),
  args[0]);

export default {
  soma,
  sum: soma,
  subtracao,
  sub: subtracao,
  multiplicacao,
  mult: multiplicacao,
  divisao,
  div: divisao,
};
