

function DestinationCard({destimage, destname}) {
    return (
        <div className="destcard rectcard" 
        style=
        {
            {
                "--img": `url(${destimage})`
            }
        }
        >
            <h3>{destname}</h3>
        </div>
    )
}

export default DestinationCard