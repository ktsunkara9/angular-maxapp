import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maxapp';
  loadedFeature : string = 'recipes';

  onFeatureSelected(feature: string) {
    this.loadedFeature = feature;
  }
}
