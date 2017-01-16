import React from 'react';
import './App.css';

var Album =React.createClass({
    render: function() {
        return (
            <div className="album col-xs-12 col-sm-6 col-md-4">
                <div className="album__effect">
                    <img src="http://lorempixel.com/700/700/" className="img-responsive img-thumbnail" alt=""/>
                </div>
                <div className="album__title"> <h5 className="text-center">{this.props.titleAlbum}</h5></div>
            </div>
        )
    }
});

var AsideInformation=React.createClass({
    render: function() {
        return (
            <div className="main__asideInformation">
                <h3>Nombre:</h3>
                <p className="personal__information">{this.props.name}</p>
                <h3>Usuario:</h3>
                <p className="personal__information">{this.props.user}</p>
                <h3>Correo:</h3>
                <p className="personal__information">{this.props.email}</p>
                <h3>Telefono:</h3>
                <p className="personal__information">{this.props.phone}</p>
                <h3>Compañia:</h3>
                <p className="personal__information">{this.props.company}</p>
            </div>
        )
    }
});

var App = React.createClass({
    getInitialState: function() {
        return {users: [], album: []}
    },
    componentDidMount: function() {
        fetch("http://jsonplaceholder.typicode.com/users").then(userJson => userJson.json(), e => {
            console.log("Obtención fallida", e);
        }).then(userJson => {
            let longUser=userJson.length
            let randomMethod=Math.floor(Math.random() * (longUser));
            this.setState({users: userJson[randomMethod]})
        });
        fetch("http://jsonplaceholder.typicode.com/albums").then(albumJson => albumJson.json(), e => {
            console.log("Obtención fallida", e);
        }).then(albumJson => {
            this.setState({album: albumJson})
        });

    },
    randomInformation: function() {
        console.log("hola mundo");
    },
    render: function() {
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
                        <aside className="col-xs-12 col-sm-6 col-md-4">
                          <div className="main__information">
                            <h3>Información</h3>
                          </div>
                            < AsideInformation name={(this.state.users.name)
                                ? this.state.users.name
                                : ""} user={(this.state.users.username)
                                ? this.state.users.username
                                : ""} email={(this.state.users.email)
                                ? this.state.users.email
                                : ""} phone={(this.state.users.phone)
                                ? this.state.users.phone
                                : ""} company={(this.state.users.company)
                                ? this.state.users.company.name
                                : ""}/>
                        </aside>

                        <article className="col-xs-12 col-sm-6 col-md-8">
                            <div className="row overflow ">
                                {this.state.album.map((album, i)=>{
                                    if (this.state.users.id===album.userId) {
                                      return < Album titleAlbum={album.title} key={i}/>
                                }
                            })
}

                            </div>
                        </article>
                    </section>
                </div>

                <footer>
                    <div className="container displayFlex">
                        <h4>
                            <strong>Prueba tecnica Bitgray app
                            </strong>
                        </h4>
                        <div className="">
                            <img src="logo-whitebig.png" width="55px" height="55px" alt="Logo__footer"/>
                        </div>
                    </div>
                </footer>

            </div>

        );
    }
})

export default App;
