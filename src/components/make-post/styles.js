import styled, { css }from "styled-components";

export const Container = styled.form`
    height: 80vh;
    background-color: #292929;
    padding: 0.75rem 1.25rem 0 1.25rem;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
    & .makePost-title {
        height: 50px;
        background-color: #535353;
        color: white;
        border: none;
        font-family: "Noto Sans", sans-serif;
        padding: 0.25rem 0.5rem 4rem 0.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    & .makePost-desc {
        background-color: #535353;
        color: white;
        border: none;
        font-family: "Noto Sans", sans-serif;
        padding: 0.25rem 0.5rem 4rem 0.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    & .makePost-tags {
        margin-top: 1rem;
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    & .makePost-tags > button {
        color: white;
        border: none;
        padding: 0.4rem 0.8rem;
        font-family: "Noto Sans", sans-serif;
        border-radius: 14px;
        cursor: pointer;
    }
    & .makePost-tags-NSFW {
        background-color: rgb(209, 66, 47);
    }
    & .makePost-tags-Mood {
        background-color: rgb(1, 111, 201);
    }
    & .makePost-tags-Quotes {
        background-color: rgb(183, 47, 224);
    }
    & .makePost-tags-Shitpost {
        background-color: rgb(197, 186, 23);
    }
    & .makePost-tags-None {
        background-color: grey;
    }
    & .makePost-tags-selected {
        background-color: teal;
        box-shadow: 0px 0px 10px 7px rgb(0, 204, 160);
    }
`;
export const Navigation = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 1.25rem;
    & .makePost-save {
        cursor: pointer;
        align-self: flex-end;
        border:2px solid white;
        padding: 0.45rem 0.75rem;
        border-radius: 16px;
        font-weight: 700;
        font-size: 1rem;
    };
`;
export const PostsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.85rem;
    font-family: "Noto Sans", sans-serif;
`;
export const Posts = styled.div`
    background-color: rgb(49, 49, 49);
    margin-bottom: 1rem;
    padding: 1rem 1rem 1rem 2rem;
    font-family: "Noto Sans", sans-serif;
`;
export const PostTitle = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
`;
export const PostTag= styled.div`
    color: white;
    border: none;
    margin:0.75rem 0;
    font-size: 0.9rem;
    font-family: "Noto Sans", sans-serif;
    border-radius: 14px;
    text-align: center;
    padding: 2px 10px;
    cursor: pointer;
    width: max-content;
    ${(props) => {
        switch (props.backgroundColor) {
            case "NSFW":
                return css`
                    background-color: rgb(209, 66, 47);
                `;
            case "Mood":
                return css`
                    background-color: rgb(1, 111, 201);
                `;
            case "Quotes":
                return css`
                    background-color: rgb(183, 47, 224);
                `;
            case "Shitpost":
                return css`
                    background-color: rgb(197, 186, 23);
                `;
            case "None":
                return css`
                    background-color: grey;
                `;
            default:
                return css`
                    background-color: white;  
            `;
        }
    }}
`;
export const PostDesc = styled.div`
    font-size: 1rem;
`;
