function App() {
  const logFormData = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <>
      <form
        action={logFormData}
        // in react we can pass the function to the action property of form. and it will prevent the default form submission behavior for us and also give us the form data.
      >
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
          <input id="ageInput" name="age" type="number" />
        </div>
        <div>
          <label htmlFor="fileInput">photos: </label>
          <input id="fileInput" name="file" type="file" accept="image/*" />
        </div>
        <div>
          <label htmlFor="colorInput">FavoriteColor: </label>
          <input id="colorInput" name="color" type="color" />
        </div>
        <div>
          <label htmlFor="dateInput">Start Date: </label>
          <input id="dateInput" name="date" type="date" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default App;
