import { RegisterForm } from "@/components/auth/register-form";
import Link from "next/link";
import { Suspense } from "react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              SaaS MYPES
            </h1>
          </Link>
          <p className="text-muted-foreground">
            Únete a miles de empresas peruanas que están creciendo con nosotros
          </p>
        </div>

        <Suspense
          fallback={
            <div className="w-full h-[600px] animate-pulse bg-muted rounded-lg" />
          }
        >
          <RegisterForm />
        </Suspense>
      </div>
    </div>
  );
}
