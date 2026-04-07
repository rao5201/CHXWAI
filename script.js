// CHXWAI 官网 - 公共 JavaScript

// 移动端菜单切换
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// 关闭移动端菜单（点击链接后）
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('navLinks');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// 滚动时导航栏效果
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // 添加阴影效果
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// 截图占位区点击提示
document.querySelectorAll('.screenshot-placeholder').forEach(placeholder => {
    placeholder.addEventListener('click', () => {
        alert('💡 提示：请将此占位图替换为实际的项目截图\n\n建议尺寸：800x600 像素\n格式：PNG 或 JPG');
    });
});

// 下载按钮点击统计（可选）
document.querySelectorAll('.download-card .btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        // 可以在这里添加下载统计代码
        console.log('Download started');
    });
});

// 复制 SHA256 校验码
document.querySelectorAll('.hash').forEach(hashEl => {
    hashEl.addEventListener('click', () => {
        const hash = hashEl.textContent.replace('SHA256 校验：', '').trim();
        navigator.clipboard.writeText(hash).then(() => {
            alert('✅ SHA256 校验码已复制到剪贴板');
        });
    });
    hashEl.style.cursor = 'pointer';
    hashEl.title = '点击复制校验码';
});

// 页面加载完成后的动画
document.addEventListener('DOMContentLoaded', () => {
    // 特性卡片淡入动画
    const cards = document.querySelectorAll('.feature-card, .download-card, .team-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // 安装步骤动画
    const steps = document.querySelectorAll('.install-step');
    const stepObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.2
    });
    
    steps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateX(-30px)';
        step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        stepObserver.observe(step);
    });
});

// 控制台欢迎信息
console.log('%c🦞 欢迎使用茶海虾王 CHXWAI 官网！', 'font-size: 20px; color: #00d9ff; font-weight: bold;');
console.log('%c版本：V3.1 | 官网：https://github.com/rao5201/CHXWAI', 'font-size: 12px; color: #7b2cbf;');
console.log('%c💡 提示：这是一个开源项目，欢迎贡献！', 'font-size: 12px; color: #00ff88;');
