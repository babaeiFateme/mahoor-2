const Buttons = ({...rest }) => {
    const ButtonElement = component || 'buttons'
    return (
        <ButtonElement {...rest}>
            {children}
        </ButtonElement>
    )
}

export default Buttons