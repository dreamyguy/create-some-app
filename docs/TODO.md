# TODO

## Simplify NPM publishing

Create a dedicated CLI, with:

- Bump version script -> Choose one [patch, minor, major]
- Automatic `git commit` with '🚀 Bump version to `v<% new version %>`' message
- `git tag` with CLI, so one can set the tag message flag (`-m`) and append version to it according to version bump
- `git push && git push --tags && npm publish`
- ✨ Done feedback

## Simplify deployment

Create CLI routines for:

- Github Pages
- Netlify
- Heroku
- Firebase (?)

Deployment should happen through a CI (like Travis), if that's absent at the service (Netlify has its own integrated CI).
