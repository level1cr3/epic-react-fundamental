const operations = {
  "+": (left: number, right: number) => left + right,
  "-": (left: number, right: number) => left - right,
  "*": (left: number, right: number) => left * right,
  "/": (left: number, right: number) => left / right,
  "**": (left: number, right: number) => left ** right,
  "%": (left: number, right: number) => left % right,
};

type Props = {
  left?: number;
  operator?: keyof typeof operations;
  right?: number;
};

const Calculator = ({ left = 0, operator = "+", right = 0 }: Props) => {
  const result = operations[operator](left, right);

  return (
    <div>
      <code>
        {left} {operator} {right} = <output>{result}</output>
      </code>
    </div>
  );
};

export default Calculator;
