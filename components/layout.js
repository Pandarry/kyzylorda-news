import Header from './header';

const Layout = ({ children }) => {
  return (
    <div className="main-content">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
