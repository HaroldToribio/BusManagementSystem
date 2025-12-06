# 🚌 Sistema de Gestión de Autobuses (Bus Management System)

![.NET](https://img.shields.io/badge/.NET-6.0-5C2D91?style=for-the-badge&logo=.net&logoColor=white) ![React](https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![SQL Server](https://img.shields.io/badge/SQL%20Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white)

Una solución Full Stack robusta para la administración de flotas de autobuses. Desarrollada con una arquitectura desacoplada utilizando **ASP.NET Core Web API** para el backend y **React** para una experiencia de usuario fluida.

## 🏗️ Arquitectura del Monorepo

El proyecto está organizado en dos capas principales:

* **📂 `BusManagementAPI/` (Backend):**
    * API RESTful construida con C# y .NET Core.
    * Uso de **Entity Framework Core** para el manejo de datos (ORM).
    * Implementación de patrones de diseño y controladores limpios.
    * Conexión a base de datos SQL Server.

* **📂 `frontend/` (Frontend):**
    * SPA (Single Page Application) desarrollada en React.js.
    * Consumo de API mediante servicios asíncronos (Fetch/Axios).
    * Diseño modular de componentes.

## 🚀 Guía de Instalación Local

Sigue estos pasos para levantar el proyecto en tu entorno de desarrollo:

### 1️⃣ Configuración del Backend (.NET)

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
    *La API estará disponible en `https://localhost:7193` (o el puerto configurado).*

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

## 🛠️ Tecnologías Clave
* **Backend:** C#, .NET 6/7, Entity Framework Core, Swagger UI.
* **Frontend:** React, HTML5, CSS3, JavaScript (ES6+).
* **Base de Datos:** Microsoft SQL Server.
* **Herramientas:** Visual Studio 2022, VS Code, Git.

## ✒️ Autor
**Harold Toribio** - *Ingeniero de Software & Desarrollador Full Stack*
* [Perfil de LinkedIn](https://www.linkedin.com/in/harold-toribio-de-jesus-54bbb8230)