import GetBaseUrl from "../conf";

export default function CreateUser({ reloadUserList }) {
  function onSubmission(event) {
    event.preventDefault();

    var fullName = event.target.elements.fullName.value;
    var email = event.target.elements.email.value;
    console.log(fullName);
    console.log(email);

    const apiEndpoint = GetBaseUrl() + "/api/users/";

    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify({
        fullName: fullName,
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // update user list
        reloadUserList();
        // alert(JSON.stringify(data));
      });
  }
  return (
    <div>
      <h3>Create User</h3>
      <br />
      <form onSubmit={onSubmission}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullName" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="text" className="form-control" id="email" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
