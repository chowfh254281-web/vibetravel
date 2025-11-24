import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { 
  getFirestore, doc, onSnapshot, setDoc, updateDoc, arrayUnion, arrayRemove 
} from 'firebase/firestore';
import { 
  Plane, MapPin, Coffee, Camera, Utensils, 
  Plus, Share2, Calendar, Clock, Trash2, 
  Moon, Sun, ChevronRight, Check, AlertTriangle, RefreshCw, LogIn, X, 
  Zap, Star, Map, Bed, Car, QrCode
} from 'lucide-react';

// ------------------------------------------------------------------
// ✅ 您的專屬 Firebase 設定 (已填入)
// ------------------------------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyCJO2IQIVtUaM0NV0iltbeid8hFd6cbdnQ",
  authDomain: "vibetravel-39374.firebaseapp.com",
  projectId: "vibetravel-39374",
  storageBucket: "vibetravel-39374.firebasestorage.app",
  messagingSenderId: "408343885090",
  appId: "1:408343885090:web:80c286e2ef0c7832b5217b",
  measurementId: "G-ECPB0N84RJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = "my-vibe-trip-2026"; // 資料庫路徑 ID

// --- Utilities ---
const generateId = () => Math.random().toString(36).substr(2, 9);

const getTripIdFromUrl = () => {
  try {
    const params = new URLSearchParams(window.location.search);
    return params.get('trip') || null;
  } catch (e) {
    return null;
  }
};

