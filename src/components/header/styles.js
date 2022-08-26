import styled from 'styled-components'

export const Header = styled.header`
    background-color: ${props => props.backgroundColor};
    background-image: ${props => props.backgroundImage};
    max-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom:20px;
    margin-bottom: 10px;
    
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 0 1rem 0 2rem;
    color: white;
    width: 100%;
`
export const Button = styled.div`
    cursor: pointer;
    align-self: flex-end;
    border:2px solid white;
    margin-top: 1rem;
    padding: 0.45rem 0.75rem;
    border-radius: 16px;
    font-weight: 700;
    font-size: 1rem;
`
export const Username = styled.div`
    width: 50%;
    font-weight: 700;
    margin-bottom: 0.5rem;
    font-size:1.2rem;
`
export const Desc = styled.div`
    font-size:1rem;
    max-width: 350px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const Avatar = styled.img`
    width: 85px;
    height: 130px;
    object-fit: cover;
    overflow: hidden;
`
export const Loading = styled.p`
    color:white;
    text-align: center;
    margin-top: 10px;
`
export const Error = styled.p`
    color: #ff0011;
    text-align: center;
    margin-top: 10px;
`
