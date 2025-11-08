import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted/20">
      <Card className="w-full max-w-md border-2">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl md:text-3xl font-bold">
            Verifica tu correo
          </CardTitle>
          <CardDescription>
            Te hemos enviado un correo de confirmación. Por favor, revisa tu
            bandeja de entrada y haz clic en el enlace para activar tu cuenta.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-muted rounded-lg text-sm text-muted-foreground">
            <p className="mb-2">
              <strong className="text-foreground">Importante:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Revisa también tu carpeta de spam</li>
              <li>El enlace expira en 24 horas</li>
              <li>Si no recibiste el correo, espera unos minutos</li>
            </ul>
          </div>

          <Button variant="outline" className="w-full" asChild>
            <Link href="/auth/login">Volver al inicio de sesión</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
