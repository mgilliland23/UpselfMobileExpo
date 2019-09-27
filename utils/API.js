import axios from "axios";

function getMessageAnalysis(message) {
  console.log("making axios req");
  return axios
    .post("/api/AnalyzeMessage", {
      params: { userMessage: message }
    })
    .then(
      response => {
        console.log(response.data);
      },
      error => {
        console.log(error);
      }
    );
}

function getMessageJaro(message) {
  console.log("making api request...");
  return axios
    .post("https://upself.io/api/jaroMessage", {
      params: { userMessage: message }
    })
    .then(
      response => {
        console.log(response.data);
        return response.data;
      },
      error => {
        console.log(error);
      }
    );
}

function getCompliment(message) {
  console.log("making compliments api request...");

  // need to change the JSON that this function links to (copied from regular chat for the time being)
  return axios
    .post("https://upself.io/api/jaroCompliment", {
      params: { userMessage: message }
    })
    .then(
      response => {
        console.log(response.data);
        return response.data;
      },
      error => {
        console.log(error);
      }
    );
}

export default { getMessageAnalysis, getMessageJaro, getCompliment };
