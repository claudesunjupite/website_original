/**
 * SUN JUPITER CO.,LTD. — Language Switcher
 * Supports: English (en) | ภาษาไทย (th)
 *
 * Engine notes:
 *  - Dictionary key  = normalized English textContent
 *  - Dictionary value = Thai plain text OR HTML string (to preserve inner styling)
 *  - DIV elements are only translated when they are "leaf" divs (no element children)
 *  - For A/BUTTON elements that contain Material Icons, only text nodes are updated
 *    so the icon span is preserved
 */

(function () {
  'use strict';

  // ─── TRANSLATION DICTIONARY ──────────────────────────────────────────────────
  const DICT = {

    /* ── NAVIGATION ────────────────────────────────────────────── */
    'Home':           'หน้าแรก',
    'About Us':       'เกี่ยวกับเรา',
    'Product':        'ผลิตภัณฑ์',
    'Site Reference': 'ผลงานอ้างอิง',
    'Contact Us':     'ติดต่อเรา',
    'Downloads':      'ดาวน์โหลด',

    /* ── FOOTER ────────────────────────────────────────────────── */
    'Providing reliable heavy lifting products and services with expert technical precision.':
      'ให้บริการผลิตภัณฑ์ยกของหนักและบริการที่เชื่อถือได้ด้วยความแม่นยำทางเทคนิคโดยผู้เชี่ยวชาญ',
    'Privacy Policy':   'นโยบายความเป็นส่วนตัว',
    'Terms of Service': 'เงื่อนไขการให้บริการ',
    'Safety Manuals':   'คู่มือความปลอดภัย',
    'SUN JUPITER CO.,LTD.': 'บริษัท ซันจูปิเตอร์ จำกัด',
    '© 2024 SUN JUPITER CO.,LTD. All Rights Reserved.':
      '© 2567 บริษัท ซัน จูปิเตอร์ จำกัด สงวนลิขสิทธิ์',

    /* ── HOME PAGE ─────────────────────────────────────────────── */
    // h1 — preserve yellow italic on translated word
    'We are reliable for the best products and services by expert technicians.':
      'เรามุ่งมั่นส่งมอบ<span class="text-yellow-500 italic">ผลิตภัณฑ์และบริการ</span>ที่ดีที่สุดโดยช่างผู้เชี่ยวชาญ',
    'Global leaders in high-capacity lifting and specialized structural solutions. Delivering integrity and precision to move the future of heavy industry.':
      'ผู้นำระดับโลกด้านการยกของหนักและโซลูชันโครงสร้างพิเศษ ขับเคลื่อนอนาคตของอุตสาหกรรมหนักด้วยความซื่อสัตย์และความแม่นยำ',
    'View Products':          'ดูสินค้า',
    'Precision Engineering':  'วิศวกรรมความแม่นยำ',
    'Heavy Lifting':          'การยกของหนัก',
    'Maximum stability for high-altitude lifting in extreme terrains with our advanced crawler fleet.':
      'ความมั่นคงสูงสุดสำหรับการยกในที่สูงบนพื้นที่ทุรกันดารด้วยกองเครนตีนตะขาบขั้นสูงของเรา',
    'Specialized Transport':  'การขนส่งพิเศษ',
    'Technical Planning':     'การวางแผนทางเทคนิค',
    'CAD-based rigging and lift plan simulations by certified experts.':
      'การจำลองแผนการยกและการติดตั้งด้วย CAD โดยผู้เชี่ยวชาญที่ได้รับการรับรอง',
    'Expert Maintenance':     'การบำรุงรักษาโดยผู้เชี่ยวชาญ',
    'Proactive servicing to ensure zero-downtime performance on every site.':
      'การบริการเชิงรุกเพื่อให้มั่นใจว่าทุกไซต์งานไม่มีเวลาหยุดทำงาน',
    'Precision in Every Move': 'ความแม่นยำในทุกการเคลื่อนไหว',
    'BUILT FOR EVERY PROJECT': 'สร้างมาเพื่อทุกโครงการ',

    /* ── ABOUT US PAGE ─────────────────────────────────────────── */
    'Engineered Excellence': 'ความเป็นเลิศด้านวิศวกรรม',

    // Full h1 text (THE TITAN <br/> <span>OF INDUSTRY.</span>)
    'THE TITAN OF INDUSTRY.':
      'ยักษ์ใหญ่ <br/><span class="text-transparent" style="-webkit-text-stroke: 2px #2c2f30">แห่งอุตสาหกรรม</span>',

    'Sun Jupiter Co.,Ltd. Office located in Bangkok, is the Leading supplier with the most specialist in Rack & Pinion driven equipment for vertical transportation in Thailand for over 15 years.':
      'บริษัท ซัน จูปิเตอร์ จำกัด สำนักงานตั้งอยู่ในกรุงเทพฯ เป็นผู้จำหน่ายชั้นนำที่มีความเชี่ยวชาญสูงสุดด้านอุปกรณ์ขับเคลื่อนแบบ Rack & Pinion สำหรับการขนส่งในแนวดิ่งในประเทศไทยมากกว่า 15 ปี',
    'Est. 1998':  'ก่อตั้ง พ.ศ. 2541',
    'Evolution':  'วิวัฒนาการ',

    // h2 — preserve yellow on "SUN JUPITER"
    'The Transition to SUN JUPITER':
      'การเปลี่ยนผ่านสู่ <span class="text-primary whitespace-nowrap">SUN JUPITER</span>',

    'In the past we used the company\'s name "15 Construction Supply Co.,Ltd." As it the same company with Sun Jupiter Co.,Ltd. But enhancing more quality and reliability. We are providing and marking passenger and material hoists for the construction industry including renting service as well as any other services with hoists product such as installation, demolition and height extension.':
      'ในอดีตเราใช้ชื่อบริษัทว่า "บริษัท 15 คอนสตรัคชั่น ซัพพลาย จำกัด" ซึ่งเป็นบริษัทเดียวกันกับซัน จูปิเตอร์ จำกัด แต่ได้พัฒนาคุณภาพและความน่าเชื่อถือยิ่งขึ้น เราให้บริการและจัดจำหน่ายลิฟต์โดยสารและลิฟต์วัสดุสำหรับอุตสาหกรรมก่อสร้าง รวมถึงบริการให้เช่าและบริการอื่นๆ เช่น ติดตั้ง รื้อถอน และต่อความสูง',

    'Precision Driven': 'ขับเคลื่อนด้วยความแม่นยำ',
    'Safety Verified':  'รับรองความปลอดภัย',
    'Market Share':     'ส่วนแบ่งตลาด',
    'Now the market sharing of ”CREDO” in Thailand is over 90%. Most of the customers use our product under our best after-sales services.':
      'ปัจจุบันส่วนแบ่งการตลาดของ ”CREDO” ในประเทศไทยสูงกว่า 90% ลูกค้าส่วนใหญ่เลือกใช้ผลิตภัณฑ์ของเราภายใต้การบริการหลังการขายที่ดีเยี่ยม',
    'CREDO™ TRADEMARK': 'เครื่องหมายการค้า CREDO™',
    'All our products are copyright with the trademark ”CREDO” which means credibility. Our philosophy is to provide the best quality, standardized products as well as custom-build specialist equipment based on the Rack & Pinion technology. Registered trademarks include CREDO, ZENIT, GJJ, CJJ.':
      'ผลิตภัณฑ์ทั้งหมดของเรามีลิขสิทธิ์ภายใต้เครื่องหมายการค้า ”CREDO” ซึ่งมีความหมายว่าความน่าเชื่อถือ ปรัชญาของเราคือการส่งมอบผลิตภัณฑ์ที่มีคุณภาพดีที่สุดและได้มาตรฐาน รวมถึงอุปกรณ์พิเศษที่ผลิตตามความต้องการเฉพาะ (custom-build) โดยใช้เทคโนโลยีแร็คแอนด์พิเนียน (Rack & Pinion) เครื่องหมายการค้าที่จดทะเบียน ได้แก่ CREDO, ZENIT, GJJ และ CJJ',

    // h2 preserving teal color
    'WORLD CLASS PRODUCTS.':
      'ผลิตภัณฑ์<br/><span class="text-tertiary">ระดับโลก</span>',

    'We are grateful to present our latest and best model of “CREDO”, Model SC200/200TD, 3 motor top drive, Tie-in II. This new model of safety device and load cell adding for security is up to our utmost confidence to serve you efficiently with promising after-sales services.':
      'เรามีความยินดีเป็นอย่างยิ่งที่จะนำเสนอผลิตภัณฑ์รุ่นล่าสุดและดีที่สุดของ “CREDO” คือรุ่น SC200/200TD แบบมอเตอร์ขับเคลื่อนด้านบน 3 ตัว (3 motor top drive) และ Tie-in II โดยรุ่นใหม่นี้ได้เพิ่มอุปกรณ์ความปลอดภัยและ Load Cell เพื่อความปลอดภัยสูงสุด ซึ่งเรามีความมั่นใจอย่างเต็มเปี่ยมที่จะให้บริการคุณได้อย่างมีประสิทธิภาพพร้อมการบริการหลังการขายที่เชื่อถือได้',
    'Our SC type building hoist have payload capacity as much as 10000 kg, lifting speed up to 96m/min, and erection height up to 450m. We also have specialized hoists (curve, slope, twin mast) for construction of special buildings, industry, mining, and oil chemical engineering.':
      'ลิฟต์ก่อสร้างแบบ SC ของเรามีความสามารถรับน้ำหนักสูงถึง 10,000 กก. ความเร็วยกถึง 96 ม./นาที และความสูงติดตั้งถึง 450 ม. นอกจากนี้ยังมีลิฟต์พิเศษ (โค้ง, ลาดเอียง, เสาคู่) สำหรับการก่อสร้างอาคารพิเศษ อุตสาหกรรม เหมืองแร่ และวิศวกรรมเคมีน้ำมัน',
    'Bangkok HQ':    'สำนักงานใหญ่กรุงเทพฯ',
    'SAFETY FIRST.': 'ความปลอดภัยสำคัญที่สุด',

    // Product page — OUR CATALOG heading (preserves span styling)
    'OUR CATALOG.':
      'แคตตาล็อก<br/><span class="text-primary">ของเรา<span class="text-on-surface">.</span></span>',

    // h2 preserving line break
    'THAI EXCELLENCE. GLOBAL STANDARDS.':
      'ความเป็นเลิศของไทย<br/>มาตรฐานระดับโลก',

    'Certified Quality': 'คุณภาพที่ได้รับการรับรอง',
    'Max Height':        'ความสูงสูงสุด',
    'Max Payload':       'น้ำหนักบรรทุกสูงสุด',

    /* ── CONSTRUCTION HOIST MODAL ──────────────────────────────── */
    'Technical Specifications':          'ข้อมูลจำเพาะทางเทคนิค',
    'Remark:':                           'หมายเหตุ:',
    'Single cage':                       'กรงเดี่ยว',
    'Twin cage':                         'กรงคู่',
    'with counter weight':               'มีน้ำหนักถ่วง',
    'no counter weight':                 'ไม่มีน้ำหนักถ่วง',
    'With counter weight':               'มีน้ำหนักถ่วง',
    'No counter weight':                 'ไม่มีน้ำหนักถ่วง',
    'Model':                             'รุ่น',
    'Capacity(kg)':                      'น้ำหนักบรรทุก (กก.)',
    'Lifting speed(m/min)':              'ความเร็วยก (ม./นาที)',
    'Motor power(kw)':                   'กำลังมอเตอร์ (กว.)',
    'Counter weight(kg)':                'น้ำหนักถ่วง (กก.)',
    'Classification':                    'ประเภท',
    'Capacity/per cage(kg)':             'น้ำหนักบรรทุก/กรง (กก.)',
    'Motor power/per cage(kw)':          'กำลังมอเตอร์/กรง (กว.)',
    'Counter weight/per cage(kg)':       'น้ำหนักถ่วง/กรง (กก.)',
    'Technical data of general hoist':             'ข้อมูลทางเทคนิคของลิฟต์ก่อสร้างทั่วไป',
    'Technical Data of Frequency Convertible Hoist': 'ข้อมูลทางเทคนิคของลิฟต์ปรับความถี่',
    'Single & Twin cage standard models.':          'รุ่นมาตรฐานกรงเดี่ยวและกรงคู่',

    /* ── PRODUCT PAGE ──────────────────────────────────────────── */
    'Heavy Duty Industrial Series': 'ชุดอุตสาหกรรมงานหนัก',
    'Engineered for vertical precision. The industry standard for high-rise construction featuring our signature 3-motor top drive system and Tie-in II technology.':
      'ออกแบบเพื่อความแม่นยำในแนวดิ่ง มาตรฐานอุตสาหกรรมสำหรับการก่อสร้างอาคารสูงด้วยระบบขับเคลื่อนด้านบน 3 มอเตอร์ และเทคโนโลยี Tie-in II',
    'REQUEST QUOTE':  'ขอใบเสนอราคา',
    'DOWNLOAD SPECS': 'ดาวน์โหลดข้อมูลจำเพาะ',

    'Construction Hoists': 'ลิฟต์ก่อสร้าง',
    'Tower Cranes':     'เครนทาวเวอร์',
    'Concrete Machinery': 'เครื่องจักรคอนกรีต',
    'QLCM Series Tower Crane': 'เครนทาวเวอร์ซีรีส์ QLCM',
    'Tower Crane Spare Parts': 'อะไหล่เครนทาวเวอร์',
    'Hoist Spare Parts': 'อะไหล่ลิฟต์ก่อสร้าง',
    'Concrete Station Pump': 'ปั๊มคอนกรีตสเตชั่น',
    'Concrete Placing Boom': 'บูมวางคอนกรีต',
    'Concrete Spare Parts':  'อะไหล่คอนกรีต',

    'MAX PAYLOAD':    'น้ำหนักบรรทุกสูงสุด',
    'Top Speed':      'ความเร็วสูงสุด',
    'Tie-in II System': 'ระบบ Tie-in II',
    'Proprietary anchoring technology ensuring zero-vibration stability at extreme heights.':
      'เทคโนโลยียึดเกาะเฉพาะของเราที่ให้ความมั่นคงไร้การสั่นสะเทือนที่ความสูงสุดขีด',

    // h2 — preserve primary color on "ENGINEERING"
    'SPECIALIZED ENGINEERING':
      'วิศวกรรม<br/><span class="text-primary">เฉพาะทาง</span>',

    'Curve & Slope Adaptability': 'ปรับตัวได้กับเส้นโค้งและความลาดเอียง',
    'Custom-engineered track systems for non-linear architectural structures, maintaining consistent speed and safety on variable inclines.':
      'ระบบรางที่ออกแบบพิเศษสำหรับโครงสร้างสถาปัตยกรรมที่ไม่เป็นเส้นตรง รักษาความเร็วและความปลอดภัยบนความลาดเอียงที่แตกต่างกัน',
    '3 Motor Top Drive': 'ระบบขับเคลื่อนด้านบน 3 มอเตอร์',
    'Redundant power delivery system providing smooth acceleration and heavy-load lifting with industry-leading efficiency.':
      'ระบบส่งกำลังสำรองที่ให้การเร่งความเร็วที่ราบรื่นและการยกน้ำหนักมากด้วยประสิทธิภาพชั้นนำของอุตสาหกรรม',
    'Modular Platforms': 'แพลตฟอร์มโมดูลาร์',
    'Interchangeable construction platforms designed for rapid deployment and maximum site safety compliance.':
      'แพลตฟอร์มก่อสร้างที่เปลี่ยนสลับได้ ออกแบบสำหรับการติดตั้งรวดเร็วและการปฏิบัติตามมาตรฐานความปลอดภัยไซต์งานสูงสุด',

    'TECHNICAL PERFORMANCE': 'สมรรถนะทางเทคนิค',
    'Detailed Specs': 'ข้อมูลจำเพาะโดยละเอียด',
    'Description':    'คำอธิบาย',
    'Unit':           'หน่วย',
    'Specification':  'ข้อมูลจำเพาะ',
    'Drive System':   'ระบบขับเคลื่อน',
    'Rated Payload':  'น้ำหนักบรรทุกที่กำหนด',
    'Lifting Speed':  'ความเร็วยก',
    'Cage Dimension': 'ขนาดตะกร้า',
    'Power Supply':   'แหล่งจ่ายไฟ',
    'Model Code':     'รหัสรุ่น',

    'SAFETY CERTIFIED': 'ผ่านการรับรองความปลอดภัย',
    'Our products undergo rigorous testing to meet global safety and quality standards.':
      'ผลิตภัณฑ์ของเราผ่านการทดสอบอย่างเข้มงวดเพื่อให้ตรงตามมาตรฐานความปลอดภัยและคุณภาพระดับโลก',

    /* ── SITE REFERENCE PAGE ───────────────────────────────────── */
    'Global Site Archive': 'คลังข้อมูลไซต์ทั่วโลก',

    // Hero h1 with inner span styling preserved
    'Precision Engineering Meets Monumental Scale.':
      'วิศวกรรมความแม่นยำ <br/> พบกับ <span class="text-primary italic">ขนาดอัน</span>ยิ่งใหญ่',

    'Explore the structural backbone of modern civilization. From high-altitude skyscraper cores to expansive bridge spans, SUN JUPITER heavy-lift solutions define the horizon of possibility.':
      'สำรวจโครงสร้างพื้นฐานของอารยธรรมสมัยใหม่ ตั้งแต่แกนกลางตึกระฟ้าความสูงจรดฟ้าจนถึงสะพานขนาดใหญ่ โซลูชันการยกหนักของ SUN JUPITER กำหนดขอบเขตความเป็นไปได้',
    'The Al-Burj Pinnacle': 'เดอะ อัล-บูร์จ พินนาเคิล',
    'Core lifting and panel installation for the world\'s newest landmark.':
      'การยกแกนและติดตั้งแผ่นสำหรับสถาปัตยกรรมล่าสุดของโลก',
    'Solution Used': 'โซลูชันที่ใช้',
    'Verrazano North Expansion': 'การขยายเวอร์ราซาโนเหนือ',
    'Deep-water foundation placement and heavy suspension cable management.':
      'การวางฐานรากใต้น้ำลึกและการจัดการสายแขวนหนัก',
    'Nord-Port Logistics Center': 'ศูนย์โลจิสติกส์นอร์ด-พอร์ต',
    'Autonomous gantry system integration for high-density shipping terminals.':
      'การบูรณาการระบบกันทรีอัตโนมัติสำหรับท่าเรือขนส่งความหนาแน่นสูง',
    'Wind-Triton Offshore Field': 'แหล่งพลังงานวินด์-ไทรทันนอกชายฝั่ง',
    'Installation of 200m turbines in extreme maritime conditions requiring millimetric precision.':
      'การติดตั้งกังหันลมขนาด 200 ม. ในสภาวะทางทะเลที่รุนแรงซึ่งต้องการความแม่นยำระดับมิลลิเมตร',
    'PROJECT SPECS': 'ข้อมูลโครงการ',
    'Automated Gantry':    'กันทรีอัตโนมัติ',
    'Smart Load Balancing': 'การสมดุลน้ำหนักอัจฉริยะ',

    // h2 with primary color on "Numbers"
    'Global Impact in Numbers':
      'ผลกระทบระดับโลก<br/>ใน<span class="text-primary">ตัวเลข</span>',

    'Our machinery is present in over 85% of current "Super-Tall" skyscraper construction sites globally.':
      'เครื่องจักรของเราประจำอยู่ในกว่า 85% ของไซต์ก่อสร้างตึกระฟ้าระดับ "ซุปเปอร์ทอล" ทั่วโลกในปัจจุบัน',
    'Active Major Sites':  'ไซต์งานหลักที่ดำเนินการ',
    'Total Lift Capacity': 'ความสามารถยกรวม',
    'Countries Served':    'ประเทศที่ให้บริการ',
    'Critical Failures':   'ความล้มเหลวร้ายแรง',
    'Need Monumental Strength?': 'ต้องการพลังอันยิ่งใหญ่?',

    /* ── CONTACT US PAGE ───────────────────────────────────────── */
    // Hero h1 with italic span
    'DIRECT LIAISON':
      'ติดต่อ<br/><span class="text-primary italic">โดยตรง</span>',

    'Direct Line':   'สายตรง',
    'Mon-Sat 8:00 AM - 5:00 PM': 'จ.-ส. 8:00 - 17:00 น.',
    'Response Desk': 'ฝ่ายบริการลูกค้า',
    'Response within 24 hours': 'ตอบกลับภายใน 24 ชั่วโมง',
    'Global HQ':     'สำนักงานใหญ่',
    'Sun Jupiter Co., Ltd. 55 Chatuchot Road, Ao Ngoen, Sai Mai, Bangkok 10220':
      '<strong>บริษัท ซัน จูปิเตอร์ จำกัด</strong><br/>55 ถนนจตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพฯ 10220',

    /* ── DOWNLOADS PAGE ────────────────────────────────────────── */
    'Access our comprehensive library of technical documentation, safety certifications, and corporate resources. Precision and Safety in Every Lift.':
      'เข้าถึงคลังเอกสารทางเทคนิค ใบรับรองความปลอดภัย และทรัพยากรองค์กรที่ครบถ้วนของเรา ความแม่นยำและความปลอดภัยในทุกการยก',
    'Support Documentation': 'เอกสารสนับสนุน',
    'The complete operational framework for the X9 heavy-lift series. Includes maintenance schedules and load-bearing stress diagrams.':
      'กรอบการปฏิบัติงานที่ครบถ้วนสำหรับชุด X9 ยกหนัก รวมถึงตารางการบำรุงรักษาและแผนภาพความเค้นรับน้ำหนัก',
    'Download PDF (48.5 MB)': 'ดาวน์โหลด PDF (48.5 MB)',
    'Get Copy':    'รับสำเนา',
    'Download':    'ดาวน์โหลด',
    '2024 SITE BROCHURE': 'โบรชัวร์ไซต์งาน 2567',
    'Daily Maintenance Log Template': 'แบบบันทึกการบำรุงรักษาประจำวัน',
    'MANUALS':     'คู่มือ',

    /* ── CONSTRUCTION HOISTS PAGE ──────────────────────────────── */
    'CONSTRUCTION HOISTS': 'ลิฟต์ก่อสร้าง',
    'Rack & Pinion Driven': 'ขับเคลื่อนด้วย Rack & Pinion',
    'Vertical Precision':   'ความแม่นยำในแนวดิ่ง',
    'Payload Capacity':     'ความสามารถรับน้ำหนัก',
    'Installation':  'การติดตั้ง',
    'Dismantling':   'การรื้อถอน',
    'Height Extension': 'การต่อความสูง',
    'Rental Service':   'บริการให้เช่า',
    'After-Sales Service': 'บริการหลังการขาย',

    /* ── TOWER CRANES PAGE ─────────────────────────────────────── */
    'TOWER CRANES':  'เครนทาวเวอร์',
    'Luffing Jib':   'แขนแบบ Luffing',
    'Flat Top':      'หัวแบน',
    'Self-Erecting': 'ติดตั้งเองได้',
    'Jib Length':    'ความยาวแขน',
    'Hook Height':   'ความสูงตะขอ',
    'Tip Load':      'โหลดปลายแขน',
    'Max Load':      'โหลดสูงสุด',

    /* ── CONCRETE MACHINERY PAGE ───────────────────────────────── */
    'CONCRETE MACHINERY': 'เครื่องจักรคอนกรีต',
    'Concrete Pump':  'ปั๊มคอนกรีต',
    'Mixing Plant':   'โรงผสมคอนกรีต',
    'Placing Boom':   'บูมวางคอนกรีต',
    'Output':         'กำลังผลิต',
    'Pressure':       'ความดัน',
    'Aggregate Size': 'ขนาดมวลรวม',

    /* ── SHARED / COMMON ───────────────────────────────────────── */
    'Learn More':      'เรียนรู้เพิ่มเติม',
    'View Details':    'ดูรายละเอียด',
    'Get a Quote':     'ขอใบเสนอราคา',
    'Download Brochure': 'ดาวน์โหลดโบรชัวร์',
    'Contact Us Now':  'ติดต่อเราเดี๋ยวนี้',
    'Request a Quote': 'ขอใบเสนอราคา',
    'Send Message':    'ส่งข้อความ',
    'Submit':          'ส่ง',
    'Name':            'ชื่อ',
    'Email':           'อีเมล',
    'Phone':           'โทรศัพท์',
    'Message':         'ข้อความ',
    'Specifications':  'ข้อมูลจำเพาะ',
    'Features':        'คุณสมบัติ',
    'Applications':    'การใช้งาน',
    'Technical Data':  'ข้อมูลทางเทคนิค',
    'Safety':          'ความปลอดภัย',
    'Quality':         'คุณภาพ',
    'Service':         'บริการ',
    'Products':        'ผลิตภัณฑ์',
    'News':            'ข่าวสาร',
    'Gallery':         'แกลเลอรี',
    'Loading':         'กำลังโหลด',
  };

  // ─── ENGINE ───────────────────────────────────────────────────────────────────

  /** Normalize whitespace for dictionary lookup */
  function norm(str) {
    return str
      .replace(/[\u2018\u2019\u201A\u201B\u2032\u2035]/g, "'") // curly single quotes → '
      .replace(/[\u201C\u201D\u201E\u201F\u2033\u2036]/g, '"') // curly double quotes → "
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Get translatable text: strip Material Icons text so icon names don't
   * pollute the textContent match (e.g. "View Details arrow_forward" → "View Details")
   */
  function getMatchText(el) {
    const clone = el.cloneNode(true);
    clone.querySelectorAll('.material-symbols-outlined, .material-symbols').forEach(s => s.remove());
    return norm(clone.textContent);
  }

  /**
   * Translate an element:
   *  - For elements that contain Material Icons, only replace direct text nodes
   *    so the icon spans are preserved.
   *  - For all other elements, replace innerHTML (allows HTML-string translations).
   */
  function translateEl(el, thTxt) {
    if (!el.hasAttribute('data-sj-en')) {
      el.setAttribute('data-sj-en', el.innerHTML);
    }

    const hasIcon = el.querySelector &&
                    el.querySelector('.material-symbols-outlined, .material-symbols');

    if (hasIcon) {
      // Only replace the first non-empty direct text node; keep icon spans intact
      for (const child of el.childNodes) {
        if (child.nodeType === Node.TEXT_NODE && child.textContent.trim()) {
          child.textContent = thTxt + ' ';
          break;
        }
      }
    } else {
      el.innerHTML = thTxt;
    }
  }

  /**
   * Main translation function.
   * Uses parent-before-child document order; once a parent is translated its
   * children are skipped (via the `translated` Set).
   *
   * KEY BUG FIX: DIV elements are only translated when they are "leaf" divs
   * (no element children). This prevents container divs from having their
   * innerHTML replaced and stripping font-size classes from their children.
   */
  function applyTranslations(lang) {
    if (!lang) lang = 'en';
    const root = document.body;
    if (!root) return;

    // ── RESTORE ENGLISH ──────────────────────────────────────────────────────
    if (lang === 'en') {
      // Restore innermost first so nested restorations don't conflict
      Array.from(root.querySelectorAll('[data-sj-en]'))
        .reverse()
        .forEach(el => {
          el.innerHTML = el.dataset.sjEn;
          el.removeAttribute('data-sj-en');
        });
      updateNavLabel('en');
      localStorage.setItem('sjLang', 'en');
      return;
    }

    // ── TRANSLATE TO THAI ─────────────────────────────────────────────────────
    const SKIP_TAGS = new Set([
      'SCRIPT','STYLE','NOSCRIPT','INPUT','TEXTAREA',
      'SELECT','IFRAME','SVG','META','LINK','IMG','BR','HR',
    ]);

    const candidates = root.querySelectorAll(
      'h1, h2, h3, h4, h5, h6, p, span, a, button, li, td, th, label, div, small, strong, em, b, i'
    );

    // Build a normalized DICT (normalize keys once so curly quotes in source match straight quotes from HTML)
    const normDict = {};
    for (const [k, v] of Object.entries(DICT)) { normDict[norm(k)] = v; }

    const translated = new Set();

    for (const el of candidates) {
      if (SKIP_TAGS.has(el.tagName)) continue;

      // ── KEY FIX: skip non-leaf DIVs ───────────────────────────────────────
      // A div that contains element children should NOT be translated as a unit;
      // its children (h1, p, etc.) carry the font-size classes and will be
      // translated individually.  Without this check a div whose textContent
      // matches a key would replace its rich innerHTML with plain Thai text,
      // stripping all font-size classes and making text appear tiny.
      if (el.tagName === 'DIV' && el.children.length > 0) continue;

      // Skip if an ancestor was already translated
      let ancestor = el.parentElement;
      let skipEl = false;
      while (ancestor && ancestor !== root) {
        if (translated.has(ancestor)) { skipEl = true; break; }
        ancestor = ancestor.parentElement;
      }
      if (skipEl) continue;

      // Use icon-stripped text for matching
      const text = getMatchText(el);
      if (!text) continue;

      const thTxt = normDict[text];
      if (thTxt) {
        translateEl(el, thTxt);
        translated.add(el);
      }
    }

    updateNavLabel('th');
    localStorage.setItem('sjLang', 'th');
  }

  /** Update the EN / TH label in the navbar language toggle button */
  function updateNavLabel(lang) {
    document.querySelectorAll('nav button').forEach(btn => {
      const has = btn.textContent.includes('EN') || btn.textContent.includes('TH');
      if (!has) return;
      btn.childNodes.forEach(node => {
        if (node.nodeType !== Node.TEXT_NODE) return;
        const t = node.textContent.trim();
        if (t === 'EN' || t === 'TH') {
          node.textContent = lang === 'th' ? '\nTH\n' : '\nEN\n';
        }
      });
    });

    // Highlight active language in dropdown
    document.querySelectorAll('nav [data-lang]').forEach(link => {
      const active = link.dataset.lang === lang;
      link.classList.toggle('text-yellow-600', active);
      link.classList.toggle('font-extrabold', active);
      link.classList.toggle('text-neutral-700', !active);
    });
  }

  // ─── PUBLIC API ───────────────────────────────────────────────────────────────

  /** Called by the language dropdown buttons */
  window.setLanguage = function (lang) {
    window.sjLang = lang;
    applyTranslations(lang);
  };

  /** Called by the SPA router after each page swap */
  window.applyTranslations = function () {
    applyTranslations(window.sjLang || localStorage.getItem('sjLang') || 'en');
  };

  /** Auto-init on DOMContentLoaded */
  function init() {
    const saved = localStorage.getItem('sjLang') || 'en';
    window.sjLang = saved;
    if (saved === 'th') applyTranslations('th');
    else updateNavLabel('en');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
