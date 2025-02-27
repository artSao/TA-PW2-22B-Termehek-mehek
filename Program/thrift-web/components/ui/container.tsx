interface ContainerProps {
    children: React.ReactNode
}



const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div className="mx-auto max-w7x1">
            {children}
        </div>  

    );

}

export default Container;