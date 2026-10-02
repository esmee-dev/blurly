import { guessImage } from '#server/services/guessImage.ts'

type AIRequest = {
  image: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<AIRequest>(event)

  if (!body.image) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Image is required',
    })
  }

  const answer = await guessImage(body.image)

  return {
    answer,
  }
})
