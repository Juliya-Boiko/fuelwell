import { PieChart } from 'react-minimal-pie-chart';

export const Donut = ({ value, label }) => {
  return (
    <div className='donut'>
      <PieChart
        animate
        animationDuration={500}
        animationEasing="ease-out"
        reveal={value}
        startAngle={250}
        data={[{ value: value, color: '#fff' }]}
        totalValue={100}
        lineWidth={30} />
      <div className='donut__label'>
        <span>{label}</span>
        <span>{value}%</span>
      </div>
    </div>
  );
};