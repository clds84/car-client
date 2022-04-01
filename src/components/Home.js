import IndexCars from './cars/IndexCars'

const Home = (props) => {
	 const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>Home Page</h2>
			<IndexCars user={user} msgAlert={msgAlert}/>
		</>
	)
}

export default Home
