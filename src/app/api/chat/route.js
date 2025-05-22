export const dynamic = 'force-dynamic'

export async function POST(req) {
  try {
    const { message } = await req.json()

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      }),
    })

    const data = await response.json()

    return new Response(JSON.stringify({ reply: data.choices[0].message.content }), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (err) {
    console.error("Error in /api/chat route:", err)
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}