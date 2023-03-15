import React from "react";
import data from "../data/data";

const Home = () => {
    return (
        <div className="container">
            <div className="menu">
                {
                    data.map(el => (
                        <div>
                            <h1>{el.name}</h1>
                            {
                                el.ingredients.map(ingredients => (
                                    <ul>
                                        <li>{ingredients.name + " - " + ingredients.amount + ingredients.measurement}</li>
                                    </ul>
                                ))
                            }
                            {
                                el.steps.map(steps => (
                                    <div>
                                        <p>{steps}</p>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home