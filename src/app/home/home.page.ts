import { Component } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { PoppedComponent } from "./popped/popped.component";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private popCtrl: PopoverController) {}

  public async showPopover(): Promise<void> {
    const ref = await this.popCtrl.create({
      component: PoppedComponent,
    });
    ref.present();
  }
}
