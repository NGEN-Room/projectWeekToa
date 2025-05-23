export default function Signup() {
  return (
    <div>
      <img src="./instagram.png" alt="Girl in a jacket" className=""/>
      <h1 className="">App Name</h1>
      <h2 className="">Sign up </h2>
      <form>
        <input 
        type="email"
        name="email"
        placeholder="Email"
        className=""
        required
        />
         <input 
        type="text"
        name="fullName"
        placeholder="Full Name"
        className=""
        required
        />
         <input 
        type="test"
        name="username"
        placeholder="Username"
        className=""
        required
        />
         <input 
        type="password"
        name="password"
        placeholder="Password"
        className=""
        required
        />
      </form>
<p>By signing up, you agree to our  <a href="https://www.w3schools.com" className="">Terms</a>, <a href="https://www.w3schools.com">Data Policy</a> and <a href="https://www.w3schools.com">Cookie Policy</a> .</p>

    </div>
  );
}