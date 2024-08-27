#!/bin/bash

set -eu

VERSION_REGEX='v[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,2}$'

# Validate script parameters
if ! echo $OLD_VERSION | grep -Eq $VERSION_REGEX; then 
    echo "OLD_VERSION must be of form {major}.{minor}.{patch} (e.g. 8.0.0). Exiting..."
    exit 1
fi 

if ! echo $NEW_VERSION | grep -Eq $VERSION_REGEX; then 
    echo "NEW_VERSION must be of form {major}.{minor}.{patch} (e.g. 8.0.0). Exiting..."
    exit 1
fi 

REPO_URL="https://github.com/EmpowerPlastic/empowerchain"
GITHUB_COMMIT_URL="$REPO_URL/commit"
GITHUB_PR_URL="$REPO_URL/pull"
CURRENT_DATE=$(date +'%Y-%m-%d')
NEW_MAJOR_VERSION=$(echo "$NEW_VERSION" | cut -d '.' -f 1)
OLD_MAJOR_VERSION=$(echo "$OLD_VERSION" | cut -d '.' -f 1)

TEMP_CHANGELOG="TEMP_CHANGELOG.md"
UPGRADE_CHANGELOG="chain/app/upgrades/$NEW_MAJOR_VERSION/RELEASE_NOTES.md"
MAIN_CHANGELOG="chain/CHANGELOG.md"
MAIN_CHANGELOG_INSERT_STATEMENT="<!-- GH ACTIONS TEMPLATE - INSERT NEW VERSION HERE -->"

# First write all changes to the main changelog
# Write the version summary
echo "## [$NEW_VERSION]($REPO_URL/releases/tag/$NEW_VERSION) - $CURRENT_DATE" >> $TEMP_CHANGELOG

i=1
git log --pretty=format:"%h %H %s" ${OLD_VERSION}..${NEW_VERSION} -- "chain/**/*.go" ":(exclude)**/*_test.go" | while read LINE; do
  SHORT_COMMIT_HASH=$(echo $LINE | cut -d' ' -f1)
  LONG_COMMIT_HASH=$(echo $LINE | cut -d' ' -f2)
  COMMIT_TITLE=$(echo $LINE | cut -d' ' -f3-)
  PR_NUMBERS=$(echo $COMMIT_TITLE | grep -o '#[0-9]\+' | cut -c 2-)
  IFS='
  '
  for number in $PR_NUMBERS; do
    if [[ "$number" != "" ]]; then
      PR_NUMBER=$number
      COMMIT_TITLE=$(echo $COMMIT_TITLE | sed "s|#$PR_NUMBER|[#$PR_NUMBER]($GITHUB_PR_URL/$PR_NUMBER)|")
    fi
  done
  
  echo "$i. $COMMIT_TITLE [[${SHORT_COMMIT_HASH}]($GITHUB_COMMIT_URL/${LONG_COMMIT_HASH})]" >> $TEMP_CHANGELOG
  i=$((i+1))
done

sed -i -e "/$MAIN_CHANGELOG_INSERT_STATEMENT/r $TEMP_CHANGELOG" $MAIN_CHANGELOG
rm $TEMP_CHANGELOG

# If major upgrade (software upgrade), write the changes to the upgrade changelog
if [[ "$NEW_MAJOR_VERSION" != "$OLD_MAJOR_VERSION" ]]; then
  i=1
  git log --pretty=format:"%h %H %s" ${OLD_VERSION}..${NEW_VERSION} -- "chain/**/*.go" ":(exclude)**/*_test.go" | while read LINE; do
    if [[ "$i" == "1" ]]; then
      echo "# Upgrade $NEW_MAJOR_VERSION Changelog" > $UPGRADE_CHANGELOG
    fi
    SHORT_COMMIT_HASH=$(echo $LINE | cut -d' ' -f1)
    LONG_COMMIT_HASH=$(echo $LINE | cut -d' ' -f2)
    COMMIT_TITLE=$(echo $LINE | cut -d' ' -f3-)
    PR_NUMBERS=$(echo $COMMIT_TITLE | grep -o '#[0-9]\+' | cut -c 2-)
    IFS='
    '
    for number in $PR_NUMBERS; do
      if [[ "$number" != "" ]]; then
        PR_NUMBER=$number
        COMMIT_TITLE=$(echo $COMMIT_TITLE | sed "s|#$PR_NUMBER|[#$PR_NUMBER]($GITHUB_PR_URL/$PR_NUMBER)|")
      fi
    done
    echo "$i. $COMMIT_TITLE [[${SHORT_COMMIT_HASH}]($GITHUB_COMMIT_URL/${LONG_COMMIT_HASH})]" >> $UPGRADE_CHANGELOG
    i=$((i+1))
  done
fi
