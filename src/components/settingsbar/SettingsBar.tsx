import { LogoutButton } from "../logout/Logout"
import { MdLanguage } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa";
import './settingsBar.css'
import { useTranslation } from "react-i18next";
import { useState } from "react";
import i18n from "../../utils/functions/i18n";
import toast, { Toaster } from "react-hot-toast";

export const SettingsBar = () => {

    const [languageClicked, setLanguageClicked] = useState<boolean>(false);

    const { t } = useTranslation();

    const handleLanguage = () => {
        setLanguageClicked(!languageClicked);
    }
    const handleLanguageClicked = (lang_code: string) => {
        i18n.changeLanguage(lang_code)
        if (lang_code === "en") {
            toast("You have changed language to english!", {
                icon: '🇬🇧',
            });
        } else {
            toast("¡Has cambiado el idioma al español!", {
                icon: '🇪🇸',
            });
        }
    }

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            {!languageClicked ?
                <div className="settings-menu-bar">
                    <span className="settings-menu-language" onClick={handleLanguage}>{t('language')}<MdLanguage className='language-icon' /></span>
                    <LogoutButton />
                </div>
                :
                <div className="language-selector-container settings-menu-bar">
                    <FaAngleLeft className="back-icon-language" onClick={handleLanguage} />
                    <div className="language-selector english-language-selector" onClick={() => handleLanguageClicked('en')}>
                        <img className="english-language-flag-icon" src="https://res.cloudinary.com/dmeh7kzjm/image/upload/v1694603946/frontend-internal-use/qdp1zr8awxzhehqzt68s.png" />
                        <p>{t("english")}</p>
                    </div>
                    <div className="language-selector spanish-language-selector" onClick={() => handleLanguageClicked('es')}>
                        <img className="spanish-language-flag-icon" src="https://res.cloudinary.com/dmeh7kzjm/image/upload/v1694603938/frontend-internal-use/z2pnsuk3lqhz5w9dly8t.png" />
                        <p>{t("spanish")}</p>
                    </div>
                </div>
            }
        </>
    )
}