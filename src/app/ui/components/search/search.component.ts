import { Component, DestroyRef, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
  ],
})
export class SearchComponent implements OnInit {
  readonly searchForm = new FormControl();

  public initialString = '';

  @Output() searchEvent = new EventEmitter<string>();

  constructor(private readonly _destroyRef: DestroyRef) {}

  ngOnInit(): void {
    this.searchForm.setValue(this.initialString);
    this.listenToSearch();
  }

  private emitSearchEvent(search: string): void {
    this.searchEvent.emit(search);
  }

  private listenToSearch(): void {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(600),
        distinctUntilChanged(),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe({
        next: (search: string) => this.emitSearchEvent(search),
      });
  }
}
