import { Footer, Title } from './styles'
function FooterComponent(props) {
    const { isOpenPost, setOpenPost } = props;
    return ( 
        <Footer>
            <Title onClick={()=>{setOpenPost(!isOpenPost)}}>
                {isOpenPost ? 'x' : '+'}
            </Title>
        </Footer>
    );
}

export default FooterComponent;