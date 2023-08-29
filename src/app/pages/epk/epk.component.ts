import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setContainerTypeAction } from 'src/app/ngrx/actions/global.actions';
import { AppState, selectUrl } from 'src/app/ngrx/app.state';


@Component({
  selector: 'app-epk',
  templateUrl: './epk.component.html',
  styleUrls: ['./epk.component.scss']
})
export class EPKComponent implements OnInit {

    currentUrl: string = '';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(setContainerTypeAction({ containerType: 'normal' }));

    this.store.select(selectUrl).subscribe((url: string) => {
        this.currentUrl = url;
      });
  }

}
