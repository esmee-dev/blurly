type OpenRouterResponse = {
  choices: {
    message: {
      content: string
    }
  }[]
}

type AskOpenRouterOptions = {
  prompt: string
  image: string
}

export const askOpenRouter = async ({
  prompt,
  image,
}: AskOpenRouterOptions) => {
  const config = useRuntimeConfig()

  const response = await $fetch<OpenRouterResponse>(
    'https://openrouter.ai/api/v1/chat/completions',
    {
      method: 'POST',

      timeout: 10_000,

      headers: {
        Authorization: `Bearer ${config.openrouterApiKey}`,
        'Content-Type': 'application/json',
      },

      body: {
        model: 'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free',

        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: prompt,
              },
              {
                type: 'image_url',
                image_url: {
                  url: image,
                },
              },
            ],
          },
        ],

        reasoning: {
          enabled: false,
        },
      },
    },
  )

  const choice = response.choices[0]

  if (!choice) {
    throw createError({
      statusCode: 502,
      statusMessage: 'No response from AI provider',
    })
  }

  return choice.message.content
}
