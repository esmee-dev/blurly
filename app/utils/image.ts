/**
 * Converts a blur percentage to the corresponding CSS blur value in pixels
 *
 * @param percentage
 *
 */
export const blurPercentageToPixels = (percentage: number) => {
  return percentage
}

/**
 * Creates a blurred PNG image from the selected file using a canvas
 *
 * @param file
 * @param blurPercentage
 *
 */
export const createBlurredImage = async (
  file: File,
  blurPercentage: number,
) => {
  const image = new Image()

  const imageUrl = URL.createObjectURL(file)

  image.src = imageUrl

  await new Promise<void>((resolve, reject) => {
    image.onload = () => resolve()
    image.onerror = () => reject(new Error('Could not load image'))
  })

  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  if (!context) {
    URL.revokeObjectURL(imageUrl)
    throw new Error('Could not create canvas context')
  }

  canvas.width = image.width
  canvas.height = image.height

  const blurPixels = blurPercentageToPixels(blurPercentage)

  context.filter = `blur(${blurPixels}px)`

  context.drawImage(image, 0, 0, image.width, image.height)

  URL.revokeObjectURL(imageUrl)

  return canvas.toDataURL('image/png', 0.8)
}
