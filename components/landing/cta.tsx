import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function CTA() {
  return (
    <section
      id="contacto"
      className="w-full py-12 md:py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[4rem_4rem]" />
        <div className="absolute left-1/4 top-1/4 h-[250px] w-[250px] md:h-[400px] md:w-[400px] rounded-full bg-white/10 blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-white/5 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-3 md:space-y-4">
              <Badge
                variant="secondary"
                className="mb-2 text-xs md:text-sm px-3 md:px-4 py-1 bg-white/20 text-white border-white/30"
              >
                🚀 Únete a miles de PYMES
              </Badge>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                Comienza a transformar tu negocio hoy
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
                Prueba gratis durante 30 días. Sin tarjeta de crédito. Cancela
                cuando quieras.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-2 md:gap-3">
                <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5 md:mt-1 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="md:w-3.5 md:h-3.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">
                    Configuración en minutos
                  </p>
                  <p className="text-xs md:text-sm text-primary-foreground/70">
                    No necesitas conocimientos técnicos
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5 md:mt-1 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="md:w-3.5 md:h-3.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">
                    Soporte en español 24/7
                  </p>
                  <p className="text-xs md:text-sm text-primary-foreground/70">
                    Estamos aquí para ayudarte
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5 md:mt-1 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="md:w-3.5 md:h-3.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">
                    Datos 100% seguros
                  </p>
                  <p className="text-xs md:text-sm text-primary-foreground/70">
                    Encriptación de nivel bancario
                  </p>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-2 md:pt-4">
              <div className="text-center p-2 md:p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                <div className="text-xl md:text-2xl font-bold">2,500+</div>
                <div className="text-xs text-primary-foreground/70">
                  Empresas
                </div>
              </div>
              <div className="text-center p-2 md:p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                <div className="text-xl md:text-2xl font-bold">4.9/5</div>
                <div className="text-xs text-primary-foreground/70">Rating</div>
              </div>
              <div className="text-center p-2 md:p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                <div className="text-xl md:text-2xl font-bold">99.9%</div>
                <div className="text-xs text-primary-foreground/70">Uptime</div>
              </div>
            </div>
          </div>

          <Card className="border-2 shadow-2xl hover:shadow-primary/20 transition-shadow duration-500">
            <CardContent className="p-6 md:p-8">
              <form className="space-y-4 md:space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    placeholder="Juan Pérez"
                    className="h-11 md:h-12 text-sm md:text-base border-2 focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    placeholder="juan@miempresa.com"
                    type="email"
                    className="h-11 md:h-12 text-sm md:text-base border-2 focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Nombre de tu empresa
                  </label>
                  <Input
                    id="company"
                    placeholder="Mi Empresa SAC"
                    className="h-11 md:h-12 text-sm md:text-base border-2 focus:border-primary transition-colors"
                  />
                </div>
                <Button
                  className="w-full h-11 md:h-12 text-sm md:text-base font-semibold bg-primary hover:bg-primary/90 group relative overflow-hidden"
                  size="lg"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Comenzar prueba gratuita
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Button>
                <p className="text-xs text-center text-muted-foreground pt-2">
                  Al registrarte, aceptas nuestros{" "}
                  <a href="#" className="underline hover:text-primary">
                    términos y condiciones
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
