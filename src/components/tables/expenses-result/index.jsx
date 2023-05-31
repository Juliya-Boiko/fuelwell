export const ExpensesResult = ({ values }) => {
  const { currency, fuelConsumption, fuelCost, mileage } = values;
  const formattedMileage = mileage.replace(' ', '')

  const expenseCalc = () => {
    const total = Number(fuelConsumption) / 100 * Number(formattedMileage) * Number(fuelCost);
    return Math.round(total);
  };

  const emissionCalc = () => {
    const total = Number(fuelConsumption) / 100 * Number(formattedMileage) * 2.68;
    return Math.round(total);
  };

  return (
    <div className="expenses-result">
      <div className="expenses-result__header">
        There is a solution for better annual results* 
      </div>
      <div className="expenses-result__wrapper">
        <div className="expenses-result__block expenses-result__block--bordered">
          <p>cost spent on fuel {currency}/1year</p>
          <p className="expenses-result__value">{expenseCalc()}</p>
        </div>
        <div className="expenses-result__block">
          <p>СО2 emmision (kg)</p>
          <p className="expenses-result__value">{emissionCalc()}</p>
        </div>
      </div>
    </div>
  );
};