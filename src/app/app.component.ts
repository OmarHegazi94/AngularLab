import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-angular';

  darkColorStatus = false;
  greenColorStatus = false;
  redColorStatus = false;
  defaultColorStatus = false;

  toggleTheme() {
    this.darkColorStatus = !this.darkColorStatus;
  }

  applyColor(container: HTMLElement , color: string) {

    console.log(container);

    switch (color) {
      case 'green':
        container.className = `container p-3 mt-5 bg-green`;
        this.greenColorStatus = true;
        break;

      case 'red':
        container.className = `container p-3 mt-5 bg-red`;
        this.redColorStatus = true;
        break;

      case 'dark':
        container.className = `container p-3 mt-5 bg-dark`;
        this.darkColorStatus = true;
        break;

        case 'white':
          container.className = `container p-3 mt-5 bg-default`;
          this.defaultColorStatus = true;
          break;
    }

  }

}
