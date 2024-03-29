//import './App.css';
import React, {useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {
  const [mode,setMode] = useState('light');//whether check it is enable or not
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
      showAlert(": Dark mode has been enabled","success");
      
      setInterval(() => {
        document.title='TextUtils - Dark Mode ';
      }, 2000);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert(": Light mode has been enabled","success");
      setInterval(() => {
        document.title='TextUtils - Light Mode ';
      }, 2000);
    }
    
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About us"/> */}

    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
    <Alert alert={alert}/>
    
    
    <div className="container my-3">
  
     
    <TextForm showAlert={showAlert} heading="Enter the text to analyze." mode={mode}/>
    
    <About/>
    </div>
    

    
    </>
    
  );
}

export default App;
