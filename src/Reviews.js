import React from 'react';
import Review from "./Review";
import MetaTags from "react-meta-tags";

class Reviews extends React.Component {
    render() {
        return <div className="page">
            <h2 className="title">Отзывы</h2>
            <h3 className="subtitle">Ниже есть отзывы моих клиентов</h3>
            <MetaTags>
                <title>IvanSey Landing Page - Отзывы</title>
                <meta name="description" content="Здесь опубликованы все отзывы"/>
                <meta name="og:title" content="IvanSey Landing Page - Отзывы"/>
                <meta name="og:description" content="Здесь опубликованы все отзывы"/>
            </MetaTags>
            <div className="row">
                <Review title="Екатерина Булейко"
                        desc="Копирайтер"
                        tags="Иван делал верстку сайта-портфолио. Я, если честно, по всех этих функциях ничего не смыслю и понятия не имела, как сделать так, чтобы было и удобно, и привлекательно. Абсолютно ВСЁ подсказал, дал советы, объяснил доступно, помог настроить домен и хостинг, сделал удобную панель для самостоятельных правок. Так получилось, что мне приходилось в процессе много что менять. Все изменения вносил мегабыстро, был постоянно на связи: ВЕЖЛИВО отвечал на любые вопросы и никаких «претензий» не высказывал по количеству правок! Сама работа была выполнена буквально за несколько дней, цена приятная, человек – тоже! От души рекомендую поработать с Ваней, если хочется быстро, качественно и за адекватную стоимость. Молодой, но уже, безусловно, талантливый программист."/>
            </div>
        </div>
    }
}

export default Reviews;
