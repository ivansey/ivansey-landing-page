import React from 'react';
import ExamplePost from "./ExamplePost";

class Example extends React.Component {
    render() {
        return <div className="page">
            <h2 className="title">Примеры работ</h2>
            <h3 className="subtitle">Примеров у меня немного, но я готов предложить небольшую скидку...</h3>
            <div className="row">
                <ExamplePost title="IvanSey Dev Blog" desc="Мой личный блог о веб-разработке и прочем" tags="Блог, SASS, NodeJS, Express, Pug, jQuery, MongoDB" url="http://ivansey.ru/" urlTitle="Открыть блог"/>
            </div>
        </div>
    }
}

export default Example;
