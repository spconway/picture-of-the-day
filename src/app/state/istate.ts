export interface ISTATE {
  currState: IAPOD;
  nextState: IAPOD | null;
}

export interface IAPOD {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
  stars?: number;
}

export interface IUPDATE {
  stars: number;
}

// {
//   "copyright": "Juan Carlos Casado",
//   "date": "2022-04-16",
//   "explanation": "Taken with a camera fixed to a tripod, many short exposures were aligned with the stars to unveil this beautiful, dark night sky. Captured near the rural village of Albany`a at the northeastern corner of Spain, the three stars of Orion's belt stretch across top center in the starry frame. Alnitak, the easternmost (left) of the belt stars is seen next to the more diffuse glow of the Flame Nebula and the dark notch of the famous Horsehead. Easily visible to the naked-eye The Great Nebula of Orion is below the belt stars. A mere 1,500 light-years distant, it is the closest large stellar nursery to our fair planet. Best seen in photographs, the broad and faint arc of Barnard's Loop seems to embrace Orion's brighter stars and nebulae though. In the northern spring the familiar northern winter constellation is setting. Near the western horizon toward lower right Orion's apparently bright blue supergiant Rigel just touches the branches of a pine tree.",
//   "hdurl": "https://apod.nasa.gov/apod/image/2204/orionpines_2k.jpg",
//   "media_type": "image",
//   "service_version": "v1",
//   "title": "Orion Pines",
//   "url": "https://apod.nasa.gov/apod/image/2204/orionpines_1k.jpg"
// }
