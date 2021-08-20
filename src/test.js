it("renders personalized greeting", async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText } = render(<HelloMessage name="Satoshi" />);

  await waitForElement(() => getByText(/hello Satoshi/i));
});
