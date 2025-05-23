
'use client'

import { useState } from 'react'
import supabase from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import SignUpModal from '@/components/SignUpModal'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) setError(error.message)
    else router.push('/ftsup')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-sm w-full space-y-6 text-center">
        {/* Logo placeholder */}
        <div className="w-24 h-24 mx-auto border border-black rounded-full" />
        
        {/* App Name & Subtitle */}
        <h1 className="text-2xl font-bold">App Name</h1>
        <p className="text-gray-500 text-sm">Login</p>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-3 text-left">
          <input
            className="border border-gray-300 p-2 w-full rounded"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
            <input
              className="border border-gray-300 p-2 w-full rounded"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#" className="absolute right-2 top-2 text-xs text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="bg-sky-400 text-white p-2 rounded hover:bg-sky-500 transition">
            Login
          </button>
        </form>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Divider */}
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <hr className="flex-1 border-gray-200" />
          <span>Or</span>
          <hr className="flex-1 border-gray-200" />
        </div>

        {/* Instagram Auth placeholder */}
        <button className="text-sm text-gray-600">Continue with Instagram</button>


        {/* Sign up link */}
          <p className="text-sm text-gray-500 mt-4">
            Don’t have an account?
          </p>

          <div className="mt-2">
            <SignUpModal />
          </div>
      </div>
    </div>
  )
}