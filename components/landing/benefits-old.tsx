import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const benefits = [
  {
    title: "Ahorra hasta 40% en costos operativos",
    description: "Automatiza procesos manuales y reduce errores humanos",
    metric: "40%",
    icon: "💰",
  },
  {
    title: "Aumenta tus ventas",
    description: "Identifica oportunidades y tendencias en tiempo real",
    metric: "+35%",
    icon: "📈",
  },
  {
    title: "Ahorra tiempo",
    description: "Dedica menos tiempo a tareas administrativas",
    metric: "15h/sem",
    icon: "⏱️",
  },
  {
    title: "Toma mejores decisiones",
    description: "Datos precisos y actualizados al instante",
    metric: "100%",
    icon: "🎯",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl max-w-3xl">
              Beneficios comprobados
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg leading-relaxed">
              Miles de PYMES peruanas ya están transformando sus negocios
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-3">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <div className="text-5xl font-bold text-primary mb-3">
                  {benefit.metric}
                </div>
                <CardTitle className="text-lg font-semibold">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
