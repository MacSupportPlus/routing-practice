const BgColor = props => {
    const {color, Color}= props
    return (
    <div className = "text center" style= {{color: {Color}}}>
        <h1 className="text-center">The color is <span style={{color: color}}>{color}</span></h1>
        <h1 className="text-center">The Background color is <span style={{backgroundColor: Color}}>{Color}</span></h1>
       
    </div>
    )
}

export default BgColor; 