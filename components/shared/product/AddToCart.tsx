"use client";
import { Button } from "@/components/ui/button";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";
import { Cart, CartItem } from "@/types/types";
import { Minus, Plus } from "lucide-react";
import React from "react";
import { toast } from "sonner";

interface Props {
  cart?: Cart;
  item: CartItem;
}

export default function AddToCart({ cart, item }: Props) {
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

  // Check if item is in cart

  const handleRemoveFromCart = async () => {
    const res = await removeItemFromCart(item.productId);
    toast(`${item.name} is removed from cart!`, {
      description: res.message,
    });

    return;
  };

  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);

  return existItem ? (
    <div>
      <Button className="cursor-pointer" type="button" variant={"outline"} onClick={handleRemoveFromCart}>
        <Minus className="h-4 w-4" />
      </Button>
      <span className="px-2">{existItem.qty}</span>
      <Button className="cursor-pointer" type="button" variant={"outline"} onClick={handleAddToCart}>
        <Plus className="h-4 w-4 " />
      </Button>
    </div>
  ) : (
    <Button
      className="w-full mt-4 cursor-pointer"
      type="button"
      onClick={handleAddToCart}
    >
      <Plus className="w-4 h-4" />
      Add To Cart
    </Button>
  );
}
