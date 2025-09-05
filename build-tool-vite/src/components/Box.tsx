import type { ComponentProps } from "react";

const Box = ({
  size,
  ...otherProps // this here is rest syntax not spread. it takes rest of the arguments. coming in
}: ComponentProps<"div"> & { size?: "small" | "medium" | "large" }) => {
  const sizeClassName = size ? `box--${size}` : "";

  return (
    <div
      // className={["box", className, sizeClassName].filter(Boolean).join(" ")} // we could do this to remove any extra space between class names. here we filter out the falsy stuff first and then join with " ". we are passing built in boolean function that takes values and return true or false for them.

      {...otherProps}
      style={{ ...otherProps.style, fontStyle: "italic" }} // writing fontstyle in end so no one consumer of this component can override the fontstyle
      className={`box ${otherProps.className} ${sizeClassName}`.trim()}
    />
  );
};

export default Box;

// ComponentProps : Used to retrieve the props a component accepts. (hover over it to get more info)

/*

Notes:
It's usually better to use ComponentPropsWithRef or ComponentPropsWithoutRef instead of this type, as they let you be explicit about whether or not to include the ref prop



// below more details about componentProp<> from gpt 

Every React component has some props.

ComponentProps<> is a TypeScript shortcut to copy those props.

Example:

// Normal button
<button onClick={() => {}} disabled />

// Copy all button's props into a type
type ButtonProps = React.ComponentProps<"button">;

// Now we can use that type
const MyButton = (props: ButtonProps) => <button {...props} />;


So instead of writing "onClick?: () => void; disabled?: boolean; ...",
ComponentProps<"button"> does it for you.

👉 Think of it as “give me all the props of that component”.

Do you want me to give you a real-world example where this actually saves work?


Scenario

You’re building a custom button that should accept all normal button props (onClick, disabled, etc.) but also add your own styling.

Without ComponentProps<>, you’d have to write all those props by hand (boring + error-prone).

With ComponentProps<>
import React from "react";

// Copy all <button> props into our type
type MyButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

const MyButton = ({ variant = "primary", ...props }: MyButtonProps) => {
  return (
    <button
      {...props}
      className={variant === "primary" ? "bg-blue-500" : "bg-gray-500"}
    />
  );
};

// ✅ Usage
<MyButton onClick={() => alert("Clicked!")} disabled variant="secondary">
  Save
</MyButton>;

Why this helps

You didn’t have to write out all button props.

If React adds new props to <button>, your component gets them automatically.

You can extend props with your own (variant in this case).

👉 So in real projects, ComponentProps<> is mainly used when you wrap or extend existing components (like buttons, inputs, or your own custom ones).


Alright 👍 let’s see it with a custom component.

Example: Card component
// A simple Card component
type CardProps = {
  title: string;
  content: string;
};

const Card = ({ title, content }: CardProps) => (
  <div className="p-4 border">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);


Now suppose we want to make a CardWrapper that uses the same props as Card, but maybe adds a shadow style.

Without ComponentProps<>

We’d have to duplicate the props:

// ❌ duplicated props
type CardWrapperProps = {
  title: string;
  content: string;
};


If we later change Card props (say, add footer?: string),
we’d also need to change CardWrapperProps → messy!

With ComponentProps<>

We just copy them:

type CardWrapperProps = React.ComponentProps<typeof Card>;

const CardWrapper = (props: CardWrapperProps) => (
  <div className="shadow-lg">
    <Card {...props} />
  </div>
);


✅ Now CardWrapper always has the same props as Card.
If Card changes, CardWrapper updates automatically.

👉 That’s the main real-world use:

Wrapping a component

Extending its props

Avoiding duplication



Here’s a simple rule of thumb for ComponentProps<>:

👉 Use it when you’re reusing, wrapping, or extending another component’s props.

Wrapping an HTML element (e.g. custom <button>, <input>):

type ButtonProps = React.ComponentProps<"button">;


Wrapping your own component (e.g. CardWrapper uses Card’s props):

type WrapperProps = React.ComponentProps<typeof Card>;


Extending props (add your own props + keep original ones):

type MyButtonProps = React.ComponentProps<"button"> & { variant?: "primary" | "secondary" };


💡 If you’re making a new standalone component (not based on another one),
👉 just write your own props type.

If you’re building on top of an existing component,
👉 use ComponentProps<> to save work and stay consistent.


What is ref in React?

ref = a special prop in React used to get a reference to a DOM element or a component instance.

Think of it like a way to "point directly" to an element, instead of going through props/state.

🔹 Example: Accessing a DOM element
import { useRef, useEffect } from "react";

function InputFocus() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus the input when the component mounts
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}


✅ Here ref lets us directly call .focus() on the <input> DOM node.
*/
