import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const testimonials = [
  {
    name: "María González",
    role: "Dueña de Bodega Los Ángeles",
    location: "Lima, Perú",
    content:
      "Antes perdía horas haciendo cuentas manualmente. Ahora controlo todo desde mi celular.",
    rating: 5,
    metric: "40% menos tiempo en inventario",
    businessType: "Comercio Minorista",
    experience: "6 meses usando la plataforma",
    highlight: "Incrementó sus ventas en 25%",
  },
  {
    name: "Carlos Pérez",
    role: "Gerente de Importaciones",
    location: "Arequipa, Perú",
    content:
      "La herramienta de facturación nos ahorró miles de soles en errores.",
    rating: 5,
    metric: "95% menos errores de facturación",
    businessType: "Importación y Distribución",
    experience: "1 año usando la plataforma",
    highlight: "Redujo costos operativos en 30%",
  },
  {
    name: "Ana Rodríguez",
    role: "Fundadora de Café Peruano",
    location: "Cusco, Perú",
    content: "Mis ventas aumentaron 35% gracias a los reportes de tendencias.",
    rating: 5,
    metric: "+35% en ventas mensuales",
    businessType: "Cafetería y Restaurante",
    experience: "8 meses usando la plataforma",
    highlight: "Optimizó su menú basándose en datos",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="w-full py-12 md:py-20 lg:py-32 bg-muted/50 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute right-0 bottom-1/3 h-[250px] w-[250px] md:h-[400px] md:w-[400px] rounded-full bg-primary/5 blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-3 md:space-y-4 text-center mb-10 md:mb-12">
          <div className="space-y-3 md:space-y-4">
            <Badge
              variant="secondary"
              className="mb-2 text-xs md:text-sm px-3 md:px-4 py-1"
            >
              ⭐ Testimonios
            </Badge>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl px-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="max-w-[700px] text-sm text-muted-foreground md:text-base lg:text-lg leading-relaxed px-4">
              Historias reales de emprendedores peruanos que transformaron sus
              negocios
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <HoverCard key={index} openDelay={200}>
              <HoverCardTrigger asChild>
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-2 hover:border-primary/50 relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="relative z-10">
                    <div className="flex items-start gap-3 md:gap-4">
                      <Avatar className="h-12 w-12 md:h-14 md:w-14 border-2 border-primary/20 group-hover:border-primary/50 transition-all group-hover:scale-110 duration-300 shrink-0">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold text-base md:text-lg">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base md:text-lg font-semibold group-hover:text-primary transition-colors truncate">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="text-xs md:text-sm mt-1">
                          {testimonial.role}
                        </CardDescription>
                        <div className="flex items-center gap-1 mt-2 text-amber-500 group-hover:scale-110 transition-transform duration-300">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="h-3 w-3 md:h-4 md:w-4 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-2 text-xs md:text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="text-muted-foreground">
                        {testimonial.location}
                      </span>
                    </div>
                  </CardContent>

                  {/* Animated border glow */}
                  <div className="absolute -inset-0.5 bg-linear-to-r from-primary to-primary/50 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
                </Card>
              </HoverCardTrigger>
              <HoverCardContent
                className="w-80 border-2 border-primary/20"
                side="top"
              >
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-12 w-12 border-2 border-primary/30">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.businessType}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.metric}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-primary">
                         {testimonial.highlight}
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.experience}
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        {/* Social proof section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-6 rounded-xl bg-background/50 border-2 border-primary/10 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-6 w-6 fill-amber-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              <span className="font-bold text-2xl text-foreground">4.9/5</span>{" "}
              basado en más de{" "}
              <span className="font-semibold text-primary">2,500+ reseñas</span>{" "}
              de emprendedores peruanos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
