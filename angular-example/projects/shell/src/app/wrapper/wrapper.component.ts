import {
  AfterContentInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { registry } from './../registry';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements AfterContentInit {
  @ViewChild('wrapper', { read: ElementRef, static: true })
  wrapper: ElementRef | undefined;

  constructor(private route: ActivatedRoute) {}

  ngAfterContentInit(): void {
    const elementName = this.route.snapshot.data['elementName'];
    const importName = this.route.snapshot.data['importName'];

    const importFn = registry[importName];
    importFn()
      .then((_: any) => console.debug(`element ${elementName} loaded!`))
      .catch((err: any) => console.error(`error loading ${elementName}:`, err));

    const element = document.createElement(elementName);
    if (this.wrapper) {
      this.wrapper.nativeElement.appendChild(element);
    }
  }
}
