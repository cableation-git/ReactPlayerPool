import config from "../config";

const CoachesApiService = {
  getAllCoaches() {
    return fetch(config.API_ENDPOINT_COACHES, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default CoachesApiService;
