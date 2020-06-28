import { Component, OnInit } from '@angular/core';
import { Attraction } from '../attraction';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  attractionsList: Attraction[];
  selectedAttractionsList: Attraction[] = [];

  constructor() {
    const zoo = new Attraction('../../assets/jerusalem-zoo.jpg', 'Zoo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'https://www.tripadvisor.co.il/Attraction_Review-g293983-d320897-Reviews-Tisch_Family_Zoological_Gardens_Biblical_Zoo-Jerusalem_Jerusalem_District.html');
    const bahai = new Attraction('../../assets/bahaim-garden.jpg', 'The Bahai Gardens', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'https://www.tripadvisor.co.il/Attraction_Review-g293982-d319539-Reviews-The_Baha_i_Gardens-Haifa_Haifa_District.html');
    const metzada = new Attraction('../../assets/metzada.jpg', 'Metzada', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'https://www.tripadvisor.co.il/Tourism-g8838582-Masada_Northern_District-Vacations.html');
    const kinneret = new Attraction('../../assets/sea-of-galil.jpg', 'Sea of Galilee', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'https://www.tripadvisor.co.il/Attraction_Review-g297765-d325469-Reviews-Sea_of_Galilee-Tiberias_Galilee_Region_Northern_District.html');
    const telAviv = new Attraction('../../assets/tel-aviv-beach.jpg', 'Tel-Aviv Beaches', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'https://www.tripadvisor.co.il/Attraction_Review-g293984-d561152-Reviews-Tayelet-Tel_Aviv_Tel_Aviv_District.html');
    const westWall = new Attraction('../../assets/west-wall-jerusalem.jpg', 'The Western Wall', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'https://www.tripadvisor.co.il/Attraction_Review-g293983-d318216-Reviews-Western_Wall-Jerusalem_Jerusalem_District.html');

    this.attractionsList = [zoo, bahai, metzada, kinneret, telAviv, westWall];
  }


  ngOnInit(): void {
    this.chooseRandomSources();
  }

  chooseRandomSources(): void {
    const firstAtt = this.attractionsList[Math.floor(Math.random() * this.attractionsList.length)];
    this.deleteElementFromAttractions(firstAtt);
    const secondAtt = this.attractionsList[Math.floor(Math.random() * this.attractionsList.length)];
    this.deleteElementFromAttractions(secondAtt);
    const thirdAtt = this.attractionsList[Math.floor(Math.random() * this.attractionsList.length)];
    this.deleteElementFromAttractions(thirdAtt);

    this.selectedAttractionsList.push(firstAtt);
    this.selectedAttractionsList.push(secondAtt);
    this.selectedAttractionsList.push(thirdAtt);

  }

  private deleteElementFromAttractions(attraction): void {
    const index = this.attractionsList.indexOf(attraction, 0);
    if (index > -1) {
      this.attractionsList.splice(index, 1);
    }
  }

  get attractions(): any {
    return this.selectedAttractionsList;
  }

}
