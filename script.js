        // ==========================================================================
// Конфигурация и данные
// ==========================================================================

const CONFIG = {
    platform: {
        name: "NexusLend",
        description: "Next-generation crypto lending platform",
        stats: {
            tvl: 42.5,
            users: 125000,
            apy: 18.2,
            uptime: 99.9
        }
    },
    
    benefits: [
        {
            icon: "⚡",
            title: "High APY Returns",
            description: "Earn up to 18% APY on your crypto assets with our optimized yield strategies."
        },
        {
            icon: "🔒",
            title: "Bank-Level Security",
            description: "Multi-sig wallets, cold storage, and smart contract audits ensure your assets are safe."
        },
        {
            icon: "🚀",
            title: "Instant Liquidity",
            description: "Withdraw your funds anytime with no lock-up periods or hidden fees."
        },
        {
            icon: "📊",
            title: "Real-Time Analytics",
            description: "Advanced dashboards with real-time performance tracking and reporting."
        },
        {
            icon: "🌐",
            title: "Cross-Chain Support",
            description: "Support for 10+ blockchains including Ethereum, Solana, and Polygon."
        },
        {
            icon: "💎",
            title: "Premium Features",
            description: "Access to exclusive features like automated portfolio rebalancing."
        }
    ],
    
    cryptocurrencies: [
        { symbol: "BTC", name: "Bitcoin", icon: "₿", price: "64,250", change: "+2.4%", positive: true },
        { symbol: "ETH", name: "Ethereum", icon: "Ξ", price: "3,450", change: "+1.8%", positive: true },
        { symbol: "SOL", name: "Solana", icon: "◎", price: "145", change: "+5.2%", positive: true },
        { symbol: "BNB", name: "Binance Coin", icon: "ⓑ", price: "580", change: "+0.9%", positive: true },
        { symbol: "ADA", name: "Cardano", icon: "₳", price: "0.48", change: "+1.2%", positive: true },
        { symbol: "DOT", name: "Polkadot", icon: "●", price: "7.20", change: "-0.3%", positive: false },
        { symbol: "AVAX", name: "Avalanche", icon: "⛰️", price: "36.50", change: "+3.1%", positive: true },
        { symbol: "MATIC", name: "Polygon", icon: "⬡", price: "0.85", change: "+2.1%", positive: true }
    ],
    
    testimonials: [
        {
            id: 1,
            name: "Alex Chen",
            role: "Crypto Investor",
            text: "NexusLend transformed my crypto portfolio. The 18% APY is real and consistent. Security features give me peace of mind.",
            avatar: "AC"
        },
        {
            id: 2,
            name: "Sarah Johnson",
            role: "DeFi Enthusiast",
            text: "The user interface is incredible. Real-time analytics helped me optimize my yields. Best lending platform out there!",
            avatar: "SJ"
        },
        {
            id: 3,
            name: "Marcus Rivera",
            role: "Institutional Trader",
            text: "Enterprise-grade security with DeFi yields. Perfect for serious investors. The team is professional and responsive.",
            avatar: "MR"
        },
        {
            id: 4,
            name: "Elena Rodriguez",
            role: "Crypto Advisor",
            text: "I recommend NexusLend to all my clients. Transparent fees, excellent support, and impressive returns.",
            avatar: "ER"
        }
    ],
    
    pricingPlans: [
        {
            name: "Starter",
            price: "0",
            period: "Free Forever",
            features: [
                { text: "Up to $10,000 TVL", included: true },
                { text: "Basic Analytics", included: true },
                { text: "Email Support", included: true },
                { text: "Automated Strategies", included: false },
                { text: "Priority Support", included: false },
                { text: "Advanced API", included: false }
            ],
            cta: "Get Started",
            featured: false
        },
        {
            name: "Pro",
            price: "99",
            period: "Per Month",
            features: [
                { text: "Up to $100,000 TVL", included: true },
                { text: "Advanced Analytics", included: true },
                { text: "Priority Support", included: true },
                { text: "Automated Strategies", included: true },
                { text: "Custom Portfolio", included: false },
                { text: "Advanced API", included: false }
            ],
            cta: "Go Pro",
            featured: true
        },
        {
            name: "Institutional",
            price: "499",
            period: "Per Month",
            features: [
                { text: "Unlimited TVL", included: true },
                { text: "Enterprise Analytics", included: true },
                { text: "24/7 Dedicated Support", included: true },
                { text: "Custom Strategies", included: true },
                { text: "White-label Solutions", included: true },
                { text: "Advanced API", included: true }
            ],
            cta: "Contact Sales",
            featured: false
        }
    ],
    
    faqs: [
        {
            question: "How does NexusLend generate yield?",
            answer: "We use a combination of DeFi protocols including lending, staking, and liquidity provision across multiple blockchains. Our algorithms automatically optimize for the highest risk-adjusted returns."
        },
        {
            question: "Is my crypto safe with NexusLend?",
            answer: "Yes. We use multi-signature wallets, 95% cold storage, regular smart contract audits, and insurance coverage. Your private keys are never exposed to our systems."
        },
        {
            question: "What are the fees?",
            answer: "We charge a 10% performance fee on earnings only. There are no deposit or withdrawal fees. Premium plans have additional features at fixed monthly rates."
        },
        {
            question: "Can I withdraw my funds anytime?",
            answer: "Yes. We have no lock-up periods. Withdrawals are processed within minutes, subject to blockchain confirmation times."
        },
        {
            question: "Which cryptocurrencies are supported?",
            answer: "We support 50+ major cryptocurrencies including Bitcoin, Ethereum, Solana, and stablecoins. New assets are added regularly based on community demand."
        },
        {
            question: "Do you have insurance?",
            answer: "Yes. We have $100M insurance coverage through leading crypto insurance providers, covering both custodial and smart contract risks."
        }
    ],
    
    chartColors: {
        primary: '#00f0ff',
        secondary: '#b000ff',
        success: '#00ff88',
        warning: '#ffd700',
        error: '#ff3366',
        gradient: ['#00f0ff', '#b000ff', '#00ff88']
    },
    
    animations: {
        statCounter: 2000,
        fadeIn: 500,
        slideIn: 800
    }
};

// ==========================================================================
// Утилитарные функции
// ==========================================================================

