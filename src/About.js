import React from 'react';
import StackFront from "./StackFront";
import StackBack from "./StackBack";

class About extends React.Component {
    render() {
        return <div>
            <div className="page">
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
