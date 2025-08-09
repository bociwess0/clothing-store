import { insertProductSchema } from "@/lib/validators";
import { Decimal } from "@prisma/client/runtime/binary";
import z from "zod";

export type Product = z.infer<typeof insertProductSchema> & {
    id: string;
    rating: Decimal,
    createdAt: Date,
    price: Decimal | string
}