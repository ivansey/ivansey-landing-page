import React from 'react';
import Technology from "./Technology";

class StackFront extends React.Component {
    render() {
        return <div className="page">
            <h2 className="title">Стек технологий дизайна</h2>
            <h3 className="subtitle">Я занимаюсь версткой страниц и созданием веб-приложений. Ниже перечислю изученные технологии:</h3>
            <div className="row">
                <Technology icon="language-html5" title="HTML5"/>
                <Technology icon="language-css3" title="CSS3"/>
                <Technology icon="sass" title="SASS (SCSS)"/>
                <Technology icon="language-javascript" title="JavaScript (ES6)"/>
                <Technology icon="jquery" title="jQuery"/>
                <Technology icon="react" title="ReactJS"/>
            </div>
        </div>
    }
}

export default StackFront;
