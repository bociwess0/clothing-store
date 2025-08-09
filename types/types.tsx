import { insertProductSchema } from "@/lib/validators";
import { Decimal } from "@prisma/client/runtime/binary";
import z from "zod";

export type Product = z.infer<typeof insertProductSchema> & {
    id: string;
    rating: Decimal | string,
    createdAt: Date,
    price: Decimal | string
}