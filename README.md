# 🌐 SeguryRed Website

Sitio web oficial de **SeguryRed**, desarrollado con [Astro](https://astro.build/), [TailwindCSS](https://tailwindcss.com/) y [TypeScript](https://www.typescriptlang.org/).  
Incluye galería de proyectos y un formulario de contacto funcional conectado a un correo alojado en **cPanel**.

---

## 📂 Estructura del proyecto

/
├─ src/ # Componentes y páginas de Astro
│ ├─ components/ # Componentes reutilizables (Header, Footer, Galeria, Formulario)
│ └─ pages/ # Rutas del sitio
│
├─ public/ # Archivos estáticos (se copian al build)
│ ├─ galeria/ # Imágenes de la galería
│ └─ ... # Otros assets
│
├─ astro.config.mjs # Configuración de Astro
├─ tailwind.config.mjs # Configuración de TailwindCSS
├─ tsconfig.json # Configuración TypeScript
├─ eslint.config.js # ESLint flat config (v9+)
└─ package.json


---
## 🚀 Tecnologías utilizadas

- **Astro** – Framework para sitios rápidos y modernos.  
- **TailwindCSS** – Estilos utilitarios.  
- **TypeScript** – Tipado estático.  
- **Sonner** – Notificaciones interactivas en el frontend.  
- **ESLint + Prettier** – Calidad de código y estilo.  

---

## 🛠️ Instalación y desarrollo

Clonar repositorio:

```bash
git clone https://github.com/tuusuario/seguryred.git
cd seguryred



npm install #Instalar dependencias
npm run dev #Modo desarrollo
npm run build #build para producción
npm run preview #vista previa del build 


🧹 Calidad y linting

Scripts útiles:

npm run lint       # Ejecuta ESLint sobre el código
npm run format     # Aplica Prettier
npm run typecheck  # Valida TypeScript
npm run check      # Chequea props y tipos en Astro
npm run audit      # Verifica vulnerabilidades en dependencias


La galería de imágenes usa un <dialog> nativo con navegación prev/next y soporte de teclado.
Las imágenes deben estar en:

/public/galeria/

Cada item del array imagenes en Galeria.astro debe incluir:

{ src: "/galeria/img1.avif", alt: "Descripción de la imagen" }


📬 Formulario de contacto

El formulario permite que los visitantes envíen mensajes directamente al equipo de SeguryRed.

Campos requeridos: nombre, email, mensaje.

Validación en cliente y servidor.

Protección anti-spam mediante honeypot.

Los mensajes de estado se muestran en pantalla con Sonner (notificaciones tipo toast).

🔒 Nota: La lógica interna de envío de correos y la configuración del servidor no se incluye en este repositorio público.
Esta información está documentada de manera privada para el equipo.


Seguridad

Validaciones en frontend y backend.

Honeypot anti-spam en el formulario.

La configuración de correo y credenciales se mantiene fuera del repositorio.

Se recomienda tener SPF, DKIM y DMARC activos en el servidor de correo para mejorar entregabilidad.


Despliegue en cPanel

Ejecutar npm run build.

Subir contenido de dist/ al hosting en public_html/.

Configurar el formulario de contacto siguiendo las guías internas del equipo.

Proyecto privado de SeguryRed.
No se permite su uso, copia ni distribución sin autorización expresa.