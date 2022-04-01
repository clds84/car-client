import React, { useState, useEffect } from 'react'
import { getAllCars } from '../../api/cars'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {indexCarsSuccess, indexCarsFailure} from '../shared/AutoDismissAlert/messages'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const IndexCars = (props) => {
    const [cars, setCars] = useState(null)
    const {user, msgAlert} = props

    useEffect(() => {
        getAllCars()
            .then(res => {
                setCars(res.data.cars)
            })
            .then(() => {
                msgAlert({
                    heading: 'Found some cars!',
                    message: indexCarsSuccess,
                    variant: 'success',
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'No cars?!!',
                    message: indexCarsFailure,
                    variant: 'danger',
                })
            })
    }, [])

    if(!cars) {
        return <p>Loading...</p>
    }
    else if (cars.length === 0) {
        return <p>no cars yet : ( Add some!</p>
    }

    let carCards

    if (cars.length > 0) {
        carCards = cars.map(car => (
            <Card key={car.id} style={{ width: '30%' }} className="m-2">
            <Card.Header>{car.carinfo}</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={`/cars/${car.id}`}>View {car.make} {car.model}</Link>
                </Card.Text>
            </Card.Body>
        </Card>
        ))
    }

    return(
            <>
            <h3>All the cars</h3>
            <div style={cardContainerLayout}>
                {carCards}
            </div>
            </>
    )


}

export default IndexCars