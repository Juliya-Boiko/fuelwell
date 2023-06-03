export const BrandBtn = ({ type = 'button', title, onClick }) => {
  return (
    <button type={type} onClick={onClick} className="brand-btn">
      {title}
    </button>
  );
};