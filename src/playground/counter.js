class Counter extends React.Component{
    constructor(props){
        super(props);
        this.AddOne = this.AddOne.bind(this);
        this.MinusOne = this.MinusOne.bind(this);
        this.Reset = this.Reset.bind(this);
        this.state = {
            count : 0
        }
    }
    componentDidMount(){
        try {
            const stringValue = localStorage.getItem('number');
            const number =  parseInt(stringValue,10)
            if(!isNaN(number))
            {
                this.setState(() => ({count : number}));
            }
        }catch(e){

        }
    }
    componentDidUpdate(prevProps,prevState){
        const value = this.state.count;
        if (value != prevState.count){
            localStorage.setItem('number',value)
        }
    }

    AddOne(){
        this.setState((prevState)=>{
            return{
                count : prevState.count + 1
            }
        })
    };
    MinusOne(){
        this.setState((prevState)=>{
            return{
                count : prevState.count - 1 
            }
        })

    };
    Reset(){
        this.setState(()=>{
            return {
                count : 0
            }
        })
    };
    render(){
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.AddOne}>+1</button>
                <button onClick={this.MinusOne}>-1</button>
                <button onClick={this.Reset}>Reset</button>
            </div>
        )
    }
}

// Counter.defaultProps = {
//     count : 0
// }

ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0;
// const addOne = () => {
//     count++
//     renderApp();
// }
// const minusOne = () => {
//     count--
//     renderApp();
// }
// const reset = () => {
//     count = 0;
//     renderApp();
// }
// const appRoot = document.getElementById('app');
// const renderApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )
//     ReactDOM.render(templateTwo,appRoot);
// }
// renderApp();