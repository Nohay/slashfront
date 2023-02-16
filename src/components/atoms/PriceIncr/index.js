import React, {useEffect, useState} from 'react'

const PriceIncr = (
    price,
    currency,
    delay,
    increase
) => {

    price=1.5
    delay=0.25
    increase=0.00000000500
    currency='€'

    const [priceDisplay, setPriceDisplay] = useState(price)

    useEffect(() => {
        const interval = setInterval(() => {
            setPriceDisplay(priceDisplay + (increase * delay) / 1000)
        }, delay)

        return () => clearInterval(interval)
    })

    return (<div>
        {priceDisplay}{currency}
    </div>)
}


export default PriceIncr