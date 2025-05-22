'use client'

import { useState } from 'react'

export default function ChatPage() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('../api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    })
    const data = await res.json()
    setResponse(data.reply)
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border w-full p-2"
          placeholder="Ask the AI something..."
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">
          Send
        </button>
      </form>
      <div className="mt-4 bg-gray-100 p-4 rounded">
        <strong>AI says:</strong>
        <p>{response}</p>
      </div>
    </div>
  )
}