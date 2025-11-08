"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const profileSchema = z.object({
  fullName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  phone: z.string().optional(),
  position: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

interface ProfileFormProps {
  profile: any;
  userId: string;
}

export function ProfileForm({ profile, userId }: ProfileFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: profile?.full_name || "",
      phone: profile?.phone || "",
      position: profile?.position || "",
    },
  });

  async function onSubmit(values: ProfileFormValues) {
    try {
      setIsLoading(true);

      const { error } = await supabase
        .from("profiles")
        .update({
          full_name: values.fullName,
          phone: values.phone,
          position: values.position,
        })
        .eq("id", userId);

      if (error) throw error;

      toast.success("Perfil actualizado", {
        description: "Tus datos han sido guardados correctamente.",
      });

      router.refresh();
    } catch (error: any) {
      console.error("Error:", error);
      toast.error("Error al actualizar perfil", {
        description: error.message || "Por favor, intenta de nuevo.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cargo</FormLabel>
              <FormControl>
                <Input
                  placeholder="Gerente General"
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
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="+51 999 999 999"
                  {...field}
                  disabled={isLoading}
                  className="h-11"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full h-11 font-semibold"
          disabled={isLoading}
        >
          {isLoading ? "Guardando..." : "Guardar cambios"}
        </Button>
      </form>
    </Form>
  );
}
