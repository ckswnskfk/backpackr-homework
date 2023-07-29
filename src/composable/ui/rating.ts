const showRating = (score: number) => {
  const filledCircle = '●'
  const emptyCircle = '○'
  let result = ''

  for (let i = 1; i <= 5; i++) {
    if (i <= score) {
      result += filledCircle
    } else {
      result += emptyCircle
    }
  }

  return result
}

export { showRating }
