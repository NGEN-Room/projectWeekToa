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

  console.log('📨 Signing up with:', email)

  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  })

  console.log('🧾 Supabase signUp result:', data, signUpError)

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
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Sign Up
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
            <h2 className="text-xl font-semibold mb-4">Create Your Account</h2>
            <form onSubmit={handleSignup} className="space-y-3">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <button className="bg-green-600 text-white w-full py-2 rounded">
                Create Account
              </button>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </form>

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-black text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}