class Utils {
    /**
     * Форматирует число с разделителями
     * @param {number} num - Число для форматирования
     * @param {number} decimals - Количество знаков после запятой
     * @returns {string} Отформатированное число
     */
    static formatNumber(num, decimals = 2) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(decimals) + 'B';
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(decimals) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(decimals) + 'K';
        }
        return num.toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: decimals
        });
    }

    /**
     * Форматирует денежную сумму
     * @param {number} amount - Сумма
     * @param {string} currency - Валюта
     * @returns {string} Отформатированная сумма
     */
    static formatCurrency(amount, currency = 'USD') {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        }).format(amount);
    }

    /**
     * Анимирует изменение числа
     * @param {HTMLElement} element - Элемент для анимации
     * @param {number} start - Начальное значение
     * @param {number} end - Конечное значение
     * @param {number} duration - Длительность анимации
     */
    static animateValue(element, start, end, duration = 2000) {
        const startTime = performance.now();
        const increment = end > start ? 1 : -1;
        
        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Функция easing
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = start + (end - start) * easeProgress;
            
            if (element) {
                if (end >= 1000) {
                    element.textContent = Math.floor(current).toLocaleString();
                } else {
                    element.textContent = current.toFixed(1);
                }
            }
            
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        
        requestAnimationFrame(step);
    }

    /**
     * Дебаунс функции
     * @param {Function} func - Функция для дебаунса
     * @param {number} wait - Время ожидания
     * @returns {Function} Дебаунсированная функция
     */
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Троттлинг функции
     * @param {Function} func - Функция для троттлинга
     * @param {number} limit - Лимит времени
     * @returns {Function} Троттлированная функция
     */
    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    /**
     * Проверяет, виден ли элемент в viewport
     * @param {HTMLElement} element - Элемент для проверки
     * @param {number} offset - Смещение
     * @returns {boolean} Виден ли элемент
     */
    static isInViewport(element, offset = 0.2) {
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        const verticalVisible = (
            (rect.top >= 0 && rect.top <= windowHeight * (1 - offset)) ||
            (rect.bottom >= windowHeight * offset && rect.bottom <= windowHeight) ||
            (rect.top < 0 && rect.bottom > windowHeight)
        );
        
        const horizontalVisible = (
            (rect.left >= 0 && rect.left <= windowWidth) ||
            (rect.right >= 0 && rect.right <= windowWidth) ||
            (rect.left < 0 && rect.right > windowWidth)
        );
        
        return verticalVisible && horizontalVisible;
    }

    /**
     * Получает прогресс прокрутки страницы
     * @returns {number} Процент прокрутки
     */
    static getScrollProgress() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        return height > 0 ? (winScroll / height) * 100 : 0;
    }

    /**
     * Создает HTML элемент
     * @param {string} tag - Тег элемента
     * @param {string} classes - CSS классы
     * @param {string} content - HTML содержимое
     * @returns {HTMLElement} Созданный элемент
     */
    static createElement(tag, classes = '', content = '') {
        const element = document.createElement(tag);
        if (classes) element.className = classes;
        if (content) element.innerHTML = content;
        return element;
    }

    /**
     * Добавляет обработчики событий к элементу
     * @param {HTMLElement} element - Элемент
     * @param {string} events - События через пробел
     * @param {Function} handler - Обработчик
     */
    static addEventListeners(element, events, handler) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, handler);
        });
    }

    /**
     * Удаляет обработчики событий с элемента
     * @param {HTMLElement} element - Элемент
     * @param {string} events - События через пробел
     * @param {Function} handler - Обработчик
     */
    static removeEventListeners(element, events, handler) {
        events.split(' ').forEach(event => {
            element.removeEventListener(event, handler);
        });
    }

    /**
     * Показывает уведомление (toast)
     * @param {string} message - Сообщение
     * @param {string} type - Тип (success, error, info)
     * @param {number} duration - Длительность показа
     * @returns {HTMLElement} Элемент toast
     */
    static showToast(message, type = 'info', duration = 5000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'assertive');
        toast.setAttribute('aria-atomic', 'true');
        
        const icons = {
            success: '✅',
            error: '❌',
            info: 'ℹ️',
            warning: '⚠️'
        };
        
        const icon = icons[type] || icons.info;
        
        toast.innerHTML = `
            <span class="toast-icon" aria-hidden="true">${icon}</span>
            <div class="toast-content">
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close" aria-label="Close notification">&times;</button>
        `;
        
        // Стили для toast
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: 'var(--color-bg-primary)',
            border: '1px solid var(--color-border-light)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-4) var(--space-6)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            zIndex: 'var(--z-modal)',
            transform: 'translateY(100px)',
            opacity: '0',
            transition: 'all var(--transition-normal)',
            maxWidth: '400px',
            boxShadow: 'var(--shadow-xl)',
            color: 'var(--color-text-primary)'
        });
        
        document.body.appendChild(toast);
        
        // Анимация появления
        requestAnimationFrame(() => {
            Object.assign(toast.style, {
                transform: 'translateY(0)',
                opacity: '1'
            });
        });
        
        // Закрытие по клику
        const closeToast = () => {
            Object.assign(toast.style, {
                transform: 'translateY(100px)',
                opacity: '0'
            });
            
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        };
        
        toast.querySelector('.toast-close').addEventListener('click', closeToast);
        
        // Автоматическое закрытие
        if (duration > 0) {
            setTimeout(closeToast, duration);
        }
        
        return toast;
    }

    /**
     * Валидирует email
     * @param {string} email - Email для валидации
     * @returns {boolean} Валиден ли email
     */
    static validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.trim());
    }

    /**
     * Копирует текст в буфер обмена
     * @param {string} text - Текст для копирования
     * @returns {Promise} Promise
     */
    static async copyToClipboard(text) {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text);
        } else {
            // Fallback для старых браузеров
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            
            try {
                document.execCommand('copy');
                return Promise.resolve();
            } catch (err) {
                return Promise.reject(err);
            } finally {
                document.body.removeChild(textArea);
            }
        }
    }

    /**
     * Генерирует случайное целое число
     * @param {number} min - Минимальное значение
     * @param {number} max - Максимальное значение
     * @returns {number} Случайное число
     */
    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Получает случайный элемент из массива
     * @param {Array} array - Массив
     * @returns {*} Случайный элемент
     */
    static getRandomFromArray(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    /**
     * Задержка выполнения
     * @param {number} ms - Время в миллисекундах
     * @returns {Promise} Promise
     */
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Переключает тему (темная/светлая)
     */
    static toggleTheme() {
        const html = document.documentElement;
        const isDark = html.classList.contains('dark-theme');
        const theme = isDark ? 'light' : 'dark';
        
        html.classList.remove('dark-theme', 'light-theme');
        html.classList.add(`${theme}-theme`);
        localStorage.setItem('theme', theme);
        
        // Обновление иконки темы
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
        }
        
        // Обновление чартов при смене темы
        if (window.chartManager) {
            setTimeout(() => {
                window.chartManager.updateTheme();
            }, 100);
        }
    }

    /**
     * Загружает тему из localStorage или системных настроек
     */
    static loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const html = document.documentElement;
        html.classList.remove('dark-theme', 'light-theme');
        
        if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
            html.classList.add('light-theme');
        } else {
            html.classList.add('dark-theme');
        }
    }

    /**
     * Инициализирует parallax эффект
     */
    static initParallax() {
        const parallaxElements = document.querySelectorAll('.parallax-element');
        if (parallaxElements.length === 0) return;
        
        const handleParallax = () => {
            const scrollY = window.scrollY;
            
            parallaxElements.forEach(element => {
                const speed = parseFloat(element.dataset.speed) || 0.5;
                const yPos = -(scrollY * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        };
        
        window.addEventListener('scroll', Utils.throttle(handleParallax, 16));
        handleParallax();
    }

    /**
     * Создает эффект частиц
     * @param {HTMLElement} element - Элемент для эффекта
     * @param {number} count - Количество частиц
     * @param {Array} colors - Цвета частиц
     */
    static createParticles(element, count = 20, colors = null) {
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const particleColors = colors || CONFIG.chartColors.gradient;
        const particles = [];
        
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            const size = 2 + Math.random() * 4;
            const color = particleColors[Math.floor(Math.random() * particleColors.length)];
            
            Object.assign(particle.style, {
                position: 'fixed',
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '50%',
                background: color,
                zIndex: 'var(--z-modal)',
                top: `${rect.top + rect.height / 2}px`,
                left: `${rect.left + rect.width / 2}px`,
                pointerEvents: 'none'
            });
            
            document.body.appendChild(particle);
            particles.push(particle);
            
            // Анимация частицы
            const angle = Math.random() * Math.PI * 2;
            const velocity = 1 + Math.random() * 3;
            const distance = 50 + Math.random() * 100;
            
            const animation = particle.animate([
                {
                    transform: `translate(0, 0) scale(1)`,
                    opacity: 1
                },
                {
                    transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
                    opacity: 0
                }
            ], {
                duration: 800 + Math.random() * 700,
                easing: 'cubic-bezier(0.2, 0, 0.8, 1)'
            });
            
            animation.onfinish = () => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            };
        }
        
        return particles;
    }
}

// ==========================================================================
// Менеджер анимаций
// ==========================================================================

class AnimationManager {
    constructor() {
        this.animatedElements = new Set();
        this.intersectionObserver = null;
        this.scrollProgress = 0;
        this.init();
    }

    /**
     * Инициализация менеджера анимаций
     */
    init() {
        this.setupIntersectionObserver();
        this.setupScrollAnimations();
        this.setupMouseEffects();
        this.setupCounterAnimations();
        this.setupParallax();
        this.setupLoadingAnimations();
    }

    /**
     * Настройка Intersection Observer для анимаций при скролле
     */
    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        this.intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateOnScroll(entry.target);
                    this.intersectionObserver.unobserve(entry.target);
                }
            });
        }, options);

        // Наблюдение за всеми элементами с классами reveal
        document.querySelectorAll('[class*="reveal-"]').forEach(element => {
            this.intersectionObserver.observe(element);
        });
    }

    /**
     * Анимация элемента при скролле
     * @param {HTMLElement} element - Элемент для анимации
     */
    animateOnScroll(element) {
        element.classList.add('reveal-visible');
        
        // Стаггерированные задержки для дочерних элементов
        const children = element.querySelectorAll('[class*="stagger-delay-"]');
        children.forEach(child => {
            const match = child.className.match(/stagger-delay-(\d)/);
            if (match) {
                const delay = parseInt(match[1]) * 100;
                child.style.animationDelay = `${delay}ms`;
            }
        });
    }

    /**
     * Настройка анимаций при скролле
     */
    setupScrollAnimations() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        
        const handleScroll = Utils.throttle(() => {
            const scrollY = window.scrollY;
            
            // Эффект для навигации
            if (scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Прогресс скролла
            this.scrollProgress = Utils.getScrollProgress();
            
            // Parallax эффекты
            this.animateParallaxElements(scrollY);
            
            // Анимация прогресс бара (если есть)
            this.updateScrollProgressBar();
            
        }, 16);
        
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }

    /**
     * Анимация parallax элементов
     * @param {number} scrollY - Позиция скролла
     */
    animateParallaxElements(scrollY) {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.dataset.parallaxSpeed) || 0.5;
            const yPos = scrollY * speed;
            element.style.transform = `translateY(${yPos}px)`;
        });
    }

    /**
     * Обновление прогресс бара скролла
     */
    updateScrollProgressBar() {
        const progressBar = document.querySelector('.scroll-progress-bar');
        if (progressBar) {
            progressBar.style.width = `${this.scrollProgress}%`;
        }
    }

    /**
     * Настройка эффектов при движении мыши
     */
    setupMouseEffects() {
        // Эффект движения градиентных орбов
        document.addEventListener('mousemove', Utils.throttle((e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            const orbs = document.querySelectorAll('.gradient-orb');
            orbs.forEach((orb, index) => {
                const speed = 0.01 * (index + 1);
                const xOffset = (x - 0.5) * 100 * speed;
                const yOffset = (y - 0.5) * 100 * speed;
                
                orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
            
            // Interactive hover эффекты
            this.handleInteractiveHovers(e);
            
        }, 16));
        
        // Эффект при наведении на интерактивные элементы
        this.setupInteractiveHovers();
    }

    /**
     * Настройка интерактивных hover эффектов
     */
    setupInteractiveHovers() {
        const interactiveElements = document.querySelectorAll('.interactive-hover');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mousemove', Utils.throttle((e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const deltaX = (x - centerX) / centerX;
                const deltaY = (y - centerY) / centerY;
                
                // 3D tilt эффект
                element.style.transform = `
                    perspective(1000px)
                    rotateX(${deltaY * 5}deg)
                    rotateY(${deltaX * 5}deg)
                    scale3d(1.02, 1.02, 1.02)
                `;
                
                // Позиция градиента
                element.style.backgroundPosition = `${x}px ${y}px`;
                
            }, 16));
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = '';
                element.style.backgroundPosition = '';
            });
        });
    }

    /**
     * Обработка интерактивных hover эффектов
     * @param {MouseEvent} e - Событие мыши
     */
    handleInteractiveHovers(e) {
        // Дополнительные эффекты могут быть добавлены здесь
    }

    /**
     * Настройка анимации счетчиков
     */
    setupCounterAnimations() {
        const statElements = document.querySelectorAll('.stat-value');
        if (statElements.length === 0) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const target = parseFloat(element.dataset.target);
                    const current = parseFloat(element.textContent) || 0;
                    
                    Utils.animateValue(element, current, target, CONFIG.animations.statCounter);
                    observer.unobserve(element);
                }
            });
        }, { threshold: 0.5, rootMargin: '0px 0px -50px 0px' });
        
        statElements.forEach(element => observer.observe(element));
    }

    /**
     * Настройка parallax эффектов
     */
    setupParallax() {
        Utils.initParallax();
    }

    /**
     * Настройка анимаций загрузки
     */
    setupLoadingAnimations() {
        // Предзагрузка важных элементов
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
            
            // Анимация появления элементов после загрузки
            setTimeout(() => {
                this.animateOnLoad();
            }, 300);
        });
    }

    /**
     * Анимация при загрузке страницы
     */
    animateOnLoad() {
        // Анимация заголовка hero секции
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            this.revealText(heroTitle);
        }
        
        // Анимация статистики
        setTimeout(() => {
            document.querySelectorAll('.stat-value').forEach((element, index) => {
                setTimeout(() => {
                    const target = parseFloat(element.dataset.target);
                    Utils.animateValue(element, 0, target, CONFIG.animations.statCounter);
                }, index * 200);
            });
        }, 1000);
        
        // Плавающая анимация для иконок
        document.querySelectorAll('.step-icon, .benefit-icon, .security-icon').forEach(icon => {
            this.floatElement(icon);
        });
        
        // Добавление интерактивных hover эффектов к карточкам
        document.querySelectorAll('.card, .pricing-card, .crypto-card, .benefit-card').forEach(card => {
            card.classList.add('interactive-hover');
        });
    }

    /**
     * Анимация появления текста (typewriter эффект)
     * @param {HTMLElement} element - Элемент с текстом
     * @param {string} text - Текст для анимации
     * @param {number} speed - Скорость печати
     */
    revealText(element, text = null, speed = 50) {
        if (!text) text = element.textContent;
        element.textContent = '';
        
        let i = 0;
        const type = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        
        type();
    }

    /**
     * Плавающая анимация для элемента
     * @param {HTMLElement} element - Элемент для анимации
     */
    floatElement(element) {
        const duration = 2000 + Math.random() * 1000;
        const delay = Math.random() * 1000;
        
        element.style.animation = `
            float ${duration}ms ease-in-out ${delay}ms infinite
        `;
    }

    /**
     * Пульсирующее свечение для элемента
     * @param {HTMLElement} element - Элемент для анимации
     * @param {string} color - Цвет свечения
     */
    pulseGlow(element, color = CONFIG.chartColors.primary) {
        element.style.animation = `
            pulse 2s ease-in-out infinite,
            neon-glow 3s ease-in-out infinite
        `;
        element.style.color = color;
    }

    /**
     * Shimmer эффект для элемента
     * @param {HTMLElement} element - Элемент для анимации
     */
    applyShimmer(element) {
        element.classList.add('loading-shimmer');
        
        setTimeout(() => {
            element.classList.remove('loading-shimmer');
        }, 2000);
    }

    /**
     * Стаггерированная анимация для дочерних элементов
     * @param {HTMLElement} parent - Родительский элемент
     * @param {string} animationClass - CSS класс анимации
     * @param {number} delay - Задержка между элементами
     */
    staggerChildren(parent, animationClass, delay = 100) {
        const children = Array.from(parent.children);
        
        children.forEach((child, index) => {
            setTimeout(() => {
                child.classList.add(animationClass);
            }, index * delay);
        });
    }

    /**
     * Wave эффект для группы элементов
     * @param {NodeList} elements - Элементы для анимации
     * @param {number} delay - Задержка между элементами
     */
    wave(elements, delay = 100) {
        Array.from(elements).forEach((element, index) => {
            setTimeout(() => {
                element.style.transform = 'scale(1.1)';
                element.style.transition = 'transform 0.2s ease';
                
                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                }, 200);
            }, index * delay);
        });
    }
}

