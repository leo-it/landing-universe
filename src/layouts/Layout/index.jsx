import Footer from "../../layouts/Footer";
import Navbar from "../../layouts/Navbar";
import PropTypes from "prop-types";
import React from "react";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
