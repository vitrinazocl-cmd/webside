const catalogoProductos = [
    {
        "id": "site_aye",
        "name": "Distribuidora A&E - Limpieza Máxima",
        "category": "PROMOCIONES",
        "image": "imagen1.png",
        "link": "https://www.distribuidoraaye.cl/",
        "description": "Plataforma e-commerce completa para distribuidora de aseo, con carro de compras interactivo, pasarela Webpay y panel de administración."
    },
    {
        "id": "site_eleodoro",
        "name": "Eleodoro el Grande",
        "category": "SERVICIOS",
        "image": "imagen2.jpeg",
        "link": "http://www.eleodoroelgrande.cl",
        "description": "Sitio web corporativo y profesional para cotizaciones y servicios especializados en línea."
    },
    {
        "id": "site_dismac",
        "name": "Disfrázate - Tienda de Disfraces",
        "category": "SERVICIOS",
        "image": "imagen3.jpeg",
        "link": "http://www.disfrazate.cl",
        "description": "Catálogo interactivo de venta y arriendo de disfraces con buscador inteligente, galería responsiva y contacto por WhatsApp."
    },
    {
        "id": "site_educhile",
        "name": "Educhile",
        "category": "SERVICIOS",
        "image": "imagen4.jpeg",
        "link": "https://educhile.onrender.com/",
        "description": "Plataforma educativa interactiva diseñada para la gestión de cursos, alumnos y contenidos de aprendizaje virtual."
    },
    {
        "id": "site_caja",
        "name": "Caja A&E - Control Financiero",
        "category": "SERVICIOS",
        "image": "imagen5.jpeg",
        "link": "https://cajaaye.onrender.com/",
        "description": "Aplicación web de contabilidad en tiempo real para control de caja, ingresos, egresos y flujos financieros."
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
