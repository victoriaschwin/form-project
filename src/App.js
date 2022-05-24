import './App.css';

function App() {
  return (
    <>
    <body>
    <div class='center' >
     <h1 class='login'>Login</h1>
    </div>
  
  <div class='form'>
    <label for="email">E-mail</label>
    <input type='email' class='email' require />
    <div>
    <label for="password">Password</label>
    <input type="password" id="inputPassword" require />
    </div>
  </div>

  

    <div class='footer'>
    <p>Políticas de privacidad</p>
    </div>
 
    </body>
  
  
  
  </>
  );
}

export default App;
