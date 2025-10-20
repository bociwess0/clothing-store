'use server'

import { signIn, signOut } from "@/auth"
import { signInFormSchema, signUpFormSchema } from "../validators"
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { hashSync } from "bcrypt-ts-edge";
import { prisma } from "@/db/prisma";

export async function SingInWithCredentials(prevState:unknown, formData: FormData) {
    try {
        const user = signInFormSchema.parse({
            email: formData.get('email'),
            password: formData.get('password',)
        })

        await signIn('credentials', user);

        return { success:  true, message: "Signed in successfully!"}
    } catch (error) {
        if(isRedirectError(error)) {
            throw error;
        }

        return { success:  false, message: "Invalid email or password!"}
    }
}

export async function signOutUser() {
    await signOut();
}

export async function SignUpUser(prevState:unknown, formData: FormData) {
    try {
        const user = signUpFormSchema.parse({
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
        })
        
        const plainPassword = user.password;
        user.password = hashSync(user.password, 10);

        await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password
            }
        });

        await signIn('credentials', {
            email: user.email,
            password: plainPassword
        })

        return { success: true, message: "User registered successfully!" }
    } catch (error) {
        
        if(isRedirectError(error)) {
            throw error;
        }

        return { success:  false, message: "User was not registered!"}
    }
}

export async function getUserById(userId: string) {
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });
  if (!user) throw new Error('User not found');
  return user;
}