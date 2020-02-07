const addUser = () => {
    const isFavorite = !!Math.round(Math.random(), 0)
    return {...faker.helpers.createCard(), isFavorite};
}

const users = Array(20).fill('').map(user => addUser())

console.log(users)

class App extends React.Component {
    constructor() {
        super()
        this.state = {users}
    }


    render() {
        const toggleUser = (user) => {
            user.isFavorite = !user.isFavorite
            console.log(user)
            this.setState({users})
        }

        const favLength = users.filter(user => user.isFavorite).length

        const titleLink = React.createElement('a', {
                href: '#',
                onClick: () => {
                    const newUser = addUser()
                    this.setState({users: users.unshift(newUser)})
                }
            }, `You have ${favLength} favorite users!`)

        const br = React.createElement('br')

        const lis = users.map(user => {
            return React.createElement('li',{
                key: user.username,
                className: (user.isFavorite ? 'favorite' : ''),
                onClick: () => {toggleUser(user)}
            }, user.name, br, user.username)
        })



        const ul = React.createElement('ul', null, lis)
        return React.createElement('div', null, titleLink, ul)
    }
}

const root = document.querySelector('#root')

ReactDOM.render(React.createElement(App), root)
