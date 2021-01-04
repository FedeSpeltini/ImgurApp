import React, { Component } from 'react'
import { MultimediaList } from './MultimediaList';


export class ImageScreen extends Component {
    render() {
        const { urlValue, titleValue, boolVideo, likes, dislikes, score, description } = this.props.location.state;
      return (
        <div className="row mt-5">
            <div className="col-4">
                { !Array.isArray(urlValue)
                    ?   [
                            (boolVideo
                                ? <video  src={urlValue} type="video/mp4" alt={titleValue} className="card-img"  autoPlay controls muted></video>
                                : <img src={urlValue} alt={titleValue} className="card-img"/>
                            )
                        ]
                    :   urlValue.map( img => (
                            <MultimediaList 
                                    key={ img.id }
                                    { ...img }
                                />
                        ))
                }
            </div>
            
            <div className="col-8 animate__animated animate__fadeIn">
                <h3 style={{"margin-left": "20%"}}> { titleValue } </h3>
                {/* <h3 className="d-flex justify-content-center"> { titleValue } </h3> */}
                <br></br><br></br>
                
                <h4 style={{"margin-left": "20%"}}> { description } </h4>
                <br></br>

                <div className="d-flex align-items-stretch">   
                    
                    <img src="https://www.flaticon.com/svg/static/icons/svg/889/889221.svg" alt="likes" style={{"margin-left": "20%"}} width="30" height="30"/>
                
                    <h5 style={{"margin-left": "3%"}}>{ likes }</h5> 
                
                    <img src="https://www.flaticon.com/svg/static/icons/svg/889/889220.svg" alt="dislikes" width="30" style={{"margin-left": "5%"}} height="30"/> 
                
                    <h5 style={{"margin-left": "3%"}}>{ dislikes }</h5>

                    <h5 style={{"margin-left": "8%"}}><b>Score</b>: { score }</h5>
                                        
                </div> 
                <br></br><br></br>
                <div className="row">
                    <div className="col-8 pull-right" style={{"margin-left": "20%"}}>
                        {/* <h3 class="one">Text</h3>
                        <button class="btn btn-secondary float-right">Button</button> */}

                        <button 
                            className="btn btn-outline-info  d-flex align-items-end"
                            //onClick={ this.props.history.goBack() }
                            onClick={ () => this.props.history.goBack() }
                        >
                            Return
                        </button>
                    </div>
                </div>

                
            </div>

        </div>
      );
    }
  }
  
 