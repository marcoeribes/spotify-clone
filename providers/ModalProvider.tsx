"use client";

import { useEffect, useState } from "react";

import Modal from "@/Components/Modal";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    /* trick used to determine that the modal being rendered is not on server side (on the client) */
    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted){
        return null;
    }

    return (
        <>
            <Modal 
                title="Test Modal" 
                description="Test Description"
                onChange={() => {}}      
                isOpen      
            >
                Test Children
            </Modal>
        </>
    );
}

export default ModalProvider;