import React, {memo, useState, useCallback, useEffect} from 'react';
import Api from '../../api'
import { ContainerStyled } from './style'

function Main() {
    const[data, setData] = useState({})
    const [country, setCountry] = useState('brazil')

    const getCovidData = useCallback((country) =>{
        Api.getCoutry(country)
        .then(data => setData(data))
    }, [])

    useEffect(()=>{
        getCovidData(country)
    }, [getCovidData, country])

    return(
        <div>
            <ContainerStyled>
                <div className='mb-2'>

                </div>
            </ContainerStyled>
        </div>
    )
}

export default memo(Main)