import React, { Suspense, useTransition } from 'react'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

const trasnsitionsEn = { welcome: 'Welcome!!!' }
const trasnsitionsRu = { welcome: 'Privet!!!' }

i18next
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: trasnsitionsEn },
            ru: { translation: trasnsitionsRu },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: { escapeValue: false }
    })

const TranslateI18 = () => {
    const {t} = useTransition()
    console.log(t);

    const onChangeLang = e => {
        i18next.changeLanguage(e.target.value)
    }

    return (
        <Suspense>
            <div className='TranslateI18'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* <h1>{t('welcome')}</h1> */}
                            <select onChange={onChangeLang}>
                                <option value="en">EN</option>
                                <option value="ru">RU</option>
                            </select>
                            <div className="btn">RU</div>
                            <div className="btn">EN</div>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

export default TranslateI18