// ==========================================================================
// Менеджер графиков (Chart.js)
// ==========================================================================

class ChartManager {
    constructor() {
        this.charts = new Map();
        this.currentTheme = document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light';
        this.init();
    }

    /**
     * Инициализация менеджера графиков
     */
    init() {
        if (typeof Chart === 'undefined') {
            console.warn('Chart.js не загружен. Графики будут недоступны.');
            return;
        }
        
        this.createHeroChart();
        this.createCalculatorChart();
        this.setupChartUpdates();
        this.setupThemeObserver();
    }

    /**
     * Создание графика для hero секции
     */
    createHeroChart() {
        const canvas = document.getElementById('heroChart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        // Генерация реалистичных данных о росте TVL
        const labels = [];
        const data = [];
        let price = 30000;
        
        for (let i = 0; i < 30; i++) {
            labels.push(`${i + 1}/12`);
            price += (Math.random() - 0.45) * 2000;
            data.push(price);
        }
        
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(0, 240, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 240, 255, 0)');
        
        const isDark = this.currentTheme === 'dark';
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.1)';
        const textColor = isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(15, 23, 42, 0.6)';
        
        try {
            this.charts.set('hero', new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'TVL Growth',
                        data: data,
                        borderColor: CONFIG.chartColors.primary,
                        backgroundColor: gradient,
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0,
                        pointHoverRadius: 6,
                        pointBackgroundColor: CONFIG.chartColors.primary
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                            backgroundColor: isDark ? 'rgba(10, 10, 10, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                            titleColor: isDark ? CONFIG.chartColors.primary : '#0f172a',
                            bodyColor: isDark ? '#ffffff' : '#0f172a',
                            borderColor: CONFIG.chartColors.primary,
                            borderWidth: 1,
                            padding: 12,
                            cornerRadius: 8,
                            callbacks: {
                                label: function(context) {
                                    return `$${context.parsed.y.toLocaleString()}`;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                color: gridColor,
                                drawBorder: false,
                                drawTicks: false
                            },
                            ticks: {
                                color: textColor,
                                maxTicksLimit: 6,
                                font: {
                                    size: 11
                                }
                            }
                        },
                        y: {
                            grid: {
                                color: gridColor,
                                drawBorder: false,
                                drawTicks: false
                            },
                            ticks: {
                                color: textColor,
                                callback: function(value) {
                                    return '$' + (value / 1000).toFixed(0) + 'K';
                                },
                                font: {
                                    size: 11
                                }
                            }
                        }
                    },
                    interaction: {
                        intersect: false,
                        mode: 'nearest'
                    },
                    animation: {
                        duration: 2000,
                        easing: 'easeOutQuart'
                    }
                }
            }));
            
            // Симуляция обновления данных в реальном времени
            this.simulateHeroChartUpdates();
            
        } catch (error) {
            console.error('Ошибка при создании hero графика:', error);
        }
    }

    /**
     * Симуляция обновления hero графика
     */
    simulateHeroChartUpdates() {
        setInterval(() => {
            const chart = this.charts.get('hero');
            if (!chart) return;
            
            const data = chart.data.datasets[0].data;
            const lastValue = data[data.length - 1];
            const newValue = lastValue + (Math.random() - 0.5) * 800;
            
            // Удаляем первую точку, добавляем новую
            data.shift();
            data.push(newValue);
            
            // Обновляем метки
            const labels = chart.data.labels;
            labels.shift();
            const lastLabel = parseInt(labels[labels.length - 1].split('/')[0]);
            labels.push(`${(lastLabel % 30) + 1}/12`);
            
            chart.update('none');
            
        }, 3000);
    }

    /**
     * Создание графика для калькулятора
     */
    createCalculatorChart() {
        const canvas = document.getElementById('calculatorChart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        // Генерация данных для графика
        const labels = ['Now', '3M', '6M', '9M', '1Y'];
        const principal = 50000;
        const apy = 12.5;
        const months = 12;
        
        const data = [];
        for (let i = 0; i <= months; i += 3) {
            const earnings = principal * (apy / 100) * (i / 12);
            data.push(principal + earnings);
        }
        
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(0, 255, 136, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 255, 136, 0)');
        
        const isDark = this.currentTheme === 'dark';
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.1)';
        const textColor = isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(15, 23, 42, 0.6)';
        
        try {
            this.charts.set('calculator', new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Projected Growth',
                        data: data,
                        borderColor: CONFIG.chartColors.success,
                        backgroundColor: gradient,
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 4,
                        pointBackgroundColor: CONFIG.chartColors.success,
                        pointBorderColor: isDark ? '#0a0a0a' : '#ffffff',
                        pointBorderWidth: 2
                    }, {
                        label: 'Principal',
                        data: Array(labels.length).fill(principal),
                        borderColor: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(15, 23, 42, 0.3)',
                        borderWidth: 1,
                        borderDash: [5, 5],
                        fill: false,
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                            backgroundColor: isDark ? 'rgba(10, 10, 10, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                            titleColor: isDark ? CONFIG.chartColors.success : '#0f172a',
                            bodyColor: isDark ? '#ffffff' : '#0f172a',
                            borderColor: CONFIG.chartColors.success,
                            borderWidth: 1,
                            padding: 12,
                            cornerRadius: 8,
                            callbacks: {
                                label: function(context) {
                                    if (context.datasetIndex === 0) {
                                        const earnings = context.parsed.y - principal;
                                        return [
                                            `Total: $${context.parsed.y.toLocaleString()}`,
                                            `Earnings: $${earnings.toLocaleString()}`
                                        ];
                                    }
                                    return `Principal: $${context.parsed.y.toLocaleString()}`;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                color: gridColor,
                                drawBorder: false,
                                drawTicks: false
                            },
                            ticks: {
                                color: textColor,
                                font: {
                                    size: 11
                                }
                            }
                        },
                        y: {
                            grid: {
                                color: gridColor,
                                drawBorder: false,
                                drawTicks: false
                            },
                            ticks: {
                                color: textColor,
                                callback: function(value) {
                                    return '$' + (value / 1000).toFixed(0) + 'K';
                                },
                                font: {
                                    size: 11
                                }
                            }
                        }
                    },
                    animation: {
                        duration: 1000,
                        easing: 'easeOutQuart'
                    }
                }
            }));
            
        } catch (error) {
            console.error('Ошибка при создании калькулятора графика:', error);
        }
    }

    /**
     * Обновление графика калькулятора
     * @param {number} deposit - Сумма депозита
     * @param {number} apy - Годовая процентная ставка
     * @param {number} months - Количество месяцев
     */
    updateCalculatorChart(deposit, apy, months) {
        const chart = this.charts.get('calculator');
        if (!chart) return;
        
        const labels = ['Now'];
        const data = [deposit];
        const principal = deposit;
        
        // Добавление промежуточных точек
        for (let i = 3; i <= months; i += 3) {
            labels.push(`${i}M`);
            const earnings = principal * (apy / 100) * (i / 12);
            data.push(principal + earnings);
        }
        
        if (months % 3 !== 0) {
            labels.push(`${months}M`);
            const earnings = principal * (apy / 100) * (months / 12);
            data.push(principal + earnings);
        }
        
        // Обновление данных графика
        chart.data.labels = labels;
        chart.data.datasets[0].data = data;
        chart.data.datasets[1].data = Array(labels.length).fill(principal);
        
        // Обновление градиента
        const ctx = chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(0, 255, 136, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 255, 136, 0)');
        chart.data.datasets[0].backgroundColor = gradient;
        
        chart.update('none');
    }

    /**
     * Настройка обновлений графиков
     */
    setupChartUpdates() {
        // Добавление слушателей для обновления графиков
        window.addEventListener('resize', Utils.throttle(() => {
            this.charts.forEach(chart => {
                chart.resize();
            });
        }, 300));
    }

    /**
     * Наблюдение за изменением темы
     */
    setupThemeObserver() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const isDark = document.documentElement.classList.contains('dark-theme');
                    this.currentTheme = isDark ? 'dark' : 'light';
                    this.updateTheme();
                }
            });
        });
        
        observer.observe(document.documentElement, { attributes: true });
    }

    /**
     * Обновление тем графиков
     */
    updateTheme() {
        const isDark = this.currentTheme === 'dark';
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.1)';
        const textColor = isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(15, 23, 42, 0.6)';
        
        this.charts.forEach((chart, key) => {
            if (chart.options && chart.options.scales) {
                chart.options.scales.x.grid.color = gridColor;
                chart.options.scales.y.grid.color = gridColor;
                chart.options.scales.x.ticks.color = textColor;
                chart.options.scales.y.ticks.color = textColor;
                
                // Обновление цвета тултипов
                if (chart.options.plugins && chart.options.plugins.tooltip) {
                    chart.options.plugins.tooltip.backgroundColor = isDark ? 
                        'rgba(10, 10, 10, 0.9)' : 'rgba(255, 255, 255, 0.9)';
                    chart.options.plugins.tooltip.titleColor = isDark ? 
                        CONFIG.chartColors.primary : '#0f172a';
                    chart.options.plugins.tooltip.bodyColor = isDark ? 
                        '#ffffff' : '#0f172a';
                }
                
                chart.update();
            }
        });
    }

    /**
     * Создание круговой диаграммы (doughnut)
     * @param {string} elementId - ID элемента canvas
     * @param {Object} data - Данные для графика
     * @param {Array} colors - Цвета для сегментов
     */
    createDonutChart(elementId, data, colors) {
        const canvas = document.getElementById(elementId);
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const isDark = this.currentTheme === 'dark';
        
        try {
            this.charts.set(elementId, new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: data.labels,
                    datasets: [{
                        data: data.values,
                        backgroundColor: colors,
                        borderWidth: 0,
                        borderRadius: 8,
                        hoverOffset: 15
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '70%',
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(15, 23, 42, 0.8)',
                                padding: 20,
                                usePointStyle: true,
                                font: {
                                    size: 11
                                }
                            }
                        },
                        tooltip: {
                            backgroundColor: isDark ? 'rgba(10, 10, 10, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                            titleColor: isDark ? CONFIG.chartColors.primary : '#0f172a',
                            bodyColor: isDark ? '#ffffff' : '#0f172a',
                            borderColor: CONFIG.chartColors.primary,
                            borderWidth: 1,
                            padding: 12,
                            cornerRadius: 8
                        }
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true,
                        duration: 1500
                    }
                }
            }));
            
        } catch (error) {
            console.error(`Ошибка при создании круговой диаграммы ${elementId}:`, error);
        }
    }

    /**
     * Создание столбчатой диаграммы (bar)
     * @param {string} elementId - ID элемента canvas
     * @param {Object} data - Данные для графика
     * @param {Object} options - Дополнительные опции
     */
    createBarChart(elementId, data, options = {}) {
        const canvas = document.getElementById(elementId);
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const isDark = this.currentTheme === 'dark';
        
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, options.gradientStart || 'rgba(0, 240, 255, 0.8)');
        gradient.addColorStop(1, options.gradientEnd || 'rgba(0, 240, 255, 0.2)');
        
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.1)';
        const textColor = isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(15, 23, 42, 0.6)';
        
        try {
            this.charts.set(elementId, new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: options.label || 'Data',
                        data: data.values,
                        backgroundColor: gradient,
                        borderColor: CONFIG.chartColors.primary,
                        borderWidth: 1,
                        borderRadius: 6,
                        borderSkipped: false
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: isDark ? 'rgba(10, 10, 10, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                            titleColor: isDark ? CONFIG.chartColors.primary : '#0f172a',
                            bodyColor: isDark ? '#ffffff' : '#0f172a',
                            borderColor: CONFIG.chartColors.primary,
                            borderWidth: 1,
                            padding: 12,
                            cornerRadius: 8
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: textColor,
                                font: {
                                    size: 11
                                }
                            }
                        },
                        y: {
                            grid: {
                                color: gridColor,
                                drawBorder: false
                            },
                            ticks: {
                                color: textColor,
                                font: {
                                    size: 11
                                }
                            }
                        }
                    },
                    animation: {
                        duration: 1500,
                        easing: 'easeOutQuart'
                    }
                }
            }));
            
        } catch (error) {
            console.error(`Ошибка при создании столбчатой диаграммы ${elementId}:`, error);
        }
    }

    /**
     * Обновление данных графика
     * @param {string} chartId - ID графика
     * @param {Array} newData - Новые данные
     */
    updateChartData(chartId, newData) {
        const chart = this.charts.get(chartId);
        if (chart) {
            chart.data.datasets[0].data = newData;
            chart.update();
        }
    }

    /**
     * Уничтожение графика
     * @param {string} chartId - ID графика
     */
    destroyChart(chartId) {
        const chart = this.charts.get(chartId);
        if (chart) {
            chart.destroy();
            this.charts.delete(chartId);
        }
    }
}

