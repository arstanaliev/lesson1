import React from "react";

const Section = () => {
    return (
        <div id="section">
            <div className="container">
                <div className="section">
                    <h1 className="section-lesson">Вкусные рецепты</h1>
                    <div className="section-texts">
                        <h1>Запеченный лосось</h1>
                        <p>
                            Лосось <br/>
                            Кедровые орешки <br/>
                            Butter Lettuce <br/>
                            Кабачки <br/>
                            Оливковое масло <br/>
                            Чеснок
                        </p>
                        <h1>Инструкция по приготовлению</h1>
                        <p className="">
                            Разогрейте духовку до 350 градусов., <br/>
                            Намажьте оливковым маслом стеклянную форму для запекания, <br/>
                            Добавьте в блюдо лосось, чеснок и кедровые орехи, <br/>
                            Выпекать 15 мин., <br/>
                            Добавьте желтую тыкву и снова поставьте в духовку на 30 минут, <br/>
                            Достаньте из духовки и дайте остыть в течение 15 минут. Добавьте салат и подавайте на стол.
                        </p>
                    </div>
                    <div className="section-texts">
                        <h1>Рыбный такос</h1>
                        <p>
                            Сиг <br/>
                            Сыр <br/>
                            Салат Айсбер <br/>
                            Томаты <br/>
                            Лепешки
                        </p>
                        <h1>Инструкция по приготовлению</h1>
                        <p>
                            Готовить рыбу на гриле до горячего состояния, <br/>
                            Положите рыбу на 3 лепешки., <br/>
                            Посыпьте их салатом, помидорами и сыром.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;