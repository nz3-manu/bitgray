import React from 'react';
import {Link} from 'react-router';
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        position: 'fixed',
        backgroundColor: 'rgba(106, 102, 103, 0.85)'
    },
    content: {
        top: '40%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        background: 'white',
        marginRight: '-50%',
        padding: '0px',
        border: 'none',
        transform: 'translate(-40%, -40%)'
    }
};
var Photo = React.createClass({
    getInitialState: function() {
        return {photo: [],
          modal: { modalIsOpen: false}
        }
    },
    componentDidMount: function() {
        fetch("http://jsonplaceholder.typicode.com/photos").then(photoJson => photoJson.json(), e => {
            console.log("Obtención fallida", e);
        }).then(photoJson => {
            console.log(this.props.params.user);
            this.setState({photo: photoJson})
        });
    },
    openModal: function(currentInformation) {
        this.currentInfo =currentInformation
        this.setState({
            modal: {
                modalIsOpen: true,
            }
        });
            console.log(this.state.currentInfo);
    },
    closeModal: function() {
      console.log(this.state.currentInfo);
              console.log(this.state.modal.currentImg);
        this.setState({
            modal: {
                modalIsOpen: false
            }
        })
    },
    render: function() {
        return (
            <div className="container">

                <Modal isOpen={this.state.modal.modalIsOpen} onRequestClose={this.closeModal} style={customStyles} contentLabel="Example Modal">
                  <div className="wrap__modal">
                        <div className="modal__headerCloseBtn">
                          <h2>{(this.currentInfo)? this.currentInfo.title:""}</h2>
                          <button className="btn btn-default" onClick={this.closeModal}>X</button>
                        </div>

                        <div className="modal__img">
                              <img className="current__img" src={(this.currentInfo)? this.currentInfo.img:""}/>
                        </div>
                  </div>
                </Modal>

                <div className="photo__header">
                    <h1>Fotos</h1>
                    <Link to="/" className="btn btn-primary btn-lg btnHeight">
                        Regresar
                    </Link>
                </div>
                <div className="row overflow">
                    {this.state.photo.map((photo, i) => {
                        if (this.props.params.id == photo.albumId) {
                            return (
                                <div key={i}>
                                    <div className="album col-xs-12 col-sm-4 col-md-3">
                                        <div className="album__effect">
                                            <img src={photo.url} onClick={this.openModal.bind(null,{img:photo.url,title:photo.title})} className="img-responsive img-thumbnail" alt=""/>
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
}
                </div>
            </div>
        );
    }
})

export default Photo;
