export interface ISearchParams {
    annul: Array<string>;
    company_code: string;
    industry: string;
    agency: string;
    title: string;
    info: string;
    reply: string;
    page_size: number;
    current_page: number;
}

export interface IData { 
    agency: string
    annul: string
    category: string
    city: string
    code: string
    company: string
    county: string
    id: string
    industry: string
    info: string
    market: string
    plate: string
    province: string
    reply: string
    sfcindustry: string
    short_code: string
    short_name: string
    thsindustry: string
    title: string
}