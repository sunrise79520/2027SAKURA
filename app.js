const ICONS = {
  sakura: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7.2C10.1 3.5 7.1 3.2 5.9 5.1c-1.2 1.9.5 4.3 4.4 4.6-4.1.3-5.8 2.6-4.6 4.5 1.3 2 4.2 1.6 6-2.1-1.4 3.9.1 6.2 2.3 6.2s3.7-2.3 2.3-6.2c1.8 3.7 4.8 4.1 6 2.1 1.2-1.9-.5-4.2-4.6-4.5 3.9-.3 5.6-2.7 4.4-4.6-1.2-1.9-4.2-1.6-6.1 2.1Z"/><circle cx="12" cy="10.4" r="1.5" class="fill"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M8 3.5v3M16 3.5v3M3.5 9.2h17"/></svg>`,
  users: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.5 18.5c0-2.2-2-4-4.5-4s-4.5 1.8-4.5 4"/><circle cx="12" cy="9" r="3.2"/><path d="M5.2 17.8c-.2-1.7.9-3.1 2.5-3.8M18.8 17.8c.2-1.7-.9-3.1-2.5-3.8"/><path d="M6.6 10.1a2.5 2.5 0 1 0-1.2 4.6M17.4 10.1a2.5 2.5 0 1 1 1.2 4.6"/></svg>`,
  route: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="6" r="2.4"/><circle cx="18" cy="18" r="2.4"/><path d="M8.3 6h4.8a4 4 0 0 1 0 8H10a4 4 0 0 0 0 8h5.8"/></svg>`,
  calculator: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3.5" width="14" height="17" rx="2.5"/><path d="M8 7.2h8M8.5 11h.1M12 11h.1M15.5 11h.1M8.5 14.5h.1M12 14.5h.1M15.5 14.5h.1M8.5 18h.1M12 18h.1M15.5 18h.1"/></svg>`,
  ticket: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8.5V6.7A2.7 2.7 0 0 1 6.7 4h10.6A2.7 2.7 0 0 1 20 6.7v1.8a2.5 2.5 0 0 0 0 5v1.8a2.7 2.7 0 0 1-2.7 2.7H6.7A2.7 2.7 0 0 1 4 15.3v-1.8a2.5 2.5 0 0 0 0-5Z"/><path d="M9 7.5v9"/></svg>`,
  train: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3.5" width="14" height="14" rx="3"/><path d="M8.5 7h7M5 11h14M8 17.5l-2 3M16 17.5l2 3M9 14.5h.1M15 14.5h.1"/></svg>`,
  suitcase: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="7" width="14" height="13" rx="2.5"/><path d="M9 7V5.8A2.3 2.3 0 0 1 11.3 3.5h1.4A2.3 2.3 0 0 1 15 5.8V7M9 10v7M15 10v7"/></svg>`,
  passport: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="3.5" width="12" height="17" rx="2"/><circle cx="12" cy="11" r="3"/><path d="M9 16.5h6M9.5 11h5M12 8v6"/></svg>`,
  minimize: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12h12"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6 7-11.2A7 7 0 0 0 5 9.8C5 15 12 21 12 21Z"/><circle cx="12" cy="9.8" r="2.4"/></svg>`,
  home: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 11.5 12 4l8.5 7.5"/><path d="M6 10.2V20h12v-9.8"/><path d="M10 20v-5h4v5"/></svg>`,
  grid: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="1.5"/><rect x="14" y="4" width="6" height="6" rx="1.5"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><rect x="14" y="14" width="6" height="6" rx="1.5"/></svg>`,
  'calendar-days': `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M8 3.5v3M16 3.5v3M3.5 9.2h17M8 13h.1M12 13h.1M16 13h.1M8 17h.1M12 17h.1"/></svg>`,
  yen: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5 12 12l5-7.5M12 12v8M8 13.5h8M8 17h8"/></svg>`,
  alert: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4 21 20H3L12 4Z"/><path d="M12 9.5v4.5M12 17.2h.1"/></svg>`,
  'arrow-up': `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>`,
  hotel: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V7.5A2.5 2.5 0 0 1 6.5 5H17a3 3 0 0 1 3 3v12"/><path d="M4 11h16M8 20v-4h8v4M8 8h.1M12 8h.1M16 8h.1"/></svg>`,
  food: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.5v7M4.8 3.5v7M9.2 3.5v7M4.8 10.5h4.4L8 20.5H6l-1.2-10Z"/><path d="M16 3.5c2.2 1.8 3.2 4.2 3.2 7.2 0 2.4-.9 4-2.2 4h-1l-.5 5.8h-2L14 3.5h2Z"/></svg>`,
  ship: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 16.5 6 9h12l2 7.5"/><path d="M8 9V5.5h8V9M4 16.5c2 2 4 2 6 0 2 2 4 2 6 0 2 2 4 2 6 0M6 20c1.8 1 3.6 1 5.4 0 1.8 1 3.6 1 5.4 0"/></svg>`,
  map: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 6 5-2 6 2 5-2v14l-5 2-6-2-5 2V6Z"/><path d="M9 4v14M15 6v14"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8.2h3l1.5-2.2h5L16 8.2h3a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.8a2 2 0 0 1 2-2Z"/><circle cx="12" cy="14" r="3.2"/></svg>`,
  check: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>`
};

