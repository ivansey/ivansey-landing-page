import React from 'react';
import StackFront from "../components/StackFront";
import StackBack from "../components/StackBack";
import MetaTags from "react-meta-tags";

class About extends React.Component {
    render() {
        return <div>
            <div className="page">
                <MetaTags>
                    <title>IvanSey Landing Page - Главная</title>
                    <meta name="description" content="Это мой небольшой лендинг. Тут я опишу, чем я занимаюсь, с чем работаю."/>
                    <meta name="og:title" content="IvanSey Landing Page - Главная"/>
                    <meta name="og:description" content="Это мой небольшой лендинг. Тут я опишу, чем я занимаюсь, с чем работаю."/>
                </MetaTags>
                <h1 className="title">Обо мне</h1>
                <h2 className="subtitle">Иван Панасюк</h2>
                <div className="text">Занимаюсь FullStack разработкой веб приложений. Тольк недавно начал занимать
                    фрилансов и примеров работ немного
                </div>
                <div className="text">Создаю лендинги, прочие одностраничные и многостраничные сайты, порталы, блоги,
                    магазины, интересные сервисы и так далее
                </div>
            </div>
            <StackFront/>
            <StackBack/>
        </div>
    }
}

export default About;
