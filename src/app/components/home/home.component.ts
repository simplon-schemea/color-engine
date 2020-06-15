import { Component, OnInit } from "@angular/core";
import { ColorService } from "../../services/color.service";
import { Color } from "../../models/color";
import { map } from "rxjs/operators";

function channel(name: "red" | "green" | "blue") {
  return map<Color, string>(c => c[name].toString().padStart(3, " "));
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: [ "./home.component.scss" ],
})
export class HomeComponent implements OnInit {
  current$ = this.color;

  red$   = this.color.pipe(channel("red"));
  green$ = this.color.pipe(channel("green"));
  blue$  = this.color.pipe(channel("blue"));

  hex$ = this.color.pipe(map(c => c.toString()));

  constructor(private readonly color: ColorService) { }

  ngOnInit(): void { }

  get isLightColor() {
    return this.current$.pipe(map(x => x.brightness > 125));
  }

  changeColor() {
    let newColor: Color;

    do {
      newColor = this.color.random();
    } while (newColor === this.color.last);

    this.color.push(newColor);
  }

}
