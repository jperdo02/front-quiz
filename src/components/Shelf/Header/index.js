import React from 'react';
import './style.scss';

class Header extends React.Component{
	
	constructor() {
    super();
	
	this.state = {subMenuH: false, subMenuM: false};

    // pasamos el objeto al siguiente llamado
    this.despliegaH = this.despliegaH.bind(this);
	this.despliegaM = this.despliegaM.bind(this);
	}

	despliegaH() {
    this.setState(prevState => ({subMenuH: !prevState.subMenuH,subMenuM:false}));
	}
	
	despliegaM() {
    this.setState((prevState, {i}) => ({subMenuM: !prevState.subMenuM,subMenuH:false}));
	
	}
	
	
	render(){
		
		return(<div style={{display:'flex',
							backgroundColor:'black',
							alignItems:'center',
							//justifyContent:'space-between',
							alingConten:'center',
							flexWrap: 'wrap',
							listStyleType:'none'}}>
							
				
					<img width="15%" height="0%" src={require('../../../static/logo.png')}>
					</img>
					
					
					<li /*onClick={this.despliegaH}*/ class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#">
					<i class="fas fa-male">
					</i> HOMBRE</a>
						
						<ul class="dropdown-menu"  
						/*style={{display:this.state.subMenuH ? 'block' : 'none', 
								  }}*/>
						<a class="sub-item"><li><i class="fas fa-male" style={{fontSize:'18pt'}}></i>Jeans</li></a>
						<a class="sub-item"><li><i class="fas fa-tshirt"></i> Remeras</li></a>
						</ul>
					
					</li>
					
					
					<li class="dropdown">
						<a class="dropdown-toggle" data-toggle="dropdown" href="#">
						<i class="fas fa-female">
						</i> MUJER</a>
												
							<ul class="dropdown-menu">
								<a class="sub-item"><li><i class="fas fa-female" style={{fontSize:'18pt'}}></i> Jeans</li></a>
								<a class="sub-item"><li><i class="fas fa-tshirt"></i> Remeras</li></a>   
							</ul>
					</li>
										
					<li><a href="#contacto"><i class="far fa-address-card"></i> CONTACTO</a></li>
					
					<form style={{marginLeft:'10%'}}>
					<input type="text" name="name" />
					<input type="submit" value="Buscar" />
					</form>
						
					
					
						
			   </div>);
		
	}
	
}
export default Header;