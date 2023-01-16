export class HeroTableInfo {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  comics: Comics[];
  series: Series[];
  stories: Stories[];
  events: Events[];
  others?: Urls[];
}

export class Comics {
  available: number;
  collectionURI: string;
  returned: number;
}

export class Series {
  available: number;
  collectionURI: string;
  returned: number;
}

export class Stories {
  available: number;
  collectionURI: string;
  returned: number;
}

export class Urls {
  type: string;
  url: string;
}

export class Events {
  type: string;
  url: string;
}
