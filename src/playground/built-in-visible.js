class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            visibility : false
        }
    }
    handleVisibility(){
        this.setState((prevState) => {
            return {
                visibility : !prevState.visibility
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Visibility</h1>
                <button onClick={this.handleVisibility}>{this.state.visibility ? "Hide" : "Show" }</button>
                {this.state.visibility ? <p>Details here</p> : null }
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;
// const buttonClick = () => {
//     visibility = !visibility;
//     render();
// }
// const render = () =>{
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={buttonClick}>{visibility ? "Hide Details": "Show Details"}</button>
//             {visibility ? <p>Details here.</p> : null }
//         </div>
//     );
//     const appRoot = document.getElementById('app');
//     ReactDOM.render(template,appRoot);
// }
// render();
