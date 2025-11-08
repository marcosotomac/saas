import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    color: "from-blue-500/10 to-purple-500/10",
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
    color: "from-green-500/10 to-emerald-500/10",
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
    color: "from-orange-500/10 to-red-500/10",
  },
];

export function SpecialFeatures() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute left-0 top-1/3 h-[250px] w-[250px] md:h-[400px] md:w-[400px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-[200px] w-[200px] md:h-[350px] md:w-[350px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-3 md:space-y-4 text-center mb-10 md:mb-12">
          <div className="space-y-3 md:space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-xs md:text-sm">
              Características Premium
            </Badge>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl px-4">
              Soluciones que marcan la diferencia
            </h2>
            <p className="max-w-[700px] text-sm text-muted-foreground md:text-base lg:text-lg leading-relaxed px-4">
              Herramientas exclusivas diseñadas para impulsar tu crecimiento
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {specialFeatures.map((feature, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-card hover:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <div className="text-5xl">{feature.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold">
                          {feature.title}
                        </h3>
                        <Badge className="ml-auto">{feature.badge}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground pr-4">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    className={`mt-4 p-6 rounded-lg bg-linear-to-br ${feature.color}`}
                  >
                    <h4 className="font-semibold mb-4">
                      Características incluidas:
                    </h4>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-primary"
                            >
                              <path d="M5 12l5 5L20 7" />
                            </svg>
                          </div>
                          <span className="text-sm leading-relaxed">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button className="mt-6 w-full sm:w-auto" variant="default">
                      Conocer más
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
                        className="ml-2 h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