const tools = {
  overview: {
    icon: 'route', title: '總覽', desc: '把上方改成純工具箱，不再放每日切換。每日行程只在下方選一次。',
    items: [
      ['路線骨架', '大邱暖身 → 釜山追櫻 → 夜船跨國 → 福岡收尾。'],
      ['畫面原則', '手機優先、卡片式、按鈕大顆、重點資訊優先。'],
      ['每日切換', '全站只保留一組每日行程按鈕，避免上方和下方重複。']
    ],
    note: '新版重點：上面是工具箱，下面才是每日行程，不再把日期選單塞在兩個地方。'
  },
  budget: {
    icon: 'calculator', title: '預算速查', desc: '先放固定支出和每日提醒，完整金額可再依最終票價補上。',
    items: [
      ['住宿', '大邱、釜山西面、廣安里、夜船、福岡分段列示。'],
      ['交通', 'KTX、Visit Busan Pass、JR九州／單程票、福岡地鐵與西鐵。'],
      ['餐食', '重點餐廳另外標記，避免把每餐都塞成流水帳。']
    ],
    note: '建議日後補上「已付款／未付款」欄位，實際出發前更好核對。'
  },
  tickets: {
    icon: 'ticket', title: '票券與預約', desc: '集中放容易忘記的套票、預約、報到時間。',
    items: [
      ['Visit Busan Pass', 'BIG5 + 24H PASS；依既定順序使用，不要現場再重算。'],
      ['夜船', '釜山 → 福岡 New Camellia，抓 18:00 抵港較保險。'],
      ['體驗預約', '韓服、屋型船、由布院之森、和服租借放在同一頁查。']
    ],
    note: '票券頁只放「會影響當天能不能順走」的項目，避免雜訊太多。'
  },
  transport: {
    icon: 'train', title: '交通筆記', desc: '把跨城、跨國與市區交通分開，現場查閱比較快。',
    items: [
      ['跨城', '大邱 → 釜山 KTX；博多 → 由布院；博多 → 小倉／門司港。'],
      ['市區', '釜山地鐵與計程車彈性搭配；福岡以地鐵／西鐵為主。'],
      ['提醒', '每日頁只放重要移動，不放每一段轉乘細節，版面會乾淨很多。']
    ],
    note: '真正需要詳細轉乘時，可另外做「交通備忘錄」，不要混在每日主畫面。'
  },
  packing: {
    icon: 'suitcase', title: '行李清單', desc: '春季跨韓國與九州，天氣差異和夜船用品要分開看。',
    items: [
      ['證件', '護照、信用卡、保險、訂房與票券截圖。'],
      ['衣物', '洋蔥式穿搭、好走鞋、薄外套、雨具。'],
      ['夜船', '盥洗包、拖鞋、暈船藥、充電線、可快速拿取的小包。']
    ],
    note: '行李頁建議保留勾選式，不要做成長篇文字。現場只會想看「少了什麼」。'
  },
  rules: {
    icon: 'passport', title: '入出境與注意事項', desc: '放護照、行李、海關、航班與船班的硬性規定。',
    items: [
      ['韓國', '入境資料、住宿資訊、交通票券截圖先離線保存。'],
      ['日本', 'Visit Japan Web、海關申報與藥品／食品攜帶限制。'],
      ['航空', '華航行李、液體限制、回程報到時間另外標成醒目提醒。']
    ],
    note: '規定頁只放「錯了會卡關」的內容，不放一般旅遊小提醒。'
  }
};

