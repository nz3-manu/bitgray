import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (

            <div>
                <header>
                    <div className="container">
                        <h1>
                            Bitgray__app
                        </h1>
                    </div>
                </header>

                <div className="container">
                    <section className="main row overflow">
                        <aside className="col-xs-12 col-sm-4 col-md-3">
                            <h3>  Nombre: </h3>
                            <h3> Usuario: </h3>
                            <h3> Correo: </h3>
                            <h3> Telefono: </h3>
                            <h3> Compañia: </h3>
                        </aside>
                        <article className="col-xs-12 col-sm-8 col-md-9">
                            <div className="row overflow">
                                <div className="album col-xs-12 col-sm-6 col-md-4">
                                    <h3 className="text-center">
                                        Title de muestra
                                    </h3>
                                    <div className="album__effect">
                                        <img src="http://lorempixel.com/700/700/" className="img-responsive img-thumbnail" alt=""/>
                                    </div>
                                </div>
                                <div className="album col-xs-12 col-sm-6 col-md-4">
                                    <h3 className="text-center">
                                        Title de muestra
                                    </h3>
                                    <div className="album__effect">
                                      <img src="http://lorempixel.com/700/700/" className="img-responsive img-thumbnail" alt=""/>
                                    </div>
                                </div>
                                <div className="album col-xs-12 col-sm-6 col-md-4">
                                    <h3 className="text-center">
                                        Title de muestra
                                    </h3>
                                    <div className="album__effect">
                                       <img src="http://lorempixel.com/700/700/" className="img-responsive img-thumbnail" alt=""/>
                                    </div>
                                </div>
                                <div className="album col-xs-12 col-sm-6 col-md-4">
                                    <h3 className="text-center">
                                        Title de muestra
                                    </h3>
                                    <div className="album__effect">
                                       <img src="http://lorempixel.com/700/700/" className="img-responsive img-thumbnail" alt=""/>
                                    </div>
                                </div>
                                <div className="album col-xs-12 col-sm-6 col-md-4">
                                    <h3 className="text-center">
                                        Title de muestra
                                    </h3>
                                    <div className="album__effect">
                                       <img src="http://lorempixel.com/700/700/" className="img-responsive img-thumbnail" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>

                <footer>
                    <div className="container displayFlex">
                        <h4><strong>Bitgray app prueba tecnica</strong></h4>
                          <div className="">
                            <img src="logo-whitebig.png" width="55px" height="55px" alt="Logo__footer"/>
                          </div>
                    </div>
                </footer>

            </div>

        );
    }
}

export default App;
