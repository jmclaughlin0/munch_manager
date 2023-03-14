import React from "react";
import {Header} from "semantic-ui-react";
import UploadImages from "./ImageUploading/UploadImages";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";


export default function PooClassifier(){
    return(
        <div>
            <Header as={'h1'} className={'App-header'} color='white'>
                Welcome to the Poo Paparazzi!

                <HeaderSubHeader className={'App'}>Please Upload Your Photos Here:</HeaderSubHeader>
                <UploadImages />
            </Header>

        </div>
    );
}