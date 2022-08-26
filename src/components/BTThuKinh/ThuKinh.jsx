import React, { Component } from 'react'
import glasses from './dataGlasses.json'

export default class ThuKinh extends Component {
    state={
        glass:{
           
                "id": 1,
                "price": 30,
                "name": "GUCCI G8850U",
                "url": "./img/glasses/v1.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            
        }
    }
    render() {
        return (
            <div className='thuKinh'>
                <div className='title  text-center'>
                    TRY GLASSES APP ONLINE
                </div>

                <div className='thuKinh-product d-flex  justify-content-between container '>
                    <div className='modal-left'>
                        <img src={this.state.glass.url} alt="..." />
                        <div className='glasses-info'>
                            <h3>{this.state.glass.name}</h3>
                            <p>{this.state.glass.desc}</p>
                        </div>
                    </div>
                    <div className='modal-right'>
                    </div>

                </div>

                <div className="arrGlasses container  ">
                    <div className="row ">
                {glasses.map((value)=>{
                    return <div className="col-2" key={value.id}>
                        <img src={value.url} alt="..." onClick={()=>this.setState({glass:value})}/>
                    </div>
                })}
                    </div>
                </div>
            </div>
        )
    }
}
