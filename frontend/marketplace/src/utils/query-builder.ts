export class ListingsQueryBuilder {
  private pricePerCredit: string = "";
  private volume: string = "";
  private locations: string = "";
  private registrationDate: string = "";
  private organizations: string = "";
  private creditTypes: string = "";
  private textSearch: string = "";
  private first: number = 0;
  private offset: number = 0;

  constructor() {
    this.reset();
  }

  public build(): string {
    const eventData = this.volume || this.locations || this.registrationDate;
    const creditData = eventData || this.textSearch || this.organizations;
    const creditCollection = creditData || this.creditTypes;
    const query = `
            {
                ${this.pricePerCredit}
                ${
                  creditCollection
                    ? `creditCollection:
                    {
                        ${
                          creditData
                            ? `creditData:
                            {
                                some:
                                    {
                                        ${
                                          eventData
                                            ? `eventData:
                                            {
                                                some:
                                                    {
                                                        ${this.volume}
                                                        ${this.locations}
                                                        ${this.registrationDate}
                                                    }
                                            },`
                                            : ""
                                        }
                                        ${this.textSearch}
                                        ${this.organizations}
                                    }
                            }`
                            : ""
                        }
                        ${this.creditTypes}
                    }`
                    : ""
                }
            }`;
    return `query {
                    marketplaceListings(filter: ${query}, ${
      this.first ? `first: ${this.first},` : ""
    } ${this.offset ? `offset: ${this.offset},` : ""}) {
                       totalCount ${this.resultsQuery()}
                    }
                }`;
  }

  public reset() {
    this.pricePerCredit = "";
    this.volume = "";
    this.locations = "";
    this.registrationDate = "";
    this.organizations = "";
    this.creditTypes = "";
    this.textSearch = "";
    this.first = 0;
    this.offset = 0;
  }

  public addPricePerCredit(
    pricePerCreditFrom?: string,
    pricePerCreditTo?: string
  ) {
    if (!pricePerCreditFrom && !pricePerCreditTo) {
      throw new Error(
        "Price per credit filter requires at least one of pricePerCreditFrom or pricePerCreditTo"
      );
    }
    this.pricePerCredit = this.bigIntRangeFilter(
      "pricePerCreditAmount",
      pricePerCreditFrom,
      pricePerCreditTo
    );
  }

  public addVolume(volumeFrom?: number, volumeTo?: number) {
    if (!volumeFrom && !volumeTo) {
      throw new Error(
        "Volume filter requires at least one of volumeFrom or volumeTo"
      );
    }
    this.volume = this.numberRangeFilter("amount", volumeFrom, volumeTo);
  }

  public addLocations(locations: string[]) {
    this.locations = this.inStringFilter("country", locations);
  }

  public addRegistrationDate(
    registrationDateFrom?: Date,
    registrationDateTo?: Date
  ) {
    if (!registrationDateFrom && !registrationDateTo) {
      throw new Error(
        "Registration date filter requires at least one of registrationDateFrom or registrationDateTo"
      );
    }
    this.registrationDate = this.dateRangeFilter(
      "registrationDate",
      registrationDateFrom,
      registrationDateTo
    );
  }

  public addOrganizations(organizations: string[]) {
    const orgFilter = this.inStringFilter("name", organizations);
    this.organizations = `applicantDataByCreditDataId: { some: { ${orgFilter} } },`;
  }

  public addCreditTypes(creditTypes: string[]) {
    this.creditTypes = this.inStringFilter("creditType", creditTypes);
  }

  public addTextSearch(textSearch: string) {
    this.textSearch = this.likeInsensitiveFilter("rawJsonData", textSearch);
  }

  public addPagination(first: number, offset: number) {
    this.first = first;
    this.offset = offset;
  }

  private inStringFilter(filterName: string, values: string[]): string {
    values = values.map((value) => `"${value}"`);
    return `${filterName}: { in: [${values}] },`;
  }

  private likeInsensitiveFilter(filterName: string, value: string): string {
    return `${filterName}: { likeInsensitive: "%${value}%" },`;
  }

  private numberRangeFilter(
    filterName: string,
    from?: number,
    to?: number
  ): string {
    return this.rangeFilter(filterName, from?.toString(), to?.toString());
  }

  private bigIntRangeFilter(
    filterName: string,
    from?: string,
    to?: string
  ): string {
    return this.rangeFilter(filterName, `"${from}"`, `"${to}"`);
  }

  private dateRangeFilter(filterName: string, from?: Date, to?: Date): string {
    return this.rangeFilter(
      filterName,
      `"${from?.toISOString()}"`,
      `"${to?.toISOString()}"`
    );
  }

  private rangeFilter(filterName: string, from?: string, to?: string): string {
    let filter = `${filterName}: {`;
    if (from) {
      filter += `greaterThanOrEqualTo: ${from},`;
    }
    if (to) {
      filter += `lessThanOrEqualTo: ${to},`;
    }
    filter += "},";
    return filter;
  }

  private resultsQuery(): string {
    return `nodes {
                    id
                    amount
                    initialAmount
                    denom
                    pricePerCreditAmount
                    pricePerCreditDenom
                    creditCollection{
                        creditType
                        creditData{
                            nodes{
                                eventData{
                                    nodes{
                                        magnitude
                                        amount
                                        country
                                        material{
                                            nodes{
                                                key
                                                value
                                            }
                                        }
                                    }
                                }
                                mediaFiles{
                                    nodes{
                                        url
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
                }`;
  }
}
