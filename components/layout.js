import MainPage from "./mainpage";

const Layout = ({children}) => {
  return(
    <div className="main-content">
        <MainPage/>
        {children}
    </div>
  )
}

export default Layout;