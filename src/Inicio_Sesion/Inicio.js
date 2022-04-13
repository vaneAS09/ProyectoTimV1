import React from 'react';
import './inicio.css';

class inicio extends React.Component {


    render(){

        return(
            
                <div className="inicio-body">
                    <div className="logo_uao">

                    </div>

                    <div className="magen_inicio">

                    </div>

                    <form>
                        <p>
                        <label>Nombre</label><br />  
                        <input type="text" name="nombre" className="input" />  
                        </p>

                        <p>
                        <label>Contraseña</label><br />
                        <input type="text" name="contraseña" className="input" />    
                        </p>

                        <input type="submit" className="btn_iniciar" value="Iniciar sesión" />
                        <button> </button>

                    </form>
                </div>
        
            
        );
    }    
}

export default inicio;