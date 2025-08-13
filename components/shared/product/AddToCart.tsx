"use client";
import { Button } from "@/components/ui/button";
import { addItemToCart } from "@/lib/actions/cart.actions";
import { CartItem } from "@/types/types";
import { Plus } from "lucide-react";
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
        
        toast(`${item.name} is added to cart!`, {
          description: res.message,
        });
        
      } else {
        toast(`${item.name} is not added to cart!`, {
          description: res.message,
        });
      }

    } catch (error) {
      console.log(error);
      toast("Error occured while trying to add product in cart!", {
        description: "Bad request!",
      });
    }
  };

  return (
    <Button className='w-full mt-4 cursor-pointer' type='button' onClick={handleAddToCart}>
      <Plus className='w-4 h-4' />
      Add To Cart
    </Button>
  );
}
