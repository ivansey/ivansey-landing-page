import React from 'react';

class Costs extends React.Component {
    render() {
        return <div className="page">
            <h2 className="title">Цены</h2>
            <h3 className="subtitle">Ниже представлены цены на популярные услуги:</h3>
            <div className="list">
                <p>Одностраничный сайт: от 2000 Р</p>
                <p>Многостраничный сайт: от 3000 Р</p>
                <p>Блог: от 5000 Р</p>
                <p>Интернет-магазин: от 10000 Р</p>
            </div>
            <p>Так же, отдельно, вы можете заказать индивидуальный дизайн: от 700 Р</p>
        </div>
    }
}

export default Costs;
