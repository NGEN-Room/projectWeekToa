

export default function Login() {
  return (
    <div>
     <img src="/logo.png" alt="Logo" className="w-32 h-32 mx-auto mt-10" />

     <h1>App Name</h1>
     <h2>login</h2>
     <form>
        <input type="text" id="username"
        name="username" placeholder="Username" required />
         <input type="password" id="password"
        name="password" placeholder="Password" required />
        <a href="#">Forgot password?</a>
        <button type="submit">Login</button>
        <p>or</p>
        <button type="button" className="instagram-login">
          <img src="/instagram-icon.png" alt="Instagram Icon" className="w-4 h-4" />
          Login with Instagram
        </button>
     </form>
<p>Dont have an account?</p>  <a href="#">Sign up</a>
    </div>

  );
}
