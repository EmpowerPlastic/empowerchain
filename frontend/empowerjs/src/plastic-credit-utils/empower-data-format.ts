export interface EmpowerDataFormat {
    version: string;
    credit_props: CreditProp[];
}

export interface CreditProp {
    id: string;
    type: string;
    content: any;
}