import React from 'react';
import './Home.css';

class Home extends React.Component {

  render(){
      return(
          <div className="Home-body">
            
              <div className="Home-header">
              <div className="Home-icono" >

              </div>
                  <div className="uao-logo" >

                  </div>
                  <div className="Home-titleFont">
                          PORTAL DE MERCADEO
                  </div>
                       
              </div>

                  <div className="Home-dashboard">

                        <div className="Home-dashboardFont">
                          Dashboard
                        </div>
                        <div className="Home-user">
                            <div className="Home-userImage">
                         
                            </div>
                            <div className="Home-userFont">
                              Usuario
                            </div>
                         </div>
                         <div className="Home-colegio">
                            <div className="Home-colegioImage">
                         
                            </div>
                            <div className="Home-colegioFont">
                              Colegio
                            </div>
                         </div>

                         <div className="Home-programa">
                            <div className="Home-programaImage">
                         
                            </div>
                            <div className="Home-programaFont">
                              Programa Académico
                            </div>
                         </div>

                         <div className="Home-preguntas">
                            <div className="Home-PreguntasImage">
                         
                            </div>
                            <div className="Home-preguntasFont">
                              Preguntas
                            </div>
                         </div>

                         <div className="Home-test">
                            <div className="Home-testImage">
                         
                            </div>
                            <div className="Home-testFont">
                              Test
                            </div>
                         </div>

                         <div className="Home-prospectos">
                            <div className="Home-prospectosImage">
                         
                            </div>
                            <div className="Home-prospectosFont">
                              Prospectos
                            </div>
                         </div>
                  </div>

                        <div className="Home-calendario">
                            <div className="Home-calendarioFont">
                              Calendario
                            </div>
                            <div className="Home-calendarioImage">
                         
                            </div>

                         </div>
                         <div className="Home-recientes">
                            <div className="Home-recientesFont">
                              Últimos registros
                            </div>

                            <div className="Home-registroR">
                              <div className="Home-registroFont1">
                                Nombre reciente
                              </div>
                              <div className="Home-registroFont2">
                                Id reciente
                              </div>

                              <div className="Home-btnEditar">
                                  <div className="Home-btnFont">
                                    Editar
                                  </div>
                              </div>
                            </div>
                          </div>

                          
            </div>
             
      );
  }    
}

export default Home;

