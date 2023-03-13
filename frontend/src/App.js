import './App.css';
import React from 'react'
import {Header, Icon, Grid, Button} from "semantic-ui-react";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";

export default function App() {
    const log_options = [{text:"Click here to Log some Food", icon:"food"},
        {text:"Click here to Log a Poo", icon:"lab"},
        {text:"Click here to Log Sleep, Stress or anything else", icon:'bed'}]


    function output_log_options() {
        return log_options.map((option) => (
            <Grid.Column>
                <Button animated icon>
                    <Button.Content visible>{option.text}</Button.Content>
                    <Button.Content hidden>
                        <Icon name={option.icon} />
                    </Button.Content>
                </Button>
            </Grid.Column>
        ))
    }
    return (
        <div className="App-header">
            <Header as='h1'>
                Welcome to the MUNCH MANAGER
            </Header>
            <HeaderSubHeader as='h4'>Your home of diet and poop tracking</HeaderSubHeader>
            {output_log_options()}
        </div>
    );
};
