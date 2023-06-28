import c from './iframe.module.css'
export const Iframe = () => {
    return (
        <div className={c.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.5006864166726!2d-86.5006417!3d30.393533399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88914155eb6499ad%3A0x61c765e018b6fe89!2zNDA5IEhhcmJvciBCbHZkLCBEZXN0aW4sIEZMIDMyNTQxLCDQodCo0JA!5e0!3m2!1sru!2skz!4v1687858698744!5m2!1sru!2skz"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}>
            </iframe>
        </div>
    )
}