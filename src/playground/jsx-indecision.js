// JSX JavaScript XML
const appRoot = document.getElementById('app');

const app = {
    title : 'Indecision-App',
    subtitle : 'Some informations',
    options : []
};

const formOnSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptions();
    }
}
const removeOptions = () =>{
    app.options = [];
    renderOptions();
}

const decision = () =>{
    var number = Math.floor(Math.random() * app.options.length)
    var selectedOption = app.options[number];
    alert(selectedOption);
}

const renderOptions  = () => {
    const template = (
        <div>
            {app.title && <h1>{app.title}</h1>}
            <p>{app.subtitle}</p>
            <button disabled={app.options.length === 0} onClick={decision}>What should I do?</button>
            <button onClick={removeOptions}>Remove All</button>
            <p>{app.options.length>0 ? "here is your list" : "no list found"}</p>
            <ol>
                {app.options.map((option)=>{
                    return <li key={option}>{option}</li>
                })}
            </ol>
            <form onSubmit={formOnSubmit}>
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>
        </div> 
        );
    ReactDOM.render(template,appRoot); 
}
renderOptions();
