import { useEffect, useMemo, useState } from 'react';

export function GoodReactHooks() {
  const [foo, setFoo] = useState('foo');
  const [bar, setBar] = useState('bar');

  const foobar = useMemo(() => foo + bar, [foo, bar]);

  useEffect(() => {
    setFoo('notfoo');
    setBar('notbar');
  }, []);

  return <div>{foobar}</div>;
}
