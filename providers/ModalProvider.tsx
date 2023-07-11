"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/Components/AuthModal";

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
            <AuthModal />
        </>
    );
}

export default ModalProvider;