import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import ActorService from "../../services/actore.service";

import { NotificationContainer, NotificationManager } from 'react-notifications';

const initialActorState = {
    first_name: '',
    last_name: ''
};

const ActorAdd = () => {
    const [currentActor, setCurrentActor] = useState(initialActorState);
    const navigate = useNavigate()

    const handleChange = (e) => {
        setCurrentActor({
            ...currentActor,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentActor.first_name.trim() === '' || currentActor.first_name.trim() === '') {
            NotificationManager.error('Todos los campos son necesarios');
            return;
        }

        const insertActor = async () => {
            try {
                await ActorService.create(currentActor);
                NotificationManager.success('Actor añadido...')

                setTimeout( () => {
                    navigate('/actors')
                }, 1000)

            } catch (error) {
                console.log(error);
            }
        }
        insertActor();
    }

    return (
        <div className="modal-content">

            <NotificationContainer />

            <div className="modal-header">
                <h2>Nuevo Actor</h2>
            </div>
            <div className="modal-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 mx-3">
                        <label htmlFor="fname" className="form-label">
                            Nombre
                        </label>
                        <input type="text" className="form-control" id="fname" name="first_name" onChange={handleChange} value={currentActor.first_name}/>
                    </div>
                </form>
            </div>
            <div className="modal-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 mx-3">
                        <label htmlFor="lname" className="form-label">
                            Apellidos
                        </label>
                        <input type="text" className="form-control" id="lname" name="last_name" onChange={handleChange} value={currentActor.last_name}/>
                    </div>
                    <div className="mb-3 mx-3 centered">
                        {/* <button className="btn btn-primary mr-3" type="submit">
                            Grabar
                        </button> */}
                        <Link className="btn btn-primary mr-3">
                            Grabar
                        </Link>
                        <Link to='/actors' className="btn btn-danger">
                            Cancelar{' '}
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ActorAdd