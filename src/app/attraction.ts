export class Attraction {
  source: string;
  title: string;
  description: string;
  information: string;

  constructor(source, title, desc, info) {
    this.source = source;
    this.title = title;
    this.description = desc;
    this.information = info;
  }
}
