const Person = (props) => {
    return (
        <li>
            <span>{props.name}</span>
            <button onClick={props.delete}>Usuń</button>
        </li>
    )
}

class App extends React.Component {
    state = {
        names: [
            { id: 1, name: "Jan" },
            { id: 2, name: "Natalia" },
            { id: 3, name: "Katarzyna" },
            { id: 4, name: "Lukas" },
        ]
    }

    handleDelete(id) {
        const people = [...this.state.names]
        const index = people.findIndex(person => person.id === id)
        people.splice(index, 1)
        console.log(people)
        this.setState({
            names: people
        })
    }

    render() {
        return (
            <ul>
                {this.state.names.map(person => <Person key={person.id} name={person.name} delete={this.handleDelete.bind(this, person.id)} />)}
            </ul>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))