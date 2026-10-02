import { askOpenRouter } from '#server/clients/openrouter.ts'

const prompt = `
  Look at this (blurred) image.
  
  Try to identify the main object or subject.
  
  Rules: 
  - Respond only with the answer.
  - Use a short sentence of 5-10 words.
  - Respond in English.
`

/**
 * Asks the AI to identify the main subject of a blurred image
 *
 * @param image
 *
 */
export const guessImage = async (image: string) => {
  return await askOpenRouter({
    prompt,
    image,
  })
}
