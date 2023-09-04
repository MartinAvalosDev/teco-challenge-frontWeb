import { useEffect, useState } from 'react'
import apiHandler, { type Weather } from './apiHandler'


function App() {
    const [status, setStatus] = useState<'pending' | 'success'>('pending')
    const [weather, setWeather] = useState<Weather | null>(null)

    useEffect(() => {
      apiHandler.weather.fetch(0,0).then((weather) =>{
        setWeather(weather);
        setStatus('success')
      })
    }, [])

    

    if (status === 'pending') {
        return (
            <div>'El estado esta cargando..'</div>
        )
    }
    if (!weather) {
        return <div>No está disponible el clima de esa ciudad</div>
    }

    return <main>
        <h1>{weather.city.name}</h1>
        <ul>
            {weather.forecast.map((forecast,index)=>(
                <li key={index}>Min: {forecast.min}, Max: {forecast.max}</li>
            ))}
        </ul>
    </main>

    return (
        <div>holaa</div>
    )

}

export default App
