import React from 'react';


const Lang = (props) => {
    console.log(props.props)
    const mergedLanguages = [];
    props.props.forEach((array) => { array.map((lang) => { mergedLanguages.push(lang) }) })
    const uniqueLanguages = [...new Set(mergedLanguages)]
    console.log(mergedLanguages);
    console.log(uniqueLanguages);

    const countLanguageUsed = {};
    mergedLanguages.forEach(function (i) { countLanguageUsed[i] = (countLanguageUsed[i] || 0) + 1; });
    console.log(countLanguageUsed);

    const languageValue = Object.values(countLanguageUsed);
    const totalLanguageValue = languageValue.reduce((total, num) => total + num)
    console.log(totalLanguageValue)

    for (let key in countLanguageUsed) {
        let value = countLanguageUsed[key];
        let valuePercentage = value * 100 / totalLanguageValue;
        console.log(key, valuePercentage);
    }
    return (
        <div className="languages">
            <h2>Languages</h2>

        </div>
    )

}

export default Lang
