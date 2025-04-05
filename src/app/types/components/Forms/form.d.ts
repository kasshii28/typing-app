import type { signInScheme } from "@/app/schemes/signIn";
import type { signUpScheme } from "@/app/schemes/signUp";

export type SignUpFormSchemeType = z.infer<typeof signUpScheme>;

export type SignInFormSchemeType = z.infer<typeof signInScheme>;
