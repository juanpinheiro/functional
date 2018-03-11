export const increase = (x: number) => x + 1;

export const head = ([x]: Array<any>) => x;

export const tail = ([, ...x]: Array<any>) => x;

export const def = (x: any) => (
  typeof x !== 'undefined'
);

export const reverse = ([x, ...y]: Array<any>) => (
  def(x) ? [...reverse(y), x] : []
);

export const first = ([x, ...xs]: Array<any>, n: number = 1) => (
  def(x) && n ? [x, ...first(xs, n - 1)] : []
);

export const last = (xs: Array<any>, n: number = 1) => (
  reverse(first(reverse(xs), n))
);