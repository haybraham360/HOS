import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import './css/main.css';
import './css/navbar.css';
import './css/adminlogin.css';
import './css/adminsignup.css';
import './css/uploadad.css';
import './css/faq.css';
import './css/creatordashboard.css';
import './css/uploadingvideo.css';
import './css/writeblog.css';
import './css/uploadingbook.css';
import { Navbar } from './components/navbar'
import { AdminLogin } from './pages/adminlogin'
import { Uploadad } from './pages/uploadad';
import { Faq } from './pages/faq';
import { Creatordashboard } from './pages/creatordashboard';
import { Uploadingvideo } from './pages/uploadingvideo';
import { Writeblog } from './pages/writeblog';
import { Uploadingbook } from './pages/uploadingbook';
import { Adminsignup } from "./pages/adminsignup";
import { Superadmindashboard } from './pages/superadmin/superadmindashboard';
import { Usermanagement } from './pages/superadmin/usermanagement';
import { Contentmanagement } from './pages/superadmin/contentmanagement';
import { Advertisementmanagement } from './pages/superadmin/advertisementmanagement';
import { Financials } from './pages/superadmin/financials';
import { Createcontent } from "./pages/superadmin/createcontent";
import Editor from "./pages/Editor";
import Alert from "./components/Alert";
import { useReducer } from "react";
import { setAlertState } from "./context/reducers";
import { AlertType } from "./core/enums";
import AlertProvider from "./context/alert";


function App() {
  const [alert, dispatchAlert] = useReducer(setAlertState, {
    title: '',
    message: '',
    type: AlertType.INFO,
    show: false,
    transform: {
      x: 0,
      y: 0,
      width: 'fit-content',
    }
  });

  return (
    <div className="App">
      <AlertProvider state={alert} dispatch={dispatchAlert}>
        <Alert type={alert.type} title={alert.title} message={alert.message} show={alert.show} transform={alert.transform} />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<AdminLogin />} />
            <Route path="/uploadad" element={<Uploadad />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/creatordashboard" element={<Creatordashboard />} />
            <Route path="/uploadingvideo" element={<Uploadingvideo />} />
            <Route path="/blog/new" element={<Writeblog />} />
            <Route path="/book/upload" element={<Uploadingbook />} />
            <Route path="/adminsignup" element={<Adminsignup />} />
            <Route path="/dashboard" element={<Superadmindashboard />} />
            <Route path="/usermanagement" element={<Usermanagement />} />
            <Route path="/contentmanagement" element={<Contentmanagement />} />
            <Route path="/advertisementmanagement" element={<Advertisementmanagement />} />
            <Route path="/financials" element={<Financials />} />
            <Route path="/createcontent" element={<Createcontent />} />
            <Route path="/editor" element={<Editor />} />
          </Routes>
        </Router>
      </AlertProvider>
    </div>
  );
};

export default App;
