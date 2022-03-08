import {Navbar,NotFound,HomePage,Exchanges,Cryptocurrencies,CryptoDetails,News} from "./components/index";
import {Route,Routes} from "react-router";
import {Layout, Space, Typography} from "antd";
import {Link} from "react-router-dom";
import './index.css'
function App() {
  return (
    <div className="app">
        <div className={'navbar'}>
            <Navbar/>
        </div>
      <div className={'main'}>
          <Layout>
            <div className={'routes'}>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}></Route>
                    {/*<Route path={'/exchanges'} element={<Exchanges/>}></Route>*/}
                    <Route path={'/Cryptocurrencies'} element={<Cryptocurrencies/>}></Route>
                    <Route path={'/crypto/:id'} element={<CryptoDetails/>}></Route>
                    <Route path={'/news'} element={<News/>}></Route>
                    <Route path={'*'} element={<NotFound/>}></Route>
                </Routes>
            </div>
          </Layout>

      <div className={'footer'}>
            <Typography.Title level={5} style={{color:'white' ,textAlign:'center'}}>
                Cryptoverse <br/>
                All rights reserved
            </Typography.Title>
          <Space>
              <Link to={'/'}>Home</Link>
              <Link to={'/exchanges'}>Exchanges</Link>
              <Link to={'/news'}>News</Link>
          </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
