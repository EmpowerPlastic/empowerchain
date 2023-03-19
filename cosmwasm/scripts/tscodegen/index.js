const codegen = require("@cosmwasm/ts-codegen").default;
const path = require("path");

const schemaRoot = path.join(__dirname, "../../schema");
const outDir = path.join(__dirname, "../../../frontend/cw-client/src");

console.log(outDir)

codegen({
    contracts: [
        {
            name: 'Plastic Credit Marketplace',
            dir: schemaRoot,
        },
    ],
    outPath: outDir,

    // options are completely optional ;)
    options: {
        bundle: {
            bundleFile: 'index.ts',
            scope: 'contracts'
        },
        types: {
            enabled: true
        },
        client: {
            enabled: true
        },
        reactQuery: {
            enabled: false,
        },
        recoil: {
            enabled: false
        },
        messageComposer: {
            enabled: false
        }
    }
}).then(() => {
    console.log('✨ all done!');
});