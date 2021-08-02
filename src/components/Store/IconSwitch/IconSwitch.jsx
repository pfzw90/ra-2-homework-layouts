export default function IconSwitch(props) {

    const iconClick = () => {
        props.iconClick()
    }

    return (
        <div className='Store-Icon-Switch' onClick={iconClick}>{props.icon}</div>
    )
}