document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
        });
    });
    
    // Seletor de Marmitas
    const selectorTabs = document.querySelectorAll('.selector-tab');
    const marmitaInfos = document.querySelectorAll('.marmita-info');
    
    selectorTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            selectorTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const size = this.getAttribute('data-size');
            marmitaInfos.forEach(info => {
                info.classList.remove('active');
            });
            document.getElementById(`marmita-${size}`).classList.add('active');
        });
    });
    
    // Cardápio da Semana Tabs
    const cardapioTabs = document.querySelectorAll('.cardapio-tab');
    const cardapioDays = document.querySelectorAll('.cardapio-day');
    
    cardapioTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            cardapioTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const day = this.getAttribute('data-day');
            cardapioDays.forEach(day => {
                day.classList.remove('active');
            });
            document.getElementById(day).classList.add('active');
        });
    });
    
    // FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            
            faqItem.classList.toggle('active');
            
    // Fechar outros itens abertos
            const otherItems = document.querySelectorAll('.faq-item');
            otherItems.forEach(item => {
                if (item !== faqItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
        });
    });
    
    // Botão WhatsApp
    const whatsappBtns = document.querySelectorAll('.whatsapp-btn');
    const whatsappFloat = document.getElementById('whatsapp-float');
    
    // Função para abrir WhatsApp com mensagem
    function openWhatsApp(product = '') {
        const phoneNumber = '554499728306';
        let message = 'Olá, Gostaria de fazer um pedido!';
        
        if (product) {
            message += ` de ${product}`;
        }
        
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
    
    // Botões de WhatsApp nas marmitas
    whatsappBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const product = this.getAttribute('data-product');
            openWhatsApp(product);
        });
    });
    
    // Botão flutuante de WhatsApp
    if (whatsappFloat) {
        whatsappFloat.addEventListener('click', function(e) {
            e.preventDefault();
            openWhatsApp();
        });
    }
    
    // Navegação suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito de scroll para mostrar o botão flutuante de WhatsApp
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            whatsappFloat.style.opacity = '1';
        } else {
            whatsappFloat.style.opacity = '0.7';
        }
    });
    
    // Inicialização: garantir que o primeiro item de cada seção esteja ativo
    if (document.querySelector('.marmita-info')) {
        document.querySelector('.marmita-info').classList.add('active');
    }
    
    if (document.querySelector('.cardapio-day')) {
        document.querySelector('.cardapio-day').classList.add('active');
    }
});
