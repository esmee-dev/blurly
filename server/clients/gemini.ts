import { GoogleGenAI } from '@google/genai'

type AskGeminiOptions = {
  prompt: string
  image: string
}

type GeminiResponse = {
  answer: string
  confidence: number
  reason: string
}

/**
 * Sends a prompt and image to Gemini and returns the AI response.
 */
export const askGemini = async ({
  prompt,
  image,
}: AskGeminiOptions): Promise<GeminiResponse> => {
  const config = useRuntimeConfig()

  const ai = new GoogleGenAI({
    apiKey: config.geminiApiKey,
  })

  const [metadata, base64Image] = image.split(',')

  if (!metadata || !base64Image) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid image data',
    })
  }

  const mimeType = metadata.match(/data:(.*);base64/)?.[1]

  if (!mimeType) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid image MIME type',
    })
  }

  const response = await ai.models.generateContent({
    model: 'gemini-3.5-flash',
    contents: [
      {
        inlineData: {
          mimeType,
          data: base64Image,
        },
      },
      {
        text: prompt,
      },
    ],
  })

  if (!response.text) {
    throw createError({
      statusCode: 502,
      statusMessage: 'No response from AI provider',
    })
  }

  const cleanedResponse = response.text
    .replace(/^```json\s*/, '')
    .replace(/\s*```$/, '')
    .trim()

  try {
    return JSON.parse(cleanedResponse) as GeminiResponse
  } catch {
    throw createError({
      statusCode: 502,
      statusMessage: 'Invalid response from AI provider',
    })
  }
}
