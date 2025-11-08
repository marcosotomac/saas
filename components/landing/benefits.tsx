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
    color: "from-emerald-500/10 to-green-500/10",
  },
  {
    title: "Aumenta tus ventas",
    description: "Identifica oportunidades y tendencias en tiempo real",
    metric: "+35%",
    icon: "📈",
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Ahorra tiempo",
    description: "Dedica menos tiempo a tareas administrativas",
    metric: "15h/sem",
    icon: "⏱️",
    color: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "Toma mejores decisiones",
    description: "Datos precisos y actualizados al instante",
    metric: "100%",
    icon: "🎯",
    color: "from-orange-500/10 to-amber-500/10",
  },
];

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="w-full py-12 md:py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-1/4 h-[250px] w-[250px] md:h-[400px] md:w-[400px] rounded-full bg-primary/10 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-3 md:space-y-4 text-center mb-10 md:mb-12">
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl px-4">
              Beneficios comprobados
            </h2>
            <p className="max-w-[700px] text-sm text-muted-foreground md:text-base lg:text-lg leading-relaxed px-4">
              Miles de PYMES peruanas ya están transformando sus negocios
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center group hover:shadow-2xl transition-all duration-500 hover:scale-105 md:hover:scale-110 relative overflow-hidden border-2 hover:border-primary/50"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <CardHeader className="pb-2 md:pb-3 relative z-10">
                <div className="text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 group-hover:scale-125 transition-transform duration-500">
                  {benefit.icon}
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {benefit.metric}
                </div>
                <CardTitle className="text-base md:text-lg font-semibold group-hover:text-primary transition-colors">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-sm md:text-base leading-relaxed">
                  {benefit.description}
                </CardDescription>
              </CardContent>

              {/* Animated border glow */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-primary to-primary/50 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-col items-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
              <span className="text-sm font-medium">Datos protegidos</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="m9 11-6 6v3h9l3-3" />
                <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" />
              </svg>
              <span className="text-sm font-medium">Fácil implementación</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
              <span className="text-sm font-medium">
                Cancela cuando quieras
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
