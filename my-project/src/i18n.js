import i18n, { init } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";


i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    lng:"en",
    resources: {
        en: {
            translation:{
                greeting: "Hello "
            }
        },
        hindi: {
            translation:{
                greeting: "one"
            }
        }
    }
})