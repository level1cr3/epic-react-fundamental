type Props = {
  left: number;
  operator: "+" | "-" | "*" | "/";
  right: number;
};

const calculate = (
  left: number,
  operator: "+" | "-" | "*" | "/",
  right: number
): number | string => {
  switch (operator) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "*":
      return left * right;
    case "/":
      return right !== 0 ? left / right : "Error: Division by zero";
  }
};

const Calculator = ({ left, operator, right }: Props) => {
  return (
    <div>
      <code>
        {left} {operator} {right} = {calculate(left, operator, right)}
      </code>
    </div>
  );
};

export default Calculator;
