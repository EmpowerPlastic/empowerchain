export function queryListings(
    locations?: string[],
    volumeFrom?: number,
    volumeTo?: number,
    registrationDateFrom?: Date,
    registrationDateTo?: Date,
    organizations?: string[],
    creditTypes?: string[],
    pricePerCreditFrom?: string,
    pricePerCreditTo?: string,
    textSearch?: string) {
    let filter = '{';
    if (pricePerCreditFrom || pricePerCreditTo) {
        filter += 'pricePerCreditAmount: {';
        if (pricePerCreditFrom) {
            filter += `greaterThanOrEqualTo: "${pricePerCreditFrom}",`;
        }
        if (pricePerCreditTo) {
            filter += `lessThanOrEqualTo: "${pricePerCreditTo}",`;
        }
        filter += '},';
    }
    if (volumeFrom || volumeTo || locations || registrationDateFrom || registrationDateTo || organizations || textSearch) {
        filter += 'creditCollection: { creditData: { some: {';
        if (volumeFrom || volumeTo || locations || registrationDateFrom || registrationDateTo) {
            filter += 'eventData: { some: {';
            if (volumeFrom || volumeTo) {
                filter += 'amount: {';
                if (volumeFrom) {
                    filter += `greaterThanOrEqualTo: ${volumeFrom},`;
                }
                if (volumeTo) {
                    filter += `lessThanOrEqualTo: ${volumeTo},`;
                }
                filter += '},';
            }
            if (locations) {
                locations = locations.map(location => `"${location}"`);
                filter += `country: { in: [${locations}] },`;
            }
            if (registrationDateFrom || registrationDateTo) {
                filter += 'registrationDate: {';
                if (registrationDateFrom) {
                    filter += `greaterThanOrEqualTo: "${registrationDateFrom.toISOString()}",`;
                }
                if (registrationDateTo) {
                    filter += `lessThanOrEqualTo: "${registrationDateTo.toISOString()}",`;
                }
                filter += '},';
            }
            filter += '}, },';
        }
        if (textSearch) {
            filter += `rawJsonData: { likeInsensitive: "%${textSearch}%" },`;
        }
        if (organizations) {
            organizations = organizations.map(org => `"${org}"`);
            filter += `applicantDataByCreditDataId: { some: { name: { in: [${organizations}] } } },`;
        }
        filter += '},},';
    }
    if (creditTypes) {
        creditTypes = creditTypes.map(creditType => `"${creditType}"`);
        filter += `creditType: { in: [${creditTypes}] },`;
    }
    filter += '} }';

    return `query {
      marketplaceListings(filter: ${filter}) {
        nodes {
          amount
          denom
          pricePerCreditAmount
          pricePerCreditDenom
          creditCollection{
            creditType
            creditData{
              nodes{
                eventData{
                  nodes{
                    country
                    material{
                      nodes{
                        key
                        value
                      }
                    }
                  }
                }
                applicantDataByCreditDataId{
                  nodes{
                    name
                  }
                }
              }
            }
          }
        }
      }
    }`;
}