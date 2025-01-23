export interface Banner {
    id: string;
    label: string;
    imageUrl: string;
}

export interface category{
    id: string;
    name: string;
    banner: Banner;
}