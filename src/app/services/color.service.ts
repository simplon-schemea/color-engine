import { Injectable } from "@angular/core";
import { Color } from "../models/color";
import { interval, Observable } from "rxjs";
import { filter, map, share, startWith, tap } from "rxjs/operators";

const palette = [
  new Color(0xff0000),
  new Color(0x00ff00),
  new Color(0x0000ff),
  new Color(0xffffff),
  new Color(0x141432),
];

function random() {
  return palette[Math.floor(Math.random() * palette.length)];
}

function set(prefix: string, name: string, value: string) {
  document.documentElement.style.setProperty(`--${ prefix }-${ name }`, value);
}

@Injectable({
  providedIn: "root",
})
export class ColorService {
  constructor() {
    const data = {
      queue: [ random() ],
    };

    const tick$ = interval(100).pipe(share());

    interval(1000).subscribe(function() {
      const newColor = new Color(Math.round(Math.random() * 0xffffff));
      console.log("NEW COLOR:", newColor.toString());
      palette.push(newColor);

      while (palette.length > 20) {
        console.log("REMOVED COLOR:", palette.shift().toString());
      }
    });

    const that = tick$.pipe(
      filter(t => t % 20 === 0),
      map(() => data.queue),
      filter(queue => queue.length > 1),
      tap(queue => queue.shift()),
      map(queue => queue[0]),
      share(),
      startWith(data.queue[0]),
    ) as ColorService;

    that.subscribe(function(color) {
      let lightPrefix: string;
      let darkPrefix: string;

      if (color.brightness > 125) {
        lightPrefix = "fg";
        darkPrefix  = "bg";
      } else {
        lightPrefix = "bg";
        darkPrefix  = "fg";
      }

      set(lightPrefix, "primary", "220, 220, 220");
      set(darkPrefix, "primary", "30, 30, 30");

      set(lightPrefix, "secondary", "221, 221, 221");
      set(darkPrefix, "secondary", "51, 51, 51");

      set(lightPrefix, "brightness", "0.8");
      set(darkPrefix, "brightness", "0.4");
    });

    Object.assign(that, {
      random,
      tick$,
      push(value) { data.queue.push(value); },
    } as ColorService);

    Object.defineProperties(that, {
      current: { get() { return data.queue[0]; } },
      last: { get() { return data.queue[data.queue.length]; } },
    } as { [k in keyof ColorService]: PropertyDescriptor });

    return that;
  }
}


export interface ColorService extends Observable<Color> {
  queue: Color[];
  current: Color;
  last: Color;

  tick$: Observable<number>;

  random(): Color;

  push(value: Color);
}
