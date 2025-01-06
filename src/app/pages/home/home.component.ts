import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit } from '@angular/core';
import { DailyPictureService } from '../../services/daily-picture.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { DailyPictureData } from '../../interfaces/daily-picture-data.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit{
  public dailyTitle: string = "";
  public dailyImage: string = "";
  public dailyDescription: string = "";

  constructor(
    private readonly dailyPictureService: DailyPictureService, 
    private readonly destroyRef: DestroyRef,
    private readonly cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.dailyPictureData();
  }

  public dailyPictureData() {
    this.dailyPictureService.getDailyPicture().pipe(
      catchError(error => {
        console.error('Something went wrong with retrieving daily picture data', error);
        return of(null);
      }),
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe((dailyPictureData) => {
      if(dailyPictureData) {
        this.handleDailyPictureData(dailyPictureData);
      }
    })
  }

  public handleDailyPictureData(data: DailyPictureData) {
    this.dailyTitle = data.title;
    this.dailyImage = data.url;
    this.dailyDescription = data.explanation;
    this.cdr.markForCheck()
  }
}
