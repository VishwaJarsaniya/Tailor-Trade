import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../img/logo.png";
import dashboard from "../img/dashboard.png";
import review from "../img/reviews.png";
import track from "../img/checklist.png";
import order from "../img/orders.png";
import { ThemeProvider } from "@emotion/react";
import Theme from "../Theme";

function SideBarNav() {
    const [selectedButton, setSelectedButton] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        switch (path) {
            case "/tailor/Dashboard":
                setSelectedButton("dashboard");
                break;
            case "/tailor/AddNewOrder1":
                setSelectedButton("addneworders");
                break;
            case "/tailor/Reviews":
                setSelectedButton("reviews");
                break;
            case "/tailor/TrackOrders":
                setSelectedButton("trackorders");
                break;
            default:
                setSelectedButton(null);
                break;
        }
    }, [location.pathname]);

    const handleButtonClick = (buttonname, path) => {
        if (path.startsWith("/tailor/AddNewOrder")) {
            setSelectedButton("addneworders");
        } else {
            setSelectedButton(buttonname);
        }
        navigate(path);
    };
    const buttonStyle = {
        backgroundColor: "#fff",
        color: "#000",
        width: "80%",
        padding: "8px",
        textAlign: "left",
        marginLeft: "1px",
        justifyContent: "flex-start",
        paddingLeft: "5%",
    };

    return (
        <ThemeProvider theme={Theme}>
            <div style={{ textAlign: "left" }}>
                <img
                    src={logo}
                    style={{
                        width: "190px",
                        marginLeft: "12%",
                        marginRight: "15%",
                        marginBottom: "10px",
                        marginTop: "25px",
                    }}
                />
                <hr />
                <nav>
                    <ul style={{ listStyle: "none", marginTop: "40px" }}>
                        <li>
                            <Button onClick={() => handleButtonClick("dashboard", "/tailor/Dashboard")} style={{ ...buttonStyle, backgroundColor: selectedButton === "dashboard" ? "#90c8c9" : "#fff" }}>
                                <img src={dashboard} style={{ width: "20px" }} />
                                <Typography style={{ fontSize: "112%", marginLeft: "15px", textTransform: "none" }}>Dashboard</Typography>
                            </Button>
                        </li>
                        <li>
                            <Button onClick={() => handleButtonClick("addneworders", "/tailor/AddNewOrder")} style={{ ...buttonStyle, backgroundColor: selectedButton === "addneworders" ? "#90c8c9" : "#fff" }}>
                                <img src={order} style={{ width: "20px" }} />
                                <Typography style={{ fontSize: "112%", marginLeft: "15px", textTransform: "none" }}>Add New Order</Typography>
                            </Button>
                        </li>
                        <li>
                            <Button onClick={() => handleButtonClick("reviews", "/tailor/Reviews")} style={{ ...buttonStyle, backgroundColor: selectedButton === "reviews" ? "#90c8c9" : "#fff" }}>
                                <img src={review} style={{ width: "20px" }} />
                                <Typography style={{ fontSize: "112%", marginLeft: "15px", textTransform: "none" }}>Reviews</Typography>
                            </Button>
                        </li>
                        <li>
                            <Button onClick={() => handleButtonClick("trackorders", "/tailor/TrackOrders")} style={{ ...buttonStyle, backgroundColor: selectedButton === "trackorders" ? "#90c8c9" : "#fff" }}>
                                <img src={track} style={{ width: "20px" }} />
                                <Typography style={{ fontSize: "112%", marginLeft: "15px", textTransform: "none" }}>Track Orders</Typography>
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </ThemeProvider>
    );
}

export default SideBarNav;