// ==========================================================================
// Калькулятор APY
// ==========================================================================

class APYCalculator {
    constructor() {
        this.depositAmount = 50000;
        this.apyRate = 12.5;
        this.timePeriod = 12;
        this.isCalculating = false;
        this.init();
    }

    /**
     * Инициализация калькулятора
     */
    init() {
        this.cacheElements();
        this.setupEventListeners();
        this.updateCalculator();
        this.setupPresets();
        this.setupSharing();
    }

    /**
     * Кэширование DOM элементов
     */
    cacheElements() {
        this.depositSlider = document.getElementById('depositAmount');
        this.apySlider = document.getElementById('apyRate');
        this.timeSlider = document.getElementById('timePeriod');
        
        this.depositValue = document.getElementById('depositValue');
        this.apyValue = document.getElementById('apyValue');
        this.timeValue = document.getElementById('timeValue');
        
        this.totalEarnings = document.getElementById('totalEarnings');
        this.finalBalance = document.getElementById('finalBalance');
        this.monthlyYield = document.getElementById('monthlyYield');
    }

    /**
     * Настройка обработчиков событий
     */
    setupEventListeners() {
        // Слайдеры
        if (this.depositSlider) {
            this.depositSlider.addEventListener('input', (e) => {
                this.depositAmount = parseFloat(e.target.value);
                this.updateDisplay();
                this.updateCalculator();
            });
            
            this.depositSlider.addEventListener('change', () => {
                Utils.createParticles(this.depositSlider, 10);
            });
        }
        
        if (this.apySlider) {
            this.apySlider.addEventListener('input', (e) => {
                this.apyRate = parseFloat(e.target.value);
                this.updateDisplay();
                this.updateCalculator();
            });
            
            this.apySlider.addEventListener('change', () => {
                Utils.createParticles(this.apySlider, 10);
            });
        }
        
        if (this.timeSlider) {
            this.timeSlider.addEventListener('input', (e) => {
                this.timePeriod = parseInt(e.target.value);
                this.updateDisplay();
                this.updateCalculator();
            });
            
            this.timeSlider.addEventListener('change', () => {
                Utils.createParticles(this.timeSlider, 10);
            });
        }
        
        // Клавиатурная навигация
        this.setupKeyboardControls();
        
        // Изменение размера окна
        window.addEventListener('resize', Utils.debounce(() => {
            this.updateSliderStyles();
        }, 300));
    }

    /**
     * Настройка клавиатурного управления
     */
    setupKeyboardControls() {
        const sliders = [this.depositSlider, this.apySlider, this.timeSlider];
        
        sliders.forEach(slider => {
            if (!slider) return;
            
            slider.addEventListener('keydown', (e) => {
                let step = 0;
                const currentValue = parseFloat(slider.value);
                const min = parseFloat(slider.min);
                const max = parseFloat(slider.max);
                
                switch(e.key) {
                    case 'ArrowRight':
                    case 'ArrowUp':
                        step = parseFloat(slider.step);
                        break;
                    case 'ArrowLeft':
                    case 'ArrowDown':
                        step = -parseFloat(slider.step);
                        break;
                    case 'PageUp':
                        step = parseFloat(slider.step) * 10;
                        break;
                    case 'PageDown':
                        step = -parseFloat(slider.step) * 10;
                        break;
                    case 'Home':
                        slider.value = min;
                        break;
                    case 'End':
                        slider.value = max;
                        break;
                    default:
                        return;
                }
                
                e.preventDefault();
                
                if (e.key === 'Home' || e.key === 'End') {
                    slider.value = e.key === 'Home' ? min : max;
                } else {
                    const newValue = Math.max(min, Math.min(max, currentValue + step));
                    slider.value = newValue;
                }
                
                slider.dispatchEvent(new Event('input'));
            });
        });
    }

    /**
     * Обновление отображения значений
     */
    updateDisplay() {
        // Форматирование и обновление значений
        if (this.depositValue) {
            this.depositValue.textContent = Utils.formatNumber(this.depositAmount);
        }
        
        if (this.apyValue) {
            this.apyValue.textContent = this.apyRate.toFixed(1);
        }
        
        if (this.timeValue) {
            this.timeValue.textContent = this.timePeriod;
        }
        
        // Обновление стилей слайдеров
        this.updateSliderStyles();
    }

    /**
     * Обновление стилей слайдеров
     */
    updateSliderStyles() {
        const updateSliderGradient = (slider, value, min, max) => {
            if (!slider) return;
            
            const percentage = ((value - min) / (max - min)) * 100;
            slider.style.background = `
                linear-gradient(
                    to right,
                    var(--color-neon-blue) 0%,
                    var(--color-neon-purple) ${percentage}%,
                    var(--color-bg-secondary) ${percentage}%,
                    var(--color-bg-secondary) 100%
                )
            `;
        };
        
        if (this.depositSlider) {
            updateSliderGradient(
                this.depositSlider,
                this.depositAmount,
                parseFloat(this.depositSlider.min),
                parseFloat(this.depositSlider.max)
            );
        }
        
        if (this.apySlider) {
            updateSliderGradient(
                this.apySlider,
                this.apyRate,
                parseFloat(this.apySlider.min),
                parseFloat(this.apySlider.max)
            );
        }
        
        if (this.timeSlider) {
            updateSliderGradient(
                this.timeSlider,
                this.timePeriod,
                parseFloat(this.timeSlider.min),
                parseFloat(this.timeSlider.max)
            );
        }
    }

    /**
     * Расчет результатов
     * @returns {Object} Результаты расчета
     */
    calculateResults() {
        // Ежемесячная процентная ставка
        const monthlyRate = this.apyRate / 100 / 12;
        
        // Общий доход
        const totalEarnings = this.depositAmount * (Math.pow(1 + monthlyRate, this.timePeriod) - 1);
        
        // Итоговый баланс
        const finalBalance = this.depositAmount + totalEarnings;
        
        // Ежемесячный доход (приблизительно)
        const monthlyYield = totalEarnings / this.timePeriod;
        
        return {
            totalEarnings,
            finalBalance,
            monthlyYield
        };
    }

    /**
     * Обновление калькулятора
     */
    updateCalculator() {
        if (this.isCalculating) return;
        
        this.isCalculating = true;
        
        const results = this.calculateResults();
        
        // Анимация изменения чисел
        this.animateValue(this.totalEarnings, results.totalEarnings, '$');
        this.animateValue(this.finalBalance, results.finalBalance, '$');
        this.animateValue(this.monthlyYield, results.monthlyYield, '$');
        
        // Обновление графика
        if (window.chartManager) {
            window.chartManager.updateCalculatorChart(
                this.depositAmount,
                this.apyRate,
                this.timePeriod
            );
        }
        
        // Визуальная обратная связь
        this.animateResultCards();
        
        setTimeout(() => {
            this.isCalculating = false;
        }, 500);
    }

