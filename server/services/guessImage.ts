import { askGemini } from '#server/clients/gemini.ts'

const prompt = `
  Look at this (blurred) image.

  Try to identify the main object or subject.

  Rules:
  - Respond with valid JSON only.
  - Do not wrap the JSON in markdown or code fences.
  - "answer" should be a short sentence of 5-10 words.
  - "confidence" should be a number between 0 and 100.
  - "reason" should briefly explain what visual clues led to the answer.
  - Keep the reason to one short sentence.
  - Respond in English.

  Example:
  {
    "answer": "A golden retriever",
    "confidence": 92,
    "reason": "The shape of the head and visible fur suggest a dog."
  }
`

/**
 * Asks the AI to identify the main subject of a blurred image
 *
 * @param image
 *
 */
export const guessImage = async (image: string) => {
  return await askGemini({
    prompt,
    image,
  })
}
