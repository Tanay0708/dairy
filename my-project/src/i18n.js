import i18n, { init } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";


i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    lng:"en",
    resources: {
        en: {
            translation:{
                heroH1: "DISCOVER THE",
                heroH2: "RICHNESS OF",
                heroH3:" MAHASHREE COW GHEE",
                heroP: "Experience the essence of tradition with Mahashree Cow Ghee. Pure, rich, and authentic.",
                sqH1: "WELCOME",
                sqH2: "TO THE WORLD OF",
                sqH3: "MAHASHREE",
                sqP1: " where tradition meets purity in every",
                sqp2: "drop of our golden goodness",
                sqB: "Know More",
                galleryOb: "See All",
                accH1: "OUR",
                accH2: "PRODUCTS",
                accH3: "ARE",
                accP1: "Where tradition meets purity in every drop of",
                accP2: "our golden goodness",
                accT1: "The Essence of Purity:",
                accT12: "Experience the purity of our ghee, meticulously crafted from the finest quality ingredients.",
                accT2: "Health & Wellness Benefits:",
                accT22: "We source only the freshest, ethically produced milk to ensure each batch of ghee is rich in flavor and nutrition, free from additives or preservatives.",
                accT3: "Embrace Tradition:",
                accT32: "Discover the meticulous process behind our ghee-making, where traditional methods meet cutting-edge technology.",
                accT4: "Our Promise to You:",
                accT42: "From hand-churning to precise temperature control, every step is carefully orchestrated to unlock the full potential of our premium ingredients.",
                subC1 :"Contact",
                subC2: "us",
                subPn: "Name",
                subPe: "Email",
                subPm: "Message",
                subB:"Send",
                subAh:"ADDRESS",
                subAp: "92, Sanchar Nagar, Indore",
                subEh: "EMAIL",
                subPh: "PHONE",
                footP: " We have a vision of setting a new benchmark in the milk industry with superior-quality dairy products, a sustainable ecosystem and a thriving relationship with our farmers.",
                navH:"HOME",
                navA:"ABOUT",
                navP:"PRODUCTS",
                navG:"GALLERY",
                navC:"CONTACT US",
                aboutP1: " Our journey begins with a passion for preserving the essence of tradition, crafting premium ghee that embodies the rich heritage of our culture. ",
                aboutP2: "Delve into the heart of our story, where generations of expertise merge with modern innovation.",
                aboutP3: "Rooted in time-honored techniques passed down through our family, MAHASHREE Ghee is the culmination of years of dedication to perfecting the art of ghee-making."

            }
        },
        hindi: {
            translation:{
                heroH1:"महाश्री",
                heroH2: " गाय घी की ",
                heroH3:"समृद्धि खोजें",
                heroP:"महाश्री गाय के घी के साथ परंपरा का सार अनुभव करें। सच्चा, समृद्ध और प्रामाणिक",
                sqH1:"महाश्री की ",
                sqH2:"दुनिया में आपका",
                sqH3:" स्वागत है",
                sqP1:"जहां परंपरा हमारी स्वर्णिम अच्छाई की",
                sqp2:" हर बूंद में शुद्धता से मिलती है",
                sqB:"अधिक जाने",
                galleryOb:"सभी देखें",
                accH1:"हमारे ",
                accH2:"उत्पाद",
                accH3:"हैं",
                accP1:"जहां परंपरा हमारी स्वर्णिम अच्छाई की",
                accP2:"हर बूंद में शुद्धता से मिलती है",
                accT1:"पवित्रता का सार:",
                accT12:"बेहतरीन गुणवत्ता वाली सामग्रियों से सावधानीपूर्वक तैयार किए गए हमारे घी की शुद्धता का अनुभव करें।",
                accT2:"स्वास्थ्य एवं कल्याण लाभ:",
                accT22:"हम केवल ताजा, नैतिक रूप से उत्पादित दूध का स्रोत बनाते हैं ताकि यह सुनिश्चित किया जा सके कि घी का प्रत्येक बैच स्वाद और पोषण से भरपूर हो, एडिटिव्स या परिरक्षकों से मुक्त हो।",
                accT3:"परंपरा को अपनाएं:",
                accT32:"हमारे घी बनाने के पीछे की सूक्ष्म प्रक्रिया की खोज करें, जहां पारंपरिक तकनीक अत्याधुनिक तकनीक अपनाती है।",
                accT4:"हमारा आपसे वादा:",
                accT42:"हाथ से मंथन से लेकर सटीक तापमान नियंत्रण तक, हमारे प्रीमियम अवयवों की पूरी क्षमता को अनलॉक करने के लिए हर कदम सावधानीपूर्वक व्यवस्थित किया जाता है।",
                subAh:"पता",
                subAp:"92, संचार नगर, इंदौर",
                subEh:"ईमेल",
                subPh:"फ़ोन",
                subC1:"संपर्क",
                subC2:"करें",
                subPn:"नाम",
                subPe:"ईमेल",
                subPm:"संदेश",
                subB:"भेजे",
                footP:"बेहतर गुणवत्ता वाले डेयरी उत्पादों, एक स्थायी पारिस्थितिकी तंत्र और हमारे किसानों के साथ एक संपन्न संबंध के साथ दूध उद्योग में एक नया मानदंड स्थापित करने का हमारा दृष्टिकोण है।",
                navH:"होम",
                navA:"अबाउट",
                navP:"उत्पाद",
                navG:"गैलरी",
                navC:"संपर्क करें",
                aboutP1:"हमारी यात्रा परंपरा के सार को संरक्षित करने, प्रीमियम घी तैयार करने के जुनून के साथ शुरू होती है जो हमारी संस्कृति की समृद्ध विरासत का प्रतीक है।",
                aboutP2:"हमारी कहानी के मर्म में उतरें, जहां पीढ़ियों की विशेषज्ञता आधुनिक नवाचार के साथ विलीन हो जाती है।",
                aboutP3:"हमारे परिवार द्वारा पारित समय-सम्मानित तकनीकों में निहित, महाश्री घी, घी बनाने की कला को पूर्ण करने के लिए वर्षों के समर्पण की परिणति है।"
            }
        }
    }
})
