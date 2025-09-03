type OperatorType = "+" | "-" | "*" | "/" | "%" | "**";

type OperationFn = (left: number, right: number) => number;

type Operation = Record<OperatorType, OperationFn>;

const operations: Operation = {
  "+": (left, right) => left + right,
  "-": (left, right) => left - right,
  "*": (left, right) => left * right,
  "/": (left, right) => left / right,
  "**": (left, right) => left ** right,
  "%": (left, right) => left % right,
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
