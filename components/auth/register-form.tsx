"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import Link from "next/link";

const registerSchema = z
  .object({
    fullName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().email("Correo electrónico inválido"),
    password: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres"),
    confirmPassword: z.string(),
    companyName: z.string().min(2, "El nombre de la empresa es requerido"),
    ruc: z.string().regex(/^\d{11}$/, "El RUC debe tener 11 dígitos"),
    terms: z.boolean().refine((val) => val === true, {
      message: "Debes aceptar los términos y condiciones",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      companyName: "",
      ruc: "",
      terms: false,
    },
  });

  async function onSubmit(values: RegisterFormValues) {
    try {
      setIsLoading(true);

      // 1. Sign up user first (this will auto-create profile via trigger)
      console.log("Step 1: Creating user account...");
      const { data: authData, error: signUpError } = await supabase.auth.signUp(
        {
          email: values.email,
          password: values.password,
          options: {
            data: {
              full_name: values.fullName,
            },
          },
        }
      );

      if (signUpError) {
        console.error("Sign up error:", signUpError);
        throw signUpError;
      }
      if (!authData.user) throw new Error("No se pudo crear el usuario");
      console.log("✓ User created:", authData.user.id);

      // 2. Create company
      console.log("Step 2: Creating company...");
      const { data: companyData, error: companyError } = await supabase
        .from("companies")
        .insert({
          name: values.companyName,
          ruc: values.ruc,
          size: "micro",
        })
        .select()
        .single();

      if (companyError) {
        console.error("Company creation error:", companyError);
        // If company creation fails, still redirect to verify email
        toast.success("¡Usuario creado!", {
          description: "Revisa tu correo para confirmar tu cuenta. Podrás completar tu empresa después.",
        });
        router.push("/auth/verify-email");
        return;
      }
      console.log("✓ Company created:", companyData.id);

      // 3. Wait for trigger to create profile
      console.log("Step 3: Waiting for profile creation...");
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 4. Update profile with company info
      console.log("Step 4: Updating profile with company...");
      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          company_id: companyData.id,
          full_name: values.fullName,
          role: "owner",
        })
        .eq("id", authData.user.id);

      if (profileError) {
        console.error("Profile update error:", profileError);
        // Don't fail the whole process
      } else {
        console.log("✓ Profile updated successfully");
      }

      toast.success("¡Cuenta creada exitosamente!", {
        description: "Revisa tu correo para confirmar tu cuenta.",
      });

      router.push("/auth/verify-email");
    } catch (error: any) {
      console.error("Registration error:", error);
      
      // If it's an auth error, user might already exist
      if (error.message?.includes("already registered")) {
        toast.error("Esta cuenta ya existe", {
          description: "Intenta iniciar sesión o usa otro correo.",
        });
      } else {
        toast.error("Error al crear la cuenta", {
          description: error.message || "Por favor, intenta de nuevo.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full border-2">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl md:text-3xl font-bold">
          Crea tu cuenta
        </CardTitle>
        <CardDescription>
          Únete a miles de empresas peruanas que están transformando su negocio
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre completo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Juan Pérez"
                      {...field}
                      disabled={isLoading}
                      className="h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo electrónico</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="juan@empresa.com"
                      {...field}
                      disabled={isLoading}
                      className="h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre de la empresa</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Mi Empresa SAC"
                        {...field}
                        disabled={isLoading}
                        className="h-11"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ruc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>RUC</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="20123456789"
                        {...field}
                        disabled={isLoading}
                        maxLength={11}
                        className="h-11"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                        disabled={isLoading}
                        className="h-11"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmar contraseña</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                        disabled={isLoading}
                        className="h-11"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm font-normal">
                      Acepto los{" "}
                      <Link
                        href="/terminos"
                        className="text-primary underline hover:text-primary/80"
                      >
                        términos y condiciones
                      </Link>{" "}
                      y la{" "}
                      <Link
                        href="/privacidad"
                        className="text-primary underline hover:text-primary/80"
                      >
                        política de privacidad
                      </Link>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-11 font-semibold"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg
                    className="mr-2 h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Creando cuenta...
                </>
              ) : (
                "Crear cuenta gratis"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-sm text-center text-muted-foreground">
          ¿Ya tienes una cuenta?{" "}
          <Link
            href="/auth/login"
            className="text-primary underline hover:text-primary/80 font-medium"
          >
            Inicia sesión
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
