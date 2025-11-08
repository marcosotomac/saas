import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 h-[150px] w-[150px] md:h-[200px] md:w-[200px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[180px] w-[180px] md:h-[250px] md:w-[250px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 py-10 md:py-12 lg:py-16 max-w-7xl mx-auto">
        <div className="grid gap-8 md:gap-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div className="space-y-3 md:space-y-4 col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 md:h-10 md:w-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg md:text-xl">
                S
              </div>
              <span className="text-lg md:text-xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                SaaS PYME
              </span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-xs">
              La solución completa para gestionar y hacer crecer tu negocio en
              Perú.
            </p>
            <div className="flex gap-2 md:gap-3">
              <a
                href="#"
                className="h-8 w-8 md:h-9 md:w-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:scale-110 transition-transform"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group"
              >
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
                  className="group-hover:scale-110 transition-transform"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group"
              >
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
                  className="group-hover:scale-110 transition-transform"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group"
              >
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
                  className="group-hover:scale-110 transition-transform"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Producto */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-sm md:text-base font-semibold">Producto</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li>
                <a
                  href="#caracteristicas"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Características
                </a>
              </li>
              <li>
                <a
                  href="#precios"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Precios
                </a>
              </li>
              <li>
                <a
                  href="#integraciones"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Integraciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  API
                  <Badge variant="secondary" className="text-xs">
                    Nuevo
                  </Badge>
                </a>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-sm md:text-base font-semibold">Recursos</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Guías
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Centro de ayuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Casos de éxito
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-sm md:text-base font-semibold">Empresa</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Carreras
                  <Badge
                    variant="secondary"
                    className="text-xs bg-primary/10 text-primary"
                  >
                    Hiring
                  </Badge>
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Prensa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6 md:my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <div className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © 2024 SaaS PYME. Todos los derechos reservados.
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Términos de servicio
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Cookies
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
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
                className="text-primary shrink-0"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
              <span className="text-xs">Datos protegidos SSL</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
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
                className="text-primary shrink-0"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <span className="text-xs">Cumple con ISO 27001</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
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
                className="text-primary shrink-0"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-xs">Hecho en Perú 🇵🇪</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
