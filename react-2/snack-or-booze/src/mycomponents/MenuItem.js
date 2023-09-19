import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    Card,
    CardBody,
    CardText,
    CardTitle
} from "reactstrap";
import "./Menu.css";

function MenuItem(props){
    const { id } = useParams();
    const navigate = useNavigate();

    let item = props.items.find(item => item.id === id);

    useEffect(() => {
        if (!item) {
          navigate(props.cantFind);
        }
    }, [item, navigate, props.cantFind]);

    const from = props.cantFind.substring(1); 

    return (
        <section>
            <div><button onClick={() => navigate(`/${from}`)}>Back</button></div>
            {item && (
                <Card>
                    <CardBody>
                        <CardTitle className="font-weight-bold text-center">
                            {item.name}
                        </CardTitle>
                        <CardText className="font-italic">
                            <p>{item.description}</p>
                            <p>
                                <b>Recipe:</b> {item.recipe}
                            </p>
                            <p>
                                <b>Instructions:</b> {item.serve}
                            </p>
                        </CardText>
                    </CardBody>
                </Card>
            )}
        </section>
    );
}


export default MenuItem;