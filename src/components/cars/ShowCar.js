
import React, {useState, useEffect} from 'react'
import { getOneCar, updatePet, removePet } from '../../api/cars'
import { useParams, useNavigate } from 'react-router-dom'
import { Spinner, Container, Card, Button } from 'react-bootstrap'
import {showCarSuccess, showCarFailure} from '../shared/AutoDismissAlert/messages'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const ShowCar = (props) => {
    const [car, setCar] = useState(null)
    const {user, msgAlert} = props
    const { id } = useParams()
    const navigate = useNavigate()
    console.log('id in showCar ', id)

    useEffect(() => {
        getOneCar(id)
        .then(res =>setCar(res.data.car))
        .then(() => {
            msgAlert({
                heading: 'Here is the car!',
                message: showCarSuccess,
                variant: 'success'
            })
        })
        .catch(() => {
            msgAlert({
                heading: 'No car found',
                message: showCarFailure,
                variant: 'danger',
            })
        })
    }, [])

    if (!car) {
        return (
            <Container fluid className="justify-content-center">
                <Spinner animation="border" role="status" variant="warning" >
                    <span className="visually-hidden">Loading....</span>
                </Spinner>
            </Container>
        )
    }

    return (
        <>
            <Container className="fluid">
                <Card>
                    <Card.Header>{car.carinfo}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <small>Year: {car.year}</small><br/>
                            <small>Drivetrain: {car.drivetrain}</small><br/>
                            <small>
                                Sportmode: {car.sportMode ? 'yes' : 'no'}
                            </small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default ShowCar