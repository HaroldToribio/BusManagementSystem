# 🚌 Sistema de Gestión de Autobuses (Bus Management System)

![.NET](https://img.shields.io/badge/.NET-8.0-5C2D91?style=for-the-badge&logo=.net&logoColor=white) ![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![SQL Server](https://img.shields.io/badge/SQL%20Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white)

Una solución Full Stack robusta para la administración de flotas de autobuses. Desarrollada con una arquitectura desacoplada utilizando **ASP.NET Core Web API** para el backend y **React** para una experiencia de usuario fluida e intuitiva.

## ✨ Características Principales

### Backend API (.NET 8)
* ✅ **CRUD Completo** para Autobuses, Rutas, Horarios y Reservas
* ✅ **Validación Robusta** de Modelos con manejo nullable de referencias
* ✅ **Endpoints RESTful** con soporte a operaciones asincrónicas
* ✅ **Entity Framework Core** con migraciones versionadas
* ✅ **CORS Habilitado** para conexión frontal desde localhost:3000
* ✅ **Documentación Swagger** interactiva en `/swagger`

### Frontend React (v19)
* ✅ **Componentes Reutilizables** modularizados y escalables
* ✅ **Sistema de Notificación Inline** para feedback usuario (éxito/error)
* ✅ **Soporte Multiidioma** (English/Español) integrado en navbar
* ✅ **Modo Oscuro** con persistencia en localStorage
* ✅ **Gestión de Estado** con Context API y Hooks
* ✅ **Formularios Validados** con manejo de errores mejorado

## 🏗️ Arquitectura del Monorepo

El proyecto está organizado en dos capas principales:

* **📂 `BusManagementAPI/` (Backend):**
    * API RESTful construida con C# y .NET Core 8.
    * Uso de **Entity Framework Core** para el manejo de datos (ORM).
    * Implementación de patrones de diseño limpio y controladores REST.
    * Modelos con propiedades navegables opcionales para flexibilidad.
    * Conexión a base de datos SQL Server con migraciones automáticas.

* **📂 `BusManagementAPI/frontend/bus-management-frontend/` (Frontend):**
    * SPA (Single Page Application) desarrollada en React 19.
    * Consumo de API mediante Axios con manejo de promesas.
    * Componentes modulares con props validation y state management.
    * Sistema de notificaciones inline reemplazando alerts del navegador.
    * Tema oscuro/claro con persistencia de preferencias.

## 🚀 Guía de Instalación Local

Sigue estos pasos para levantar el proyecto en tu entorno de desarrollo:

### 1️⃣ Configuración del Backend (.NET 8)

1.  Navega a la carpeta del API:
    ```bash
    cd BusManagementAPI
    ```
2.  Configura tu base de datos en `appsettings.json` (Connection Strings).
3.  Aplica las migraciones para crear la base de datos:
    ```bash
    dotnet ef database update
    ```
4.  Ejecuta el servidor:
    ```bash
    dotnet run
    ```
    *La API estará disponible en `http://localhost:5231`*

### 2️⃣ Configuración del Frontend (React)

1.  Abre una nueva terminal y navega a la carpeta del frontend:
    ```bash
    cd BusManagementAPI/frontend/bus-management-frontend
    ```
2.  Instala las dependencias (solo la primera vez):
    ```bash
    npm install
    ```
3.  Inicia la aplicación:
    ```bash
    npm start
    ```
    *La aplicación se abrirá automáticamente en `http://localhost:3000`*

## 🔧 Endpoints de la API

### Autobuses
* `GET /api/buses` - Obtener todos los autobuses
* `POST /api/buses` - Crear nuevo autobús
* `PUT /api/buses/{id}` - Actualizar autobús
* `DELETE /api/buses/{id}` - Eliminar autobús

### Rutas
* `GET /api/routes` - Obtener todas las rutas
* `POST /api/routes` - Crear nueva ruta
* `PUT /api/routes/{id}` - Actualizar ruta
* `DELETE /api/routes/{id}` - Eliminar ruta

### Horarios
* `GET /api/schedules` - Obtener todos los horarios
* `POST /api/schedules` - Crear nuevo horario
* `PUT /api/schedules/{id}` - Actualizar horario
* `DELETE /api/schedules/{id}` - Eliminar horario

### Reservas
* `GET /api/reservations` - Obtener todas las reservas
* `POST /api/reservations` - Crear nueva reserva
* `PUT /api/reservations/{id}` - Actualizar reserva
* `DELETE /api/reservations/{id}` - Eliminar reserva

## 🛠️ Tecnologías Clave
* **Backend:** C#, .NET 8, Entity Framework Core 8, Swagger/OpenAPI
* **Frontend:** React 19, Axios, React Router, React Icons, Context API
* **Estilos:** CSS3 moderno con soporte dark mode
* **Base de Datos:** Microsoft SQL Server
* **Herramientas:** Visual Studio 2022, VS Code, Git, npm

## 📝 Cambios Recientes

### Version 1.1.0 - Mejoras de Validación y UX
* ✅ **Corrección de Modelos:** Las propiedades de navegación (`Schedule`, `Route`) ahora son opcionales en POST
* ✅ **Nuevo Endpoint:** POST `/api/schedules` completamente funcional
* ✅ **FormNotification Component:** Feedback inline reemplazando alerts
* ✅ **Consolidación de Controles:** Selector de idioma unificado en navbar
* ✅ **Mejora de Errores:** Mensajes de validación personalizados en UI

## ✒️ Autor
**Harold Toribio** - *Ingeniero de Software & Desarrollador Full Stack*
* [Perfil de LinkedIn](https://www.linkedin.com/in/harold-toribio-de-jesus-54bbb8230)