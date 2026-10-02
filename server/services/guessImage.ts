import { askOpenRouter } from '#server/clients/openrouter.ts'

const prompt = `
  Look at this (blurred) image.
  
  Try to identify the main object or subject.
  
  Rules: 
  - Respond only with the answer.
  - Use a short sentence of 5-10 words.
  - Respond in English.
`

export const guessImage = async (image: string) => {
  return await askOpenRouter({
    prompt,
    image,
  })
}
