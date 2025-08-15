import './App.css'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import NavBar from './components/Navbar/navBar';
import Home from './pages/Home';
import AdDetail from './pages/AdDetail';
import LoginForm from './components/Modals/LoginForm';
import SignupForm from './components/Modals/SignupForm';
import { useState } from 'react';
import { ShowModalContext } from './context/ShowModalContext';
import { OpenSellItemContext } from './context/OpenSellItemContext';
import { IsLoggedInContext } from './context/IsLoggedInContext';
import { HasAccountContext } from './context/HasAccountContext';
import { LoggedInUserContext } from './context/LoggedInUserContext';
import { SelectedItemContext } from './context/SelectedItemContext';
import SellItemForm from './components/Modals/SellItemForm';

function App() {
  const [show, setShow] = useState(false);
  const [openSellItem, setOpenSellItem] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasAccount, setHasAccount] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [selectedItem, setSelectedItem] = useState({});
  console.log(loggedInUser);
  const createAccount = (event) => {
    setHasAccount(false);
    event.preventDefault();
  }

  const logIn = (event) => {
    setHasAccount(true);
    event.preventDefault();
  }

  const closeModal = () => {
    setShow(false);
    setHasAccount(true);
    setOpenSellItem(false);
  }

  return (
    <>
      <ShowModalContext.Provider value={{ show, setShow }}>
        <OpenSellItemContext.Provider value={{ openSellItem, setOpenSellItem }}>
        <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <HasAccountContext.Provider value={{ hasAccount, setHasAccount }}>
            <LoggedInUserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
              <NavBar />
              {show && <section>
                  { isLoggedIn ? null : <LoginForm createAccount={createAccount} close= {closeModal} /> }
                  { !isLoggedIn && !hasAccount && <SignupForm logIn={logIn} close=  {closeModal}/> }
                  {/* { isLoggedIn && openSellItem && <SellItemForm close= {closeModal}/>} */}
              </section>
              }
              {openSellItem && <section>
                { isLoggedIn ? <SellItemForm close= {closeModal}/> : <LoginForm createAccount={createAccount} close= {closeModal} /> }
              </section> }
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path=':id' element={
                    <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>
                      <AdDetail />
                    </SelectedItemContext.Provider>
                  }
                  />
                </Routes>
              </BrowserRouter>
            </LoggedInUserContext.Provider>
          </HasAccountContext.Provider>
        </IsLoggedInContext.Provider>
        </OpenSellItemContext.Provider>
      </ShowModalContext.Provider>
    </>
  )
}

export default App
