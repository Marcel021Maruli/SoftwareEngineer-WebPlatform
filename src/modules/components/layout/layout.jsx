import Navbar from "../navbar";

const Layout = ({ children, className }) => {
  return (
    <div className={`Layout ${className}`}>
      <div className="Layout-header u-position--stick">
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default Layout;
