# Steven Roofs — Implementación en React

Sitio web de una empresa de techados, migrado de HTML/CSS/JS vanilla a una aplicación React completamente funcional, con componentes dinámicos, manejo de formularios y una API REST local.

---

## Tecnologías Utilizadas

- React 19 + Vite
- React Router DOM — navegación del lado del cliente
- Axios — peticiones HTTP asíncronas
- JSON Server — API REST local / base de datos falsa

---

## Cómo Ejecutar el Proyecto

1. **Instalar dependencias:**
```bash
   npm install
```

2. **Iniciar la base de datos local (Terminal 1):**
```bash
   npx json-server db.json --port 3001 --host 127.0.0.1
```

3. **Iniciar la aplicación (Terminal 2):**
```bash
   npm run dev
```

4. Abrir `http://localhost:5173` en el navegador.

> Ambas terminales deben estar corriendo al mismo tiempo.

---

## Funcionalidades

- Navegación multipágina con React Router sin recargar la página
- Formulario de cotización gratuita con validaciones en tiempo real y mensaje de éxito
- Formulario de reseñas con calificación interactiva de estrellas
- Todos los envíos persisten en la base de datos local

---

## Retos y Soluciones

Durante el desarrollo de este proyecto enfrentamos varios desafíos técnicos que nos obligaron a investigar y adaptarnos.

El primero fue **entender el flujo de datos en React**. Venir de JavaScript vanilla, donde simplemente manipulabas el DOM directamente, a tener que pensar en estado y re-renderizado fue un cambio de mentalidad importante. La solución fue aprender a confiar en `useState`: en lugar de tocar el HTML, actualizas el estado y dejas que React haga el resto.

El segundo reto fue **la conexión con Axios y JSON Server**. Al principio el navegador bloqueaba las peticiones por un error de CORS entre `localhost` y `127.0.0.1`. Lo resolvimos especificando el host correctamente tanto en el comando de JSON Server como en la URL base de Axios.

Por último, **el control de versiones con Git** también presentó fricción: el repositorio remoto tenía cambios que no estaban en local, generando conflictos al hacer push. Lo resolvimos entendiendo la diferencia entre un fast-forward y un force push, y aplicando la solución adecuada sin perder ningún archivo.

En general, el proyecto nos permitió conectar conceptos que antes veíamos de forma aislada — componentes, estado, efectos secundarios y comunicación con APIs — en una aplicación real y funcional.

---
---

# Steven Roofs — React Implementation

Roofing company website migrated from vanilla HTML/CSS/JS to a fully functional React application, featuring dynamic components, form handling, and a local REST API.

---

## Tech Stack

- React 19 + Vite
- React Router DOM — client-side navigation
- Axios — asynchronous HTTP requests
- JSON Server — local REST API / fake database

---

## How to Run

1. **Install dependencies:**
```bash
   npm install
```

2. **Start the local database (Terminal 1):**
```bash
   npx json-server db.json --port 3001 --host 127.0.0.1
```

3. **Start the app (Terminal 2):**
```bash
   npm run dev
```

4. Open `http://localhost:5173` in your browser.

> Both terminals must be running at the same time.

---

## Features

- Multi-page navigation with React Router (no page reloads)
- Free Estimate form with real-time validation and success feedback
- Customer Reviews form with interactive star rating
- All submissions persist in the local database

---

## Challenges and Solutions

Throughout this project we faced several technical challenges that pushed us to research and adapt.

The first was **understanding React's data flow**. Coming from vanilla JavaScript, where you directly manipulate the DOM, shifting to thinking in terms of state and re-rendering required a real change in mindset. The solution was learning to trust `useState`: instead of touching the HTML, you update the state and let React handle the rest.

The second challenge was **connecting Axios with JSON Server**. Initially the browser was blocking requests due to a CORS conflict between `localhost` and `127.0.0.1`. We resolved it by specifying the correct host both in the JSON Server command and in Axios's base URL.

Finally, **Git version control** also caused some friction: the remote repository had changes that weren't present locally, generating conflicts on push. We solved it by understanding the difference between a fast-forward and a force push, and applying the right solution without losing any files.

Overall, this project allowed us to connect concepts we previously saw in isolation — components, state, side effects, and API communication — into a real, functional application.
