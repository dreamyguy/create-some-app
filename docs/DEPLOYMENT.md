# DEPLOYMENT

Deployment is currently set to take place from Travis to Netlify, but it can (and will) be extended, eventually.

**While scaffolding the app, we create two branches:**

**1. `production`**

**_Absolutely no commits_** should be made directly to it, but to `feature-branches`. If you try committing to it, you'll get a warning.

**2. `develop`**

**_Ideally no commits_** should be made directly to it, but to `feature-branches`. If you try committing to it, you'll get a warning.

**Feature branches**

`feature-branches` should be named according to the feature they're adding. Keep your feature branches _small_ and _concise_, with changes related to the task at hand.

# Releasing

> 👉 **While on `production` branch, run `npm run release`**

Several things will happen, in a synchronous manner:

- The version will be bumped _(you'll get a prompt asking which semver type you want to bump to)_
- All specified `package.json` files will get their `version` value set to the new version
- A `git commit` will be made, with "🚀 Release v`<% version number %>`" as a message
- A `git tag` will be created, with the same message and the corresponding chosen version
- Both the **commit** and the **tag** will be pushed to the remote
- This will only work on `production` branch

# Continous Integration

## Travis

**Travis** is automatically set at the scaffolding time. The resulting url will look like (it's listed on the [README](../README.md) file):

```
https://travis-ci.com/github/<- repo owner ->/<- repo name ->
```

## Netlify

If you choose to deploy to **Netlify** during the creation of the app, Netlify will be automatically set. The resulting url will look like (it's listed on the [README](../README.md) file):

```
https://app.netlify.com/sites/<- repo name ->/overview
```

# Servers

If you choose to deploy to **Netlify** during the creation of the app, Netlify will be published to the following servers:

**1. `production`**

```
https://<- repo name ->.netlify.app/
```

**2. `develop`**

```
https://develop--<- repo name ->.netlify.app/
```
