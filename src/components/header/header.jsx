import { Header, Container, Button, Username, Avatar, Desc } from "./styles"
import { useSelector } from "react-redux"

function HeaderComponent(props) {
    const { setEdit, activeImage } = props;
    const handleEdit = () => {
        setEdit(true);
    }
    
    const user = useSelector((state)=> state.user);
    return ( 
        <Header 
            backgroundColor={user.themeColor}
            backgroundImage={`linear-gradient(180deg, ${user.themeColor} 2%, ${user.themeColor}, 65%, #181818 100%)`}
        >
            <Container>
                <Button onClick={handleEdit}>Edit</Button>
                <Avatar src={user.url || activeImage} alt="avatar"/>
                <Username>{user.displayName}</Username>
                <Desc>{user.age} years old</Desc>
                <Desc>{user.description}</Desc>
            </Container>
        </Header> 
    );
}

export default HeaderComponent;