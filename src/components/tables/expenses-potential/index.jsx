

export const ExpensesPotential = ({ values }) => {
  const { currency, fuelConsumption, fuelCost, mileage } = values;
  const formattedMileage = mileage.replace(' ', '')

  const expenseCalc = () => {
    const total = (Number(fuelConsumption) / 100 * Number(formattedMileage) * Number(fuelCost) / 100 * 10);
    return Math.round(total);
  };

  const emissionCalc = () => {
    const total = (Number(fuelConsumption) / 100 * Number(formattedMileage) * 2.68) / 100 * 39;
    return Math.round(total);
  };

  return (
    <div className="expenses-potential">
      <div className="expenses-potential__header">
        potential savings with FuelWell
      </div>
      <div className="expenses-potential__wrapper">
        <div className="expenses-potential__block expenses-potential__block--bordered">
          <p>Fuel cost {currency}</p>
          <p className="expenses-potential__value">{expenseCalc()}</p>
        </div>
        <div className="expenses-potential__block">
          <p>СО2 emmision (kg)</p>
          <p className="expenses-potential__value">{emissionCalc()}</p>
        </div>
      </div>
    </div>
  );
};