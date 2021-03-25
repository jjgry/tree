export type Person = {
    key: string;
    crsid: string;
    name: string;
    subject: string;
}

export type Response = {
    focus?: Person[];
    parents?: Person[];
}
