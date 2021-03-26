export type Person = {
    key: string;
    crsid: string;
    name: string;
    college: string;
    subject: string;
}

export type Response = {
    focus?: Person;
    parents?: Person[];
    children?: Person[];
    partners?: Person[];
    siblings?: Person[];
}