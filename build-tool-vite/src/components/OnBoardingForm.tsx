import { useErrorBoundary } from "react-error-boundary";

const OnBoardingForm = () => {
  const { showBoundary } = useErrorBoundary(); // we can use showBoundary to manually trigger. showing error boundary when error occurs from async calls or event driven task.

  const logFormData = async (formData: FormData) => {
    try {
      await new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Task failed!")), 3000);
      }); // this is not caught by error ErrorBoundary component. because it is async operation. it throws error outside of render cycle. for this we should use try catch.
    } catch (error) {
      showBoundary(error);
    }
  };

  return (
    <form action={logFormData}>
      <input type="hidden" name="id" defaultValue="7" />
      <div>
        <label htmlFor="accountTypeDropdown">Account Type: </label>
        <select
          name="accountType"
          id="accountTypeDropdown"
          defaultValue="student"
        >
          <option value="">--Please select an option--</option>
          <option value="admin">Admin</option>
          <option value="teacher">Teacher</option>
          <option value="parent">Parent</option>
          <option value="student">Student</option>
        </select>
      </div>
      <div>
        <label htmlFor="usernameInput">Username: </label>
        <input id="usernameInput" name="username" type="text" />
      </div>
      <div>
        <label htmlFor="passwordInput">Password: </label>
        <input id="passwordInput" name="password" type="password" />
      </div>
      <div>
        <label htmlFor="ageInput">Age: </label>
        <input
          id="ageInput"
          name="age"
          type="number"
          min="0"
          max="200"
          defaultValue="18"
        />
      </div>
      <div>
        <label htmlFor="fileInput">photos: </label>
        <input id="fileInput" name="file" type="file" accept="image/*" />
      </div>
      <div>
        <label htmlFor="colorInput">FavoriteColor: </label>
        <input
          id="colorInput"
          name="color"
          type="color"
          defaultValue="#002E5D"
        />
      </div>

      <div>
        <fieldset>
          <legend>Visibility:</legend>

          <label htmlFor="publicRadio">
            <input
              type="radio"
              name="visibility"
              value="public"
              defaultChecked
              id="publicRadio"
            />
            Public
          </label>

          <label htmlFor="privateRadio">
            <input
              type="radio"
              name="visibility"
              value="private"
              id="privateRadio"
            />
            Private
          </label>
        </fieldset>
      </div>

      <div>
        <label htmlFor="checkboxInput">
          <input
            id="checkboxInput"
            name="checkbox"
            type="checkbox"
            defaultChecked
          />
          Waiver Signed
        </label>
      </div>
      <div>
        <label htmlFor="dateInput">Start Date: </label>
        <input
          id="dateInput"
          name="date"
          type="date"
          // throw error by uncommenting below code.
          // defaultValue={new Date("today").toISOString().slice(0, 10)}
          defaultValue={new Date().toISOString().slice(0, 10)}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default OnBoardingForm;

// you think of attributes and properties like this
// attributes are the initial values or configurations. where as Properties are dynamic values

/*Default values
Because react allows us to be dynamic.

If we set the value prop in input react will make sure it never changes from that value.
So that way we can programmatically change that value.
For that reason if we set value prop in input react will not allow the user to change it

But if you want to initialize input to certain value that can be changed later we
would use defaultValue

defaultValue is react specific not the web.


Other Errors : inside try catch if something performs asynchronous task. and this asynchronous task ends up throwing the error the try catch cannot handle that error.

In React, if an error happens inside a component render or lifecycle (synchronous), React Error Boundaries can catch it.

If it’s inside an async callback (like fetching data), React won’t catch it — you must use try/catch with async/await or .catch().

They do not catch errors from:

Asynchronous callbacks (setTimeout, Promise, fetch, etc.)

Event handlers (you need a try/catch there yourself)

✅ Summary:

try/catch cannot catch errors inside async callbacks unless you await.

async/await + try/catch = recommended for clean error handling in React apps.

For UI crashes, use Error Boundaries (but they won’t help with async fetch errors).



 try {
      new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Task failed!")), 3000);
      }); 
    } catch (error) {
      alert(error);  
    }


 // this won't catch error either. i need it either use async await or. use the .catch() method in the promise land right   

When JS reaches new Promise(...), no error is thrown synchronously.
The error only happens later, inside the setTimeout callback.
By then, the try/catch block has already finished running → nothing to catch.


Sometimes maybe you want user to try again. Like for example it was their network error and now it is resolved.
Keep in mind resetErrorBoundary on preserve the state of that component. it will be reloading that component. and we don't want to preserve the state because that state might be 
the one that caused the error in first place.

and if we want store the form data that they filled. like if they filled a long form and it all goes away now that is bad. but for that we should save that form state into 
secure place like local storage etc. to handle that particular situation. so when their component loads again we could load all that data from local storage again.


*/
