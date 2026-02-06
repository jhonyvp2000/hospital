# Investigación: Normativa para Publicación de Resultados de Exámenes en Línea (Perú)

## 1. Marco Legal Principal
*   **Ley N° 29733 (Ley de Protección de Datos Personales)**: Los datos de salud son **datos sensibles**. Su tratamiento requiere consentimiento previo, informado y **por escrito** (o medio digital equivalente que garantice autenticidad).
*   **Ley N° 26842 (Ley General de Salud)**: Establece la **confidencialidad** del acto médico. La divulgación sin consentimiento es una falta grave.
*   **Sanciones**: Multas de hasta 300 UIT por infracciones graves (divulgación de datos sensibles).

## 2. Requisitos Técnicos y de Seguridad
Una simple búsqueda por DNI **NO** es suficiente y es ilegal para datos médicos, pues cualquier persona con el número de DNI podría ver los diagnósticos de otro.

### Mecanismos Obligatorios:
1.  **Autenticación Robusta**: Se requiere verificar la identidad inequívoca del solicitante.
    *   *Mínimo*: DNI + Fecha de Emisión + Dígito Verificador (poco seguro).
    *   *Estándar*: Usuario y Contraseña (entregados presencialmente o validados biométricamente).
    *   *Ideal*: Doble factor de autenticación (SMS/Email).
2.  **Portal de Paciente (Intranet)**: Los resultados no deben estar "públicos", sino detrás de una sesión en un área privada.
3.  **Trazabilidad**: El sistema debe registrar *quién* accedió a qué resultado y *cuándo*.

## 3. Recomendación de Implementación para el Hospital
Dado que actualmente el proyecto es un *frontend* (Next.js) sin un backend complejo de autenticación integrado a sistemas hospitalarios reales (HIS/LIS), se sugiere el siguiente enfoque progresivo:

### Opción A: Landing Informativa (Fase 1 - Segura)
Una página que explique **cómo** obtener los resultados, enlazando al sistema oficial si existe, o indicando el trámite presencial.
*   *Contenido*: "Para ver sus resultados, acceda a nuestro Portal del Paciente. Si no tiene cuenta, solicítela en Admisión."
*   *Botón*: "Ir al Portal de Resultados" (Link externo o Login simulado).

### Opción B: Prototipo de "Portal del Paciente" (UI Mockup)
Diseñar la interfaz de lo que **debería** ser el sistema seguro, para fines de demostración del proyecto.
1.  **Pantalla de Login**: Solicitando Documento y Contraseña.
2.  **Dashboard Privado (Mock)**: "Bienvenido, [Nombre]". Lista de últimos exámenes (Hemograma, Rayos X, etc.) con botón de descargar PDF.
3.  **Advertencia Legal**: Texto claro sobre la confidencialidad.

**Decisión**: Se recomienda implementar la **Opción B (Login + Dashboard Mock)**. Esto muestra capacidad técnica de diseño UI/UX para sistemas complejos sin violar normativas reales al usar data falsa controlada.
