import { CreditProp, EmpowerDataFormat } from "./empower-data-format";
import jsonschema from "jsonschema";


interface CreditPropBuilder {
    build(): CreditProp;
    reset(): void;
}

export class PlasticCreditBuilder {
    private creditEventsData: CreditProp;
    private creditMediaData: CreditProp;
    private creditFilesData: CreditProp;
    private issuanceDate: Date;
    private creditType: string;
    private applicantData: CreditProp;

    constructor() {
        this.reset();
    }

    addCreditEventData(creditEventData: CreditProp): PlasticCreditBuilder {
        this.creditEventsData.content.push(creditEventData);
        return this;
    }

    addCreditMediaData(files: File[]): PlasticCreditBuilder {
        this.creditMediaData.content = files;
        return this;
    }

    addCreditFilesData(files: File[]): PlasticCreditBuilder {
        this.creditFilesData.content = files;
        return this;
    }

    setIssuanceDate(issuanceDate: Date): PlasticCreditBuilder {
        this.issuanceDate = issuanceDate;
        return this;
    }

    setCreditType(creditType: string): PlasticCreditBuilder {
        this.creditType = creditType;
        return this;
    }

    setApplicantData(applicantData: CreditProp): PlasticCreditBuilder {
        this.applicantData = applicantData;
        return this;
    }

    build(): EmpowerDataFormat {
        if (!this.creditEventsData.content.length) {
            throw new Error("Credit events data is required");
        }
        if (!this.creditMediaData.content.length) {
            throw new Error("Credit media data is required");
        }
        if (!this.creditFilesData.content.length) {
            throw new Error("Credit files data is required");
        }
        if (!this.issuanceDate) {
            throw new Error("Issuance date is required");
        }
        if (!this.creditType) {
            throw new Error("Credit type is required");
        }
        if (!this.applicantData) {
            throw new Error("Applicant data is required");
        }

        const result = {
            version: "v1",
            credit_props: [
                this.creditEventsData,
                this.creditMediaData,
                this.creditFilesData,
                {
                    id: "issuance_date",
                    type: "date",
                    content: this.issuanceDate.toISOString(),
                },
                {
                    id: "credit_type",
                    type: "text",
                    content: this.creditType,
                },
                this.applicantData,
            ]
        }

        const schemaValidator = new jsonschema.Validator();
        const schema = require("./empower-data-format.schema.json");

        const validationResult = schemaValidator.validate(result, schema);

        if (validationResult.errors.length) {
            let errors = "";
            for (let error of validationResult.errors) {
                errors += error.stack + "\n";
            }
            throw new Error("Invalid data format:\n" + errors);
        }

        return result;
    }

    reset(): void {
        this.creditEventsData = {
            id: "credit_events_data",
            type: "empower_credit_events_data",
            content: [],
        }
        this.creditMediaData = {
            id: "credit_media",
            type: "file_list",
            content: [],
        }
        this.creditFilesData = {
            id: "credit_files",
            type: "file_list",
            content: [],
        }
        this.issuanceDate = null;
        this.creditType = "";
        this.applicantData = {} as CreditProp;
    }
}

export class EventBuilder implements CreditPropBuilder {
    private location: Coordinates;
    private amount: number;
    private magnitude: string;
    private material: Property[];
    private registrationDate: Date;

    constructor() {
        this.reset();
    };

    setLocation(location: Coordinates): EventBuilder {
        this.location = location;
        return this;
    }

    setAmount(amount: number): EventBuilder {
        this.amount = amount;
        return this;
    }

    setMagnitude(magnitude: string): EventBuilder {
        this.magnitude = magnitude;
        return this;
    }

    setMaterial(material: Property[]): EventBuilder {
        this.material = material;
        return this;
    }

    setRegistrationDate(registrationDate: Date): EventBuilder {
        this.registrationDate = registrationDate;
        return this;
    }

    build(): CreditProp {
        if (!this.location.latitude || !this.location.longitude) {
            throw new Error("Location is required");
        }
        if (!this.amount) {
            throw new Error("Amount is required");
        }
        if (!this.magnitude) {
            throw new Error("Magnitude is required");
        }
        if (this.material.length == 0) {
            throw new Error("Material is required");
        }
        if (!this.registrationDate) {
            throw new Error("Registration date is required");
        }
        return {
            id: "event_data",
            type: "empower_event_data",
            content: [
                {
                    id: "location",
                    type: "coordinates",
                    content: {
                        latitude: this.location.latitude,
                        longitude: this.location.longitude,
                    }
                },
                {
                    id: "amount",
                    type: "number",
                    content: this.amount,
                },
                {
                    id: "magnitude",
                    type: "text",
                    content: this.magnitude,
                },
                {
                    id: "material",
                    type: "property_map",
                    content: this.material,
                },
                {
                    id: "registration_date",
                    type: "date",
                    content: this.registrationDate.toISOString(),
                }
            ]
        };
    }

    reset(): void {
        this.location = {} as Coordinates;
        this.amount = 0;
        this.magnitude = "";
        this.material = [];
        this.registrationDate = null;
    }

}

export class ApplicantBuilder implements CreditPropBuilder {
    private name: string;
    private description: string;
    private web_refs: string[];

    constructor() {
        this.reset();
    }

    setName(name: string): ApplicantBuilder {
        this.name = name;
        return this;
    }

    setDescription(description: string): ApplicantBuilder {
        this.description = description;
        return this;
    }

    setWebRefs(webRefs: string[]): ApplicantBuilder {
        this.web_refs = webRefs;
        return this;
    }

    build(): CreditProp {
        if (!this.name) {
            throw new Error("Name is required");
        }
        if (!this.description) {
            throw new Error("Description is required");
        }
        return {
            id: "applicant_data",
            type: "empower_applicant_data",
            content: {
                name: this.name,
                description: this.description,
                web_refs: this.web_refs,
            }
        }
    }

    reset(): void {
        this.name = "";
        this.description = "";
        this.web_refs = [];
    }
}

export class MaterialPropertyBuilder {
    private properties: Property[] = [];

    constructor() {
        this.reset();
    };

    addProperty(key: string, value: string): MaterialPropertyBuilder {
        this.properties.push({
            key: key,
            value: value,
        });
        return this;
    }

    build(): Property[] {
        const properties = this.properties;
        this.reset();
        return properties;
    }

    reset(): void {
        this.properties = [];
    }
}

export class FileBuilder {
    private files: File[] = [];

    constructor() {
        this.reset();
    }

    addFile(name: string, url: string): FileBuilder {
        this.files.push({
            name: name,
            url: url,
        });
        return this;
    }

    build(): File[] {
        const files = this.files;
        this.reset();
        return files;
    }

    reset(): void {
        this.files = [];
    }
}

interface Coordinates {
    latitude: number;
    longitude: number;
}

interface Property {
    key: string;
    value: string;
}

interface File {
    name: string;
    url: string;
}