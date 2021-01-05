class VisibilityToggle extends React.Component
{
    constructor (props)
    {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            toggle: false
        };
    }

    handleToggleVisibility()
    {
        this.setState((prevState) => {
            return {
                toggle: !prevState.toggle
            }
        })
    }

    render()
    {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.toggle ? 'Hide details' : 'Show details'}</button>
                {this.state.toggle && <p>Peek a Boooooo!</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const appDetails = {
//     title: 'Visibility Toggle',
//     text: [],
//     visibility: true
// };

// const toggleText = () => {
//     if (appDetails.visibility)
//     {
//         appDetails.text.push('Peek a Boo!!');
//     }
//     else
//     {
//         appDetails.text = [];
//     }
//     appDetails.visibility = !appDetails.visibility;
//     render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>{appDetails.title}</h1>
//             <button onClick={toggleText}>
//                 {appDetails.visibility ? 'Show details' : 'Hide details'}
//             </button>
//             {appDetails.text && <p>{appDetails.text}</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// render();