// Default Template: 峴港 6日5夜
const DEFAULT_TRIP = {
  title: "🇻🇳 峴港·會安 6日5夜之旅",
  subtitle: "2026/01/02 ~ 01/07 | 家族旅行",
  startDate: "2026-01-02",
  tags: ["峴港 (美溪沙灘)", "會安 (古鎮)", "巴拿山"],
  flight: {
    outbound: { date: "1/2", code: "UO552", route: "HKG 08:25 → DAD 09:20" },
    inbound: { date: "1/7", code: "UO559", route: "DAD 18:30 → HKG 21:25" }
  },
  days: [
    { 
      id: "day_1", 
      dayNum: 1, 
      theme: "峴港初印象：粉紅教堂＋龍橋",
      themeTags: "市區・美食",
      activities: [
        { id: "d1_1", time: "08:25", title: "香港起飛", subtitle: "香港快運 UO552", type: "plane", location: "香港國際機場 T1" },
        { id: "d1_2", time: "09:20", title: "抵達峴港 & 接機", subtitle: "預約 Grab 或 包車", type: "car", location: "峴港國際機場 T2" },
        { id: "d1_3", time: "12:00", title: "午餐：越式米線", subtitle: "Mì Quảng 1A", type: "food", location: "Mì Quảng 1A" },
        { id: "d1_4", time: "14:00", title: "飯店 Check-in", subtitle: "辦理入住手續", type: "stay", location: "美溪沙灘周邊飯店" },
        { id: "d1_5", time: "16:30", title: "粉紅教堂打卡", subtitle: "免費參觀", type: "camera", location: "Da Nang Cathedral" },
        { id: "d1_6", time: "19:00", title: "晚餐：越式披薩", subtitle: "Pizza 4P's", type: "food", location: "Pizza 4P's" },
        { id: "d1_7", time: "21:00", title: "龍橋噴火秀", subtitle: "週五限定活動", type: "sightseeing", location: "Dragon Bridge" }
      ] 
    },
    { 
      id: "day_2", 
      dayNum: 2, 
      theme: "雲端上的樂園：巴拿山一日遊",
      themeTags: "自然・樂園",
      activities: [
        { id: "d2_1", time: "08:00", title: "出發前往巴拿山", subtitle: "車程約 40 分鐘", type: "car", location: "Ba Na Hills" },
        { id: "d2_2", time: "09:30", title: "黃金佛手橋", subtitle: "必拍打卡點", type: "camera", location: "Golden Bridge" },
        { id: "d2_3", time: "12:00", title: "山頂自助午餐", subtitle: "Beer Plaza", type: "food", location: "Beer Plaza" },
        { id: "d2_4", time: "14:00", title: "Fantasy Park", subtitle: "室內遊樂場", type: "sightseeing", location: "室內遊樂場" },
        { id: "d2_5", time: "16:30", title: "搭纜車下山", subtitle: "欣賞夕陽美景", type: "transport", location: "" },
        { id: "d2_6", time: "19:00", title: "晚餐：越南煎餅", subtitle: "Bánh Xèo Bà Dưỡng", type: "food", location: "Bánh Xèo Bà Dưỡng" }
      ] 
    },
    { 
      id: "day_3", 
      dayNum: 3, 
      theme: "古鎮風情：五行山＋會安燈籠",
      themeTags: "文化・夜景",
      activities: [
        { id: "d3_1", time: "09:30", title: "五行山參觀", subtitle: "大理石山", type: "sightseeing", location: "Marble Mountains" },
        { id: "d3_2", time: "12:30", title: "午餐：會安雞飯", subtitle: "Cơm Gà Bà Buội", type: "food", location: "Cơm Gà Bà Buội" },
        { id: "d3_3", time: "14:30", title: "迦南島簸箕船", subtitle: "體驗椰林水鄉", type: "boat", location: "Cam Thanh Coconut Village" },
        { id: "d3_4", time: "16:30", title: "會安古鎮下午茶", subtitle: "古城漫步", type: "coffee", location: "Hoi An Ancient Town" },
        { id: "d3_5", time: "18:30", title: "晚餐：白玫瑰", subtitle: "Morning Glory Original", type: "food", location: "Morning Glory Original" },
        { id: "d3_6", time: "19:30", title: "放水燈 & 夜市", subtitle: "祈福體驗", type: "sightseeing", location: "會安河岸" },
        { id: "d3_7", time: "21:00", title: "返回峴港", subtitle: "專車接送", type: "car", location: "" }
      ] 
    },
    { 
      id: "day_4", 
      dayNum: 4, 
      theme: "慢活時光：按摩＋沙灘漫步",
      themeTags: "放鬆・購物",
      activities: [
        { id: "d4_1", time: "10:00", title: "睡到自然醒", subtitle: "飯店早餐", type: "food", location: "飯店" },
        { id: "d4_2", time: "11:30", title: "韓市場採購", subtitle: "腰果、果乾伴手禮", type: "sightseeing", location: "Han Market" },
        { id: "d4_3", time: "13:00", title: "午餐：越南河粉", subtitle: "Phở Bắc Hải", type: "food", location: "Phở Bắc Hải" },
        { id: "d4_4", time: "15:00", title: "越式洗頭/SPA", subtitle: "Sum Spa / Herbal Spa", type: "stay", location: "Sum Spa / Herbal Spa" },
        { id: "d4_5", time: "17:30", title: "美溪沙灘", subtitle: "世界六大美麗沙灘", type: "sightseeing", location: "My Khe Beach" },
        { id: "d4_6", time: "19:00", title: "晚餐：海鮮大餐", subtitle: "Hải Sản Bé Mặn", type: "food", location: "Hải Sản Bé Mặn" }
      ] 
    },
    { 
      id: "day_5", 
      dayNum: 5, 
      theme: "山茶半島與最後巡禮",
      themeTags: "風景・咖啡",
      activities: [
        { id: "d5_1", time: "09:00", title: "靈應寺", subtitle: "巨大觀音像", type: "sightseeing", location: "Lady Buddha" },
        { id: "d5_2", time: "12:00", title: "午餐：烤肉米線", subtitle: "Bún Chả Cá", type: "food", location: "Bún Chả Cá" },
        { id: "d5_3", time: "14:00", title: "樂天超市", subtitle: "最後補貨", type: "sightseeing", location: "Lotte Mart" },
        { id: "d5_4", time: "16:30", title: "椰子咖啡", subtitle: "Cộng Cà Phê", type: "coffee", location: "Cộng Cà Phê" },
        { id: "d5_5", time: "19:00", title: "晚餐：越式法包", subtitle: "Bánh Mì AA", type: "food", location: "Bánh Mì" },
        { id: "d5_6", time: "20:30", title: "韓江夜景", subtitle: "愛情鎖橋", type: "sightseeing", location: "Love Bridge" }
      ] 
    },
    { 
      id: "day_6", 
      dayNum: 6, 
      theme: "再見峴港",
      themeTags: "返程",
      activities: [
        { id: "d6_1", time: "09:30", title: "悠閒早餐", subtitle: "整理行李", type: "stay", location: "飯店" },
        { id: "d6_2", time: "11:00", title: "Check-out", subtitle: "寄放行李", type: "stay", location: "" },
        { id: "d6_3", time: "12:00", title: "最後午餐", subtitle: "市區隨意吃", type: "food", location: "市區隨意吃" },
        { id: "d6_4", time: "13:30", title: "避暑休息", subtitle: "咖啡廳", type: "coffee", location: "避暑休息" },
        { id: "d6_5", time: "15:30", title: "前往機場", subtitle: "Check-in", type: "car", location: "峴港機場 T2" },
        { id: "d6_6", time: "18:30", title: "飛往香港", subtitle: "UO559", type: "plane", location: "UO559" },
        { id: "d6_7", time: "21:25", title: "抵達香港", subtitle: "HKG T1", type: "plane", location: "HKG T1" }
      ] 
    }
  ]
};