const days = [
  {
    day: 1, date: '3/19', weekday: '五', place: '大邱', fullDate: '2027/03/19',
    theme: '紅眼班機抵達，先把體力拉回來', hotel: '大邱 Toyoko Inn Dongseongno',
    budget: '固定支出：機場交通、汗蒸幕／早餐、晚餐與市區交通。',
    tags: ['抵達日', '大邱市區', '不要排太硬'],
    timeline: [
      ['05:20', '抵達大邱', '先處理入境、換網路、交通與行李。'],
      ['上午', 'Greenvill Sauna', '紅眼後先休息，避免第一天直接報廢。'],
      ['中午', '巨松燉排骨', '大邱重點餐廳，安排在恢復體力後。'],
      ['下午', '現代百貨／Olive Young', '市區補給與簡單逛街。'],
      ['晚上', '城市夜景巴士', '壽城池、83塔、金光石路等夜景點。']
    ],
    checks: ['護照與訂房截圖放手機離線', '紅眼抵達不要安排太多步行', '確認隔天大邱到釜山交通']
  },
  {
    day: 2, date: '3/20', weekday: '六', place: '大邱→釜山', fullDate: '2027/03/20',
    theme: '大邱散策後，移動到釜山', hotel: '釜山西面 Queens Hotel',
    budget: '固定支出：KTX、當日餐食、釜山市區交通。',
    tags: ['西門市場', '前山展望台', 'KTX'],
    timeline: [
      ['上午', '西門市場、桂山聖堂', '用市場和老城區當作大邱收尾。'],
      ['午後', '咖啡名家／前山展望台', '視天氣安排展望台與咖啡休息。'],
      ['傍晚', '安地郎烤腸', '大邱特色晚餐，吃完再移動較順。'],
      ['晚上', 'KTX 至釜山', '抵達後入住西面，隔天開始釜山段。']
    ],
    checks: ['KTX時間與車站提早確認', '大邱住宿退房前再次檢查充電器', '釜山飯店地址截圖']
  },
  {
    day: 3, date: '3/21', weekday: '日', place: '鎮海・慶州', fullDate: '2027/03/21',
    theme: '春日重頭戲：鎮海櫻花與慶州古都', hotel: '釜山西面 Queens Hotel',
    budget: '固定支出：城際交通、景點移動、餐食。',
    tags: ['櫻花', '古都', '照片日'],
    timeline: [
      ['上午', '鎮海櫻花重點區', '以花況和人潮決定停留時間。'],
      ['中午', '在地午餐', '不要排太遠，保留移動彈性。'],
      ['下午', '慶州散策', '古都景點與街區拍照。'],
      ['晚上', '回釜山西面', '回飯店休息，隔天走釜山市區。']
    ],
    checks: ['櫻花花況出發前再查一次', '長距離移動日記得穿好走鞋', '行動電源充滿']
  },
  {
    day: 4, date: '3/22', weekday: '一', place: '甘川・松島', fullDate: '2027/03/22',
    theme: '沿著山城、南浦洞一路到松島', hotel: '釜山西面 Queens Hotel',
    budget: '固定支出：韓服／景點、南浦洞餐食、松島纜車。',
    tags: ['甘川韓服', '南浦洞', '松島纜車'],
    timeline: [
      ['10:00', '甘川韓服', '철수와 영희；拍照時間抓寬一點。'],
      ['中午', '南浦洞', '午餐、商圈、釜山塔或周邊彈性安排。'],
      ['14:00', '影島大橋開闔', '時間點固定，前後行程不要卡太緊。'],
      ['傍晚', '松島海上纜車', '天氣好可加天空步道，晚上回西面。']
    ],
    checks: ['韓服預約資訊截圖', '影島大橋時間不要錯過', '松島纜車遇強風需備案']
  },
  {
    day: 5, date: '3/23', weekday: '二', place: '機張', fullDate: '2027/03/23',
    theme: '沿著東海岸走機張海線', hotel: '釜山西面 Queens Hotel',
    budget: '固定支出：Luge、海女家午餐、咖啡與交通。',
    tags: ['海東龍宮寺', 'Skyline Luge', 'Wave On'],
    timeline: [
      ['上午', '海東龍宮寺', '海邊寺廟，安排早點到比較舒服。'],
      ['中午', '張氏海女家', '機張海線重點餐廳。'],
      ['下午', 'Skyline Luge、竹城夢幻教堂', '體驗加拍照點，依體力調整。'],
      ['傍晚', 'Wave On Coffee', '看海休息後回市區。']
    ],
    checks: ['Luge票券與營業狀態確認', '海邊風大準備外套', '晚餐可視體力改回西面附近']
  },
  {
    day: 6, date: '3/24', weekday: '三', place: '海雲台', fullDate: '2027/03/24',
    theme: '海雲台放鬆日：藝術、海岸列車與夜景', hotel: '廣安里 Yellow Door',
    budget: '固定支出：Arte Museum、海岸列車、Club D Oasis、X the Sky。',
    tags: ['Arte Museum', '海岸列車', 'X the Sky'],
    timeline: [
      ['上午', 'Arte Museum', '雨天也能走的室內景點。'],
      ['午後', '海雲台海岸列車', '把海景行程集中，路線更順。'],
      ['下午', 'Club D Oasis', '洗澡放鬆，順便恢復體力。'],
      ['晚上', 'Busan X the Sky', '夜景時間點，結束後前往廣安里住宿。']
    ],
    checks: ['更換住宿日，行李移動要先規劃', '海岸列車班次先查', '24H PASS開卡時間要算好']
  },
  {
    day: 7, date: '3/25', weekday: '四', place: '白淺灘・夜船', fullDate: '2027/03/25',
    theme: '白淺灘收尾，晚上搭船去福岡', hotel: 'New Camellia 夜船',
    budget: '固定支出：港口交通、晚餐或船上補給、夜船費用。',
    tags: ['白淺灘文化村', '西面豬肉湯飯', '跨國夜船'],
    timeline: [
      ['上午', '白淺灘文化村', '海景巷弄散步，注意坡度與體力。'],
      ['中午', '흰여울점빵／西面豬肉湯飯', '依動線安排餐食。'],
      ['下午', '回飯店取行李', '預留移動與整理時間。'],
      ['18:00', '釜山港報到', '目標18:00抵港，最後報到時間不可壓線。']
    ],
    checks: ['護照和船票放外層小包', '港口交通不要抓太緊', '夜船用品另外收一袋']
  },
  {
    day: 8, date: '3/26', weekday: '五', place: '福岡市區', fullDate: '2027/03/26',
    theme: '福岡第一天：神社、公園與屋型船', hotel: 'APA Hotel Hakata Station Chikushiguchi',
    budget: '固定支出：市區交通、水炊雞、屋型船晚餐。',
    tags: ['住吉神社', '大濠公園', '屋型船'],
    timeline: [
      ['上午', '住吉神社、福岡城跡、舞鶴公園', '櫻花季重點區，至少保留2小時。'],
      ['中午', '水炊雞', '鳥ZEN TORIDEN博多本店為目標。'],
      ['下午', '大濠公園、櫛田神社、川端商店街', '川端善哉週五六日營業可安排。'],
      ['18:00', '屋型船晚餐', '17:45報到，時間固定。']
    ],
    checks: ['日本入境後交通卡／現金整理', '屋型船報到時間設提醒', '福岡住宿地址離線保存']
  },
  {
    day: 9, date: '3/27', weekday: '六', place: '由布院', fullDate: '2027/03/27',
    theme: '由布院之森與溫泉小鎮散策', hotel: 'APA Hotel Hakata Station Chikushiguchi',
    budget: '固定支出：由布院往返車票、當地小吃、晚餐牛腸鍋。',
    tags: ['由布院之森', '金鱗湖', '牛腸鍋'],
    timeline: [
      ['早上', '博多站出發', '早餐可在車站或車上解決。'],
      ['上午', '由布院之森', '觀光列車本身就是重點。'],
      ['中午', '由布院散策', '金鱗湖、湯之坪街道，小吃或釜心。'],
      ['晚上', '回博多吃牛腸鍋', '餐廳待最終挑選。']
    ],
    checks: ['指定席與車票先確認', '回程若調整一般由布號也要可接受', '週六人潮會多，購物別拖太晚']
  },
  {
    day: 10, date: '3/28', weekday: '日', place: '小倉・門司港', fullDate: '2027/03/28',
    theme: '城、海峽、市場與門司港夜味', hotel: 'APA Hotel Hakata Station Chikushiguchi',
    budget: '固定支出：博多小倉交通、小倉城、唐戶市場、燒咖哩。',
    tags: ['小倉城', '唐戶市場', '門司港'],
    timeline: [
      ['上午', '小倉城', '入天守，先完成主要景點。'],
      ['中午', '唐戶市場', '海鮮午餐，週日人潮要抓寬。'],
      ['下午', '關門海峽、門司港', '海港散步與拍照。'],
      ['晚上', '燒咖哩、一蘭總本店', '19:50前到一蘭卡位20:00表演。']
    ],
    checks: ['博多—小倉票券不可誤用JR九州Pass', '唐戶市場人潮時間要預留', '一蘭表演時間設提醒']
  },
  {
    day: 11, date: '3/29', weekday: '一', place: '福岡市區', fullDate: '2027/03/29',
    theme: '大名、天神與福岡塔夜景', hotel: 'APA Hotel Hakata Station Chikushiguchi',
    budget: '固定支出：明太重、購物、市區交通、福岡塔。',
    tags: ['貴賓館', '大名商圈', '福岡塔'],
    timeline: [
      ['上午', '貴賓館、福博出會橋', '拍照狀態最好時先拍。'],
      ['中午', 'ACROS天神、大名商圈', '明太重為目標餐廳。'],
      ['下午', '天神購物', 'PARCO改以 Fukuoka BLDG 周邊為主。'],
      ['晚上', '福岡塔夜景', '傍晚到夜間安排，回飯店整理行李。']
    ],
    checks: ['週一店休再確認', '購物戰利品預留行李空間', '隔天退房與寄物流程先確認']
  },
  {
    day: 12, date: '3/30', weekday: '二', place: '太宰府', fullDate: '2027/03/30',
    theme: '太宰府專日，晚上搭機回台灣', hotel: '返台日',
    budget: '固定支出：和服租借、西鐵交通、機場交通、回程餐食。',
    tags: ['太宰府天滿宮', '和服', '福岡機場'],
    timeline: [
      ['上午', 'APA退房、行李寄物', '行李帶至太宰府站寄物，不回飯店。'],
      ['中午', '天神VASARA租和服', '需先確認隔日返還或當日返還規則。'],
      ['下午', '太宰府天滿宮、參道小吃', '烏龍麵、梅枝餅與參道散策。'],
      ['晚上', '還和服、前往福岡機場', 'CI188 21:00–22:30 回台。']
    ],
    checks: ['和服返還方式確認', '太宰府寄物櫃大小與位置', '回程航班報到時間設提醒']
  }
];

