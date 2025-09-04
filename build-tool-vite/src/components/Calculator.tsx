type OperationFn = (left: number, right: number) => number;

const operations = {
  "+": (left, right) => left + right,
  "-": (left, right) => left - right,
  "*": (left, right) => left * right,
  "/": (left, right) => left / right,
  "**": (left, right) => left ** right,
  "%": (left, right) => left % right,
} satisfies Record<string, OperationFn>; // so we are saying here this narrow thing "operations object type" satisfies this wide thing Record<string, OperationFn>.

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

/*
What satisfies does

It lets you check that a value conforms to a type without narrowing the value’s type unnecessarily.

Think of it like:
👉 “Make sure this matches the required shape, but don’t throw away the extra info I already know about it.”


type Config = {
  retries: number;
  mode: "dev" | "prod";
};

const config = {
  retries: 3,
  mode: "dev",
  extra: true,  // not part of Config
} satisfies Config;


✅ This works because:

config has at least the properties required by Config.

TS ignores the extra extra field when checking.

But! The inferred type of config still includes extra: true (useful if you want to carry more data).

When to use satisfies

When you want type safety but also want to preserve inference.

Common in:

Config objects (lots of keys, TS checks correctness but lets you keep extra info).

Mapping objects (like enums, route definitions, role-permission maps).

Literal unions (keep "+" instead of widening to string).

✅ Enterprise guideline:
Use satisfies when you’re declaring constants or configs that must match a type but where preserving literal types (instead of widening) is important. It’s becoming standard in large React/TS projects.


*/
