// รอให้หน้าเว็บโหลดโครงสร้าง HTML เสร็จทั้งหมดก่อนเริ่มทำงาน
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. เอฟเฟกต์พิมพ์ตัวอักษรวิ่งอัตโนมัติ (Typing Effect)
    // ==========================================
    const heroParagraph = document.querySelector('.hero-content p');
    if (heroParagraph) {
        const textToType = "ยินดีต้อนรับสู่พื้นที่แชร์ประสบการณ์และผลงานการส่งความอร่อย";
        heroParagraph.textContent = ""; // ล้างข้อความเดิมใน HTML ออกก่อน
        let index = 0;

        function typeWriter() {
            if (index < textToType.length) {
                heroParagraph.textContent += textToType.charAt(index);
                index++;
                setTimeout(typeWriter, 50); // ความเร็วในการพิมพ์ (50 มิลลิวินาทีต่อตัวอักษร)
            }
        }
        // เริ่มทำงานหลังจากหน้าเว็บโหลดเสร็จ 500 มิลลิวินาที
        setTimeout(typeWriter, 500); 
    }

    // ==========================================
    // 2. เปลี่ยนสไตล์ของแถบเมนูเมื่อเลื่อนหน้าจอ (Navbar Scroll Effect)
    // ==========================================
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        // ถ้าเลื่อนหน้าจอลงมามากกว่า 50 พิกเซล ให้เพิ่มเงาและปรับความโปร่งใส
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            header.style.transition = 'all 0.3s ease';
        } else {
            header.style.backgroundColor = '#ffffff';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // ==========================================
    // 3. ปรับให้เลื่อนหน้าจอแบบนุ่มนวลเมื่อคลิกเมนู (Smooth Scroll)
    // ==========================================
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // ป้องกันการกระโดดไปยังเป้าหมายทันที
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // คำนวณความสูงของเมนูเพื่อไม่ให้บังเนื้อหาตอนเลื่อนไปถึง
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth' // เลื่อนแบบนุ่มนวล
                });
            }
        });
    });
});
