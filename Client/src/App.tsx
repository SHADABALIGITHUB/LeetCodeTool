
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Layout from './Layout/Layout';
import Verify from './components/VerifyPage/Verify';
import Dashboard from './components/Dashboard/Dashboard';
import CreateSheet from './components/CreateSheet/CreateSheet';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthStatus } from './context/Auth';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import TableForAdding from './components/CreateSheet/TableForAdding';
import ViewSheet from './components/Dashboard/Sheets/ViewSheet';
import AdminCreateSheet from './components/CreateSheet/AdminCreateSheet';
import AuthUser from './components/LoginRegister/AuthUser';


function App() {
 

  const {authStatus}=useContext(AuthStatus);
 

  return (
   
    <>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      
       <Route path='/' element={authStatus?<Navigate to="/dashboard" replace/>:<LandingPage/>}/>
       {/* <Route path='/login' element={authStatus?<Navigate to="/dashboard" replace/>:<Login/>}/> */}
       {/* <Route path='/register' element={authStatus?<Navigate to="/dashboard" replace/>:<Register/>}/> */}
       <Route path='/auth' element={authStatus?<Navigate to="/dashboard" replace/>:<AuthUser/>}/>
       <Route path='/register-verify' element={authStatus?<Navigate to="/dashboard" replace/>:<Verify/>}/>
       

          <Route path='/' element={authStatus?<DashboardLayout/>:<Navigate to="/auth" replace />}>
            
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path='/create-sheet' element={<CreateSheet/>} />
              <Route path="/create-sheet-table" element={<TableForAdding/>} />
              <Route path="/view-sheet" element={<ViewSheet/>}/>
              <Route path='/admin-create-sheet' element={localStorage.getItem('email')=== import.meta.env.VITE_ADMIN_EMAIL?<AdminCreateSheet/>:<CreateSheet/>}/>
       
          </Route>
       
       
       
      </Route>
   
      <Route path='*' element={<h2>404  Not Found </h2>}></Route>
     
      


     </Routes>
     </BrowserRouter>
    
    </>
    
    
  )
}
  
export default App
