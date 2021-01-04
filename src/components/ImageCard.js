import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import {PropTypes} from "prop-types";
export const ImageCard = ( {title, urlPresentation, url, boolGif, likes, dislikes, score, description } ) => {
    return (
        <div className="card animate__animated animate__fadeIn" style={ { maxWidth: 250, maxHeight: 500 } }>
            <div className="row no-gutters">
                <div className="col-md-12">
                    { boolGif
                        ? <video src={urlPresentation} type="video/mp4" alt={title} className="card-img" width="250" height="250"  autoPlay controls muted></video>
                        : <img src={urlPresentation} alt={title} className="card-img" width="250" height="250"/>
                    }
                </div>
                <div className="col-md-8">
                    
                    <div className="card-body">
                        <h5 className="card-title"> { title.length > 30 ? title.substring(0,27) + '...' : title } </h5>
                        
                        <Link to={{
                            pathname: `./details` ,
                            state: {
                                urlValue: url, titleValue: title, boolVideo: boolGif, likes: likes, dislikes: dislikes, score: score, description: description
                            }
                            }}>Details
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )

}

ImageCard.propTypes = {
    title: PropTypes.string.isRequired,
    urlPresentation: PropTypes.string.isRequired,
   // url: PropTypes.json.isRequired,
    boolGif: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
}
