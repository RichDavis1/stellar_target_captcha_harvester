// ==UserScript==
// @name         Target captcha harvester
// @namespace    richdavis
// @version      1.0.0
// @description  Harvest many target sessions
// @author       living_tribunal / Rich Davis
// @match        https://login.target.com/gsp/static/v1/login/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

"use strict";

// Auto click on login button
const AUTO_CLICK = true;

(async function () {
  document.addEventListener("DOMContentLoaded", async function () {
      await waitForLoginButton();

      var loginButton = document.getElementById("login");

      if (typeof(loginButton) == 'undefined' || loginButton == null){
          alert("login button not present");
      }

      var count = 0;

      while(count < 100) {
        count++
          await sleep(75)
          loginButton.click();
      }

      alert(count + " cookies have been generated");
  });
})();

// Wait for login button to load
const waitForLoginButton = async () => {
    loginButton = null;
    while(loginButton == null){
        await sleep(500)

        var loginButton = document.getElementById("login");
    }
}

// Sleep for specified delay
const sleep = (duration = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
};
