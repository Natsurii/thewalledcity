import fort from '/assets/fortvec.svg'

function Hero(){

    return (
        <div className="hero">
            <div className="hero__text">
                <h1>The Walled City</h1>
                <p>Experience the magic of the historic walled city of Intramuros, where the past meets the present.</p>
                <button>Take a tour</button>
            </div>
            <img src={fort} alt="Fort Santiago Vector" />

        </div>
    )
}

export default Hero;