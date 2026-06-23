/* ==========================================================================
   คุมการทำงานเมื่อโหลดหน้าเว็บ (DOM Content Loaded)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initDarkMode();
    initSmoothScroll();
});

/**
 * 1. ระบบเปิด/ปิดเมนูสำหรับมือถือ (Mobile Menu Toggle)
 * ใช้ควบคู่กับการสลับ Class ใน CSS เพื่อแสดง/ซ่อนเมนู
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // ตรวจสอบก่อนว่ามีปุ่มนี้ในหน้าเว็บไหม เพื่อป้องกัน Error
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // สลับคลาส 'active' เพื่อสั่งให้เมนูกางออกหรือหุบเข้า
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });
    }
}

/**
 * 2. ระบบสลับโหมดมืด/สว่าง (Dark Mode Toggle)
 * มีการจำสถานะไว้ในเครื่องผู้ใช้ด้วย LocalStorage (ปิดเปิดใหม่สียังเหมือนเดิม)
 */
function initDarkMode() {
    const themeBtn = document.querySelector('.theme-toggle-btn');
    if (!themeBtn) return;

    // 1. ตรวจสอบว่าผู้ใช้เคยเลือกธีมอะไรไว้ไหม
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // 2. ดักจับเหตุการณ์เมื่อคลิกปุ่มสลับธีม
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        // บันทึกค่าลง LocalStorage
        let theme = 'light';
        if (document.body.classList.contains('dark-theme')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });
}

/**
 * 3. ระบบเลื่อนหน้าจอแบบนุ่มนวล (Smooth Scroll)
 * สำหรับลิงก์ภายในหน้าเดียวกัน (เช่น เมนูพวก About, Contact ที่กดแล้วเลื่อนลงไปหา)
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // ป้องกันการกระโดดหน้าจอแบบทันที
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
