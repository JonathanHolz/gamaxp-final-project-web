import styled from "styled-components";

export const Title = styled.h1`
font-size: 2rem;
font-weight: 700;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 4rem);
    @media (min-width: 800px) {
        height: calc(100vh - 5rem);
    }
    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 480px;
        border-radius: .25rem;
        padding: 4rem;
    }
`;

export const InnerForm = styled.form`
   
`

export const FormInputs = styled.section`
    display: grid;
    grid-auto-flow: row;
    gap: .75rem;
    margin-bottom: 1.25rem;
    a {
        text-align: center;
        color: hsl(234, 13%, 70%);
        transition: .5s;
        span {
            font-weight: 600;
        }

        &:hover {
            text-decoration: underline;
           
        }
    }
`

export const InputWrapper = styled.div`
    position: relative;
    svg {
        position: absolute;
        top: 50%;
        left: 1rem;
        transform: translateY(-50%);
        font-size: .875rem;
    }
    input{
        width: 100%;
        height: 3rem;
        padding: 0px 1em 0px 2.65em;
        background-color: hsl(0, 0%, 80%);
        border: 2px solid;
        border-color: hsl(0, 0%, 80%);
        border-radius: .25rem;
        font-size: 1rem;
        cursor: pointer;


    ::-webkit-input-placeholder {
        opacity: 0.4;
        font-size: inherit;
        color: inherit;
        transition: opacity 0.2s ease, transform 0.2s ease;
    }

    &:hover {
        border: 1px solid #a3afc4;
    }

    &:focus {
        border: 1px solid #d8dde6;
        background-color: rgba(246, 246, 246, 0.2);
    }

    :focus::-webkit-input-placeholder {
        opacity: 0;
        transform: translateX(10px);
    }
    }
`

export const Message = styled.div`
    color: red;
`

export const Button = styled.button`
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    height: 3rem;
    border: 0px;
    border-radius: .25rem;
    background: #FFC107;
    cursor: pointer;
`