import { NextResponse } from "next/server";

export async function POST(req: Request) {

    const response = await fetch(
        "https://api-inference.huggingface.co/models/facebook/fastspeech2-en-ljspeech",
        {
            headers: { Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}` },
            method: "POST",
            body: JSON.stringify("Hello how are you"),
        }
    );
    const result = await response.json();
    console.log(result)
    return NextResponse.json({
        message:result
    })
    // return result;
    // const modelUrl = requestBody.modelUrl;
    // const input = requestBody.input;
}