import * as React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  const foo: number = 1

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + enthusiasmLevel}
      </div>
        <Hi>
          haha
        </Hi>
    </div>
  );
}

export default Hello;
