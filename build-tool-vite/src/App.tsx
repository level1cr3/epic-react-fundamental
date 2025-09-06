function App() {
  return (
    <>
      <form
        action="/path/to/server"
        method="POST"
        encType="multipart/form-data"
        onSubmit={(event) => {
          event.preventDefault();
          // once we add onSubmit and preventDefault(), then we don't have to worry about other attributes of form like
          // action, method, encType. Because now browser is not making the request we would be doing that using fetch or axios and there we would mention method type and encryption etc.

          const formdata = new FormData(event.currentTarget);
          console.log({
            form: event.currentTarget,
            formdata,
            entries: Object.fromEntries(formdata),
          });
        }}
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
