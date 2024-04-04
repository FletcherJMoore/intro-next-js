import React from 'react';
import Counter from '../components/Counter';

export default function CounterList() {
  const countersTitle = [{ title: 'Test Counter 1' }, { title: 'Test Counter 2' }, { title: 'Test Counter 3' }];

  return (
    <>
      {countersTitle.map((tl) => <Counter title={tl.title} />)}
    </>
  );
}
