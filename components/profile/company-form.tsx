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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const companySchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  ruc: z.string().regex(/^\d{11}$/, "El RUC debe tener 11 dígitos"),
  industry: z.string().optional(),
  size: z.enum(["micro", "pequeña", "mediana"]),
  phone: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  website: z.string().url("URL inválida").optional().or(z.literal("")),
});

type CompanyFormValues = z.infer<typeof companySchema>;

interface CompanyFormProps {
  company: any;
}

export function CompanyForm({ company }: CompanyFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  const form = useForm<CompanyFormValues>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: company?.name || "",
      ruc: company?.ruc || "",
      industry: company?.industry || "",
      size: company?.size || "micro",
      phone: company?.phone || "",
      address: company?.address || "",
      city: company?.city || "",
      website: company?.website || "",
    },
  });

  async function onSubmit(values: CompanyFormValues) {
    try {
      setIsLoading(true);

      if (!company?.id) {
        toast.error("Error", {
          description: "No se encontró información de la empresa.",
        });
        return;
      }

      const { error } = await supabase
        .from("companies")
        .update({
          name: values.name,
          ruc: values.ruc,
          industry: values.industry,
          size: values.size,
          phone: values.phone,
          address: values.address,
          city: values.city,
          website: values.website || null,
        })
        .eq("id", company.id);

      if (error) throw error;

      toast.success("Empresa actualizada", {
        description:
          "Los datos de la empresa han sido guardados correctamente.",
      });

      router.refresh();
    } catch (error: any) {
      console.error("Error:", error);
      toast.error("Error al actualizar empresa", {
        description: error.message || "Por favor, intenta de nuevo.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
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

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Industria</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Comercio, Tecnología, etc."
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
            name="size"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tamaño</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={isLoading}
                >
                  <FormControl>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Selecciona el tamaño" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="micro">
                      Microempresa (1-10 empleados)
                    </SelectItem>
                    <SelectItem value="pequeña">
                      Pequeña (11-100 empleados)
                    </SelectItem>
                    <SelectItem value="mediana">
                      Mediana (101-250 empleados)
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
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

          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sitio web</FormLabel>
                <FormControl>
                  <Input
                    type="url"
                    placeholder="https://www.miempresa.com"
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

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ciudad</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Lima, Arequipa, etc."
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
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dirección</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Av. Principal 123"
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
