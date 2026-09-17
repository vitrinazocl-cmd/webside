const catalogoProductos = [
    {
        "id": "site_aye",
        "name": "Distribuidora A&E",
        "category": "NETLIFY / RENDER",
        "image": "imagen1.png",
        "link": "https://www.distribuidoraaye.cl/",
        "description": "Plataforma e-commerce completa con carro de compras interactivo, pasarela Webpay e integración con WhatsApp."
    },
    {
        "id": "site_eleodoro_corp",
        "name": "Eleodoro el Grande",
        "category": "GITHUB / CORPORATIVO",
        "image": "imagen2.jpeg",
        "link": "https://www.eleodoroelgrande.cl",
        "description": "Portal corporativo profesional diseñado para la cotización y contratación de servicios especializados en línea."
    },
    {
        "id": "site_disfrazate",
        "name": "Disfrázate - Arriendo y Venta",
        "category": "NETLIFY / E-COMMERCE",
        "image": "imagen3.jpeg",
        "link": "https://www.disfrazate.cl",
        "description": "Catálogo web responsivo y dinámico para arriendo de disfraces con derivación optimizada a WhatsApp."
    },
    {
        "id": "site_educhile",
        "name": "Educhile",
        "category": "RENDER / EDUCATIVO",
        "image": "imagen4.jpeg",
        "link": "https://educhile.onrender.com/",
        "description": "Portal de educación virtual enfocado en el aprendizaje y el seguimiento de cursos en línea en tiempo real."
    },
    {
        "id": "site_caja_aye",
        "name": "Caja A&E",
        "category": "REACT / RENDER POS",
        "image": "imagen5.jpeg",
        "link": "https://cajaaye.onrender.com/",
        "description": "Herramienta web integrada en React para contabilidad, arqueo de caja y control interno de ventas."
    },
    {
        "id": "site_innovaclean",
        "name": "InnovaClean",
        "category": "NETLIFY / LANDING",
        "image": "imagen6.jpeg",
        "link": "https://innovaclean.netlify.app/",
        "description": "Diseño de página de aterrizaje interactiva y moderna de insumos de higiene ecológicos."
    },
    {
        "id": "site_bluelock",
        "name": "Fútbol Blue Lock",
        "category": "NETLIFY / PORTAL",
        "image": "imagen7.jpeg",
        "link": "https://futbolblueloock.netlify.app/",
        "description": "Comunidad deportiva para la gestión de campeonatos de fútbol, estadísticas y perfiles de jugadores."
    },
    {
        "id": "site_pk",
        "name": "Celulares PK",
        "category": "NETLIFY / TECH",
        "image": "imagen8.jpeg",
        "link": "https://celularespk.netlify.app/",
        "description": "Portal de venta y cotización de teléfonos móviles, tabletas y accesorios con sistema de filtrado avanzado."
    },
    {
        "id": "site_ahorraya",
        "name": "AhorraYa - Supermercado Online",
        "category": "NETLIFY / SUPERMERCADO",
        "image": "ahorraya_banner.jpg",
        "link": "https://www.superahorraya.cl/",
        "description": "Plataforma e-commerce masiva de ofertas y productos de supermercado disponible en superahorraya.cl."
    },
    {
        "id": "site_redhat",
        "name": "RedHat Linux Cloud System",
        "category": "NETLIFY / LINUX CLOUD",
        "image": "fondo-tecnologia-circuito-placa-base-azul-degradado_53876-124654.avif",
        "link": "https://redhat-eva3.netlify.app/",
        "description": "Plataforma de administración cloud, arquitectura de servidores y redes de datos Enterprise RedHat."
    },
    {
        "id": "site_soft_eleodoro",
        "name": "Eleodoro El Grande Distribuidora - ERP & POS",
        "category": "RENDER / ERP & POS",
        "image": "imagen2.jpeg",
        "link": "https://cajaeleodoro-1.onrender.com/",
        "description": "Sistema de gestión comercial ERP & POS en la nube para puntos de venta, inventario y facturación."
    },
    {
        "id": "site_superahorropremiun",
        "name": "Super Ahorro Premiun - 02-A Facundo Minimarket",
        "category": "NETLIFY / MINIMARKET",
        "image": "imagenn1.jpeg",
        "link": "https://superahorropremiun.netlify.app/",
        "description": "Plataforma e-commerce y minimarket online para compras rápidas, ofertas masivas y pedidos a domicilio."
    },
    {
        "id": "site_batallasdeaura",
        "name": "Batallas de Aura - Red Social de Pelea Digital 15s (Chile)",
        "category": "CHILE / RED SOCIAL",
        "image": "imagenn2.jpeg",
        "link": "https://batallasdeaura.cl/",
        "description": "Red social interactiva de peleas digitales de 15 segundos, duelos en línea y comunidad gaming."
    },
    {
        "id": "site_custodiaapp",
        "name": "App Equipaje - Control de Custodia y Caja",
        "category": "NETLIFY / CUSTODIA & CAJA",
        "image": "imagen5.jpeg",
        "link": "https://custodiaapp.netlify.app/",
        "description": "Plataforma de gestión de equipajes, control de almacenamiento y caja registradora en la nube."
    },
    {
        "id": "site_appcasino",
        "name": "CasinoLab | Ticket de Alimentacion",
        "category": "NETLIFY / CASINO & TICKETS",
        "image": "imagen4.jpeg",
        "link": "https://appcasino.netlify.app/",
        "description": "Sistema corporativo para emisión y validación de tickets de alimentación y vales digitales de casino."
    },
    {
        "id": "site_megasuper",
        "name": "minimercado.cl - El Marketplace Inteligente de Chile (4 Tiendas en 1)",
        "category": "CHILE / MARKETPLACE 4 EN 1",
        "image": "ahorraya_banner.jpg",
        "link": "https://www.megasuper.cl/",
        "description": "Plataforma e-commerce multitienda de ventas inteligentes y logística unificada en megasuper.cl."
    }
];

// Hacer el catálogo accesible globalmente
if (typeof window !== 'undefined') {
    window.catalogoProductos = catalogoProductos;
}
