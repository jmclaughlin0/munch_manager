import './App.css';
import React, {useState} from 'react'
import {Header, Icon, Grid, Button, Segment} from "semantic-ui-react";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";
import {Link} from "react-router-dom";
import {foodPageURL, pooPageURL, sleepPageURL} from "./URLS";

export default function Home() {

    const [currentPage, setCurrentPage] = useState("")

    const updateCurrentPage = () => {
        setCurrentPage(window.location.pathname);
    }

    const log_options = [{text:"Click here to Log some Food", icon:"food", route: foodPageURL, colour: 'purple'},
        {text:"Click here to Log a Poo", icon:"lab", route: pooPageURL, colour: 'brown'},
        {text:"Click here to Log Sleep/Stress", icon:'bed', route: sleepPageURL, colour: 'ice'}]


    function output_log_options() {
        return log_options.map((option) => (
            <Grid.Column>
                    <Link to = {option.route}>
                        <Button color = {option.colour} animated icon onClick={updateCurrentPage}>
                            <Button.Content visible>{option.text}</Button.Content>
                            <Button.Content hidden>
                                <Icon name={option.icon} />
                            </Button.Content>
                        </Button>
                    </Link>
            </Grid.Column>
        ))
    }
    return (
        <div className="App-header">
            <Header as='h1'>
                Welcome to the MUNCH MANAGER
            </Header>
            <HeaderSubHeader as='h4'>Your home of diet and poop tracking</HeaderSubHeader>

            <Grid columns = {3} divided textAlign={"center"}>
                {output_log_options()}
            </Grid>
        </div>
    );
};
