import { Link } from "react-router-dom";

const Register = () => {
  const handleRegisterFormSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);
  };
  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleRegisterFormSubmit}
        className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
      >
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <button className="btn btn-success mt-4">Register</button>
          </fieldset>
        </div>
        <div className="flex justify-center gap-2 mb-6">
          <p>Already Have an Acoount Please</p>
          <p className="btn btn-xs btn-warning">
            <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
