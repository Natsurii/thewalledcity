function TestimonialCard({message, user, image}) {
    return (
        <div className="testimonial__card">
            <img src={image} />
            <div>
                <p className="card__text" id="message">{`"${message}"`}</p>
                <p className="card__text" id="name">{`- ${user}`}</p>
            </div>
        </div>
    )
}

export default TestimonialCard;