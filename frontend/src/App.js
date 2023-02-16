import React, { createContext, useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import "./App.css";

import Footer from "./Components/Footer";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Addactivity from "./Pages/Addactivity";
import Statsactivity from "./Components/Statsactivity";
import Dashtopbar from "./Components/Dashtopbar";

export const Global = createContext();
const App = () => {
  const [changeNav, setChangeNAv] = useState(true);

  useEffect(() => {
    const data = window.localStorage.getItem("nav");
    if (data !== null) setChangeNAv(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("nav", JSON.stringify(changeNav));
  }, [changeNav]);
  // const [changeNav, setChangeNAv] = useState(() => {
  //   const saved = localStorage.getItem("nav");
  //   const value = JSON.parse(saved);
  //   return value || true;
  // });
  // useEffect(() => {
  //   localStorage.setItem("nav", JSON.stringify(changeNav));
  // }, [changeNav]);
  const [getId, setGetId] = useState("");

  const [data, setData] = useState([]);
  const [state, setState] = useState({
    name: "",
    description: "",
    date: "",
    duration: "",
    activity: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setState({ ...state, [name]: value });
  };

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:4000/gett");
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  let form = document.getElementById("acForm");
  async function handleSubmit(e) {
    e.preventDefault();
    // if (isUpdating) {
    //   await fetch(`http://localhost:4000/updatett/${getId}`, {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(state),
    //   });
    //   setIsUpdating(false);
    // } else {
    console.log(state, "State");
    //   // alert("A form was submitted");
    await fetch("http://localhost:4000/insert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    }).then((res) => {
      res.json();
      console.log("data send");
    });
    //   setIsUpdating(false);
    // }
    fetchData();
    state.name = "";
    state.description = "";
    state.date = "";
    state.duration = "";
    form.reset();
  }

  const deletefun = async (id) => {
    await fetch(`http://localhost:4000/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((state) => {
      state.json();
      console.log("data deleted");
    });
    fetchData();
  };

  async function updatefun(id) {
    await fetch(`http://localhost:4000/updatett/${getId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    });
    fetchData();
  }

  async function editfun(id) {
    var data = await fetch(`http://localhost:4000/editt/${id}`)
      .then((data1) => data1.json())
      .then((res) => setState(res));
    setGetId(id);
    // setIsUpdating(true);
    // state.name = data.name;
    // state.description = data.description;
    // state.date = data.date;
    // state.duration = data.duration;
    // state.activity = data.activity;
    // console.log(state);
    // console.log(data.activity);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <Global.Provider
        value={{
          setChangeNAv: setChangeNAv,
          changeNav: changeNav,
          handleInputs: handleInputs,
          state: state,
          handleSubmit: handleSubmit,
          data: data,
          deletefun: deletefun,
          editfun: editfun,
          setState: setState,
          updatefun: updatefun,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addactivity" element={<Addactivity />} />
          <Route path="/stats" element={<Statsactivity />} />
          <Route path="/tp" element={<Dashtopbar />} />
        </Routes>
        <Footer />
      </Global.Provider>
    </Router>
  );
};

export default App;
