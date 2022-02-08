/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function javaexcercise() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    console.log("onLoad");
    let randomnumber = Math.random() * 3;
    console.log(Math.floor(randomnumber));
    let whoindex = Math.floor(randomnumber);
    let actionindex = Math.floor(randomnumber);
    let randomnumber2 = Math.random() * 2;
    let whatindex = Math.floor(randomnumber2);
    let randomnumber3 = Math.random() * 4;
    let whenindex = Math.floor(randomnumber3);

    return (
      who[whoindex] +
      " " +
      action[actionindex] +
      " " +
      what[whatindex] +
      " " +
      when[whenindex]
    );
  }
  console.log(javaexcercise());
  console.log("Hello Rigo from the console!");
};
