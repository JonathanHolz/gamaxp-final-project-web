import React, { ReactNode } from "react";
import styled from 'styled-components';

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

const ModalOverlay = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    @media (min-width: 800px) {
        display: none;
    }
`;

const ModalBox = styled.div`
    display: block;
    width: 70%;
    height: 70%;
    padding: 1rem;
    border-radius: 1rem;
    background: white;
`;

export default function Modal(props: ModalType) {
    return (
        <>
            {props.isOpen && (
                <ModalOverlay onClick={props.toggle}>
                    <ModalBox onClick={(e) => e.stopPropagation()}>
                        {props.children}
                    </ModalBox>
                </ModalOverlay>
            )}
        </>
    );
}