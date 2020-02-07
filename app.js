
const users = Array(20).fill('').map(user => {
    const isFavorite = !!Math.floor(Math.random() * 10)
    return {...faker.helpers.createCard(), isFavorite};
})

console.log(users)

class App extends React.Component {
    constructor() {
        super()
        this.state = {users}
    }

    render() {
        const lis = users.map(user => {
            return React.createElement('li',
                {key: user.username, className: (user.isFavorite ? 'favorite' : '')}, user.name)
        })
        return React.createElement('ul', null, lis)
    }
}

const root = document.querySelector('#root')

ReactDOM.render(React.createElement(App), root)
