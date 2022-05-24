import React, {memo, useState, useCallback, useEffect} from 'react';
import Api from '../../api'

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
            teste
        </div>
    )
}

export default memo(Main)