import React from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    ListGroup,
    ListGroupItem
} from "reactstrap";
import "./Menu.css";

function Menu(props){

    return (
        <section>
            <Link to={`/${props.title.toLowerCase()}/new`}>
                <button>Add New {props.title.slice(0, -1)}</button>
            </Link>
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        {props.title} Menu
                    </CardTitle>
                    <CardText>
                        The most delicious {props.title.toLowerCase()} in the world. Come enjoy our {props.title.toLowerCase()}!
                    </CardText>
                    <ListGroup>
                        {props.items.map(item => (
                            <Link to={`/${props.title.toLowerCase()}/${item.id}`} key={item.id}>
                                <ListGroupItem>{item.name}</ListGroupItem>
                            </Link>
                        ))}
                    </ListGroup>
                </CardBody>
            </Card>
        </section>
        
        
    );
}

export default Menu;