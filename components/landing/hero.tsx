import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-32 xl:py-40 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-[10%] top-[40%] h-[250px] w-[250px] md:h-[400px] md:w-[400px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6 md:space-y-8 text-center">
          <div className="space-y-4 md:space-y-6 max-w-4xl">
            <Badge
              variant="secondary"
              className="mb-2 px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm animate-in fade-in slide-in-from-bottom-3 duration-500"
            >
              ✨ Solución integral para MYPES y PYMES peruanas
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 px-4">
              Transforma tu negocio con{" "}
              <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                tecnología inteligente
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-base text-muted-foreground md:text-lg lg:text-xl leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-1000 px-4">
              Gestiona tu empresa de forma eficiente con nuestro sistema todo en
              uno. Ventas, inventario, capacitación y más, diseñado
              especialmente para PyMEs peruanas.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-2 md:pt-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 w-full sm:w-auto px-4">
            <Button
              size="lg"
              className="text-sm md:text-base px-6 md:px-8 py-5 md:py-6 group w-full sm:w-auto"
              asChild
            >
              <Link href="#contacto">
                Comenzar Prueba Gratis
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-sm md:text-base px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto"
              asChild
            >
              <Link href="#funcionalidades">Ver Funcionalidades</Link>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 pt-6 md:pt-8 w-full max-w-3xl animate-in fade-in slide-in-from-bottom-7 duration-1000 px-4">
            <Card className="p-3 md:p-4 hover:shadow-lg transition-all duration-200 hover:scale-105 border-primary/20">
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
                  14
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  días gratis
                </div>
              </div>
            </Card>
            <Card className="p-3 md:p-4 hover:shadow-lg transition-all duration-200 hover:scale-105 border-primary/20">
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
                  24/7
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Soporte
                </div>
              </div>
            </Card>
            <Card className="p-3 md:p-4 hover:shadow-lg transition-all duration-200 hover:scale-105 border-primary/20">
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
                  5K+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Clientes
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
