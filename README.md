# IronGym - Página Web del Gimnasio

Una página web moderna y profesional para un gimnasio, construida con Next.js, React y Tailwind CSS.

## 🏋️ Características

- **Diseño Oscuro Metálico**: Tema visual con tonos grises y acentos en rojo
- **Responsive**: Adaptado para dispositivos móviles, tablets y desktop
- **Secciones Completas**:
  - Hero con estadísticas
  - Servicios del gimnasio
  - Sobre nosotros
  - Planes de precios
  - Equipo de entrenadores
  - Formulario de contacto
- **Componentes Reutilizables**: Arquitectura modular y mantenible

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js 15](https://nextjs.org/) con App Router
- **Biblioteca UI**: [React 19](https://react.dev/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Lenguaje**: TypeScript
- **Base de datos** (futuro): MySQL

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css      # Estilos globales y variables CSS
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página de inicio
├── components/
│   ├── layout/
│   │   ├── Header.tsx   # Navegación principal
│   │   └── Footer.tsx   # Pie de página
│   └── sections/
│       ├── Hero.tsx     # Sección principal
│       ├── Services.tsx # Servicios
│       ├── About.tsx    # Sobre nosotros
│       ├── Pricing.tsx  # Planes de precios
│       ├── Trainers.tsx # Entrenadores
│       └── Contact.tsx  # Contacto
```

## 🚀 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📜 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Metal Dark | `#0d0d0d` | Fondo principal |
| Primary | `#1a1a2e` | Fondo secundario |
| Secondary | `#16213e` | Gradientes |
| Metal Gray | `#2d2d2d` | Bordes |
| Metal Light | `#4a4a4a` | Bordes hover |
| Steel | `#71797E` | Texto secundario |
| Silver | `#AAA9AD` | Acentos |
| Highlight | `#e94560` | Color de acento principal |
| Text Primary | `#ffffff` | Texto principal |
| Text Secondary | `#b0b0b0` | Texto secundario |

## 📝 Próximos Pasos

1. [ ] Integración con MySQL para gestión de usuarios y membresías
2. [ ] Sistema de autenticación
3. [ ] Panel de administración
4. [ ] Reserva de clases online
5. [ ] Blog con artículos de fitness

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
