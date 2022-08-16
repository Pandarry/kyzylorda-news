import ArchivePage from "./ArchivePage";
import Header from "./Header";
import LatestNewsPage from "./LatestNewsPage";
import MainNews from "./MainNews";
import MainPage from "./Mainpage";

const Layout = ({children}) => {
  return(
    <div className="main-content">
        <Header/>
        <MainPage/>
        {children}
    </div>
  )
}

export default Layout;