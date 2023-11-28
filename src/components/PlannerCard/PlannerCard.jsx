import React, { useState, useEffect } from 'react';
import Plus from "../../assets/plus.png";
import "../PlannerCard/PlannerCard.scss";

function PlannerCard() {
   const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cards')) || [{ title: 'Monday', items: ['random text here'] },
   { title: 'Tuesday', items: ['random text here'] }]);

   useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
}, [cards]);

    const addCard = () => {
        setCards([...cards, { title: 'New Card', items: [] }]);
    };

    const addItem = (index) => {
        const newCards = [...cards];
        newCards[index].items.push('New Item');
        setCards(newCards);
    };

    const editTitle = (index, newTitle) => {
        const newCards = [...cards];
        newCards[index].title = newTitle;
        setCards(newCards);
    };

    const editItem = (cardIndex, itemIndex, newItem) => {
        const newCards = [...cards];
        newCards[cardIndex].items[itemIndex] = newItem;
        setCards(newCards);
    };

    const deleteItem = (cardIndex, itemIndex) => {
        const newCards = [...cards];
        newCards[cardIndex].items.splice(itemIndex, 1);
        setCards(newCards);
    };



    return (
        <div className="planner-card">
            <h2 className="planner-card__title">Daily Planner</h2>
            <button className='planner-card__card-btn' onClick={addCard}>Add Card</button>
            {cards.map((card, index) => (
                <div key={index} className="planner-card__container">
                    <div className="planner-card__daily">
                        <input className="planner-card__text" type="text" value={card.title} onChange={(e) => editTitle(index, e.target.value)} />
                        <button className='planner-card__add-btn' onClick={() => addItem(index)}>
                          <img className='planner-card__img' src={Plus} alt='add icon'></img>
                        </button>
                        {card.items.map((item, i) => (
                            <form key={i} className="form">
                                <input type="checkbox" name="checklist" className="form-input"></input>
                                <input className="planner-card__text" type="text" value={item} onChange={(e) => editItem(index, i, e.target.value)} />
                                <button className="planner-card__delete-btn" onClick={() => deleteItem(index, i)}>X</button>
                            </form>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PlannerCard;