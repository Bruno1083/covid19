import React, {memo} from "react";
import { PropTypes } from "../../../../node_modules/@material-ui/core/index";
import {Grid, Skeleton} from '../../../components'
import {getByDisplayValue} from '@testing-library/react'
import Card from './Card'

function Board({data}){
    const {cases, todayDeaths, cecovered, deaths, todayCases } = data

    const getValue = (value) => value ? value : <Skeleton variant= "text" width={182}></Skeleton>

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value = {getByDisplayValue(cases)} lebel="total de casos" color= "#5b78"></Card>   
            </Grid>
        </Grid>
    )
}