    /**
     * Анимация изменения значения
     * @param {HTMLElement} element - Элемент для анимации
     * @param {number} target - Целевое значение
     * @param {string} prefix - Префикс (например, $)
     */
    animateValue(element, target, prefix = '') {
        if (!element) return;
        
        const current = this.parseNumber(element.textContent);
        const duration = 500;
        
        Utils.animateValue(element, current, target, duration);
        
        // Обновление префикса после анимации
        setTimeout(() => {
            if (!element.textContent.startsWith(prefix)) {
                element.textContent = prefix + element.textContent;
            }
        }, duration);
    }

    /**
     * Парсинг числа из строки
     * @param {string} text - Текст для парсинга
     * @returns {number} Число
     */
    parseNumber(text) {
        return parseFloat(text.replace(/[^0-9.-]+/g, '')) || 0;
    }

    /**
     * Анимация карточек результатов
     */
    animateResultCards() {
        const cards = document.querySelectorAll('.result-card');
        
        cards.forEach(card => {
            card.classList.add('success');
            
            setTimeout(() => {
                card.classList.remove('success');
            }, 1000);
        });
    }

    /**
     * Настройка пресетов
     */
    setupPresets() {
        const presets = [
            { label: '$1,000', value: 1000 },
            { label: '$10,000', value: 10000 },
            { label: '$100,000', value: 100000 },
            { label: '$1M', value: 1000000 }
        ];
        
        const container = document.createElement('div');
        container.className = 'calculator-presets';
        container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            gap: var(--space-3);
            margin-top: var(--space-4);
            justify-content: center;
        `;
        
        presets.forEach(preset => {
            const button = document.createElement('button');
            button.className = 'btn btn-outline btn-sm';
            button.textContent = preset.label;
            button.setAttribute('type', 'button');
            button.setAttribute('aria-label', `Set deposit to ${preset.label}`);
            
            button.addEventListener('click', () => {
                this.depositAmount = preset.value;
                if (this.depositSlider) {
                    this.depositSlider.value = preset.value;
                }
                this.updateDisplay();
                this.updateCalculator();
                
                // Эффект частиц
                Utils.createParticles(button, 15);
                
                // Звуковой эффект (опционально)
                this.playClickSound();
            });
            
            container.appendChild(button);
        });
        
        if (this.depositSlider && this.depositSlider.parentNode) {
            this.depositSlider.parentNode.appendChild(container);
        }
    }

    /**
     * Воспроизведение звука клика
     */
    playClickSound() {
        // Простой звуковой эффект через Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
            
        } catch (error) {
            // Web Audio API не поддерживается, пропускаем звук
        }
    }

    /**
     * Настройка функционала шаринга
     */
    setupSharing() {
        const shareButton = this.createShareButton();
        const exportButton = this.createExportButton();
        
        const resultsContainer = document.querySelector('.calculator-results');
        if (resultsContainer) {
            const actionsContainer = document.createElement('div');
            actionsContainer.className = 'calculator-actions';
            actionsContainer.style.cssText = `
                display: flex;
                gap: var(--space-4);
                margin-top: var(--space-6);
                justify-content: center;
                flex-wrap: wrap;
            `;
            
            actionsContainer.appendChild(shareButton);
            actionsContainer.appendChild(exportButton);
            
            resultsContainer.appendChild(actionsContainer);
        }
    }

    /**
     * Создание кнопки шаринга
     * @returns {HTMLElement} Кнопка шаринга
     */
    createShareButton() {
        const button = document.createElement('button');
        button.className = 'btn btn-secondary';
        button.innerHTML = '📤 Share Results';
        button.setAttribute('type', 'button');
        button.setAttribute('aria-label', 'Share calculation results');
        
        button.addEventListener('click', () => {
            this.shareResults();
        });
        
        return button;
    }

    /**
     * Шаринг результатов
     */
    async shareResults() {
        const results = this.calculateResults();
        
        const message = `💰 Just calculated my crypto earnings with @NexusLend:
💰 Deposit: $${Utils.formatNumber(this.depositAmount)}
📈 APY: ${this.apyRate.toFixed(1)}%
⏰ Period: ${this.timePeriod} months
💸 Total Earnings: $${Utils.formatNumber(results.totalEarnings)}
🚀 Final Balance: $${Utils.formatNumber(results.finalBalance)}
            
Try it yourself! #CryptoLending #DeFi`;
        
        const shareData = {
            title: 'My Crypto Earnings Calculator',
            text: message,
            url: window.location.href
        };
        
        try {
            if (navigator.share && navigator.canShare(shareData)) {
                await navigator.share(shareData);
                Utils.showToast('Results shared successfully!', 'success');
            } else {
                await Utils.copyToClipboard(message);
                Utils.showToast('Results copied to clipboard!', 'success');
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error('Error sharing:', error);
                Utils.showToast('Failed to share results', 'error');
            }
        }
    }

    /**
     * Создание кнопки экспорта
     * @returns {HTMLElement} Кнопка экспорта
     */
    createExportButton() {
        const button = document.createElement('button');
        button.className = 'btn btn-outline';
        button.innerHTML = '📊 Export Report';
        button.setAttribute('type', 'button');
        button.setAttribute('aria-label', 'Export calculation report');
        
        button.addEventListener('click', () => {
            this.exportResults();
        });
        
        return button;
    }

