/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import {useEffect, useState} from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Grid from '@mui/material/Grid';
import { OneImage } from "./oneimage";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import moment from 'moment';

export default function Index() {
  const [today, setToday] = useState({});
  const [list, setList] = useState({});
  const [startList, setStartList] = useState({});
  const [date, setDate] = useState();
  const [start, setStart] = useState(moment(new Date(), "dddd MMMM DD YYYY h:mm:ss").format("YYYY-MM-DD"));
  useEffect(() => {
    fetchDataToday();
    fetchDataList();
    fetchDataStart()
    }, []);

    useEffect(() => {
      fetchDataStart()
    }, [start]);

    const handleChange = (value) => {
      setDate(value);
      let d = moment(value, "dddd MMMM DD YYYY h:mm:ss").format("YYYY-MM-DD");
      setStart(d);
      
    }

    const fetchDataToday = () => {
      return fetch("https://api.nasa.gov/planetary/apod?api_key=SF84cDGPRQ99Ubf5kLUckHWM4AulSbAoJSJLexjE")
            .then((response) => response.json())
            .then((data) => setToday(data));
          }
    console.log("today", today)

    const fetchDataList = () => {
      return fetch("https://api.nasa.gov/planetary/apod?count=10&api_key=SF84cDGPRQ99Ubf5kLUckHWM4AulSbAoJSJLexjE")
            .then((response) => response.json())
            .then((data) => setList(data));
          }
    console.log("list", list)

    const fetchDataStart = () => {
      return fetch(`https://api.nasa.gov/planetary/apod?start_date=${start}&api_key=SF84cDGPRQ99Ubf5kLUckHWM4AulSbAoJSJLexjE`)
            .then((response) => response.json())
            .then((data) => setStartList(data));
          }
    console.log("start list", startList)

  return (
    <>
      <IndexNavbar fixed />
      
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Find your favorite galaxy
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    In love with the outer space? 
                  </p>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Search for the outer space picture of the day
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i class="fas fa-book-open"></i>
                    </div>
                    <h6 className="text-xl font-semibold">What you can find?</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      New astronomy pictures from NASA with surprising fact everyday.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i class="far fa-heart"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Hit that LIKE button</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Send the heart to your favorite astronomy picture. Don't miss out!
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i class="fas fa-search"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Search for your own</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Looking for space pictures from the past? We got your back!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i class="fas fa-rocket text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Astronomy Picture Of The Day
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  {today.explanation}
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    alt="..."
                    src={today.url}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583"
                        className="text-blueGray-700 fill-current"
                      ></polygon>
                    </svg>
                    <Grid container spacing={3}>
                      <Grid item xs={8}>
                      <div>
                    <h4 className="text-xl font-bold text-white">
                      {today.title}
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      {today.date}
                    </p>
                    </div>
                      </Grid>
                      <Grid item xs={4}>
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                      <i class="fas fa-book-open"></i>
                    </div>
                      </Grid>
                    </Grid>
                    
                    
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="flex flex-wrap items-center mb-12">
              <div className=" px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Enjoy your Spacestagram
                </h3>
              </div>
              </div>
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              {list[0] ? list.map(image => <OneImage url={image.url} title={image.title} date={image.date}/>) : null}
              
              
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Want something more?
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                Choose the starting date to find more pictures
                </p>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  inputFormat="MM/dd/yyyy"
                  value={date}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              {startList[0] ? startList.map(image => <OneImage url={image.url} title={image.title} date={image.date}/>) : null}
              
              
            </div>
          </div>
        </section>
      </main>



      
      <Footer />
    </>
  );
}
