import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Gestión de Inventario",
    description:
      "Control total de tu stock con alertas automáticas de reposición y reportes en tiempo real.",
    icon: "📦",
    badge: "Esencial",
  },
  {
    title: "Punto de Venta",
    description:
      "Sistema POS rápido y fácil de usar, optimizado para el comercio peruano.",
    icon: "💳",
    badge: "Popular",
  },
  {
    title: "Facturación Electrónica",
    description:
      "Emite boletas y facturas electrónicas cumpliendo con las normas de SUNAT.",
    icon: "🧾",
    badge: "SUNAT",
  },
  {
    title: "Reportes Inteligentes",
    description:
      "Dashboards visuales con métricas clave para tomar mejores decisiones.",
    icon: "📊",
    badge: "Analytics",
  },
  {
    title: "Multi-sucursal",
    description:
      "Gestiona múltiples ubicaciones desde una sola plataforma centralizada.",
    icon: "🏢",
    badge: "Escalable",
  },
  {
    title: "App Móvil",
    description:
      "Accede a tu negocio desde cualquier lugar con nuestra app móvil.",
    icon: "📱",
    badge: "Mobile",
  },
];

export function Features() {
  return (
    <section
      id="funcionalidades"
      className="w-full py-16 md:py-24 lg:py-32 bg-muted/30"
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-4">
            <Badge variant="outline" className="px-3 py-1">Funcionalidades</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl max-w-3xl">
              Todo lo que necesitas para crecer
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg leading-relaxed">
              Herramientas profesionales diseñadas para simplificar la gestión
              de tu negocio
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] duration-200"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-5xl">{feature.icon}</div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
