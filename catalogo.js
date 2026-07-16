const catalogoProductos = [
    {
        "id": "site_aye",
        "name": "Distribuidora A&E - Limpieza Máxima",
        "category": "PROMOCIONES",
        "image": "WhatsApp%20Image%202026-07-16%20at%2016.42.55.jpeg",
        "link": "https://www.distribuidoraaye.cl/",
        "description": "E-commerce basico $150.000"
    },
    {
        "id": "site_eleodoro",
        "name": "Sitios Web",
        "category": "SERVICIOS",
        "image": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
        "link": "http://www.eleodoroelgrande.cl",
        "description": "Diseno y desarrollo de sitios web modernos, optimizados para velocidad, SEO y conversion en moviles y escritorio."
    },
    {
        "id": "site_dismac",
        "name": "Aplicaciones",
        "category": "SERVICIOS",
        "image": "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1200&q=80",
        "link": "https://cajaaye.onrender.com/",
        "description": "Aplicaciones web a medida para ventas, operaciones y procesos internos con enfoque en rendimiento y escalabilidad."
    },
    {
        "id": "site_educhile",
        "name": "Dashboard",
        "category": "SERVICIOS",
        "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        "link": "https://cajaaye.onrender.com/",
        "description": "Dashboards con metricas en tiempo real para controlar ventas, indicadores y rendimiento de tu negocio."
    },
    {
        "id": "site_caja",
        "name": "Automatizaciones",
        "category": "SERVICIOS",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        "link": "https://www.distribuidoraaye.cl/",
        "description": "Automatizacion de tareas repetitivas, integraciones y flujos de trabajo para ahorrar tiempo y reducir errores."
    },
    {
        "id": "site_soporte",
        "name": "Soporte Tecnico",
        "category": "SERVICIOS",
        "image": "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=1200&q=80",
        "link": "https://www.distribuidoraaye.cl/",
        "description": "Soporte tecnico continuo para resolver incidencias, mantener tus sistemas activos y mejorar estabilidad."
    },
    {
        "id": "site_innovaclean",
        "name": "InnovaClean",
        "category": "PROMOCIONES",
        "image": "imagen6.jpeg",
        "link": "https://innovaclean.netlify.app/",
        "description": "Landing page de presentación de productos de limpieza biodegradables con animaciones de última generación."
    },
    {
        "id": "site_bluelock",
        "name": "Fútbol Blue Lock",
        "category": "PROMOCIONES",
        "image": "imagen7.jpeg",
        "link": "https://futbolblueloock.netlify.app/",
        "description": "Plataforma deportiva para campeonatos de fútbol, estadísticas de goleadores y tablas de posición."
    },
    {
        "id": "site_pk",
        "name": "Celulares PK",
        "category": "PROMOCIONES",
        "image": "imagen8.jpeg",
        "link": "https://celularespk.netlify.app/",
        "description": "Catálogo online de smartphones y gadgets tecnológicos con cotizador interactivo y derivación a ventas."
    }
];

// Hacer el catálogo accesible globalmente
if (typeof window !== 'undefined') {
    window.catalogoProductos = catalogoProductos;
}
