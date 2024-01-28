import {useTranslation} from "react-i18next"
import {ChangeEvent} from "react";

const I18NextPage = () => {
    const {t, i18n} = useTranslation()
    const handleChangeLng = (e: ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value)
        localStorage.setItem("lng", e.target.value)
    }
    return (
        <div className={"I18NextPage"}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <select onChange={handleChangeLng}>
                            <option selected={localStorage.getItem("lng") === "en"}
                                    value="en">EN
                            </option>
                            <option selected={localStorage.getItem("lng") === "ru"}
                                    value="ru">RU
                            </option>
                        </select>
                        <h4>{t("hello")}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default I18NextPage;