test('Fetch fails with an error', async () => {
  expect.assertions(1)
  try {
    await data()
  } catch (e) {
    expect(e).toMatch('error')
  }
})
