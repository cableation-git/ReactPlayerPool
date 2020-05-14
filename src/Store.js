export default {
  players: [
    {
      playerId: 1,
      firstName: "Axel",
      lastName: "Hound",
      birthDate: "Aug, 10, 1995",
      height: "5 ft 7 in",
      weight: "150",
      birthCity: "Lankshire",
      birthState: "IA",
      birthCountry: "US",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/USMNT_vs._Trinidad_and_Tobago_%2848125059622%29_%28cropped%29.jpg",
      currentClubId: 1,
      clubIds: [1],
      currentCoachId: 1,
      coachIds: [1]
    },
    {
      playerId: 2,
      firstName: "Billy",
      lastName: "Wilds",
      birthDate: "06111993",
      height: "5f11in",
      weight: "160",
      birthCity: "Hershville",
      birthState: "NM",
      birthCountry: "US",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/USMNT_vs._Trinidad_and_Tobago_%2848125059622%29_%28cropped%29.jpg",
      currentClubId: 2,
      clubIds: [2,3],
      currentCoachId: 2,
      coachIds: [2]
    },
    {
      playerId: 3,
      firstName: "Sam",
      lastName: "Smith",
      birthDate: "02021994",
      height: "5f10in",
      weight: "159",
      birthCity: "Broadcomp",
      birthState: "NY",
      birthCountry: "US",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/USMNT_vs._Trinidad_and_Tobago_%2848125059622%29_%28cropped%29.jpg",
      currentClubId: 4,
      clubIds: [4,5],
      currentCoachId: 3,
      coachIds: [3]
    },
  ],
  clubs: [
    {
      clubId: 1,
      name: "Chelsea",
      league: "EPL",
      iconUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZfQ5euUwSyIwj5akRRaAz4ouR12TbTuKSVNiufXAjunjqM2TE",
      division: "Premiere",
      city: "London",
      country: "UK",
      inception: 1900,
    },
    {
      clubId: 2,
      name: "Arsenal",
      league: "EPL",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png",
      division: "Premiere",
      city: "London",
      country: "UK",
      inception: 1901,
    },
    {
      clubId: 3,
      name: "Borussia Dortmund",
      league: "Bundesliga",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png",
      division: "1st Division",
      city: "Dortmund",
      country: "EU",
      inception: 1902,
    },
    {
      clubId: 4,
      name: "Leicester",
      league: "EPL",
      iconUrl:
        "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052016/untitled-1_156.png?itok=-fzLOaLb",
      division: "Premier",
      city: "Leicester",
      country: "UK",
    },
    {
      clubId: 5,
      name: "A. S. Roma",
      league: "Italian Football League",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/AS_Roma_logo_%282017%29.svg/1200px-AS_Roma_logo_%282017%29.svg.png",
      division: "Serie A",
      city: "Rome",
      country: "Italy",
    },
  ],
  coaches: [
    {
      coachId: 1,
      firstName: "Bill",
      lastName: "Lizze",
      birthDate: "08101955",
      birthCity: "Lankshire",
      birthState: "IA",
      birthCountry: "Italy",
      imageUrl: "xxx",
      currentClubId: 1,
      clubIds: [1],
      yearsAtCurrentClub: 3
    },
    {
      coachId: 2,
      firstName: "Hiss",
      lastName: "Lizzer",
      birthDate: "04101975",
      birthCity: "Lankshire",
      birthState: "IA",
      birthCountry: "Belguim",
      imageUrl: "xxx",
      currentClubId: 2,
      clubIds: [2],
      yearsAtCurrentClub: 3
    },
    {
      coachId: 3,
      firstName: "Scott",
      lastName: "Snead",
      birthDate: "02101985",
      birthCity: "Lankshire",
      birthState: "IA",
      birthCountry: "Germany",
      imageUrl: "xxx",
      currentClubId: 3,
      clubIds: [3],
      yearsAtCurrentClub: 3
    },
  ],  
  playerStats: [
    {
      playerStatId: 1,
      playerId: 1,
      year: "2020",
      club: "BVB",
      gamesPlayed: 2,  
      gamesStarted: 2,    
      goals: 0,
      minutes: 180,
      assists: 1,
      shots: 3,
      sog: 1,
      foulsCommitted: 3,
      offsides:0,
      yellows: 1,
      reds: 0,
    },    
  ],  
};

