type GuessResponse = {
  answer: string
  confidence: number
  reason: string
}

export const useImageGuess = () => {
  const file = ref<File | null>(null)
  const imageUrl = ref<string | null>(null)
  const blurAmount = ref(0)

  const answer = ref('')
  const confidence = ref(0)
  const reason = ref('')
  const loading = ref(false)
  const error = ref('')

  /**
   * Stores the selected image and resets the previous guess state
   *
   * @param selectedFile
   *
   */
  const handleImageSelected = (selectedFile: File) => {
    file.value = selectedFile
    imageUrl.value = URL.createObjectURL(selectedFile)

    answer.value = ''
    confidence.value = 0
    reason.value = ''
    error.value = ''
    blurAmount.value = 0
  }

  /**
   * Creates a blurred image and sends it to the guess API
   */
  const guessImage = async () => {
    if (!file.value) {
      error.value = 'Please select an image.'
      return
    }

    loading.value = true
    answer.value = ''
    error.value = ''

    try {
      const blurredImage = await createBlurredImage(
        file.value,
        blurAmount.value,
      )

      const response = await $fetch<GuessResponse>('api/guess', {
        method: 'POST',
        body: {
          image: blurredImage,
        },
      })

      answer.value = response.answer
      confidence.value = response.confidence
      reason.value = response.reason
    } catch (err) {
      console.error(err)

      error.value =
        'Something went wrong while guessing the image. Try again later.'
    } finally {
      loading.value = false
    }
  }

  return {
    file,
    imageUrl,
    blurAmount,
    answer,
    confidence,
    reason,
    loading,
    error,
    handleImageSelected,
    guessImage,
  }
}
