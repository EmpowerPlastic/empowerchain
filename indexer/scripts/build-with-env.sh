#!/bin/bash
set -e

# Get Google Maps API key and Rollbar access token from .env file (trim double quotes)
GOOGLE_MAPS_API_KEY=$(grep GOOGLE_MAPS_API_KEY .env | cut -d '=' -f2 | sed 's/"//g')
ROLLBAR_ACCESS_TOKEN=$(grep ROLLBAR_ACCESS_TOKEN .env | cut -d '=' -f2 | sed 's/"//g')

# Replace $GOOGLE_MAPS_API_KEY an $ROLLBAR_ACCESS_TOKEN in src/mappings/mappingHandlers.ts
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    sed -i "s/\$GOOGLE_MAPS_API_KEY/$GOOGLE_MAPS_API_KEY/g" ./src/mappings/mappingHandlers.ts
    sed -i "s/\$ROLLBAR_ACCESS_TOKEN/$ROLLBAR_ACCESS_TOKEN/g" ./src/mappings/mappingHandlers.ts
elif [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' "s/\$GOOGLE_MAPS_API_KEY/$GOOGLE_MAPS_API_KEY/g" ./src/mappings/mappingHandlers.ts
    sed -i '' "s/\$ROLLBAR_ACCESS_TOKEN/$ROLLBAR_ACCESS_TOKEN/g" ./src/mappings/mappingHandlers.ts
fi

# Build project
subql build

# Restore original mappingHandlers.ts
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    sed -i "s/$GOOGLE_MAPS_API_KEY/\$GOOGLE_MAPS_API_KEY/g" ./src/mappings/mappingHandlers.ts
    sed -i "s/$ROLLBAR_ACCESS_TOKEN/\$ROLLBAR_ACCESS_TOKEN/g" ./src/mappings/mappingHandlers.ts
elif [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' "s/$GOOGLE_MAPS_API_KEY/\$GOOGLE_MAPS_API_KEY/g" ./src/mappings/mappingHandlers.ts
    sed -i '' "s/$ROLLBAR_ACCESS_TOKEN/\$ROLLBAR_ACCESS_TOKEN/g" ./src/mappings/mappingHandlers.ts
fi