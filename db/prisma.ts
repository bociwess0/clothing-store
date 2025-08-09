import { neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';

// Enable WebSocket connections for Neon
neonConfig.webSocketConstructor = ws;

const connectionString = process.env.DATABASE_URL!;

// Create Prisma adapter directly from the connection string
const adapter = new PrismaNeon({ connectionString });

// Create Prisma client with adapter and extend result transformation
export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
  },
});
