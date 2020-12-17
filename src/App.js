import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";
import SignIn from './components/subComponents/SignIn'
import Header from './components/layouts/header';
import Landing from './components/pages/landingPage'
import SignUp from './components/subComponents/signUp';
import Search from "./components/pages/searchPage"
import InfluencePage from './components/pages/influencerLinkPage'
import InfluencePageOffering from "./components/pages/influencerOfferingPage"
import InfluencerDealInProgress from './components/pages/InfluencerDealInProgress';
import SignInn from './components/pages/signInn';
import EditProduct from './components/subComponents/EditProduct'

function App() {
  return (
   
        
        <div style={{
          fontFamily : 'Jaldi, sans-serif'
        }}>
          <Header />
          <div className="container mt-5">
              <Switch>
              <Route path="/signUp" component={SignUp}/>
              <Route path="/signIn" component={SignIn}/>
              <Route path="/signInn" component={SignInn}/>
              <Route path="/searchMarketPlace" component={Search}/>
              <Route path="/InfluencePage" component={InfluencePage} />
              <Route path="/InfluencePageOffering" component={InfluencePageOffering} />
              <Route path="/InfluencerDealInProgress" component={InfluencerDealInProgress} />
              <Route path="/editProduct" component={EditProduct} />
              <Route path="/" component={Landing}/>
       
            </Switch>
          </div>
        </div>
        
        
  );
}

export default App;
