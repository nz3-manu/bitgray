import React from 'react';
import {Link} from 'react-router';

var Photo = React.createClass({
    getInitialState: function() {
        return {photo: []}
    },
    componentDidMount: function() {
        fetch("http://jsonplaceholder.typicode.com/photos").then(photoJson => photoJson.json(), e => {
            console.log("Obtención fallida", e);
        }).then(photoJson => {
                console.log(this.props.params.user);
            this.setState({photo: photoJson})
        });
    },
    render: function() {
        return (
            <div className="container">
              <div className="photo__header"><h1>Fotos</h1>  <Link to="/" className="btn btn-primary btn-lg btnHeight" > Regresar </Link> </div>
              <div  className="row overflow">
                {this.state.photo.map((photo, i) => {
                    if (this.props.params.id == photo.albumId) {
                        return (
                            <div key={i}>
                                <div className="album col-xs-12 col-sm-4 col-md-3">
                                    <div className="album__effect">
                                        <img src={photo.url} className="img-responsive img-thumbnail" alt=""/>
                                    </div>
                                    <div className="album__title">
                                        <h5 className="text-center">
                                            {photo.title}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
}           </div>
            </div>
        );
    }
})

export default Photo;