    /**
     * Экспорт результатов
     */
    exportResults() {
        const results = this.calculateResults();
        
        const report = {
            platform: CONFIG.platform.name,
            calculationDate: new Date().toISOString(),
            parameters: {
                deposit: this.depositAmount,
                apy: this.apyRate,
                months: this.timePeriod
            },
            results: {
                totalEarnings: results.totalEarnings,
                finalBalance: results.finalBalance,
                monthlyYield: results.monthlyYield
            },
            disclaimer: 'This is a projection based on the entered parameters. Actual results may vary.'
        };
        
        const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `nexuslend-calculator-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        Utils.showToast('Report exported successfully!', 'success');
    }

    /**
     * Сброс калькулятора к значениям по умолчанию
     */
    resetCalculator() {
        this.depositAmount = 50000;
        this.apyRate = 12.5;
        this.timePeriod = 12;
        
        if (this.depositSlider) this.depositSlider.value = this.depositAmount;
        if (this.apySlider) this.apySlider.value = this.apyRate;
        if (this.timeSlider) this.timeSlider.value = this.timePeriod;
        
        this.updateDisplay();
        this.updateCalculator();
        
        Utils.showToast('Calculator reset to defaults', 'info');
    }
}

// ==========================================================================
// Карусель отзывов
// ==========================================================================

class TestimonialCarousel {
    constructor() {
        this.currentIndex = 0;
        this.testimonials = CONFIG.testimonials;
        this.autoPlayInterval = null;
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.isAnimating = false;
        this.init();
    }

    /**
     * Инициализация карусели
     */
    init() {
        this.setupCarousel();
        this.setupEventListeners();
        this.startAutoPlay();
        this.updateControls();
        this.setupAccessibility();
    }

    /**
     * Настройка карусели
     */
    setupCarousel() {
        const track = document.querySelector('.testimonial-track');
        const dotsContainer = document.querySelector('.carousel-dots');
        
        if (!track || !dotsContainer) return;
        
        track.innerHTML = '';
        dotsContainer.innerHTML = '';
        
        this.testimonials.forEach((testimonial, index) => {
            // Создание карточки отзыва
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            card.dataset.index = index;
            card.setAttribute('role', 'tabpanel');
            card.setAttribute('aria-roledescription', 'slide');
            card.setAttribute('aria-label', `Testimonial ${index + 1} of ${this.testimonials.length}`);
            card.setAttribute('tabindex', index === 0 ? '0' : '-1');
            card.setAttribute('aria-hidden', index !== 0 ? 'true' : 'false');
            
            card.innerHTML = `
                <div class="testimonial-content">
                    <p class="testimonial-text">"${testimonial.text}"</p>
                </div>
                <div class="testimonial-author">
                    <div class="author-avatar" aria-hidden="true">
                        ${testimonial.avatar}
                    </div>
                    <div class="author-info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
            `;
            
            track.appendChild(card);
            
            // Создание точки навигации
            const dot = document.createElement('button');
            dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
            dot.dataset.index = index;
            dot.setAttribute('type', 'button');
            dot.setAttribute('role', 'tab');
            dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
            dot.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
            dot.setAttribute('aria-controls', `testimonial-${index}`);
            
            dotsContainer.appendChild(dot);
        });
        
        // Установка начальной позиции
        this.updateCarousel();
    }

    /**
     * Настройка обработчиков событий
     */
    setupEventListeners() {
        // Кнопки навигации
        const prevBtn = document.querySelector('.carousel-btn.prev');
        const nextBtn = document.querySelector('.carousel-btn.next');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.prev();
                this.resetAutoPlay();
            });
            
            prevBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.prev();
                    this.resetAutoPlay();
                }
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.next();
                this.resetAutoPlay();
            });
            
            nextBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.next();
                    this.resetAutoPlay();
                }
            });
        }
        
        // Навигация по точкам
        document.querySelectorAll('.carousel-dot').forEach(dot => {
            dot.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                this.goTo(index);
                this.resetAutoPlay();
            });
        });
        
        // Клавиатурная навигация
        document.addEventListener('keydown', (e) => {
            const carousel = document.querySelector('.testimonial-carousel');
            if (!carousel.contains(document.activeElement) && !carousel.matches(':focus-within')) {
                return;
            }
            
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.prev();
                    this.resetAutoPlay();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.next();
                    this.resetAutoPlay();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goTo(0);
                    this.resetAutoPlay();
                    break;
                case 'End':
                    e.preventDefault();
                    this.goTo(this.testimonials.length - 1);
                    this.resetAutoPlay();
                    break;
            }
        });
        
        // Touch/swipe поддержка
        this.setupTouchEvents();
        
        // Наблюдение за видимостью для паузы
        this.setupVisibilityObserver();
    }

    /**
     * Настройка touch событий
     */
    setupTouchEvents() {
        const track = document.querySelector('.testimonial-track');
        if (!track) return;
        
        track.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
            this.pauseAutoPlay();
        }, { passive: true });
        
        track.addEventListener('touchmove', (e) => {
            e.preventDefault();
        }, { passive: false });
        
        track.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
            this.startAutoPlay();
        }, { passive: true });
    }

    /**
     * Обработка жестов swipe
     */
    handleSwipe() {
        if (this.isAnimating) return;
        
        const swipeThreshold = 50;
        const diff = this.touchStartX - this.touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.next();
            } else {
                this.prev();
            }
        }
    }

    /**
     * Наблюдение за видимостью для паузы
     */
    setupVisibilityObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.startAutoPlay();
                } else {
                    this.pauseAutoPlay();
                }
            });
        }, { threshold: 0.5 });
        
        const carousel = document.querySelector('.testimonial-carousel');
        if (carousel) {
            observer.observe(carousel);
        }
    }

    /**
     * Обновление карусели
     */
    updateCarousel() {
        const track = document.querySelector('.testimonial-track');
        if (!track) return;
        
        const cards = track.children;
        const cardWidth = cards[0].offsetWidth;
        const gap = parseInt(window.getComputedStyle(track).gap) || 0;
        const offset = (cardWidth + gap) * this.currentIndex;
        
        track.style.transform = `translateX(-${offset}px)`;
        this.updateControls();
        this.updateAriaLabels();
    }

    /**
     * Обновление элементов управления
     */
    updateControls() {
        const dots = document.querySelectorAll('.carousel-dot');
        
        dots.forEach((dot, index) => {
            const isActive = index === this.currentIndex;
            dot.classList.toggle('active', isActive);
            dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
    }

    /**
     * Обновление ARIA атрибутов
     */
    updateAriaLabels() {
        const track = document.querySelector('.testimonial-track');
        if (!track) return;
        
        const cards = track.children;
        
        Array.from(cards).forEach((card, index) => {
            const isActive = index === this.currentIndex;
            card.setAttribute('aria-hidden', !isActive);
            card.setAttribute('tabindex', isActive ? '0' : '-1');
            
            if (isActive) {
                card.focus();
            }
        });
        
        // Обновление live region для скринридеров
        const liveRegion = document.querySelector('.carousel-live-region') || this.createLiveRegion();
        const currentTestimonial = this.testimonials[this.currentIndex];
        liveRegion.textContent = `Testimonial ${this.currentIndex + 1} of ${this.testimonials.length}: ${currentTestimonial.name}, ${currentTestimonial.role}`;
    }

    /**
     * Создание live region для скринридеров
     * @returns {HTMLElement} Live region элемент
     */
    createLiveRegion() {
        const liveRegion = document.createElement('div');
        liveRegion.className = 'carousel-live-region visually-hidden';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        
        const carousel = document.querySelector('.testimonial-carousel');
        if (carousel) {
            carousel.appendChild(liveRegion);
        }
        
        return liveRegion;
    }

    /**
     * Настройка accessibility
     */
    setupAccessibility() {
        const carousel = document.querySelector('.testimonial-carousel');
        if (!carousel) return;
        
        carousel.setAttribute('role', 'region');
        carousel.setAttribute('aria-label', 'Customer testimonials');
        carousel.setAttribute('aria-roledescription', 'carousel');
    }

    /**
     * Следующий слайд
     */
    next() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
        this.animateTransition('next');
    }

    /**
     * Предыдущий слайд
     */
    prev() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
        this.animateTransition('prev');
    }

    /**
     * Переход к конкретному слайду
     * @param {number} index - Индекс слайда
     */
    goTo(index) {
        if (this.isAnimating || index === this.currentIndex) return;
        
        this.isAnimating = true;
        const direction = index > this.currentIndex ? 'next' : 'prev';
        this.currentIndex = index;
        this.animateTransition(direction);
    }

    /**
     * Анимация перехода
     * @param {string} direction - Направление перехода
     */
    animateTransition(direction) {
        const track = document.querySelector('.testimonial-track');
        if (!track) return;
        
        const cards = track.children;
        
        // Анимация текущего и следующего слайда
        Array.from(cards).forEach(card => {
            const index = parseInt(card.dataset.index);
            
            if (index === this.currentIndex) {
                card.style.opacity = '0';
                card.style.transform = direction === 'next' ? 'translateX(50px)' : 'translateX(-50px)';
                
                requestAnimationFrame(() => {
                    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateX(0)';
                });
            } else if (index === this.getPrevIndex(direction)) {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '0';
                card.style.transform = direction === 'next' ? 'translateX(-50px)' : 'translateX(50px)';
            }
        });
        
        // Обновление позиции
        requestAnimationFrame(() => {
            this.updateCarousel();
            
            // Эффект частиц для направления
            if (window.animations && direction === 'next') {
                const activeCard = cards[this.currentIndex];
                Utils.createParticles(activeCard, 10);
            }
            
            setTimeout(() => {
                this.isAnimating = false;
            }, 500);
        });
    }

    /**
     * Получение предыдущего индекса
     * @param {string} direction - Направление
     * @returns {number} Предыдущий индекс
     */
    getPrevIndex(direction) {
        if (direction === 'next') {
            return (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
        } else {
            return (this.currentIndex + 1) % this.testimonials.length;
        }
    }

    /**
     * Запуск автоматической прокрутки
     */
    startAutoPlay() {
        this.pauseAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.next();
        }, 5000);
    }

    /**
     * Пауза автоматической прокрутки
     */
    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    /**
     * Перезапуск автоматической прокрутки
     */
    resetAutoPlay() {
        this.pauseAutoPlay();
        this.startAutoPlay();
    }

    /**
     * Добавление нового отзыва
     * @param {Object} testimonial - Новый отзыв
     */
    addTestimonial(testimonial) {
        this.testimonials.push(testimonial);
        this.setupCarousel();
        this.updateCarousel();
    }

    /**
     * Удаление отзыва
     * @param {number} index - Индекс отзыва
     */
    removeTestimonial(index) {
        if (index >= 0 && index < this.testimonials.length) {
            this.testimonials.splice(index, 1);
            
            if (this.currentIndex >= this.testimonials.length) {
                this.currentIndex = Math.max(0, this.testimonials.length - 1);
            }
            
            this.setupCarousel();
            this.updateCarousel();
        }
    }

    /**
     * Получение текущего отзыва
     * @returns {Object} Текущий отзыв
     */
    getCurrentTestimonial() {
        return this.testimonials[this.currentIndex];
    }

    /**
     * Экспорт отзывов
     */
    exportTestimonials() {
        const data = {
            testimonials: this.testimonials,
            exportDate: new Date().toISOString(),
            source: CONFIG.platform.name
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `testimonials-${CONFIG.platform.name}-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        Utils.showToast('Testimonials exported successfully!', 'success');
    }
}

// ==========================================================================
// Основное приложение
// ==========================================================================

class NexusLendApp {
    constructor() {
        this.isMobile = window.innerWidth < 768;
        this.isScrolled = false;
        this.isOnline = navigator.onLine;
        this.analyticsLog = [];
        this.init();
    }

    /**
     * Инициализация приложения
     */
    init() {
        this.setupTheme();
        this.setupMobileMenu();
        this.setupSmoothScroll();
        this.setupFormValidation();
        this.setupLazyLoading();
        this.setupPerformanceMonitoring();
        this.setupAnalytics();
        this.setupEventListeners();
        this.setupServiceWorker();
        
        // Инициализация компонентов
        this.initComponents();
        
        // Начальные анимации
        this.animateOnLoad();
        
        console.log(`${CONFIG.platform.name} initialized successfully! 🚀`);
        
        // Экспорт в глобальную область видимости для отладки
        window.NexusLend = this;
    }

