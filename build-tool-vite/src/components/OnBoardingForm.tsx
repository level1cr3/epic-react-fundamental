const OnBoardingForm = () => {
  const logFormData = (formData: FormData) => {
    console.log(Object.fromEntries(formData));
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
          defaultValue={new Date("today").toISOString().slice(0, 10)}
          //   defaultValue={new Date("today").toISOString().slice(0, 10)}
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


*/
