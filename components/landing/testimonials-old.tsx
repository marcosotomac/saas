import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "María González",
    role: "Dueña de Bodega",
    location: "Lima",
    content:
      "Desde que uso este sistema, he reducido el tiempo de facturación en 70%. Ahora puedo enfocarme en atender mejor a mis clientes.",
    rating: 5,
    initials: "MG",
  },
  {
    name: "Carlos Ramírez",
    role: "Gerente de Tienda",
    location: "Arequipa",
    content:
      "El agente de WhatsApp ha sido un cambio total. Mis ventas aumentaron 40% en solo 2 meses. Increíble herramienta.",
    rating: 5,
    initials: "CR",
  },
  {
    name: "Ana Flores",
    role: "Empresaria",
    location: "Cusco",
    content:
      "La capacitación incluida me ayudó a profesionalizar mi negocio. Los reportes son claros y fáciles de entender.",
    rating: 5,
    initials: "AF",
  },
  {
    name: "Jorge Mendoza",
    role: "Dueño de Ferretería",
    location: "Trujillo",
    content:
      "Gestionar mi inventario ahora es muy simple. Las alertas automáticas me evitan quedarse sin stock de productos importantes.",
    rating: 5,
    initials: "JM",
  },
  {
    name: "Patricia Salinas",
    role: "Administradora",
    location: "Chiclayo",
    content:
      "El soporte técnico es excelente. Siempre responden rápido y en español. Me siento respaldada en todo momento.",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Roberto Vega",
    role: "Comerciante",
    location: "Piura",
    content:
      "El marketplace integrado me permitió encontrar mejores proveedores y reducir costos. Una plataforma completa y profesional.",
    rating: 5,
    initials: "RV",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-4">
            <Badge variant="outline" className="px-3 py-1">Testimonios</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl max-w-3xl">
              Lo que dicen nuestros clientes
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg leading-relaxed">
              Más de 5,000 PYMES peruanas confían en nuestra plataforma
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-all hover:shadow-lg hover:scale-[1.02] duration-200">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-semibold text-base">{testimonial.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
