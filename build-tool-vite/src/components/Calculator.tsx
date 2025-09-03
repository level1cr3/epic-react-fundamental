const operations = {
  "+": (left: number, right: number) => left + right,
  "-": (left: number, right: number) => left - right,
  "*": (left: number, right: number) => left * right,
  "/": (left: number, right: number) => left / right,
  "**": (left: number, right: number) => left ** right,
  "%": (left: number, right: number) => left % right,
};

type Props = {
  left: number;
  operator: keyof typeof operations; // this is first getting typeof operations and then in that. Only getting the keys. Benefits updating operations updates this as well.
  right: number;
};

// to create type out of one of the property of Props type we could do as below
//      type OperatorType = Props["operator"];

// to create sub-set of types we could do.
//      type OnlyOperands = Pick<Props, "left" | "right">;
//      type WithoutOperator = Omit<Props, "operator">;

const Calculator = ({ left, operator, right }: Props) => {
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
