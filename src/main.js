/**
 * Created by chenghui on 2/8/2016.
 */
import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./greeting";
import "./mycss.css";
import "./index.html";
//require("style-loader");
//require("css-loader");

ReactDOM.render(
<Greeting name="World"/>,
    document.getElementById("demo")
);