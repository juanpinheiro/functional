import {
  increase,
  head,
  tail,
  def,
  reverse,
  first,
  last
} from './index';
import {
  expect
} from 'chai';
import 'mocha';

describe('Basic Functional Functions', () => {

  it('Give a number and increase it by 1', () => {
    const result: number = increase(1);
    expect(result).to.equal(2);
  });

  it('Get the head of an array', () => {
    const result: Array<number> = head([1, 2, 3]);
    const value: number = 1;

    expect(result).to.equal(value);
  });

  it('Get the tail of an array', () => {
    const result: Array<number> = tail([1, 2, 3]);
    const array: Array<number> = [2, 3];

    expect(result).to.deep.equal(array);
  });

  it('Check if the variable is defined', () => {
    const defined = 'Yo!';

    expect(def(defined)).to.equal(true);
  });

  it('Reverse an array', () => {
    const result: Array<number> = reverse([1, 2, 3]);
    const array: Array<number> = [3, 2, 1];

    expect(result).to.deep.equal(array);
  });

  it('Get the first "n" elements of an array', () => {
    const result: Array<number> = first([1, 2, 3, 4, 5], 2);
    const array: Array<number> = [1, 2];

    expect(result).to.deep.equal(array);
  });

});