const Button = ({
    label,
    icon: Icon,
    startIcon: StartIcon,
    onClick,
    outlined,
    fontSize,
    fontWeight,
    color,
    bgColor,
    rounded,
    padding,
    fullWidth,
}) => {

    const ButtonStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width: (fullWidth) ? '100%' : 'auto',
        fontSize: (fontSize) ? fontSize : '1rem',
        fontWeight: (fontWeight) ? fontWeight : "300",
        color: (color) ? color : 'black',
        padding: (padding) ? padding : '0rem 0.5rem',
        border: (outlined) ? '2px solid black' : 'none',
        borderRadius: (rounded) ? '12px' : '0px',
        backgroundColor: (outlined) ? 'white' : (bgColor) ? bgColor : 'dodgerblue',
        cursor: 'pointer',
    }

    return (
        <div
        onClick={onClick}
        style={ButtonStyle}
        >
            {StartIcon && <StartIcon /> }
            {label}
            {Icon && <Icon />}
        </div>
    );
}
 
export default Button;