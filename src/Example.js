import React from 'react';
import ExamplePost from "./ExamplePost";

class Example extends React.Component {
    render() {
        return <div className="page">
            <h2 className="title">Примеры работ</h2>
            <h3 className="subtitle">Примеров у меня немного, но я готов предложить небольшую скидку...</h3>
            <div className="row">
                <ExamplePost title="Портфолио Екатерины Булейко"
                             desc="Личное портфолио копирайтера с небольшой админкой для управления примерами работ, отзывами и опповещением через ВК о заказах"
                             tags="Портфолио, SASS, NodeJS, Express, MongoDB, ReactJS" url="http://katttarinawriter.ru/"
                             urlTitle="Открыть сайт"/>
            </div>
        </div>
    }
}

export default Example;
