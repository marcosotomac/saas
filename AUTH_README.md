# SaaS MYPES - Sistema de Autenticación

✅ **Sistema de autenticación completo implementado con Supabase**

## 🎯 Funcionalidades Implementadas

### Autenticación
- ✅ Registro de usuarios y empresas
- ✅ Login con email y contraseña
- ✅ Validación de correo electrónico
- ✅ Cierre de sesión
- ✅ Protección de rutas con middleware

### Base de Datos
- ✅ Tabla `companies` - Información de empresas (RUC, nombre, industria, tamaño, etc.)
- ✅ Tabla `profiles` - Perfiles de usuarios (rol, cargo, teléfono, etc.)
- ✅ Row Level Security (RLS) - Políticas de seguridad implementadas
- ✅ Triggers - Auto-creación de perfiles al registrarse

### UI/UX
- ✅ Landing page responsive con dark/light mode
- ✅ Formularios de registro y login modernos
- ✅ Dashboard con información de usuario y empresa
- ✅ Página de perfil con tabs (personal/empresa)
- ✅ Navbar con estado de autenticación
- ✅ Notificaciones con Sonner
- ✅ Mobile-first design

## 🚀 Cómo Usar

### 1. Instalar dependencias
\`\`\`bash
pnpm install
\`\`\`

### 2. Configurar variables de entorno
Las credenciales de Supabase ya están configuradas en `.env.local`:
- URL: https://zdkfymqsszflmgryafjy.supabase.co
- Base de datos y tablas creadas
- RLS policies activas

### 3. Ejecutar en desarrollo
\`\`\`bash
pnpm dev
\`\`\`

### 4. Probar el sistema

#### Registro de empresa
1. Ve a http://localhost:3000
2. Haz clic en "Comenzar Gratis" o "Crear cuenta gratis"
3. Completa el formulario con:
   - Nombre completo
   - Email
   - Nombre de la empresa
   - RUC (11 dígitos)
   - Contraseña (mínimo 8 caracteres)
   - Acepta términos y condiciones
4. Revisa tu correo para confirmar la cuenta
5. Inicia sesión

#### Login
1. Ve a http://localhost:3000
2. Haz clic en "Iniciar Sesión"
3. Ingresa email y contraseña
4. Serás redirigido al dashboard

#### Dashboard
- Ver información de tu empresa
- Ver tu rol y suscripción
- Acciones rápidas disponibles

#### Perfil
1. Click en tu avatar (navbar superior derecha)
2. Selecciona "Perfil"
3. Edita información personal o de empresa
4. Guarda cambios

## 📁 Estructura del Proyecto

\`\`\`
app/
├── auth/
│   ├── login/page.tsx           # Página de login
│   ├── register/page.tsx        # Página de registro
│   └── verify-email/page.tsx    # Confirmación de email
├── dashboard/
│   ├── layout.tsx               # Layout protegido
│   └── page.tsx                 # Dashboard principal
├── perfil/
│   └── page.tsx                 # Gestión de perfil
└── layout.tsx                   # Layout principal con Toaster

components/
├── auth/
│   ├── login-form.tsx           # Formulario de login
│   └── register-form.tsx        # Formulario de registro
├── profile/
│   ├── profile-form.tsx         # Editar datos personales
│   └── company-form.tsx         # Editar datos de empresa
├── landing/
│   ├── navbar.tsx               # Navbar con auth state
│   ├── hero.tsx
│   ├── features.tsx
│   └── ...                      # Otros componentes de landing
└── ui/                          # Componentes de shadcn/ui

lib/
├── supabase/
│   ├── client.ts                # Cliente Supabase (browser)
│   ├── server.ts                # Cliente Supabase (server)
│   └── middleware.ts            # Lógica de middleware
└── utils.ts

middleware.ts                    # Middleware de Next.js
\`\`\`

## 🗄️ Esquema de Base de Datos

### Tabla: companies
- \`id\` - UUID (PK)
- \`name\` - Nombre de la empresa
- \`ruc\` - RUC (único, 11 dígitos)
- \`industry\` - Industria
- \`size\` - Tamaño (micro/pequeña/mediana)
- \`phone\` - Teléfono
- \`address\` - Dirección
- \`city\` - Ciudad
- \`country\` - País
- \`logo_url\` - Logo
- \`website\` - Sitio web
- \`created_at\`, \`updated_at\` - Timestamps

### Tabla: profiles
- \`id\` - UUID (PK, refs auth.users)
- \`company_id\` - UUID (FK a companies)
- \`full_name\` - Nombre completo
- \`role\` - Rol (owner/admin/employee/viewer)
- \`avatar_url\` - Avatar
- \`phone\` - Teléfono
- \`position\` - Cargo
- \`created_at\`, \`updated_at\` - Timestamps

## 🔒 Seguridad

### Row Level Security (RLS)

#### Companies
- **SELECT**: Los usuarios pueden ver empresas donde son miembros
- **INSERT**: Usuarios autenticados pueden crear empresas
- **UPDATE**: Solo owners y admins pueden actualizar

#### Profiles
- **SELECT**: Los usuarios pueden ver perfiles de su misma empresa
- **INSERT**: Usuarios pueden crear su propio perfil
- **UPDATE**: Usuarios solo pueden actualizar su propio perfil

### Rutas Protegidas
- \`/dashboard\` - Requiere autenticación
- \`/perfil\` - Requiere autenticación
- \`/auth/*\` - Redirige a dashboard si ya está autenticado

## 🎨 Componentes UI

Todos los componentes usan **shadcn/ui**:
- Form, Input, Button
- Card, Badge, Avatar
- Tabs, Select, Checkbox
- Sheet (mobile menu)
- DropdownMenu
- Sonner (notificaciones)
- NavigationMenu
- Accordion, HoverCard

## 📱 Responsive

- **Mobile-first**: Diseñado primero para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px)
- **Mobile menu**: Sheet component con overlay
- **Adaptive layouts**: Grid responsive en todas las secciones

## 🌙 Dark Mode

- **next-themes**: Gestión de tema
- **System detection**: Detecta preferencia del sistema
- **Toggle**: Botón en navbar para cambiar tema
- **Persistencia**: Se guarda la preferencia del usuario

## 🔄 Próximos Pasos

- [ ] Resetear contraseña
- [ ] Invitar miembros al equipo
- [ ] Gestión de roles y permisos
- [ ] Suscripciones y planes
- [ ] Dashboard con métricas
- [ ] Integraciones (SUNAT, pagos, etc.)

## 🐛 Troubleshooting

### No llega el email de confirmación
- Revisa spam
- Verifica que el email sea correcto
- Ve a Supabase Dashboard → Authentication → Users para confirmar manualmente

### Error "RLS policy violation"
- Verifica que el usuario tenga un perfil creado
- Revisa las políticas en Supabase Dashboard → Database → Policies

### Middleware loop infinito
- Verifica el matcher en \`middleware.ts\`
- Asegúrate de excluir rutas estáticas

## 📝 Notas

- **Producción**: Recuerda activar confirmación de email en Supabase
- **RUC**: Validación básica (11 dígitos), se puede mejorar con API de SUNAT
- **Roles**: Sistema preparado para multi-tenancy (varias empresas)
- **Performance**: Usa Server Components donde es posible para mejor rendimiento

---

**¡Sistema de autenticación completo y funcional! 🎉**
