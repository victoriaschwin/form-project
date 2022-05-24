import React  from "react";

const Button=() =>{

    return(
        <>
        
        <button type ='submit'>Enviar</button>
        <>
    <div >
     <h1>Login</h1>
    </div>
  <div>
  <div class="mb-3 row">
    <label for="Email" class="col-sm-2 col-form-label">E-mail</label>
    <div class="col-sm-10">
      <input type='email' require />
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" require />
    </div>
  </div>

  

    <div>
    <p>Políticas de privacidad</p>
    </div>
  </div>
  
  
  
  
  </>
        </>
    );
}

export default Button;