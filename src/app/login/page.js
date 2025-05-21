export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm p-6">
        <div className="flex flex-col items-center">
          {/* Profile circle */}
          <div className="w-32 h-32 border-2 border-black rounded-full mb-4"></div>

          {/* App Name and Login */}
          <h1 className="text-2xl font-bold">App Name</h1>
          <p className="text-lg mb-6">Login</p>

          {/* Login form */}
          <form className="w-full">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-2 mb-2 border border-gray-300 focus:outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-3 py-2 mb-1 border border-gray-300 focus:outline-none"
              required
            />

            <div className="text-right mb-4">
              <a href="#" className="text-xs text-sky-400 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-sky-300 text-white font-semibold hover:bg-sky-400 transition"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="my-4 text-sm text-gray-500">Or</div>

          {/* Instagram login */}
          <button
            type="button"
            className="w-full flex justify-center items-center gap-2 border border-gray-300 py-2 hover:bg-gray-100"
          >
            <img src="/instagram-icon.png" alt="Instagram Icon" className="w-4 h-4" />
            Continue with Instagram
          </button>

          {/* Sign up link */}
          <div className="mt-6 text-sm">
            <span>Don't have an account? </span>
            <a href="#" className="text-sky-400 hover:underline">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
}