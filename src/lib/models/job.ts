interface Job {
    address: Address;
    brand: string;
    title: string;
    description: string;
    start: Date;
    hours: string;
    applicationLink: string;
    created: string;
    modified: string;
    id: string;
    published: string;
    premium: boolean;
    unsolicited: boolean;
    trainee: boolean;
    country: string;
    region: string;
    categories: Array<string>;
    employmentType: string;
    jobLevel: string;
    url: string;
}

type Country = "DE" | "DK" | "PL" | "SE"
