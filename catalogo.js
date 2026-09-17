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
        "link": "https://www.eleodoroelgrande.cl",
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
    },
    {
        "id": "site_ahorraya",
        "name": "AhorraYa - Supermercado Online",
        "category": "PROMOCIONES",
        "image": "ahorraya_banner.jpg",
        "link": "https://www.superahorraya.cl/",
        "description": "Plataforma e-commerce masiva de supermercado, productos de limpieza y ofertas en superahorraya.cl."
    },
    {
        "id": "site_redhat",
        "name": "RedHat Linux Cloud System",
        "category": "SERVICIOS",
        "image": "fondo-tecnologia-circuito-placa-base-azul-degradado_53876-124654.avif",
        "link": "https://redhat-eva3.netlify.app/",
        "description": "Plataforma de administración de infraestructura cloud y gestión de servidores Enterprise RedHat."
    },
    {
        "id": "site_soft_eleodoro",
        "name": "Eleodoro El Grande Distribuidora - ERP & POS",
        "category": "SERVICIOS",
        "image": "imagen2.jpeg",
        "link": "https://cajaeleodoro-1.onrender.com/",
        "description": "Sistema de gestión comercial, control de pedidos, arqueo de caja, stock y ventas ERP & POS."
    },
    {
        "id": "site_superahorropremiun",
        "name": "Super Ahorro Premiun - 02-A Facundo Minimarket",
        "category": "PROMOCIONES",
        "image": "imagenn1.jpeg",
        "link": "https://superahorropremiun.netlify.app/",
        "description": "Plataforma e-commerce y minimarket online para compras rápidas, ofertas masivas y pedidos a domicilio."
    },
    {
        "id": "site_batallasdeaura",
        "name": "Batallas de Aura - Red Social de Pelea Digital 15s (Chile)",
        "category": "PROMOCIONES",
        "image": "imagenn2.jpeg",
        "link": "https://batallasdeaura.cl/",
        "description": "Red social interactiva de peleas digitales de 15 segundos, duelos en línea y comunidad gaming chilena."
    },
    {
        "id": "site_custodiaapp",
        "name": "App Equipaje - Control de Custodia y Caja",
        "category": "SERVICIOS",
        "image": "imagen5.jpeg",
        "link": "https://custodiaapp.netlify.app/",
        "description": "Sistema de gestión y control de custodia de equipajes, arqueo de caja y tickets de almacenamiento."
    },
    {
        "id": "site_appcasino",
        "name": "CasinoLab | Ticket de Alimentacion",
        "category": "SERVICIOS",
        "image": "imagen4.jpeg",
        "link": "https://appcasino.netlify.app/",
        "description": "Sistema corporativo para emisión y validación de tickets de alimentación y vales digitales de casino."
    },
    {
        "id": "site_megasuper",
        "name": "minimercado.cl - El Marketplace Inteligente de Chile (4 Tiendas en 1)",
        "category": "PROMOCIONES",
        "image": "ahorraya_banner.jpg",
        "link": "https://www.megasuper.cl/",
        "description": "Plataforma e-commerce multitienda de ventas inteligentes y logística unificada en megasuper.cl."
    }
];

// Hacer el catálogo accesible globalmente
if (typeof window !== 'undefined') {
    window.catalogoProductos = catalogoProductos;
}