let currentTool = 'overview';
let currentDay = 0;
let toolsCollapsed = false;

function icon(name){ return `<span class="icon" data-icon="${name}"></span>`; }

function replaceIcons(root = document){
  root.querySelectorAll('[data-icon]').forEach(el => {
    const name = el.dataset.icon;
    if(ICONS[name]) el.innerHTML = ICONS[name];
  });
}

function renderTool(key){
  currentTool = key;
  const tool = tools[key];
  const panel = document.getElementById('toolPanel');
  panel.classList.toggle('collapsed', toolsCollapsed);
  panel.innerHTML = `
    <div class="tool-panel__header" id="tool-${key}">
      <span class="icon-wrap">${icon(tool.icon)}</span>
      <div>
        <h3>${tool.title}</h3>
        <p>${tool.desc}</p>
      </div>
    </div>
    <ul class="tool-list">
      ${tool.items.map(([title, text]) => `<li>${icon('check')}<span><strong>${title}</strong>：${text}</span></li>`).join('')}
    </ul>
    <div class="tool-note">${tool.note}</div>
  `;
  document.querySelectorAll('.tool-card').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tool === key);
  });
  replaceIcons(panel);
}

function renderDayStrip(){
  const strip = document.getElementById('dayStrip');
  strip.innerHTML = days.map((d, idx) => `
    <button type="button" class="day-button ${idx === currentDay ? 'active' : ''}" data-day-index="${idx}" aria-label="DAY ${String(d.day).padStart(2,'0')} ${d.date} 星期${d.weekday} ${d.place}">
      <strong>${d.date} ${d.weekday}</strong>
      <span>DAY ${String(d.day).padStart(2,'0')}</span>
      <em>${d.place}</em>
    </button>
  `).join('');
  strip.querySelectorAll('.day-button').forEach(btn => {
    btn.addEventListener('click', () => {
      renderDay(Number(btn.dataset.dayIndex));
      btn.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
    });
  });
}

