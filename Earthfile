VERSION 0.6
FROM earthly/dind:ubuntu
WORKDIR /empowerchain

check-md-links:
    FROM ghcr.io/tcort/markdown-link-check:stable
    WORKDIR /empowerchain
    COPY . . # Until https://github.com/earthly/earthly/issues/1230
    RUN echo "
{
    \"ignorePatterns\": [
        {
            \"description\": \"Ignore in-page anchor links defined using <a id=''> syntax,. See https://github.com/tcort/markdown-link-check/issues/225\",
            \"pattern\": \"^#\"
        }
    ]
}" > markdown-link-check-config.json
    RUN find . -name \*.md -print0 | xargs -0 -n1 markdown-link-check --quiet --config markdown-link-check-config.json

get-proto:
    WORKDIR .
    COPY chain/proto/empowerchain ./empowerchain
    SAVE ARTIFACT .

get-cw-schema:
    WORKDIR .
    COPY cosmwasm/schema ./schema
    SAVE ARTIFACT .