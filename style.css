/* ==========================================
   1. ส่วนตั้งค่าพื้นฐาน (Reset & Base Styles)
   ========================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, 'Helvetica Neue', Arial, sans-serif;
    scroll-behavior: smooth; /* เลื่อนหน้าจอแบบนุ่มนวล */
}

body {
    background-color: #f8f9fa;
    color: #333;
    line-height: 1.6;
}

/* ==========================================
   2. แถบเมนู (Header & Navigation)
   ========================================== */
header {
    background-color: #ffffff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
}

.logo {
    font-size: 24px;
    font-weight: bold;
    color: #f97316; /* สีส้ม (ไรเดอร์) */
    letter-spacing: 1px;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 20px;
}

nav ul li a {
    text-decoration: none;
    color: #555;
    font-weight: 600;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #f97316;
}

/* ==========================================
   3. ส่วนแนะนำตัว (Hero Section)
   ========================================== */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(135deg, #fffbeb 0%, #ffffff 100%); /* เปลี่ยนเป็นโทนส้มอ่อน */
    padding: 0 20px;
    padding-top: 80px;
}

.hero-content h1 {
    font-size: 48px;
    color: #111827;
    margin-bottom: 10px;
}

.hero-content h1 span {
    color: #f97316;
}

.hero-content p {
    font-size: 20px;
    color: #4b5563;
    margin-bottom: 30px;
    height: 30px; /* ล็อกความสูงไว้รองรับ Typing Effect จาก JavaScript */
}

.btn {
    display: inline-block;
    background-color: #f97316;
    color: white;
    padding: 12px 28px;
    text-decoration: none;
    border-radius: 30px;
    font-weight: bold;
    box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);
    transition: all 0.3s ease;
}

.btn:hover {
    background-color: #c2410c;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(249, 115, 22, 0.6);
}

/* ==========================================
   4. โครงสร้างเนื้อหาหลัก (Layout & Sections)
   ========================================== */
.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 20px;
}

section {
    padding: 80px 0;
    border-bottom: 1px solid #e5e7eb;
}

section h2 {
    font-size: 32px;
    text-align: center;
    margin-bottom: 50px;
    color: #1f2937;
    position: relative;
}

section h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: #f97316;
    margin: 12px auto 0;
    border-radius: 2px;
}

/* เกี่ยวกับฉัน (About) */
.about-content {
    background: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
    border: 1px solid #f3f4f6;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.about-text p {
    font-size: 18px;
    color: #4b5563;
    line-height: 1.8;
}

/* ทักษะความสามารถ (Skills) */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 25px;
}

.skill-card {
    background: white;
    padding: 30px 20px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border: 1px solid #e5e7eb;
    transition: transform 0.3s ease;
}

.skill-card:hover {
    transform: translateY(-5px);
}

.skill-card h3 {
    color: #111827;
    margin-bottom: 10px;
    font-size: 20px;
}

.skill-card p {
    color: #6b7280;
    font-size: 15px;
}

/* แฟ้มผลงาน (Portfolio) */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
}

.portfolio-item {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    border: 1px solid #e5e7eb;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.portfolio-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.portfolio-img {
    width: 100%;
    height: 220px;
    background-color: #fffbeb;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f97316;
    font-weight: 600;
}

.portfolio-info {
    padding: 25px;
}

.portfolio-info h3 {
    color: #111827;
    margin-bottom: 10px;
    font-size: 22px;
}

.portfolio-info p {
    color: #6b7280;
    font-size: 15px;
}

/* ช่องทางติดต่อ (Contact) */
.contact-info {
    background: white;
    max-width: 600px;
    margin: 0 auto;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border: 1px solid #e5e7eb;
    text-align: center;
}

.contact-info p {
    font-size: 18px;
    color: #4b5563;
    margin-bottom: 20px;
}

.contact-info p:last-child {
    margin-bottom: 20px;
}

.platform-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
}

.platform-icons a img {
    height: 40px; /* ปรับขนาดไอคอน */
    transition: transform 0.2s ease;
}

.platform-icons a:hover img {
    transform: scale(1.1);
}

/* ==========================================
   5. ส่วนท้ายเว็บ (Footer)
   ========================================== */
footer {
    background-color: #1f2937;
    color: #9ca3af;
    text-align: center;
    padding: 25px;
    font-size: 14px;
}

/* ==========================================
   6. รองรับการแสดงผลบนมือถือ (Responsive Design)
   ========================================== */
@media (max-width: 768px) {
    .nav-container {
        flex-direction: column;
        gap: 15px;
        padding: 15px;
    }
    
    nav ul li {
        margin: 0 12px;
    }
    
    .hero-content h1 {
        font-size: 36px;
    }
    
    .hero-content p {
        font-size: 18px;
    }
    
    section {
        padding: 60px 0;
    }
}
