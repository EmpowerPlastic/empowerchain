#/bin/bash
set -e

# Get Google Maps API key from .env file (trim double quotes)
GOOGLE_MAPS_API_KEY=$(grep GOOGLE_MAPS_API_KEY .env | cut -d '=' -f2 | sed 's/"//g')

# Replace $KEY in src/mappings/mappingHandlers.ts with Google Maps API key
sed -i '' "s/\$KEY/$GOOGLE_MAPS_API_KEY/g" ./src/mappings/mappingHandlers.ts

# Build project
subql build

# Restore original mappingHandlers.ts
sed -i '' "s/$GOOGLE_MAPS_API_KEY/\$KEY/g" ./src/mappings/mappingHandlers.ts