// Helper to get consistent Firestore reference
const getTripRef = (tId) => {
  return doc(db, 'artifacts', appId, 'public', 'data', 'trips', `trip_${tId}`);
};

// --- Join Modal ---
const JoinModal = ({ isOpen, onClose, onJoin }) => {
  const [inputCode, setInputCode] = useState("");
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1c1c1e] border border-gray-700 rounded-2xl w-full max-w-sm p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-white">加入行程</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        <p className="text-sm text-gray-400 mb-4">
          請輸入朋友分享的 <b className="text-yellow-500">Trip ID</b>
        </p>
        <input
          type="text"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value.trim())}
          placeholder="例如: x9s8d7f"
          className="w-full bg-[#2c2c2e] text-white rounded-xl px-4 py-3 text-lg font-mono focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-4"
        />
        <button 
          onClick={() => { if (inputCode) onJoin(inputCode); }}
          disabled={!inputCode}
          className="w-full py-3 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 disabled:opacity-50 transition-colors"
        >
          加入
        </button>
      </div>
    </div>
  );
};

// --- QR Code Modal ---
const QrModal = ({ isOpen, onClose, tripId }) => {
  if (!isOpen) return null;

  const shareUrl = `${window.location.origin}${window.location.pathname}?trip=${tripId}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1c1c1e] border border-gray-700 rounded-2xl w-full max-w-sm p-8 shadow-2xl flex flex-col items-center animate-in fade-in zoom-in duration-200">
        <div className="w-full flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-white">手機掃描開啟</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white"><X size={20} /></button>
        </div>
        
        <div className="bg-white p-2 rounded-xl mb-4">
          <img src={qrUrl} alt="QR Code" className="w-48 h-48" />
        </div>
        
        <p className="text-sm text-gray-400 text-center mb-6">
          使用手機相機掃描，<br/>即可在手機上瀏覽與編輯。
        </p>

        <div className="w-full bg-[#2c2c2e] p-3 rounded-lg flex items-center justify-between">
          <span className="text-xs text-gray-500 font-mono truncate mr-2">{shareUrl}</span>
          <button 
            onClick={() => {
                navigator.clipboard.writeText(shareUrl);
            }}
            className="text-yellow-500 hover:text-yellow-400"
          >
            <Share2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
export default function App() {
  const [user, setUser] = useState(null);
  const [tripId, setTripId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tripData, setTripData] = useState(DEFAULT_TRIP);
  const [activeDayId, setActiveDayId] = useState("day_1");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const [shareToastMessage, setShareToastMessage] = useState("");
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      try {
        await signInAnonymously(auth);
      } catch (error) {
        console.error("Auth failed", error);
        setLoading(false);
      }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  const switchToTrip = async (newTripId, isNew = false) => {
    setLoading(true);
    setTripId(newTripId);
    setError(null);

    const newRelativePath = `?trip=${newTripId}`;
    try { window.history.pushState({ path: newRelativePath }, '', newRelativePath); } catch (e) {}

    if (isNew) {
      const docRef = getTripRef(newTripId);
      try {
        await setDoc(docRef, DEFAULT_TRIP);
        setTripData(DEFAULT_TRIP);
        setActiveDayId(DEFAULT_TRIP.days[0].id);
      } catch (err) {
        setError("無法建立新行程");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) return;
    let targetTripId = tripId;
    if (!targetTripId) {
      const urlId = getTripIdFromUrl();
      if (urlId) {
        targetTripId = urlId;
        setTripId(urlId);
      } else {
        const newId = generateId();
        switchToTrip(newId, true);
        return; 
      }
    }
    const docRef = getTripRef(targetTripId);
    const unsub = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTripData(prev => ({ ...prev, ...data }));
        if (data.days && data.days.length > 0) {
          const currentDayStillExists = data.days.some(d => d.id === activeDayId);
          if (!activeDayId || !currentDayStillExists) {
            setActiveDayId(data.days[0].id);
          }
        }
      } else {
        setError("找不到此行程代碼");
      }
      setLoading(false);
    }, (err) => {
      setError("讀取錯誤");
      setLoading(false);
    });
    return () => unsub();
  }, [user, tripId]); 

  const saveTrip = async (newData) => {
    setTripData(newData);
    if (!tripId || !user) return;
    try { await setDoc(getTripRef(tripId), newData); } catch (e) {}
  };

  const updateActivity = (dayId, activityId, field, value) => {
    const newDays = tripData.days.map(day => {
      if (day.id !== dayId) return day;
      const newActivities = day.activities.map(act => {
        if (act.id !== activityId) return act;
        return { ...act, [field]: value };
      });
      if (field === 'time') newActivities.sort((a, b) => a.time.localeCompare(b.time));
      return { ...day, activities: newActivities };
    });
    saveTrip({ ...tripData, days: newDays });
  };

  const updateDayTheme = (dayId, field, value) => {
    const newDays = tripData.days.map(day => {
      if (day.id !== dayId) return day;
      return { ...day, [field]: value };
    });
    saveTrip({ ...tripData, days: newDays });
  };

  const addActivity = (dayId) => {
    const newActivity = {
      id: generateId(),
      time: "12:00",
      title: "新活動",
      subtitle: "備註",
      type: "sightseeing",
      location: ""
    };
    const newDays = tripData.days.map(day => {
      if (day.id !== dayId) return day;
      return { ...day, activities: [...day.activities, newActivity].sort((a, b) => a.time.localeCompare(b.time)) };
    });
    saveTrip({ ...tripData, days: newDays });
  };

  const deleteActivity = (dayId, activityId) => {
    const newDays = tripData.days.map(day => {
      if (day.id !== dayId) return day;
      return { ...day, activities: day.activities.filter(a => a.id !== activityId) };
    });
    saveTrip({ ...tripData, days: newDays });
  };

  const addDay = () => {
    const newDayNum = tripData.days.length + 1;
    const newDay = {
      id: generateId(),
      dayNum: newDayNum,
      theme: "新的一天",
      themeTags: "主題",
      activities: []
    };
    saveTrip({ ...tripData, days: [...tripData.days, newDay] });
    setActiveDayId(newDay.id);
  };

  const handleShare = () => {
    let textToCopy = `${new URL(window.location.href).origin}${window.location.pathname}?trip=${tripId}`;
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      if (document.execCommand('copy')) {
        setShareToastMessage("已複製連結");
        setShowShareToast(true);
        setTimeout(() => setShowShareToast(false), 3000);
      }
    } catch (e) {}
    document.body.removeChild(textArea);
  };

  // Icon Mapping
  const getTypeIcon = (type) => {
    const props = { size: 16, strokeWidth: 2.5 };
    switch (type) {
      case 'food': return <Utensils {...props} className="text-orange-500" />;
      case 'transport': return <ChevronRight {...props} className="text-blue-400" />;
      case 'plane': return <Plane {...props} className="text-blue-400" />;
      case 'car': return <Car {...props} className="text-blue-400" />;
      case 'stay': return <Bed {...props} className="text-indigo-400" />;
      case 'camera': return <Camera {...props} className="text-green-500" />;
      case 'coffee': return <Coffee {...props} className="text-amber-500" />;
      case 'sightseeing': return <Star {...props} className="text-yellow-500" />;
      case 'boat': return <MapPin {...props} className="text-teal-400" />;
      default: return <MapPin {...props} className="text-gray-400" />;
    }
  };

  const getIconBgColor = (type) => {
    switch (type) {
      case 'food': return 'bg-orange-500/10 border-orange-500/30';
      case 'plane':
      case 'car':
      case 'transport': return 'bg-blue-500/10 border-blue-500/30';
      case 'stay': return 'bg-indigo-500/10 border-indigo-500/30';
      case 'camera': return 'bg-green-500/10 border-green-500/30';
      case 'coffee': return 'bg-amber-500/10 border-amber-500/30';
      case 'sightseeing': return 'bg-yellow-500/10 border-yellow-500/30';
      default: return 'bg-gray-700/30 border-gray-600';
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#101010] text-yellow-500">
        <RefreshCw size={32} className="animate-spin" />
      </div>
    );
  }

  const activeDay = (tripData.days || []).find(d => d.id === activeDayId) || (tripData.days || [])[0];

  return (
    <div className="min-h-screen bg-[#101010] text-gray-200 font-sans pb-20 selection:bg-yellow-500/30">
      
      <JoinModal isOpen={showJoinModal} onClose={() => setShowJoinModal(false)} onJoin={(id) => {setShowJoinModal(false); switchToTrip(id, false);}} />
      <QrModal isOpen={showQrModal} onClose={() => setShowQrModal(false)} tripId={tripId} />

      {/* Header */}
      <div className="bg-[#101010] px-5 pt-6 pb-2 sticky top-0 z-20 shadow-md">
        <div className="max-w-md mx-auto">
          {/* Title Row */}
          <div className="flex justify-between items-start mb-2">
            <div>
              <input
                className="text-2xl font-bold text-yellow-500 w-full bg-transparent outline-none placeholder-yellow-800"
                value={tripData.title}
                onChange={(e) => saveTrip({ ...tripData, title: e.target.value })}
              />
              <input 
                 className="text-xs text-gray-400 mt-1 w-full bg-transparent outline-none"
                 value={tripData.subtitle || ""}
                 placeholder="日期 | 天數 | 旅行人數"
                 onChange={(e) => saveTrip({ ...tripData, subtitle: e.target.value })}
              />
            </div>
            <div className="flex gap-3">
               <button onClick={() => setShowJoinModal(true)} title="加入行程"><LogIn size={20} className="text-gray-500 hover:text-white" /></button>
               <button onClick={() => setShowQrModal(true)} title="手機 QR Code"><QrCode size={20} className="text-gray-500 hover:text-white" /></button>
               <button onClick={handleShare} title="分享連結/代碼"><Share2 size={20} className="text-yellow-500 hover:text-yellow-400" /></button>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {(tripData.tags || []).map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full font-medium border border-orange-500/20">
                {tag}
              </span>
            ))}
             <button className="px-2 py-1 text-gray-600 text-xs border border-gray-800 rounded-full hover:border-gray-600">+</button>
          </div>

          {/* Flight Card (New) */}
          <div className="bg-[#1c1c1e] rounded-xl p-4 mb-4 border border-gray-800 flex items-center relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
            <div className="mr-4 text-blue-400"><Plane size={24} /></div>
            <div className="flex-1 grid grid-cols-2 gap-4">
                <div>
                    <div className="text-xs text-gray-500 mb-1">去程 ({tripData.flight?.outbound?.date || "Date"})</div>
                    <div className="text-sm text-gray-300 font-mono">{tripData.flight?.outbound?.code || "Flight"}</div>
                    <div className="text-xs text-gray-400">{tripData.flight?.outbound?.route || "Origin -> Dest"}</div>
                </div>
                <div>
                    <div className="text-xs text-gray-500 mb-1">回程 ({tripData.flight?.inbound?.date || "Date"})</div>
                    <div className="text-sm text-gray-300 font-mono">{tripData.flight?.inbound?.code || "Flight"}</div>
                    <div className="text-xs text-gray-400">{tripData.flight?.inbound?.route || "Origin -> Dest"}</div>
                </div>
            </div>
          </div>

          {/* Day Tabs (Underline Style) */}
          <div className="flex overflow-x-auto no-scrollbar border-b border-gray-800">
            {(tripData.days || []).map((day, index) => {
              const isActive = activeDay && activeDay.id === day.id;
              return (
                <button
                  key={day.id}
                  onClick={() => setActiveDayId(day.id)}
                  className={`flex-shrink-0 px-4 py-3 text-sm font-medium transition-all border-b-2 relative ${
                    isActive
                      ? 'text-yellow-500 border-yellow-500'
                      : 'text-gray-500 border-transparent hover:text-gray-300'
                  }`}
                >
                  Day {index + 1}
                </button>
              );
            })}
            <button onClick={addDay} className="px-4 py-3 text-gray-600 hover:text-yellow-500"><Plus size={16} /></button>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-5 py-4">
        {/* Day Theme Card */}
        {activeDay && (
            <div className="bg-[#1c1c1e] rounded-xl p-4 mb-6 border border-gray-800">
                <input 
                    className="text-lg font-bold text-orange-400 w-full bg-transparent outline-none mb-1 placeholder-gray-700"
                    value={activeDay.theme || ""}
                    placeholder="今日主題..."
                    onChange={(e) => updateDayTheme(activeDay.id, 'theme', e.target.value)}
                />
                <div className="flex items-center text-xs text-gray-500">
                    <span>{tripData.startDate} (Day {activeDay.dayNum})</span>
                    <span className="mx-2">|</span>
                    <span className="text-gray-400">主題：</span>
                    <input 
                        className="bg-transparent outline-none text-gray-400 ml-1" 
                        value={activeDay.themeTags || ""} 
                        placeholder="自然・購物"
                        onChange={(e) => updateDayTheme(activeDay.id, 'themeTags', e.target.value)}
                    />
                </div>
            </div>
        )}

        {/* Timeline Activities */}
        <div className="space-y-0 relative">
          <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
             <Clock size={16} /> <span>每日行程時間軸</span>
          </div>

          {activeDay && (activeDay.activities || []).map((activity, idx) => (
            <div key={activity.id} className="relative pl-0 group flex">
                
                {/* 1. Time Column */}
                <div className="w-14 pt-1 pr-2 flex-shrink-0 text-right">
                    <input
                        type="time"
                        value={activity.time}
                        onChange={(e) => updateActivity(activeDay.id, activity.id, 'time', e.target.value)}
                        className="text-sm font-bold text-gray-300 bg-transparent w-full text-right outline-none focus:text-yellow-500 font-mono"
                    />
                </div>

                {/* 2. Timeline Line & Icon */}
                <div className="relative flex flex-col items-center mr-4">
                    {/* Vertical Line */}
                    <div className={`absolute w-[2px] bg-[#333] ${idx === 0 ? 'top-3 h-[calc(100%-12px)]' : 'h-full'} ${idx === activeDay.activities.length - 1 ? 'h-4' : ''}`}></div>
                    
                    {/* Icon Circle */}
                    <div className={`relative z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform hover:scale-110 ${getIconBgColor(activity.type)}`}>
                        {getTypeIcon(activity.type)}
                    </div>
                </div>

                {/* 3. Content Column */}
                <div className="flex-1 pb-8 min-w-0">
                    <div className="flex justify-between items-start group-hover:bg-[#1c1c1e] p-2 -mt-2 -ml-2 rounded-lg transition-colors">
                        <div className="flex-1">
                            <input 
                                value={activity.title}
                                placeholder="行程標題"
                                onChange={(e) => updateActivity(activeDay.id, activity.id, 'title', e.target.value)}
                                className="w-full text-base font-bold text-gray-200 bg-transparent outline-none placeholder-gray-700"
                            />
                            <div className="flex flex-col mt-0.5">
                                <input 
                                    value={activity.subtitle || ""}
                                    placeholder="備註 / 航班號 / 費用"
                                    onChange={(e) => updateActivity(activeDay.id, activity.id, 'subtitle', e.target.value)}
                                    className="text-xs text-gray-500 bg-transparent outline-none placeholder-gray-800"
                                />
                                {/* Location Link */}
                                <div className="flex items-center mt-1">
                                    <input 
                                        value={activity.location}
                                        placeholder="地點..."
                                        onChange={(e) => updateActivity(activeDay.id, activity.id, 'location', e.target.value)}
                                        className="text-xs text-gray-500 bg-transparent outline-none placeholder-gray-800 min-w-0"
                                    />
                                    {activity.location && (
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.location)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-2 text-yellow-600 hover:text-yellow-500"
                                        >
                                            <Map size={12} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Type Selector & Delete (Hidden until hover) */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2 ml-2">
                            <select
                                value={activity.type}
                                onChange={(e) => updateActivity(activeDay.id, activity.id, 'type', e.target.value)}
                                className="bg-gray-800 text-xs text-gray-400 rounded px-1 py-0.5 outline-none border border-gray-700"
                            >
                                <option value="plane">飛機</option>
                                <option value="car">汽車</option>
                                <option value="transport">交通</option>
                                <option value="food">餐廳</option>
                                <option value="stay">住宿</option>
                                <option value="sightseeing">景點</option>
                                <option value="camera">拍照</option>
                            </select>
                            <button onClick={() => deleteActivity(activeDay.id, activity.id)} className="text-gray-600 hover:text-red-500 self-end">
                                <Trash2 size={14} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
          ))}

          {/* Add Button */}
          {activeDay && (
            <div className="pl-14 flex items-center gap-4">
               <div className="w-8 flex justify-center"><div className="w-[2px] h-4 bg-[#333]"></div></div>
               <button
                onClick={() => addActivity(activeDay.id)}
                className="flex items-center gap-2 text-gray-500 hover:text-yellow-500 text-sm py-2"
              >
                <div className="w-6 h-6 rounded-full border border-dashed border-gray-600 flex items-center justify-center">
                    <Plus size={14} />
                </div>
                新增行程
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Toast */}
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 transition-all ${showShareToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <Check size={16} /> {shareToastMessage}
      </div>

    </div>
  );
}