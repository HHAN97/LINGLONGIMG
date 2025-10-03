document.getElementById('year').textContent = new Date().getFullYear();

    const products = [
      {brand:"ANUA", name:"ANUA Birch Moisture Boosting Toner 250ml ANUA 白桦树保湿爽肤水 250ml", price:22, old:24, img:"LINGLONG/ANUA Birch Moisture Boosting Toner 250ml.webp"},
      {brand:"ANUA", name:"Anua Niacinamide10% + Txa 4% Dark Spot Removing Serum 30Ml ANUA 烟酰胺10% + TXA 4% 淡斑精华液 30ml", price:29, old:36, img:"LINGLONG/anua_niacinamide10_Txa4_dark_spot_removing_serum_30m.jpg"},
      {brand:"ANUA", name:"Anua Heart leaf Deep Makeup Removal 鱼腥草深层卸妆液", price:23, old:32, img:"LINGLONG/Anua Heart leaf Deep Makeup Removal.webp"},
      {brand:"ANUA", name:"ANUA Rice Bran Toner 250ml 大米爽肤水", price:25, old:26, img:"LINGLONG/ANUA Rice Bran Toner 250ml.webp"},
      {brand:"ARENCIA", name:"ARENCIA Blue Hyssop Cleansing Cream 120g ARENCIA 蓝香薄荷洁面霜 120g", price:23, old:25, img:"LINGLONG/ARENCIA Blue Hyssop.webp"},
      {brand:"ARENCIA", name:"ARENCIA Pink Rosehip Cleansing Balm 120g ARENCIA 粉玫瑰果卸妆膏 120g", price:29, old:35, img:"LINGLONG/ARENCIA Pink Rosehip Cleansing Balm 120g.webp"},
      {brand:"AVAJAR", name:"Avajar Perfect V Lifting Premium Mask (Red) – 5 Sheets Avajar 红色款V脸紧致提升面膜（升级版）5片装", price:25, old:30, img:"LINGLONG/Avajar Perfect V Lifting Premium Mask (Red) – 5 Sheets.jpg"},
      {brand:"AVAJAR", name:"Avajar Pdrn Collagen Hydrogel Mask 5Pc Avajar 多核苷酸胶原蛋白水凝胶面膜 5片装", price:28, old:40, img:"LINGLONG/Avajar Pdrn Collagen Hydrogel Mask 5Pc.webp"},
      {brand:"AVAJAR", name:"Avajar Rejuvenating Double V Lifiting Mask 5Pc Avajar 双重V脸抗老紧致面膜 5片装", price:25, old:34, img:"LINGLONG/Avajar Rejuvenating Double V Lifiting Mask 5Pc.jpg"},
      {brand:"AVAJAR", name:"Avajar Rejuvenating NECK WRINKLE CONTROL MASK 5Pc Avajar 抗老颈纹紧致面膜 5片装", price:22, old:36, img:"LINGLONG/Avajar Rejuvenating NECK WRINKLE CONTROL MASK 5Pc.jpg"},
      {brand:"AVAJAR", name:"Avajar Rose Tea Collagen Modeling Avajar 玫瑰茶胶原蛋白软膜粉", price:5, old:8, img:"LINGLONG/Avajar Rose Tea Collagen Modeling.jpg"},
      {brand:"AVAJAR", name:"Avajar Vita-C Collagen Modeling Pack Avajar 维他命C胶原蛋白软膜粉", price:5, old:8, img:"LINGLONG/Avajar Vita-C Collagen Modeling Pack.webp"},
      {brand:"AXIS-Y", name:"Axis-y Mugwort Pore Clarfying Wash off Pack - 50ml Axis-y 艾草净毛孔清洁泥膜 50ml", price:13, old:18, img:"LINGLONG/Axis-y Mugwort Pore Clarfying Wash off Pack - 50ml.jpg"},
      {brand:"AXIS-Y", name:"Axis-y Vegan Collagen Eye Serum Axis-y 纯素胶原蛋白眼部精华液", price:19, old:22, img:"LINGLONG/Axis-y Vegan Collagen Eye Serum.jpg"},
      {brand:"BANILA CO", name:"BANILA CO Clean It Zero Cleansing Balm (Purple) 100ml BANILA CO 卸妆零感洁颜膏（紫色修护款）100ml", price:23, old:26, img:"LINGLONG/BANILA CO Clean It Zero Cleansing Balm (Purple) 100ml.jpg"},
      {brand:"BANILA CO", name:"BANILA CO Banila Makeup Remover Cream (Green)100ml BANILA CO 卸妆零感洁颜霜（绿色镇静款）100ml", price:23, old:26, img:"LINGLONG/BANILA CO Banila Makeup Remover Cream (Green)100ml.jpg"},
      {brand:"BANILA CO", name:"BANILA CO Clean It Zero Cleansing Balm Original (Pink) 100ml BANILA CO 卸妆零感洁颜膏 原版（粉色款）100ml", price:23, old:26, img:"LINGLONG/BANILA CO Clean It Zero Cleansing Balm Original (Pink) 100ml.jpg"},
      {brand:"BIODANCE", name:"BIODANCE Bio-Collagen Real Deep Mask BIODANCE 生物胶原蛋白深层修护面膜", price:25, old:32, img:"LINGLONG/BIODANCE Bio-Collagen Real Deep Mask.jpg"},
      {brand:"BIODANCE", name:"Biodance Hydro Cera-Nol Real Deep Mask 4Pcs BIODANCE 水润神经酰胺深层修护面膜 4片装", price:25, old:27, img:"LINGLONG/BIODANCE Hydro Cera-Nol Real Deep Mask 4Pcs.jpg"},
      {brand:"CAREPLUS", name:"CAREPLUS Acne Patch – Cute Edition (48 Count) CAREPLUS 痘痘贴 – 可爱款（48片装）", price:8, old:11, img:"LINGLONG/CAREPLUS Acne Patch – Cute Edition (48 Count).jpg"},
      {brand:"CAREPLUS", name:"CAREPLUS Acne Patches – 102 Patches CAREPLUS 痘痘贴 – 102片装", price:10, old:13, img:"LINGLONG/CAREPLUS Acne Patches – 102 Patches.webp"},
      {brand:"CAREPLUS", name:"CAREPLUS Acne Patches – 96 Patches CAREPLUS 痘痘贴 – 96片装", price:10, old:13, img:"LINGLONG/CAREPLUS Acne Patches – 96 Patches.jpg"},
      {brand:"CAREPLUS", name:"CAREPLUS Centella Asiatica Microneedle Acne Patches – 12 Patches CAREPLUS 积雪草微针痘痘贴 – 12片装", price:13, old:15, img:"LINGLONG/CAREPLUS Centella Asiatica Microneedle Acne Patches – 12 Patches.jpg"},
      {brand:"CAREPLUS", name:"CAREPLUS Microneedle Salicylic Acid Acne Patches – 12 Patches CAREPLUS 水杨酸微针痘痘贴 – 12片装", price:13, old:16, img:"LINGLONG/CAREPLUS Microneedle Salicylic Acid Acne Patches – 12 Patches.jpg"},
      {brand:"CAREPLUS", name:"CARE‑PLUS Spot Cover Patch [Calming] – 96‑patch upgraded version CAREPLUS 镇静型隐形痘痘贴（升级版）– 96片装", price:10, old:13, img:"LINGLONG/CARE‑PLUS Spot Cover Patch [Calming] – 96‑patch upgraded version.png"},
      {brand:"CNP", name:"CNP Laboratory Anti-Blackhead 3+2 Kit CNP Laboratory 黑头护理3+2套装", price:10, old:20, img:"LINGLONG/CNP Laboratory Anti-Blackhead 3+2 Kit.webp"},
      {brand:"JOJOBA", name:"JOJOBA Orange Lip Essence Balm (13g) JOJOBA 橙子精华润唇膏（13g）", price:6, old:10, img:"LINGLONG/JOJOBA Orange Lip Essence Balm (13ml).jpg"},
      {brand:"KAHI", name:"KAHI Multi Balm (Hydrating Pink Stick) 9g KAHI 水润多效粉色棒 9g", price:27, old:42, img:"LINGLONG/KAHI Multi Balm (Hydrating Pink Stick) 9g.jpg"},
      {brand:"LANEIGE", name:"LANEIGE LIP SLEEPING MASK EX 20g BERRY 兰芝夜间修护唇膜EX 20g（莓果味）", price:19, old:30, img:"LINGLONG/LANEIGE LIP SLEEPING MASK EX 20g BERRY.jpg"},
      {brand:"MEDICUBE", name:"MEDICUBE AGE-R Serum 20ml MEDICUBE AGE-R 抗老精华液 20ml", price:26, old:30, img:"LINGLONG/MEDICUBE AGE-R Serum 20ml.jpg"},
      {brand:"MEDIPEEL", name:"MEDI-PEEL Red Lacto Collagen Wrapping Mask 70ml MEDI-PEEL 红色乳酸胶原蛋白裹敷面膜 70ml", price:15, old:30, img:"LINGLONG/MEDI-PEEL Red Lacto Collagen Wrapping Mask 70ml.webp"},
      {brand:"RAIP R3", name:"RAIP R3 Argan Hair Oil Essence 100ml – Grapefruit RAIP R3 摩洛哥坚果护发精油 100ml（葡萄柚香型）", price:15, old:30, img:"LINGLONG/RAIP R3 Argan Hair Oil Essence 100ml – Grapefruit.jpg"},
      {brand:"RAIP R3", name:"RAIP R3 Argan Hair Oil Essence 100ml – Lovely (Sweet Floral) RAIP R3 摩洛哥坚果护发精油 100ml（甜美花香型）", price:15, old:30, img:"LINGLONG/RAIP R3 Argan Hair Oil Essence 100ml – Lovely (Sweet Floral).jpg"},
      {brand:"RAIP R3", name:"RAIP R3 Argan Hair Oil Essence 100ml – Ocean Blue (Fresh Musk & Marine Scent) RAIP R3 摩洛哥坚果护发精油 100ml（海洋蓝香型）", price:15, old:30, img:"LINGLONG/RAIP R3 Argan Hair Oil Essence 100ml – Ocean Blue (Fresh Musk & Marine Scent).jpg"},
      {brand:"RAIP R3", name:"RAIP R3 Argan Hair Oil Essence 100ml – Original (Floral Vanilla) RAIP R3 摩洛哥坚果护发精油 100ml（经典香型：花香香草）", price:15, old:30, img:"LINGLONG/RAIP R3 Argan Hair Oil Essence 100ml – Original (Floral Vanilla).jpg"},
      {brand:"SUNGBOON EDITOR", name:"SUNGBOON EDITOR Green Tomato Pore Lifting Ampoule 30ml+(Refill 30ml+10ml) SUNGBOON EDITOR 青番茄毛孔紧致安瓶 30ml（附替换装30ml+10ml）", price:23, old:30, img:"LINGLONG/SUNGBOON EDITOR Green Tomato Pore Lifting Ampoule 30ml+(Refill 30ml+10ml).png"},
      {brand:"SUNGBOON EDITOR", name:"SUNGBOONEDITOR Deep Collagen Anti-Wrinkle Lifting Overnight Mask 37g × 4 Sheets - Grey SUNGBOONEDITOR 深层胶原抗皱紧致睡眠面膜 37g × 4片装（灰色款）", price:22, old:30, img:"LINGLONG/SUNGBOONEDITOR Deep Collagen Anti-Wrinkle Lifting Overnight Mask 37g × 4 Sheets - Grey.jpg"},
      {brand:"SUNGBOON EDITOR", name:"SUNGBOONEDITOR Deep Collagen Hyaluronic Acid B5 Hydrating Overnight Mask 37g x 4 Sheets (Blue) SUNGBOONEDITOR 深层胶原玻尿酸B5保湿睡眠面膜 37g × 4片装（蓝色款）", price:22, old:28, img:"LINGLONG/SUNGBOONEDITOR Deep Collagen Hyaluronic Acid B5 Hydrating Overnight Mask 37g x 4 Sheets (Blue).jpg"},
      {brand:"SUNGBOON EDITOR", name:"SUNGBOONEDITOR Deep Collagen Vitamin C Brightening Overnight Mask 37g x 4 Sheets (Yellow) SUNGBOONEDITOR 深层胶原维C焕亮睡眠面膜 37g × 4片装（黄色款）", price:22, old:28, img:"LINGLONG/SUNGBOONEDITOR Deep Collagen Vitamin C Brightening Overnight Mask 37g x 4 Sheets (Yellow).jpg"},
      {brand:"TORRIDEN", name:"TORRIDEN BALANCEFUL CICA MASK 5+1 Pcs TORRIDEN 平衡积雪草舒缓面膜 5+1片装", price:15, old:24, img:"LINGLONG/TORRIDEN BALANCEFUL CICA MASK 5+1 Pcs.webp"},
      {brand:"TORRIDEN", name:"Torriden DIVE-IN LOW MOLECULAR HYALYRONC ACID MASK 5+1PC Torriden 深水低分子玻尿酸补水面膜 5+1片装", price:16, old:25, img:"LINGLONG/Torriden DIVE-IN LOW MOLECULAR HYALYRONC ACID MASK 5+1PC.webp"},
      {brand:"TORRIDEN", name:"Torriden DIVE-IN LOW MOLECULAR HYALYRONC ACID Serum Torriden 深水低分子玻尿酸精华液", price:25, old:30, img:"LINGLONG/Torriden DIVE-IN LOW MOLECULAR HYALYRONC ACID Serum.jpg"},
      {brand:"TORRIDEN", name:"Torriden Low Molecular Hyaluronic Acid Soothing Cream Torriden 低分子玻尿酸舒缓面霜", price:23, old:26, img:"LINGLONG/Torriden Low Molecular Hyaluronic Acid Soothing Cream.jpg"},
      {brand:"TORRIDEN", name:"TORRIDEN Cellmazing Vitamin C Brightening Mask 26ml x 10 pieces TORRIDEN 细胞亮肌维C焕亮面膜 26ml × 10片装", price:27, old:44, img:"LINGLONG/TORRIDEN Cellmazing Vitamin C Brightening Mask 26ml x 10 pieces.jpg"},
      {brand:"UNOVE", name:"UNOVE Keratin Intensive Repair Ampoule Shampoo 500ml UNOVE 角蛋白强效修护安瓶洗发水 500ml", price:25, old:30, img:"LINGLONG/UNOVE Keratin Intensive Repair Ampoule Shampoo 500ml.jpg"},
      {brand:"UNOVE", name:"UNOVE Deep Damage Treatment EX  - Warm Petals 320ml + Tender Bloom 320ml UNOVE 深层损伤修护发膜EX – 温柔花语 320ml + 淡雅花蕾 320ml", price:50, old:60, img:"LINGLONG/UNOVE Deep Damage Treatment EX  - Warm Petals 320ml + Tender Bloom 320ml.png"},
      {brand:"UNOVE", name:"UNOVE Water Essence Mist 200ml UNOVE 水润精华喷雾 200ml", price:25, old:31, img:"LINGLONG/UNOVE Water Essence Mist 200ml.png"},
      {brand:"UNOVE", name:"UNOVE Silk Oil Essence 70ml,Tender Bloom/Warm Petals UNOVE 丝柔精油精华 70ml（淡雅花蕾／温柔花语）", price:22, old:28, img:"LINGLONG/UNOVE Silk Oil Essence 70ml Tender Bloom Warm Petals.jpg"},
      {brand:"UNOVE", name:"UNOVE Keratin Repair Shampoo (Twin Pack) 500g + 500g  UNOVE 角蛋白修护洗发水（双瓶装）500g + 500g", price:50, old:72, img:"LINGLONG/UNOVE Keratin Repair Shampoo (Twin Pack) 500g + 500g.png"},
      {brand:"UNOVE", name:"UNOVE Deep Repair Hair Mask (Woody Fragrance) UNOVE 深层修护发膜207ml(木香)", price:29, old:35, img:"LINGLONG/UNOVE Deep Repair Hair Mask (Woody Fragrance).jpg"},
      {brand:"UNOVE", name:"UNOVE Deep Repair Hair Mask 207ml (Floral Fragrance)UNOVE 深层修护发膜207ml(花香)", price:29, old:35, img:"LINGLONG/UNOVE Deep Repair Hair Mask 207ml (Floral Fragrance).jpg"},
      {brand:"UNOVE", name:"UNOVE Volumizing Curl Essence - Tender Bloom  147ml UNOVE 蓬松卷发修护精华 – 淡雅花蕾香型 147ml", price:24, old:31, img:"LINGLONG/UNOVE Volumizing Curl Essence - Tender Bloom  147ml.png"},
      {brand:"VASELINE", name:"VASELINE Brightening Mask 23ml x 10 Sheets (Purple) VASELINE 焕亮修护面膜 23ml × 10片装（紫色款）", price:15, old:30, img:"LINGLONG/VASELINE Brightening Mask 23ml x 10 Sheets (Purple).jpg"},
      {brand:"MEDITHERAPY", name:"Collagen Wrinkle-fit Tangle Eye Patch 4 pieces 胶原紧致抗皱眼贴 4片装", price:20, old:26, img:"LINGLONG/Collagen Wrinkle-fit Tangle Eye Patch 4 pieces.jpg"},
      {brand:"DALBA", name:"DALBA Anti-Aging Collagen Spray100ml ( The 5th Generation) d’Alba 第五代抗老胶原蛋白喷雾 100ml 空姐喷雾", price:28, old:36, img:"LINGLONG/DALBA Anti-Aging Collagen Spray100ml ( The 5th Generation).jpg"},
      {brand:"DALBA", name:"DALBA Anti-Aging Collagen Spray100ml ( The 4th Generation) d’Alba 第四代抗老胶原蛋白喷雾 100ml 空姐喷雾", price:27, old:35, img:"LINGLONG/DALBA Anti-Aging Collagen Spray100ml ( The 4th Generation).jpg"},
      {brand:"SKIN1004", name:"SKIN1004 Centella Asiatica Hyaluronic Essence 100ml(Blue) SKIN1004 积雪草玻尿酸精华液 100ml（蓝色款）", price:25, old:35, img:"LINGLONG/SKIN1004 Centella Asiatica Hyaluronic Essence 100ml(Blue).webp"},
      {brand:"SKIN1004", name:"MADAGSCAR CENTELLA TONE BRIGHTENING BOOSTING TONER 210 ml 马达加斯加积雪草焕亮肌底精华水 210ml", price:25, old:30, img:"LINGLONG/MADAGSCAR CENTELLA TONE BRIGHTENING BOOSTING TONER 210 ml.webp"},
    ];

function renderProducts(filterBrand = "all", keyword = ""){
  const grid = document.getElementById('grid');
  grid.innerHTML = "";

  products
  .filter(p => filterBrand === "all" || p.brand === filterBrand)
  .filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()))
  .forEach(p => {
    const el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = `<img src='${p.img}' alt='${p.name}' />
                    <div class='brand'>${p.brand||''}</div>
                    <div class='title'>${p.name}</div>
                    <div class='price'>折扣价: $${p.price} <del>原价: $${p.old}</del></div>`;
    grid.appendChild(el);
  });
}

function initFilter(){
  const brandFilter = document.getElementById('brandFilter');
  const searchInput = document.getElementById('searchInput')
  const brands = [...new Set(products.map(p => p.brand))];
  brands.forEach(brand => {
    const opt = document.createElement('option');
    opt.value = brand;
    opt.textContent = brand;
    brandFilter.appendChild(opt);
  });

  function updateView(){
    renderProducts(brandFilter.value, searchInput.value);
  }

  brandFilter.addEventListener('change', updateView);
  searchInput.addEventListener('input', updateView);

  updateView();
}

initFilter();