import "../PlannerCard/PlannerCard.scss";

function PlannerCard() {
    return (
        <div className="planner-card">
            <h2 className="planner-card__title">Daily Planner</h2>
            <div className="planner-card__container">
                <div className="planner-card__daily">
                    <span className="planner-card__daily-title">Monday</span>
                    <form className="form">
                        <input type="checkbox" name="checklist" className="form-input"></input>
                        <label className="form-label">random text here</label>
                    </form>
                </div>
            </div>
            <div className="planner-card__container">
                <div className="planner-card__daily">
                    <span className="planner-card__daily-title">Tuesday</span>
                    <form className="form">
                        <input type="checkbox" name="checklist" className="form-input"></input>
                        <label className="form-label">random text here</label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PlannerCard