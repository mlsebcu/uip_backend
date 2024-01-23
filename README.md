# Backend para Gestión de Solicitudes de Información Pública

Este proyecto utiliza [NestJS](https://nestjs.com/) como framework para el desarrollo del backend destinado a la gestión de solicitudes de información pública.

## Descripción

El backend proporciona una interfaz sólida y segura para la recepción, procesamiento y seguimiento de solicitudes, asegurando el cumplimiento de los requisitos legales y la transparencia en el manejo de la información.

## Características Principales

- **Recepción de Solicitudes:** Permite la presentación de solicitudes de información pública a través de una interfaz fácil de usar.

- **Procesamiento Eficiente:** Facilita el procesamiento automático de las solicitudes, asignación de tareas y seguimiento del estado de cada solicitud.

- **Gestión de Usuarios:** Proporciona un sistema de autenticación y autorización para garantizar que solo usuarios autorizados tengan acceso a funciones específicas.

- **Registro de Actividades:** Mantiene un registro detallado de las acciones realizadas, garantizando la trazabilidad y la rendición de cuentas.

## Tecnologías Utilizadas

- **Lenguaje de Programación:** [TypeScript](https://www.typescriptlang.org/)
- **Framework:** [NestJS](https://nestjs.com/)
- **Base de Datos:** Indica el sistema de gestión de bases de datos utilizado (por ejemplo, PostgreSQL, MongoDB).

## Requisitos de Instalación

Asegúrate de tener Node.js y npm instalados. Luego, ejecuta:

```bash
# Instala las dependencias
npm install

# Configura las variables de entorno
cp .env.example .env
