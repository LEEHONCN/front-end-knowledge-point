import React, { useState, useMemo } from 'react';

export default function (){
  const [text, setText] = useState('text');
  const [number, setNumber] = useState(0);
  console.log('重新计算', text, number)
  function resetText() {
    console.log('重新计算text', text)
  }

  const resetNumber = useMemo(() => {
    console.log('重新计算number', number)
    return () => number;
  }, [number])
  return (
    <div>
      <p>{text}</p>
      <p>{number}</p>
      {resetText()}
      {resetNumber()}
      <button onClick={() => {
        setText(text+'1')
      }}>text</button>
      <button onClick={() => {
        setNumber(number + 1)
      }}>number</button>
    </div>
  );
}