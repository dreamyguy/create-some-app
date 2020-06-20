# DEVELOPMENT

To fastly test a dummy repo, create a directory and cd to it:

```
mkdir lalala && cd lalala
```

> 👉 Go to your Github account and **create a repo with the same name**. _This is important_.

Once you've done both, run the following command within the directory:

```
cd ../ && rm -rf lalala && mkdir lalala && cd lalala && npx create-some-app --projectName 'lalala' --git --install --setup
```

The command above can now be run every time you want to create a fresh app with `create-some-app` (that's why it starts with navigating outside itself, removing itself and creating itself again).

Note that we passed the parameter `--projectName 'lalala'` in the CLI. That name will be injected in several places of the application. If you pass `La la la` or `LaLaLa`, the name will become `la-la-la` (because of the conversion to _kebak-case_), which is OK if that's what you want.
