import React, { Component } from 'react';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            nome: 'Matheus',
            contador:0
        };

        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){

        let state = this.state;
        state.contador +=1;
        this.setState(state);
    }


    diminuir(){

        let state = this.state;
        state.contador -=1;
        this.setState(state);
    }

    render() {
        return (
            <div>

                <h1>Contador</h1>
                <h3>
                <button onClick={this.diminuir}>-</button>
                {this.state.contador}
                <button onClick={this.aumentar}>+</button>

                </h3>


            </div>
        );
    }
}

export default App;


// import React,{ Component } from 'react';

// class Equipe extends Component{
//     render(){
//         return (
//             <div>
//                 <Sobre
//                 nome={this.props.nome}
//                 cargo={this.props.cargo}
//                 idade={this.props.idade}
//                 />
//                 <hr></hr>
//             </div>
//         );
//     }
// }


// class Sobre extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Olá sou {this.props.nome}</h2>
//                 <h3>Cargo: {this.props.cargo}</h3>
//                 <h4>idade: {this.props.idade} anos</h4>
//             </div>
//         );
//     }
// }


// function App(){
//     return(
//         <div>
//             <h1> Conheça nossa equipe:</h1>
//             <Equipe nome="matheus" cargo="Programador" idade="12"/>
//             <Equipe nome="maria" cargo="Faxina" idade="102"/>
//             <Equipe nome="antonio" cargo="Porteiro" idade="24"/>
//         </div>
//     );
// }





// export default App;










































// const Bemvindo = (props) =>{

//     return(

//         <div>

// <h2>Bem vindo {props.nome}</h2>
// <h3>tenho {props.idade}</h3>  
// <p>______________________________</p>         
//         </div>
//     );
// } 

// function App() {

//     return(
//         <div>
//             <h1>Olá mundo!</h1>
//             <Bemvindo nome="Rafael"  idade="5"/>
//             <Bemvindo nome="Rafael2" idade="15"/>
//             <h1>curso react</h1>
//         </div>
//     );
// }


// const Equipe =(props)=>{

//     return (

//         <div>

//             <Sobre 
//                 nome={props.nome}
//                 cargo={props.cargo}
//                 idade={props.idade}
//              />
            
//             <Social
//                 facebook = {props.facebook}
//                 Linkedin = {props.Linkedin}
//                 Youtube = {props.Youtube}
//                 />

//              <hr/>   

//         </div>

//     );
// }


// const Sobre =(props)=>{

//     return (

//         <h2>Olá sou o (a) {props.nome}     
//         sou {props.cargo}     
//         tenho {props.idade}</h2>  
//     );

// }

// const Social = (props)=>{

//     return(
//         <div>
//             <a href={props.facebook}>Facebook</a>
//             <a href={props.Linkedin}>Linkedin</a>
//             <a href={props.Youtube}>Youtube</a>
//         </div>
//     );

// }



// function App(){

//     return(

//         <div>
//             <h2>Conheça nossa equipe:</h2>        
//             <Equipe nome="João" cargo="Motorista " idade="10" facebook="http://uol.com.br" Linkedin="http://terra.com.br" Youtube="http://ig.com.br"/>
//             <Equipe nome="Pedro" cargo="pedreiro " idade="25" facebook="http://uol.com.br" Linkedin="http://terra.com.br" Youtube="http://ig.com.br"/>
//             <Equipe nome="MAria" cargo="faxina " idade="35" facebook="http://uol.com.br" Linkedin="http://terra.com.br" Youtube="http://ig.com.br"/>
//         </div>

//     );
// }



//export default App;