    /**
     * Настройка темы
     */
    setupTheme() {
        Utils.loadTheme();
        
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', Utils.toggleTheme);
            
            // Обновление иконки темы
            const updateIcon = () => {
                const isDark = document.documentElement.classList.contains('dark-theme');
                const icon = themeToggle.querySelector('.theme-icon');
                if (icon) {
                    icon.textContent = isDark ? '🌙' : '☀️';
                }
            };
            
            updateIcon();
            
            // Наблюдение за изменениями темы
            const observer = new MutationObserver(updateIcon);
            observer.observe(document.documentElement, { 
                attributes: true, 
                attributeFilter: ['class'] 
            });
        }
    }

    /**
     * Инициализация компонентов
     */
    initComponents() {
        // Инициализация менеджера анимаций
        window.animations = new AnimationManager();
        
        // Инициализация менеджера графиков
        window.chartManager = new ChartManager();
        
        // Инициализация калькулятора
        window.calculator = new APYCalculator();
        
        // Инициализация карусели отзывов
        window.testimonialCarousel = new TestimonialCarousel();
        
        // Инициализация FAQ
        this.setupFAQ();
        
        // Инициализация ценовых планов
        this.setupPricingPlans();
        
        // Инициализация криптовалют
        this.setupCryptocurrencies();
        
        // Инициализация кнопок CTA
        this.setupCTAButtons();
    }

    /**
     * Настройка мобильного меню
     */
    setupMobileMenu() {
        const menuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.querySelector('.nav-menu');
        
        if (menuBtn && navMenu) {
            menuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                menuBtn.classList.toggle('active');
                navMenu.classList.toggle('active');
                document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
                
                // ARIA атрибуты
                const isExpanded = navMenu.classList.contains('active');
                menuBtn.setAttribute('aria-expanded', isExpanded);
                navMenu.setAttribute('aria-hidden', !isExpanded);
            });
            
            // Закрытие меню при клике на ссылку
            navMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    menuBtn.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                    menuBtn.setAttribute('aria-expanded', 'false');
                    navMenu.setAttribute('aria-hidden', 'true');
                });
            });
            
            // Закрытие меню при клике вне его
            document.addEventListener('click', (e) => {
                if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                    menuBtn.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                    menuBtn.setAttribute('aria-expanded', 'false');
                    navMenu.setAttribute('aria-hidden', 'true');
                }
            });
            
            // Закрытие меню при нажатии Escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                    menuBtn.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                    menuBtn.setAttribute('aria-expanded', 'false');
                    navMenu.setAttribute('aria-hidden', 'true');
                    menuBtn.focus();
                }
            });
        }
    }

    /**
     * Настройка плавной прокрутки
     */
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Фокус на целевой элемент для accessibility
                    targetElement.setAttribute('tabindex', '-1');
                    targetElement.focus();
                    setTimeout(() => {
                        targetElement.removeAttribute('tabindex');
                    }, 1000);
                }
            });
        });
    }

    /**
     * Настройка валидации форм
     */
    setupFormValidation() {
        const form = document.getElementById('registrationForm');
        if (!form) return;
        
        const emailInput = form.querySelector('input[type="email"]');
        const submitBtn = form.querySelector('button[type="submit"]');
        
        if (!emailInput || !submitBtn) return;
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Валидация email
            if (!Utils.validateEmail(emailInput.value)) {
                this.showFormError(emailInput, 'Please enter a valid email address');
                return;
            }
            
            // Состояние загрузки
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');
            
            try {
                // Симуляция API запроса
                await Utils.sleep(1500);
                
                // Успех
                Utils.showToast('Welcome aboard! Check your email for next steps.', 'success');
                
                // Анимация успеха
                if (window.animations) {
                    Utils.createParticles(submitBtn, 30);
                }
                
                // Трек события
                this.trackEvent('form_submit', {
                    form_id: 'registration',
                    email: emailInput.value
                });
                
                // Сброс формы
                form.reset();
                
            } catch (error) {
                Utils.showToast('Something went wrong. Please try again.', 'error');
                console.error('Form submission error:', error);
                
                // Трек ошибки
                this.trackEvent('form_error', {
                    form_id: 'registration',
                    error: error.message
                });
                
            } finally {
                // Восстановление состояния кнопки
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
            }
        });
        
        // Валидация в реальном времени
        emailInput.addEventListener('input', () => {
            this.clearFormError(emailInput);
            
            // Подсветка при валидном email
            if (Utils.validateEmail(emailInput.value)) {
                emailInput.classList.add('valid');
            } else {
                emailInput.classList.remove('valid');
            }
        });
        
        emailInput.addEventListener('blur', () => {
            if (emailInput.value && !Utils.validateEmail(emailInput.value)) {
                this.showFormError(emailInput, 'Please enter a valid email address');
            }
        });
    }

    /**
     * Показать ошибку формы
     * @param {HTMLInputElement} input - Поле ввода
     * @param {string} message - Сообщение об ошибке
     */
    showFormError(input, message) {
        this.clearFormError(input);
        
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        errorElement.setAttribute('role', 'alert');
        errorElement.setAttribute('aria-live', 'assertive');
        
        Object.assign(errorElement.style, {
            color: 'var(--color-error)',
            fontSize: 'var(--text-sm)',
            marginTop: 'var(--space-2)'
        });
        
        input.parentNode.appendChild(errorElement);
        input.classList.add('error');
        input.focus();
        
        // Автоматическое удаление ошибки
        setTimeout(() => {
            this.clearFormError(input);
        }, 5000);
    }

    /**
     * Очистить ошибку формы
     * @param {HTMLInputElement} input - Поле ввода
     */
    clearFormError(input) {
        const errorElement = input.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
        input.classList.remove('error');
    }

    /**
     * Настройка ленивой загрузки
     */
    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.dataset.src;
                        
                        if (src) {
                            img.src = src;
                            img.classList.remove('lazy');
                        }
                        
                        imageObserver.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.1
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
            
            // Ленивая загрузка фоновых изображений
            const bgObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        const bgImage = element.dataset.bg;
                        
                        if (bgImage) {
                            element.style.backgroundImage = `url(${bgImage})`;
                        }
                        
                        bgObserver.unobserve(element);
                    }
                });
            });
            
            document.querySelectorAll('[data-bg]').forEach(element => {
                bgObserver.observe(element);
            });
        }
    }

    /**
     * Мониторинг производительности
     */
    setupPerformanceMonitoring() {
        // Мониторинг времени загрузки страницы
        window.addEventListener('load', () => {
            if (performance.getEntriesByType) {
                const navigationEntries = performance.getEntriesByType('navigation');
                if (navigationEntries.length > 0) {
                    const navEntry = navigationEntries[0];
                    const loadTime = navEntry.loadEventEnd - navEntry.startTime;
                    
                    console.log(`Page loaded in ${Math.round(loadTime)}ms`);
                    
                    if (loadTime > 3000) {
                        console.warn('Page load time is above 3 seconds. Consider optimizing.');
                    }
                }
            }
            
            // Largest Contentful Paint (LCP)
            if (performance.getEntriesByType) {
                const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
                if (lcpEntries.length > 0) {
                    const lcp = lcpEntries[lcpEntries.length - 1];
                    console.log(`LCP: ${Math.round(lcp.startTime)}ms`);
                }
            }
        });
        
        // Мониторинг использования памяти
        if (performance.memory) {
            setInterval(() => {
                const usedMemory = performance.memory.usedJSHeapSize;
                const totalMemory = performance.memory.totalJSHeapSize;
                const memoryUsage = (usedMemory / totalMemory) * 100;
                
                if (memoryUsage > 80) {
                    console.warn(`High memory usage: ${Math.round(memoryUsage)}%`);
                }
            }, 30000);
        }
        
        // Мониторинг FPS
        this.setupFPSMonitoring();
    }

    /**
     * Мониторинг FPS
     */
    setupFPSMonitoring() {
        let frameCount = 0;
        let lastTime = performance.now();
        let fps = 60;
        
        const checkFPS = () => {
            frameCount++;
            const currentTime = performance.now();
            
            if (currentTime >= lastTime + 1000) {
                fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                frameCount = 0;
                lastTime = currentTime;
                
                if (fps < 30) {
                    console.warn(`Low FPS: ${fps}. Consider optimizing animations.`);
                }
            }
            
            requestAnimationFrame(checkFPS);
        };
        
        requestAnimationFrame(checkFPS);
    }

    /**
     * Настройка аналитики
     */
    setupAnalytics() {
        // Трек просмотра страницы
        this.trackEvent('page_view', {
            page: window.location.pathname,
            referrer: document.referrer || 'direct',
            timestamp: new Date().toISOString(),
            user_agent: navigator.userAgent,
            screen_resolution: `${window.screen.width}x${window.screen.height}`
        });
        
        // Трек кликов по кнопкам
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', () => {
                this.trackEvent('button_click', {
                    button_text: button.textContent.trim(),
                    button_class: button.className,
                    href: button.closest('a')?.href || '',
                    section: this.getSectionName(button)
                });
            });
        });
        
        // Трек взаимодействия с формами
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                this.trackEvent('form_submit', {
                    form_id: form.id || 'unknown',
                    form_action: form.action || ''
                });
            });
        });
        
        // Трек скролла секций
        this.setupScrollTracking();
    }

    /**
     * Получение имени секции для элемента
     * @param {HTMLElement} element - Элемент
     * @returns {string} Имя секции
     */
    getSectionName(element) {
        let current = element;
        while (current) {
            if (current.tagName === 'SECTION' && current.id) {
                return current.id;
            }
            current = current.parentElement;
        }
        return 'unknown';
    }

    /**
     * Трек событий
     * @param {string} eventName - Имя события
     * @param {Object} data - Данные события
     */
    trackEvent(eventName, data) {
        const eventData = {
            event: eventName,
            data: data,
            timestamp: new Date().toISOString(),
            session_id: this.getSessionId(),
            page_url: window.location.href
        };
        
        // Локальное хранение для демо
        this.analyticsLog.push(eventData);
        
        // В реальном приложении здесь был бы отправка на сервер аналитики
        console.log(`[Analytics] ${eventName}:`, data);
        
        // Сохранение в localStorage для резервного копирования
        if (this.analyticsLog.length % 10 === 0) {
            this.saveAnalyticsToStorage();
        }
    }

    /**
     * Получение ID сессии
     * @returns {string} ID сессии
     */
    getSessionId() {
        let sessionId = localStorage.getItem('nexuslend_session_id');
        if (!sessionId) {
            sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('nexuslend_session_id', sessionId);
        }
        return sessionId;
    }

    /**
     * Сохранение аналитики в хранилище
     */
    saveAnalyticsToStorage() {
        try {
            const existingLogs = JSON.parse(localStorage.getItem('nexuslend_analytics') || '[]');
            const combinedLogs = [...existingLogs, ...this.analyticsLog];
            
            // Ограничение размера хранилища
            if (combinedLogs.length > 1000) {
                combinedLogs.splice(0, combinedLogs.length - 500);
            }
            
            localStorage.setItem('nexuslend_analytics', JSON.stringify(combinedLogs));
            this.analyticsLog = [];
            
        } catch (error) {
            console.error('Error saving analytics:', error);
        }
    }

    /**
     * Настройка трекинга скролла
     */
    setupScrollTracking() {
        const sections = document.querySelectorAll('section[id]');
        const viewedSections = new Set();
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !viewedSections.has(entry.target.id)) {
                    viewedSections.add(entry.target.id);
                    
                    this.trackEvent('section_view', {
                        section_id: entry.target.id,
                        section_name: entry.target.querySelector('.section-title')?.textContent || 'unknown',
                        view_time: new Date().toISOString()
                    });
                }
            });
        }, { threshold: 0.5 });
        
        sections.forEach(section => {
            observer.observe(section);
        });
    }

    /**
     * Настройка обработчиков событий
     */
    setupEventListeners() {
        // Изменение размера окна
        window.addEventListener('resize', Utils.debounce(() => {
            this.isMobile = window.innerWidth < 768;
            
            // Обновление состояния мобильного меню
            const navMenu = document.querySelector('.nav-menu');
            const menuBtn = document.getElementById('mobileMenuBtn');
            
            if (!this.isMobile && navMenu && menuBtn) {
                navMenu.classList.remove('active');
                menuBtn.classList.remove('active');
                document.body.style.overflow = '';
                menuBtn.setAttribute('aria-expanded', 'false');
                navMenu.setAttribute('aria-hidden', 'true');
            }
        }, 250));
        
        // Сохранение перед закрытием страницы
        window.addEventListener('beforeunload', () => {
            this.saveAnalyticsToStorage();
            
            // Сохранение состояния темы
            const theme = document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
        });
        
        // Обнаружение онлайн/офлайн статуса
        window.addEventListener('online', () => {
            this.isOnline = true;
            Utils.showToast('Back online!', 'success');
            this.trackEvent('connection_online');
        });
        
        window.addEventListener('offline', () => {
            this.isOnline = false;
            Utils.showToast('You are offline. Some features may not work.', 'warning');
            this.trackEvent('connection_offline');
        });
        
        // Предотвращение контекстного меню на изображениях (опционально)
        document.addEventListener('contextmenu', (e) => {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
                Utils.showToast('Right-click disabled on images', 'info', 2000);
            }
        });
        
        // Обработка ошибок
        window.addEventListener('error', (e) => {
            this.trackEvent('js_error', {
                message: e.message,
                filename: e.filename,
                lineno: e.lineno,
                colno: e.colno,
                error: e.error?.toString()
            });
        });
        
        window.addEventListener('unhandledrejection', (e) => {
            this.trackEvent('promise_rejection', {
                reason: e.reason?.toString()
            });
        });
    }

    /**
     * Настройка FAQ
     */
    setupFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            
            if (!question || !answer) return;
            
            question.addEventListener('click', () => {
                const isExpanded = question.getAttribute('aria-expanded') === 'true';
                
                // Закрытие всех других элементов
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherQuestion = otherItem.querySelector('.faq-question');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        
                        if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
                        if (otherAnswer) otherAnswer.style.maxHeight = null;
                    }
                });
                
                // Переключение текущего элемента
                item.classList.toggle('active');
                const newExpandedState = !isExpanded;
                question.setAttribute('aria-expanded', newExpandedState);
                
                if (newExpandedState) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    
                    // Трек открытия FAQ
                    this.trackEvent('faq_open', {
                        question: question.querySelector('span')?.textContent || 'unknown'
                    });
                } else {
                    answer.style.maxHeight = null;
                }
                
                // Анимация иконки
                const icon = question.querySelector('.faq-icon');
                if (icon) {
                    icon.style.transform = newExpandedState ? 'rotate(45deg)' : 'rotate(0deg)';
                }
            });
            
            // Клавиатурная навигация
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    question.click();
                }
            });
            
            // Инициализация состояния
            question.setAttribute('aria-expanded', 'false');
            question.setAttribute('role', 'button');
            answer.setAttribute('role', 'region');
            answer.setAttribute('aria-labelledby', question.id || `faq-${Math.random().toString(36).substr(2, 9)}`);
        });
    }

    /**
     * Настройка ценовых планов
     */
    setupPricingPlans() {
        const pricingCards = document.querySelectorAll('.pricing-card');
        
        pricingCards.forEach((card, index) => {
            const button = card.querySelector('.btn');
            if (!button) return;
            
            button.addEventListener('click', () => {
                const plan = CONFIG.pricingPlans[index];
                if (!plan) return;
                
                Utils.showToast(`Selected ${plan.name} plan!`, 'success');
                
                // Анимация выбора
                card.classList.add('selected');
                setTimeout(() => {
                    card.classList.remove('selected');
                }, 1000);
                
                // Трек события
                this.trackEvent('pricing_plan_select', {
                    plan_name: plan.name,
                    plan_price: plan.price,
                    plan_period: plan.period
                });
                
                // Прокрутка к форме регистрации
                const ctaSection = document.getElementById('cta');
                if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: 'smooth' });
                    
                    // Автозаполнение формы (опционально)
                    const emailInput = document.querySelector('#registrationForm input[type="email"]');
                    if (emailInput) {
                        emailInput.focus();
                    }
                }
            });
        });
    }

    /**
     * Настройка криптовалют
     */
    setupCryptocurrencies() {
        // Симуляция обновления цен в реальном времени
        setInterval(() => {
            const cryptoCards = document.querySelectorAll('.crypto-card');
            
            cryptoCards.forEach(card => {
                if (Math.random() > 0.7) { // 30% шанс на обновление
                    const changeElement = card.querySelector('.crypto-change');
                    const priceElement = card.querySelector('.crypto-price');
                    
                    if (changeElement && priceElement) {
                        const change = (Math.random() - 0.5) * 2;
                        const isPositive = change > 0;
                        const changePercent = Math.abs(change).toFixed(1);
                        const currentPrice = parseFloat(priceElement.textContent.replace(/[^0-9.-]+/g, ''));
                        const newPrice = currentPrice * (1 + change / 100);
                        
                        // Обновление данных
                        changeElement.textContent = `${isPositive ? '+' : '-'}${changePercent}%`;
                        changeElement.className = `crypto-change ${isPositive ? 'positive' : 'negative'}`;
                        priceElement.textContent = `$${Utils.formatNumber(newPrice)}`;
                        
                        // Анимация изменения
                        changeElement.style.transform = 'scale(1.2)';
                        setTimeout(() => {
                            changeElement.style.transform = 'scale(1)';
                        }, 300);
                        
                        // Цветовая индикация
                        card.style.borderColor = isPositive ? 
                            'rgba(0, 255, 136, 0.3)' : 'rgba(255, 51, 102, 0.3)';
                        setTimeout(() => {
                            card.style.borderColor = '';
                        }, 1000);
                    }
                }
            });
        }, 5000);
    }

    /**
     * Настройка CTA кнопок
     */
    setupCTAButtons() {
        const ctaButtons = document.querySelectorAll('.btn-primary:not(form .btn)');
        
        ctaButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Анимация нажатия
                button.classList.add('clicked');
                setTimeout(() => {
                    button.classList.remove('clicked');
                }, 300);
                
                // Эффект частиц
                Utils.createParticles(button, 20);
                
                // Трек события
                this.trackEvent('cta_click', {
                    button_text: button.textContent.trim(),
                    button_type: 'primary'
                });
            });
        });
    }

    /**
     * Настройка Service Worker для PWA
     */
    setupServiceWorker() {
        if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('ServiceWorker registration successful with scope: ', registration.scope);
                        
                        // Проверка обновлений
                        registration.addEventListener('updatefound', () => {
                            const newWorker = registration.installing;
                            console.log('New service worker found:', newWorker);
                            
                            newWorker.addEventListener('statechange', () => {
                                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                    Utils.showToast('New version available! Refresh to update.', 'info', 5000);
                                }
                            });
                        });
                    })
                    .catch(error => {
                        console.log('ServiceWorker registration failed: ', error);
                    });
            });
        }
    }

    /**
     * Анимация при загрузке страницы
     */
    animateOnLoad() {
        // Анимация заголовка hero секции
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle && window.animations) {
            window.animations.revealText(heroTitle);
        }
        
        // Анимация появления элементов
        setTimeout(() => {
            const animatedElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
            window.animations?.staggerChildren(document.body, 'reveal-visible', 100);
        }, 500);
        
        // Инициализация прогресс бара скролла (если есть)
        this.initScrollProgressBar();
        
        // Проверка предпочтений пользователя
        this.checkUserPreferences();
    }

    /**
     * Инициализация прогресс бара скролла
     */
    initScrollProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress-bar';
        progressBar.setAttribute('role', 'progressbar');
        progressBar.setAttribute('aria-valuemin', '0');
        progressBar.setAttribute('aria-valuemax', '100');
        progressBar.setAttribute('aria-valuenow', '0');
        progressBar.setAttribute('aria-label', 'Page scroll progress');
        
        Object.assign(progressBar.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '0%',
            height: '3px',
            background: 'linear-gradient(90deg, var(--color-neon-blue), var(--color-neon-purple))',
            zIndex: 'var(--z-sticky)',
            transition: 'width 0.1s ease'
        });
        
        document.body.appendChild(progressBar);
        
        // Обновление прогресс бара при скролле
        window.addEventListener('scroll', Utils.throttle(() => {
            const progress = Utils.getScrollProgress();
            progressBar.style.width = `${progress}%`;
            progressBar.setAttribute('aria-valuenow', Math.round(progress));
        }, 16));
    }

    /**
     * Проверка предпочтений пользователя
     */
    checkUserPreferences() {
        // Проверка предпочтения уменьшенной анимации
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            document.body.classList.add('reduced-motion');
            console.log('Reduced motion preference detected');
        }
        
        // Проверка предпочтения контраста
        const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
        if (prefersHighContrast) {
            document.body.classList.add('high-contrast');
            console.log('High contrast preference detected');
        }
        
        // Проверка цветовой схемы
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        console.log(`System prefers ${prefersDark ? 'dark' : 'light'} theme`);
    }

    /**
     * Показать системное уведомление
     * @param {string} title - Заголовок уведомления
     * @param {string} body - Текст уведомления
     */
    async showNotification(title, body) {
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification(title, { body, icon: '/icon-192.png' });
        } else if (Notification.permission !== 'denied') {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                new Notification(title, { body, icon: '/icon-192.png' });
            }
        }
    }

    /**
     * Экспорт данных для отладки
     * @returns {Object} Данные приложения
     */
    exportDebugData() {
        return {
            config: CONFIG,
            analytics: this.analyticsLog,
            performance: {
                memory: performance.memory ? {
                    usedJSHeapSize: performance.memory.usedJSHeapSize,
                    totalJSHeapSize: performance.memory.totalJSHeapSize,
                    jsHeapSizeLimit: performance.memory.jsHeapSizeLimit
                } : null,
                navigation: performance.getEntriesByType ? 
                    performance.getEntriesByType('navigation')[0] : null
            },
            state: {
                isMobile: this.isMobile,
                isOnline: this.isOnline,
                theme: document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light',
                sessionId: this.getSessionId()
            }
        };
    }
}

