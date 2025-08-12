"use client";
import { Button } from "@/components/ui/button";
import { addItemToCart } from "@/lib/actions/cart.actions";
import { CartItem } from "@/types/types";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "sonner";

interface Props {
  item: CartItem;
}

export default function AddToCart({ item }: Props) {
  // const router = useRouter();

  const handleAddToCart = async () => {
    try {
      const res = await addItemToCart(item);

      if (res.success) {
        toast("Product is added to cart!", {
          description: res.message,
        });
      } else {
        toast("Product not added to cart!", {
          description: res.message,
        });
      }

    } catch (error) {
      toast("Product not added to cart!", {
        description: "Bad request!",
      });
    }
  };

  return (
    <Button onClick={handleAddToCart} className="cursor-pointer">
      Add To Cart
    </Button>
  );
}
