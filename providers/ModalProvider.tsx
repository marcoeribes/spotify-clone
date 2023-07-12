"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/Components/AuthModal";
import UploadModal from "@/Components/UploadModal";

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
            <UploadModal />
        </>
    );
}

export default ModalProvider;