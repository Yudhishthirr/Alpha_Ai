import { GoogleGenerativeAI } from '@google/generative-ai'
import { GoogleGenerativeAIStream, StreamingTextResponse } from 'ai'
import { NextResponse } from 'next/server'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '')

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt } = await req.json()

  // Ask Google Generative AI for a streaming completion given the prompt
  const response = await genAI
    .getGenerativeModel({ model: 'gemini-pro' })
    .generateContentStream({
      contents: [{ role: 'user', parts: [{ text: prompt }] }]
    })
  // clean_response = re.sub(r'[*]', '', response)
  // let cleanText = response.replace(/\*\*/g, '');
  // return NextResponse.json({
  //   message:response
  // })
  // Convert the response into a friendly text-stream
  const stream = GoogleGenerativeAIStream(response)
  //  let cleanText = stream.replace(/\*\*/g, '');
  // Respond with the stream
  return new StreamingTextResponse(stream)
}