import Link from "next/link"
export default function Signup() {
  return(
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
       <div className="w-full max-w-sm p-6 ">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 border-2 border-black rounded-full mb-4"></div>
          <h1 className="text-2xl font-bold text-black">App Name</h1>
          <p className="text-lg mb-6 text-black">Signup</p>
          <form className=" text-black ">
        <input 
        type="email"
        name="email"
        placeholder="Email"
        className=" mb-1 w-full px-3 py-2 mb-1 bg-gray-200"
        required
        />
         <input 
        type="text"
        name="fullName"
        placeholder="Full Name"
        className=" mb-1 w-full px-3 py-2 mb-1 bg-gray-200"
        required
        />
         <input 
        type="test"
        name="username"
        placeholder="Username"
        className=" mb-1 w-full px-3 py-2 mb-1 bg-gray-200"
        required
        />
         <input 
        type="password"
        name="password"
        placeholder="Password"
        className=" mb-1 w-full px-3 py-2 mb-1 bg-gray-200"
        required
        />
      </form>
        <p className="text-black text-center">By signing up, you agree to our  <a href="https://www.w3schools.com" className="text-blue-400">Terms</a>, <a href="https://www.w3schools.com" className="text-blue-400">Data Policy</a> and <a href="https://www.w3schools.com" className="text-blue-400">Cookie Policy</a> .</p>
        <button
              type="submit"
              className="mt-6 w-40 py-2 bg-sky-300 text-white font-semibold hover:bg-sky-400 transition centered"
            >
              Signup
            </button>
            </div>
            <div className="mt-6 text-[#A9A9A9] text-sm text-center">
            <span>Already Have an Account? </span>
            <Link href="/login" className="text-sky-400 hover:underline">Login</Link>
          </div>
      </div>
      
    </div>
  )
}