function renderDay(index){
  currentDay = index;
  const d = days[index];
  const card = document.getElementById('dayCard');
  document.querySelectorAll('.day-button').forEach((btn, i) => btn.classList.toggle('active', i === index));
  card.innerHTML = `
    <div class="day-hero">
      <p class="day-kicker">DAY ${String(d.day).padStart(2,'0')}｜${d.fullDate}（${d.weekday}）</p>
      <h3 class="day-theme">${d.theme}</h3>
      <div class="day-subgrid">
        <div class="info-pill">${icon('hotel')}<span><strong>住宿</strong>：${d.hotel}</span></div>
        <div class="info-pill">${icon('calculator')}<span><strong>預算</strong>：${d.budget}</span></div>
      </div>
    </div>
    <div class="day-body">
      <section class="block">
        <h4 class="block-title">${icon('route')}當日行程</h4>
        <ol class="timeline">
          ${d.timeline.map(([time, title, text]) => `<li><time>${time}</time><div><strong>${title}</strong><p>${text}</p></div></li>`).join('')}
        </ol>
      </section>
      <section class="block">
        <h4 class="block-title">${icon('camera')}重點標籤</h4>
        <div class="tags">${d.tags.map(tag => `<span class="tag">${icon('sakura')}${tag}</span>`).join('')}</div>
      </section>
      <section class="block">
        <h4 class="block-title">${icon('alert')}當天提醒</h4>
        <div class="check-grid">${d.checks.map(item => `<div class="check-item">${icon('check')}<span>${item}</span></div>`).join('')}</div>
      </section>
    </div>
  `;
  replaceIcons(card);
}

