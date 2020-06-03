import config from "../config";

const PlayersApiService = {
  getAllPlayers() {
    return fetch(config.API_ENDPOINT_PLAYERS, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getPlayerInfo() {
    const url = `${config.API_ENDPOINT_PLAYERS}/playerInfo`;
    console.log('url', url)
      return fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default PlayersApiService;
