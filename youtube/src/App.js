import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import RecommendedVideos from "./RecommendedVideos";
import './App.css';
import { BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> 

        <Switch>
          <Route path="/search/:searchTerm">
          <Sidebar />
          <SearchPage />
          </Route>
        
          <Route path="/">
          <div className="app_page">
          <Sidebar />
          <RecommendedVideos />
        </div>
          </Route>    
        </Switch>
      </Router>
    </div>
  );
}

export default App;
