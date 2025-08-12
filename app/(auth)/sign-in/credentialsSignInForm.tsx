"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SingInWithCredentials } from "@/lib/actions/user.actions";
import { SignInDefaultValues } from "@/lib/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";

export default function CredentialsSignInForm() {
  const [data, action] = useActionState(SingInWithCredentials, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || '/';

  const SignInButton = () => {

    const { pending } = useFormStatus();

    return (
      <Button disabled={pending} className='w-full' variant='default'>
        {pending ? 'Signing In...' : 'Sign In'}
      </Button>
    );
  };


  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl}/>
      <div className="space-y-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            id="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={SignInDefaultValues.email}
          ></Input>
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            id="password"
            type="password"
            required
            autoComplete="password"
            defaultValue={SignInDefaultValues.password}
          ></Input>
        </div>
        <div>
          <SignInButton />
        </div>
        { data && !data.success && (
            <div className="text-center text-destructive">{data.message}</div>
        ) } 
        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" target="_self" className="link">
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
}
