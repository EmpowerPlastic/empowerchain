const fs = require('fs');

class GentxChecker {
    constructor(gentx) {
        this._validator_data = gentx.body.messages[0];
    }

    isHealthyDelegatorAddress() {
        return this._validator_data.delegator_address.startsWith('empower');
    }

    isHealthyValidatorAddress() {
        return this._validator_data.validator_address.startsWith('empower');
    }

    isHealthyAmount() {
        return parseInt(this._validator_data.value.amount) / 1000000 === 1.0;
    }

    isHealthyDenom() {
        return this._validator_data.value['denom'] === 'umpwr';
    }
}

let rawData = fs.readFileSync(process.argv[2]);
let gentx_json = JSON.parse(rawData);

const gentxChecker = new GentxChecker(gentx_json)
const str_errors = []

if (!gentxChecker.isHealthyDelegatorAddress())
    str_errors.push('Incorrect delegator address.');
if (!gentxChecker.isHealthyValidatorAddress())
    str_errors.push('Incorrect validator address.');
if (!gentxChecker.isHealthyAmount())
    str_errors.push('Incorrect amount.');
if (!gentxChecker.isHealthyDenom())
    str_errors.push('Incorrect denom.');

console.log(str_errors.length === 0 ? 'No errors found' : str_errors.join('\n'))
process.exit(str_errors.length === 0 ? 0 : 1)
