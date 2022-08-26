import { PostsWrapper, Posts, PostTitle, PostTag, PostDesc } from '../make-post/styles'
import { useSelector } from 'react-redux'
function PostComponent() {
    const posts = useSelector((state)=>(state.post.posts))
    const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
    return ( 
        <PostsWrapper >
            {posts.length > 0 && posts.slice(1).map((post, index)=>(
                <Posts key={index}>
                    <PostTitle>{post.title}</PostTitle>
                    <PostTag backgroundColor={tags[post.tag]}>{tags[post.tag]}</PostTag>
                    <PostDesc>{post.desc}</PostDesc>
                </Posts>
            ))}
        </PostsWrapper>
    );
}

export default PostComponent;