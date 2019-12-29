import React from 'react';
import ExamplePost from "../components/ExamplePost";
import MetaTags from "react-meta-tags";

class Example extends React.Component {
    render() {
        return <div className="page">
            <h2 className="title">Примеры работ</h2>
            <h3 className="subtitle">Примеров у меня немного, но я готов предложить небольшую скидку...</h3>
            <MetaTags>
                <title>IvanSey Landing Page - Примеры работ</title>
                <meta name="description" content="Здесь опубликован список всех моих работ"/>
                <meta name="og:title" content="IvanSey Landing Page - Примеры работ"/>
                <meta name="og:description" content="Здесь опубликован список всех моих работ"/>
            </MetaTags>
            <div className="row">
                <ExamplePost title="Портфолио Екатерины Булейко"
                             desc="Личное портфолио копирайтера с небольшой админкой для управления примерами работ, отзывами и опповещением через ВК о заказах"
                             tags="Портфолио, SASS, JS, NodeJS, Express, MongoDB, ReactJS" url="http://katttarinawriter.ru/"
                             urlTitle="Открыть сайт"/>
                <ExamplePost title="Reklainer"
                             desc="Одностраничный лендинг с возможностью выбора товара и его оплаты"
                             tags="Лендинг, продажи, SASS, JS, ReactJS, API, онлайн-оплата" url="https://reklainer.com/"
                             urlTitle="Открыть сайт"/>
                <ExamplePost title="Какой сегодня праздник?"
                             desc="Сервис для просмотра праздников на любой день"
                             tags="Сервис, даты, PHP, JS, HTML, CSS, Bootstrap, MySQL\MariaDB, Apache, админ-панель" url="https://kakoysegodnyaprazdnik.info/"
                             urlTitle="Открыть сайт"/>
            </div>
        </div>
    }
}

export default Example;
