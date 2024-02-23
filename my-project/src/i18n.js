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
                heroP: "Experience the essence of tradition with Mahashree Cow Ghee. Prue, rich, and authentic",
                sqH1: "WELCOME",
                sqH2: "TO THE WORLD OF",
                sqH3: "MAHASHREE",
                sqP1: " where tradition meets purity inevery",
                sqp2: "drop of our golden goodness",
                sqB: "Know More",
                galleryOb: "See All",
                accH1: "OUR",
                accH2: "PRODUCTS",
                accH3: "ARE",
                accP1: "where tradition meets purity inevery drop of",
                accP2: "our golden goodness",
                accT1: "The Essence of Purity:",
                accT12: "Experience the purity of our ghee, meticulously crafed from the finest quality ingrediants.",
                accT2: "Health & Wellness Benefits:",
                accT22: "We source only the freshest, ethically produced milk to ensure each batch of ghee is rich in flavor and nutrition, free from additives or preservatives.",
                accT3: "Embrace Tradition:",
                accT32: "Discover the meticulous process behing our ghee-making, where tradition methods cutting-edge technology.",
                accT4: "Our Promise to You:",
                accT42: "From hand-churning to precise temperature control, everystep is carefully orchestrated to unlock the full potential ofour premium ingrediants.",
                subAh:"ADDRESS",
                subAp: "92, Sanchar Nagar, Indore",
                subEh: "EMAIL",
                subEa1: "customercare@",
                subEa2: "mahashreedairies.com",
                subPh: "PHONE",
                subPp1: "09522444444",
                subPp2:"09926550022"

            }
        },
        hindi: {
            translation:{
                heroH1:"working"
            }
        }
    }
})
