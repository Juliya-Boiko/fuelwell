import { NumericFormat } from 'react-number-format';

export const InputNumeric = ({ value, name, onChange, maxValue, className, ...settings }) => {
  return (
    <NumericFormat value={value} name={name} onChange={onChange}
      {...settings}
      isAllowed={(values) => {
        if (!values.value) return true;
        const { floatValue } = values;
        return floatValue <= maxValue;
      }}
      placeholder='insert value' className={className}
    />
  );
};