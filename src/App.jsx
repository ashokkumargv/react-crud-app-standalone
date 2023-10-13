
import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Topbar from "./pages/global/Topbar";
import SidebarMenu from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard";
import Users from "./pages/users";
import Customers from "./pages/customers/details";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import SignInOutContainer from './pages/signup';



const App = () => {
    // Array of excluded routes to hide navbar/footer
    const excludedRoutes = ['/login', '/signup'];
    let location = useLocation();
    console.log(location);
//    return (
//        {!excludedRoutes.includes(location.pathname) && <Navbar />}

//      <Route path="/" component={Home} exact />
//      <Route path="/dashboard" component={Dashboard} exact/>
//     <Route path="/products" component={DisplayProducts} exact/>

//{ !excludedRoutes.includes(location.pathname) && <Footer /> }
//  )



//function App() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    const [authenticated, setauthenticated] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
            console.log(loggedInUser);
        }
        else {
            setauthenticated(false);
        }
    }, []);

    //const LoginContainer = () => (
    //    <div className="container">
    //        <Route exact path="/" render={() => <Navigate to="/login" />} />
    //        <Route path="/login" element={<SignInOutContainer />} />
    //        <div className="app">
    //            <main className="content">
    //                <Topbar setIsSidebar={setIsSidebar} />
    //                <Routes>
    //                    <Route path="/dashboard" element={<Dashboard />} />
    //                    <Route path="/customers" element={<Customers />} />
    //                    <Route path="/users" element={<Users />} />
    //                </Routes>
    //            </main>
    //        </div>
    //    </div>
    //);

    //const DefaultContainer = () => (       
    //        <ColorModeContext.Provider value={colorMode}>
    //            <ThemeProvider theme={theme}>
    //                <CssBaseline />
    //                <div className="app">
    //                    <SidebarMenu isSidebar={isSidebar} />
    //                    <main className="content">
    //                        <Topbar setIsSidebar={setIsSidebar} />
    //                        <Routes>                              
    //                            <Route path="/dashboard" element={<Dashboard />} />
    //                            <Route path="/customers" element={<Customers />} />
    //                            <Route path="/users" element={<Users />} />
    //                        </Routes>
    //                    </main>
    //                </div>
    //            </ThemeProvider>
    //        </ColorModeContext.Provider>
      
    //);



    //return (
    //    <div className="App">
          
    //        <Routes>
    //            <Route path="/" component={LoginContainer} />
    //                                <Route exact path="/login" component={LoginContainer} />
    //                                <Route component={DefaultContainer} />                                 
                                   
    //                            </Routes>
                        
    //    </div>
    //);

    return (
        <div className="App">
           
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className="app">
                        {location.pathname === '/'|| location.pathname === '/login' || location.pathname === '/signup' ? '' : <SidebarMenu isSidebar={isSidebar} />}
                        
                        <main className="content">
                            {location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup' ? '' : <Topbar setIsSidebar={setIsSidebar} />}
                            
                            <Routes>
                                <Route path="/" element={<SignInOutContainer />} />
                                <Route path="/login" element={<SignInOutContainer />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/customers" element={<Customers />} />
                                <Route path="/users" element={<Users />} />
                            </Routes>
                        </main>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </div>
    );
}

export default App;

