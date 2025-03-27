export interface ContentBlock {
    type: "text" | "code" | "image" | "list";
    content: string | string[];
    language?: string; // For code blocks
    alt?: string; // For images
}

export interface QA {
    q: string;
    a: ContentBlock[];
}

export interface Subcategory {
    [key: string]: QA[];
}

export interface Category {
    id: string;
    name: string;
    icon: string;
    subcategories: Subcategory;
}
