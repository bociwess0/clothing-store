import { Decimal } from "@prisma/client/runtime/binary";

export interface Product {
    id: string;
    name: string;
    slug: string;
    category: string;
    images: string[];
    brand: string;
    description: string;
    stock: number;
    price: Decimal;
    rating: Decimal;
    numReviews: number;
    isFeatured: boolean;
    banner: string | null;
    createdAt: Date;
}