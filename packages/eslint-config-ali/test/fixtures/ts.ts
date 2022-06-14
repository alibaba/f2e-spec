interface AppDeveloper {
  nickname: string,
  name: string,
  avatarUrl: string,
  id: number,
}

const foo: string = 1
let bar = [1,2]
const baz = {obj:2}

function func(arg: string): string;
function func(arg: number): number;
function func(arg: string | number): string | number {
  if (typeof arg === 'string') return arg;
  return arg;
}
