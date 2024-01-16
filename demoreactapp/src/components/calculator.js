// Calculator.js
import React, { useState } from 'react';

const Calculator = () => {
  const [a, setA] = useState(2);
  const [b, setB] = useState(3);
  const sum = a + b;

  return (
    <div>
      <p>{`Tổng là: ${a} + ${b} = ${sum}`}</p>
    </div>
  );
};

export default Calculator;
