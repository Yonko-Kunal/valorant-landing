import React from "react";

const Container = ({ children, className = "" }) => {
    return (
        <div
            className={`max-w-screen mx-auto bg-primary-background ${className}`}
        >
            {children}
        </div>
    );
};

export default Container;