// ==========================================================================
// Инициализация приложения
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Проверка поддержки необходимых функций
    if (!('querySelector' in document) || !('addEventListener' in window)) {
        alert('Your browser is too old. Please update to a modern browser.');
        return;
    }
    
    // Инициализация приложения
    try {
        const app = new NexusLendApp();
        
        // Глобальный обработчик ошибок для приложения
        window.addEventListener('error', (e) => {
            app.trackEvent('global_error', {
                message: e.message,
                error: e.error?.toString()
            });
        });
        
        // Отладка в консоли
        console.log('=== NexusLend Debug Info ===');
        console.log('App initialized:', app);
        console.log('Chart.js loaded:', typeof Chart !== 'undefined');
        console.log('Service Worker support:', 'serviceWorker' in navigator);
        console.log('LocalStorage available:', 'localStorage' in window);
        console.log('============================');
        
    } catch (error) {
        console.error('Failed to initialize NexusLend app:', error);
        
        // Показать пользователю сообщение об ошибке
        const errorMessage = document.createElement('div');
        errorMessage.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: #ff3366;
            color: white;
            padding: 1rem;
            text-align: center;
            z-index: 9999;
        `;
        errorMessage.textContent = 'Failed to load application. Please refresh the page.';
        document.body.appendChild(errorMessage);
        
        setTimeout(() => {
            errorMessage.remove();
        }, 5000);
    }
});

// ==========================================================================
// Service Worker (базовый)
// ==========================================================================

if ('serviceWorker' in navigator) {
    const swContent = `
        const CACHE_NAME = 'nexuslend-v1';
        const urlsToCache = [
            '/',
            '/index.html',
            '/css/style.css',
            '/js/script.js',
            'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap',
            'https://cdn.jsdelivr.net/npm/chart.js'
        ];

        self.addEventListener('install', event => {
            event.waitUntil(
                caches.open(CACHE_NAME)
                    .then(cache => cache.addAll(urlsToCache))
            );
        });

        self.addEventListener('fetch', event => {
            event.respondWith(
                caches.match(event.request)
                    .then(response => response || fetch(event.request))
            );
        });

        self.addEventListener('activate', event => {
            const cacheWhitelist = [CACHE_NAME];
            event.waitUntil(
                caches.keys().then(cacheNames => {
                    return Promise.all(
                        cacheNames.map(cacheName => {
                            if (!cacheWhitelist.includes(cacheName)) {
                                return caches.delete(cacheName);
                            }
                        })
                    );
                })
            );
        });
    `;
    
    // Создание blob для Service Worker
    const blob = new Blob([swContent], { type: 'application/javascript' });
    const swURL = URL.createObjectURL(blob);
    
    // Регистрация Service Worker
    navigator.serviceWorker.register(swURL)
        .then(() => URL.revokeObjectURL(swURL))
        .catch(console.error);
}