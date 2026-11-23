# Claude edit prompts: moved

The prompts, the how-to and the test log now live in the guide, under
**Edit prompts**: `library/prompts/`.

- Each situation page (`fireworks.md`, `parade.md` and so on) holds the
  **current best prompt in full**. When a test finds a better one,
  replace the prompt on that page and bump its version number.
- Add every test run to `test-log.md`, with its cost and Ed's verdict.
- The shared rules live in `build-your-own.md`. When they change, update
  every situation page too, because each page has the full prompt so it
  can be copied in one go.
