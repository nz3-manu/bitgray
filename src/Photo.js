import React from 'react';


var Photo = React.createClass({
    render: function() {
        return (
          <div>

                <div className="album col-xs-12 col-sm-6 col-md-4">
                    <div className="album__effect">
                        <img src={this.props.imgPhoto} className="img-responsive img-thumbnail" alt=""/>
                    </div>
                    <div className="album__title"> <h5 className="text-center">{this.props.titlePhoto}</h5></div>
                </div>

          </div>
        );
    }
})

export default Photo;
