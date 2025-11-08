import { createServerComponentClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { ProfileForm } from "@/components/profile/profile-form";
import { CompanyForm } from "@/components/profile/company-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ProfilePage() {
  const supabase = await createServerComponentClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/auth/login");
  }

  // Obtener perfil del usuario
  const { data: profile } = await supabase
    .from("profiles")
    .select("*, companies(*)")
    .eq("id", session.user.id)
    .single();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4 md:p-8 max-w-5xl">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al dashboard
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Mi Perfil</h1>
          <p className="text-muted-foreground">
            Administra tu información personal y de empresa
          </p>
        </div>

        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="personal">Información Personal</TabsTrigger>
            <TabsTrigger value="company">Información de Empresa</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Información Personal</CardTitle>
                <CardDescription>
                  Actualiza tus datos personales y de contacto
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProfileForm profile={profile} userId={session.user.id} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="company">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Información de Empresa</CardTitle>
                <CardDescription>
                  Gestiona los datos de tu empresa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CompanyForm company={profile?.companies} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
