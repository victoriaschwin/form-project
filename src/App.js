import './App.css';

function App() {
  return (
  <>
    <div >
     <h1>Login</h1>
    </div>
  <div>
  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" />
    </div>
  </div>

  

    <div>
    <p>Políticas de privacidad</p>
    </div>
  </div>
  
  
  
  
  </>
  );
}

export default App;
