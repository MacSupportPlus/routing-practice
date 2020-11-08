const Color = props => {
    const {color}= props
    return (
    <div>
        <h1 className="text-center">The color is <span style={{color: color}}>{color}</span></h1>
    </div>
    )
}

export default Color; 