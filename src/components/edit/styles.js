import styled from "styled-components";

export const Form = styled.form`

`;
export const Container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #0c0c0c;
    height: 100vh;
    width: 100%;
`;
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    width: 100%;
    gap: 10px;
    margin: 10px 0 20px 0;
`;
export const Button = styled.button`
    background-color: transparent;
    border: none;
    align-self: end;
    margin: 1rem 1.15rem 0 0;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    color: rgb(41, 128, 243);
`;
export const Back = styled.button`
    background-color: transparent;
    color: #fff;
    border: none;
    align-self: end;
    margin: 1rem 1.15rem 0 0;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
`;
export const Heading = styled.div`
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;
`;
export const InputWrapper = styled.div`
    width: 80%;
    font-size: 1rem;
    margin-top: 1.25rem;
    display: flex;
    flex-direction: column;
    & > input {
        margin: 1rem 0 1rem 0;
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;
        background-color: #505050;
        border: none;
        border-radius: 4px;
        color: white;
      }
`;
export const Label = styled.label`
    margin-top: 1rem;
    &:nth-child(7) {
        margin-bottom: 1rem;
    }
`;
export const Input = styled.input`
    width: 100%;
    font-size: 1rem;
    margin-top: 1.25rem;
    display: flex;
    flex-direction: column;
`;
export const InputText = styled.textarea`
    padding: 0.25rem 0.5rem 4rem 0.5rem;
    height: 100px;
    background-color: #505050;
    border: none;
    border-radius: 4px;
    color: white;
    margin: 1rem 0 1rem 0;
    text-align: start;
    font-family: "Noto Sans", sans-serif;
    font-size: 1rem;
`;
export const ImageWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    margin-top: 1rem;
`;
export const Image = styled.img`
    cursor: pointer;
    border-radius: 14px;
    background-color: white;
    padding: 0.5rem;
    width: 90px;
    margin-bottom: 2rem;
    height: 130px;
    object-fit: cover;
    overflow: hidden;
    &.active {
        box-shadow: 7px 5px 1px #fc894d;
    }
`;
export const ThemeWrapper = styled.div`
    display: flex;
    align-items:center;
    margin-bottom: 3rem;
`;
export const Theme = styled.input`
    margin-left: 5rem;
    margin-top: 1rem;
`;

export const Error = styled.div`
    font-size: 0.8rem;
    color: #ff0011;
`;