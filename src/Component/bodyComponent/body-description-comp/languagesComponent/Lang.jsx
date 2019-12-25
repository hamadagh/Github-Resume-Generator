import React from 'react';
import './lang.css'


const Lang = (props) => {

    const mergedLanguages = [];
    props.props.forEach((array) => { array.map((lang) => { return mergedLanguages.push(lang) }) })
    const uniqueLanguages = [...new Set(mergedLanguages)]
    const countLanguageUsed = {};
    mergedLanguages.forEach(function (i) { countLanguageUsed[i] = (countLanguageUsed[i] || 0) + 1; });
    console.log(uniqueLanguages);

    const languageValue = Object.values(countLanguageUsed);
    const totalLanguageValue = languageValue.reduce((total, num) => total + num)
    var arrayOfLangAndPercentage = [];
    for (let key in countLanguageUsed) {
        let value = countLanguageUsed[key];
        let valuePercentage = Math.floor(value * 100 / totalLanguageValue);

        arrayOfLangAndPercentage.push({ key, valuePercentage });

    }
    return (
        <div className="languages">
            <h2>Languages</h2>
            <div className="wrapper">
                {
                    arrayOfLangAndPercentage.map((lang) => {
                        return (
                            <div className="lang-container" key={lang.key}>
                                <span className="lang-title" >{lang.key}</span> <span className="lang-perc">{lang.valuePercentage}%</span>
                                <div className="bar-container">
                                    <div className="progressive-bar" style={{ "width": `${lang.valuePercentage}%` }}></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )

}

export default Lang
