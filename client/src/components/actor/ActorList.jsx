/* eslint-disable camelcase */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ActorService from "../../services/actore.service";
import Loader from "../loader/Loader";
import Message from "../message/Message";



const ActorList = () => {
    const [actors, setActors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)

        async function retrieveActors() {
            try {
                const data = await ActorService.getAll();
                setActors(data)
                setError(null)
            } catch (error) {
                console.log(error);
                setLoading(false)
                setError(error)
            }
        }

        setTimeout(() => {
            retrieveActors();
            setLoading(false);
        }, 2000);
    }, []);


    const renderHeader = () => {
        const headerElement = ['id', 'Nombre', 'Opciones'];
        return headerElement.map((key, index) => {
            return (
                <div className="col" key={index}>
                    {key.toUpperCase()}
                </div>
            )
        })
    };

    const renderBody = () => {
        return (
            actors && 
            actors.map(({actor_id, first_name, last_name}, index) => (
                <div className="row" key={actor_id}>
                    <div className="col">{actor_id}</div>
                    <div className="col">
                        {first_name}, {last_name}
                    </div>
                    <div className="col">
                        <Link>Editar</Link>
                        <Link to='actores/delete'>Eliminar</Link>
                    </div>
                </div>
            ))
        );
    }

    return (
        <>
            <div className="subtitle">
                <h3>Listado de actores</h3>
                <Link to='/actors/new' className="btn btn-primary">
                    Crear actor
                </Link>
            </div>
            <section>
                <header>
                    {renderHeader()}
                </header>
                { loading && <Loader />}
                {error && (
                    <Message 
                        msg={`Error ${error.code}: ${error.message}`} 
                        bgColor='#dc3545'
                    />
                )}
                {renderBody()}
            </section>
        </>
    );
}

export default ActorList