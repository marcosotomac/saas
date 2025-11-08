import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const specialFeatures = [
  {
    title: "Agente de Ventas por WhatsApp",
    description:
      "Asistente virtual inteligente que responde consultas de clientes 24/7 y gestiona pedidos automáticamente a través de WhatsApp Business.",
    icon: "💬",
    benefits: [
      "Respuestas automáticas instantáneas",
      "Gestión de pedidos por chat",
      "Catálogo digital integrado",
      "Seguimiento de conversiones",
    ],
    badge: "IA Integrada",
  },
  {
    title: "Academia y Capacitación",
    description:
      "Plataforma de aprendizaje con cursos y recursos para capacitar a tu equipo en ventas, atención al cliente y gestión empresarial.",
    icon: "🎓",
    benefits: [
      "Cursos especializados para PYMES",
      "Certificaciones incluidas",
      "Videos tutoriales paso a paso",
      "Soporte de expertos",
    ],
    badge: "Educación",
  },
  {
    title: "Marketplace Integrado",
    description:
      "Conecta con proveedores verificados, compara precios y gestiona compras directamente desde la plataforma.",
    icon: "🛒",
    benefits: [
      "Proveedores verificados",
      "Comparador de precios",
      "Compras al por mayor",
      "Logística simplificada",
    ],
    badge: "Ecosistema",
  },
];

export function SpecialFeatures() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-4">
            <Badge variant="outline" className="px-3 py-1">Características Premium</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl max-w-3xl">
              Soluciones que marcan la diferencia
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg leading-relaxed">
              Herramientas exclusivas diseñadas para impulsar tu crecimiento
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl space-y-6">
          {specialFeatures.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all hover:shadow-lg duration-200"
            >
              <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">{feature.icon}</div>
                    <Badge className="w-fit">{feature.badge}</Badge>
                  </div>
                  <CardTitle className="text-2xl font-semibold">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 lg:pt-8">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                          <span className="text-xs font-bold text-primary">
                            ✓
                          </span>
                        </div>
                        <span className="text-sm leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="mt-6 w-full sm:w-auto" variant="outline">
                    Conocer más
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
