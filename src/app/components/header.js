
const Header = ({ title }) => {
  return (
    <div className="flex items-center w-8/12 h-20 bg-primary p-5 pl-12 rounded-2xl mt-14 shadow-lg"
      style={{ boxShadow: '0 10px 20px 10px rgba(134, 104, 255, 0.2)' }}>
      <h1 className="text-2xl font-semibold text-white">{title}</h1>
    </div>
  );
};

export default Header;