function setupEvents(){
  document.querySelectorAll('.tool-card').forEach(btn => {
    btn.addEventListener('click', () => {
      toolsCollapsed = false;
      renderTool(btn.dataset.tool);
      document.getElementById('collapseToolsBtn').innerHTML = `${icon('minimize')} 收合`;
      replaceIcons(document.getElementById('collapseToolsBtn'));
    });
  });

  document.querySelectorAll('[data-jump-tool]').forEach(link => {
    link.addEventListener('click', () => {
      toolsCollapsed = false;
      renderTool(link.dataset.jumpTool);
      setActiveBottom(link);
    });
  });

  document.querySelectorAll('.bottom-nav__item').forEach(link => {
    link.addEventListener('click', () => setActiveBottom(link));
  });

  document.getElementById('collapseToolsBtn').addEventListener('click', () => {
    toolsCollapsed = !toolsCollapsed;
    const panel = document.getElementById('toolPanel');
    panel.classList.toggle('collapsed', toolsCollapsed);
    document.getElementById('collapseToolsBtn').innerHTML = `${icon(toolsCollapsed ? 'grid' : 'minimize')} ${toolsCollapsed ? '展開' : '收合'}`;
    replaceIcons(document.getElementById('collapseToolsBtn'));
  });

  document.getElementById('todayBtn').addEventListener('click', () => {
    renderDay(0);
    document.querySelector('.day-button')?.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
  });

  const backToTop = document.getElementById('backToTop');
  backToTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 520);
  }, {passive:true});
}

function setActiveBottom(activeLink){
  document.querySelectorAll('.bottom-nav__item').forEach(link => link.classList.toggle('active', link === activeLink));
}

replaceIcons();
renderTool(currentTool);
renderDayStrip();
renderDay(currentDay);
setupEvents();
