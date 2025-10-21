import { auth } from "@/auth";
import { GetMyCart } from "@/lib/actions/cart.actions";
import { getUserById } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import React from "react";
import ShippingAddressForm from "./ShippingAddressForm";
import { ShippingAddress } from "@/types/types";
import CheckoutSteps from "@/components/shared/CheckoutSteps";

export default async function ShippingAddressPage() {
  const cart = await GetMyCart();

  if (!cart || cart.items.length === 0) redirect("/cart");

  const session = await auth();

  const userId = session?.user?.id;

  if (!userId) throw new Error("No user ID");

  const user = await getUserById(userId);

  return (
    <div className="h-[80vh]">
      <CheckoutSteps current={1} />
      <ShippingAddressForm address={user.address as ShippingAddress} />
    </div>
  );
}
