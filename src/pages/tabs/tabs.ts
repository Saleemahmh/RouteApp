import { Component } from '@angular/core';

import { BusRoutePage } from '../busroute/busroute';
import { TrainRoutePage } from '../trainroute/trainroute';
import { CitiesPage } from '../cities/cities';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BusRoutePage;
  tab3Root = TrainRoutePage;
  tab4Root = CitiesPage;
  constructor() {

  }
}
