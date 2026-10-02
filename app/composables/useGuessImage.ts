type GuessResponse = {
  answer: string
}

export const useImageGuess = () => {
  const file = ref<File | null>(null)
  const imageUrl = ref<string | null>(null)
  const blurAmount = ref(0)

  const answer = ref('')
  const loading = ref(false)
  const error = ref('')

  const handleImageSelected = (selectedFile: File) => {
    file.value = selectedFile
    imageUrl.value = URL.createObjectURL(selectedFile)

    answer.value = ''
    error.value = ''
    blurAmount.value = 0
  }

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
    } catch (err) {
      console.error(err)

      error.value = 'Something went wrong while guessing the image'
    } finally {
      loading.value = false
    }
  }

  return {
    file,
    imageUrl,
    blurAmount,
    answer,
    loading,
    error,
    handleImageSelected,
    guessImage,
  }
}
