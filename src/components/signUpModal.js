'use client'

import { useState } from 'react'
import supabase from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function SignUpModal() {
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const router = useRouter()

  const handleSignup = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    })

    if (signUpError) {
      setError(signUpError.message)
      return
    }

    if (!data.user) {
      setError("Signup failed: no user object returned.")
      return
    }

    setShowModal(false)
    router.push('/login')
  }

  return (
    <div>
      {/* Sign Up trigger button */}
      <button
        onClick={() => setShowModal(true)}
        className="text-blue-500 hover:underline text-sm"
      >
        Sign Up
      </button>

      {/* Modal content */}
      {showModal && (
            <div className="min-h-screen flex items-center justify-center bg-white px-4">

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm relative text-center">
            <h2 className="text-xl font-semibold mb-2">Create Your Account</h2>
            <p className="text-sm text-gray-500 mb-4">Sign up with your email and password</p>

            <form onSubmit={handleSignup} className="flex flex-col gap-3 text-left">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded w-full text-black"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 rounded w-full text-black"
              />
              <button type="submit" className="bg-sky-400 text-white py-2 rounded hover:bg-sky-500 transition">
                Create Account
              </button>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </form>

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-400 hover:text-black text-xl"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
        </div>
      )}
    </div>
  )
}