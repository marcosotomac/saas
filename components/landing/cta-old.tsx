import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CTA() {
  return (
    <section id="contacto" className="w-full py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Únete a miles de PYMES peruanas que ya están creciendo con nuestra
              plataforma
            </p>
          </div>

          <Card className="w-full max-w-lg mt-4">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Comienza tu prueba gratuita</CardTitle>
              <CardDescription className="text-base">
                14 días gratis • Sin tarjeta de crédito • Cancela cuando quieras
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Nombre de tu negocio"
                    className="w-full h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="tel"
                    placeholder="Teléfono (WhatsApp)"
                    className="w-full h-12 text-base"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 text-base font-semibold"
                  variant="default"
                >
                  Comenzar Ahora
                </Button>
              </form>
              <p className="text-xs text-center text-muted-foreground mt-4">
                Al registrarte, aceptas nuestros términos y condiciones
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-3 gap-8 md:gap-12 pt-8 text-center max-w-3xl w-full">
            <div>
              <div className="text-3xl md:text-5xl font-bold mb-2">5,000+</div>
              <div className="text-sm md:text-base text-primary-foreground/80">
                Negocios activos
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-sm md:text-base text-primary-foreground/80">
                Satisfacción
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-sm md:text-base text-primary-foreground/80">Soporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
