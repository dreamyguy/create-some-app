#!/bin/bash

BRANCH=`git rev-parse --abbrev-ref HEAD`
INPUT_FILE=$1
START_LINE=`head -n1 $INPUT_FILE`
PATTERN="^(🚀 Release v)"

# Stops accidental commits to 'develop'
if [[ "$BRANCH" == "develop" ]]; then
  echo -e "\n 💣 💥 You are on '$BRANCH' branch. 💥 💣\n\nYou should be using a feature-branch to commit changes, and open pull-requests\nto 'develop' once you're done with all your changes on that feature.\n"
  echo -e "If you're SURE you want to proceed anyway, commit with -n to bypass this pre-commit hook.\n"
  exit 1
fi

# Stops accidental commits to 'production' (allows only the release commit message pattern)
if ! [[ "$BRANCH" == "production" && "$START_LINE" =~ $PATTERN ]]; then
  echo -e "\n 💣 💥 You can't commit to the '$BRANCH' branch. 💥 💣\n\nUnless you're running 'npm run release' 💥 💣\n"
  exit 1
fi

exit 0
