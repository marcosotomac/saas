import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const features = [
  {
    title: "Gestión de Inventario",
    description:
      "Control total de tu stock con alertas automáticas de reposición y reportes en tiempo real.",
    icon: "📦",
    badge: "Esencial",
    category: "gestion",
  },
  {
    title: "Punto de Venta",
    description:
      "Sistema POS rápido y fácil de usar, optimizado para el comercio peruano.",
    icon: "💳",
    badge: "Popular",
    category: "ventas",
  },
  {
    title: "Facturación Electrónica",
    description:
      "Emite boletas y facturas electrónicas cumpliendo con las normas de SUNAT.",
    icon: "🧾",
    badge: "SUNAT",
    category: "ventas",
  },
  {
    title: "Reportes Inteligentes",
    description:
      "Dashboards visuales con métricas clave para tomar mejores decisiones.",
    icon: "📊",
    badge: "Analytics",
    category: "gestion",
  },
  {
    title: "Multi-sucursal",
    description:
      "Gestiona múltiples ubicaciones desde una sola plataforma centralizada.",
    icon: "🏢",
    badge: "Escalable",
    category: "gestion",
  },
  {
    title: "App Móvil",
    description:
      "Accede a tu negocio desde cualquier lugar con nuestra app móvil.",
    icon: "📱",
    badge: "Mobile",
    category: "ventas",
  },
];

export function Features() {
  return (
    <section
      id="funcionalidades"
      className="w-full py-12 md:py-20 lg:py-32 bg-muted/30"
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 md:mb-12">
          <div className="space-y-3 md:space-y-4">
            <Badge
              variant="secondary"
              className="mb-2 text-xs md:text-sm px-3 md:px-4 py-1"
            >
              🚀 Todo lo que necesitas
            </Badge>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl px-4">
              Funcionalidades diseñadas para tu éxito
            </h2>
            <p className="max-w-[700px] text-sm text-muted-foreground md:text-base lg:text-lg leading-relaxed px-4">
              Todo lo que necesitas para gestionar tu negocio en una sola
              plataforma
            </p>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 md:mb-10 h-auto">
            <TabsTrigger
              value="all"
              className="text-xs md:text-sm py-2 md:py-2.5"
            >
              Todas
            </TabsTrigger>
            <TabsTrigger
              value="ventas"
              className="text-xs md:text-sm py-2 md:py-2.5"
            >
              Ventas
            </TabsTrigger>
            <TabsTrigger
              value="gestion"
              className="text-xs md:text-sm py-2 md:py-2.5"
            >
              Gestión
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden transition-all hover:shadow-xl hover:scale-105 duration-300 group border-2 hover:border-primary/50"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader className="pb-3 md:pb-4 relative z-10">
                    <div className="flex items-start justify-between mb-2 md:mb-3">
                      <div className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg md:text-xl font-semibold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-sm md:text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ventas" className="mt-0">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features
                .filter((f) => f.category === "ventas")
                .map((feature, index) => (
                  <Card
                    key={index}
                    className="relative overflow-hidden transition-all hover:shadow-xl hover:scale-105 duration-300 group border-2 hover:border-primary/50"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CardHeader className="pb-3 md:pb-4 relative z-10">
                      <div className="flex items-start justify-between mb-2 md:mb-3">
                        <div className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {feature.badge}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg md:text-xl font-semibold">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-sm md:text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="gestion" className="mt-0">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features
                .filter((f) => f.category === "gestion")
                .map((feature, index) => (
                  <Card
                    key={index}
                    className="relative overflow-hidden transition-all hover:shadow-xl hover:scale-105 duration-300 group border-2 hover:border-primary/50"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CardHeader className="pb-3 md:pb-4 relative z-10">
                      <div className="flex items-start justify-between mb-2 md:mb-3">
                        <div className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {feature.badge}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg md:text-xl font-semibold">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-sm md:text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
