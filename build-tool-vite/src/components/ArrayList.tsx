const ArrayList = () => {
  const list = ["One", "Two", "Three"];
  const listUI = list.map((listItem) => <li key={listItem}>{listItem}</li>);
  return <ul>{listUI}</ul>;
};

export default ArrayList;

/*
when rendering dynamic list of items in react. we should give each item their key value. This is required because if we update the list items like remove them, change their value, change 
their position on the list. The react won't be sure what triggered the change.

This is the reason we should give key prop to each item. we should provide id that comes with the list of items, ex: if we get list of item from db. give key prop id value from db.
"Key prop needs to be something that uniquely identifies the data that it is associated with"


Key prop isn't just about sorting and managing the array. There is also mechanism for remove this component and make a new version of it. for resetting stuff

Don't use index of array as the Id value that can cause the error.

*/
