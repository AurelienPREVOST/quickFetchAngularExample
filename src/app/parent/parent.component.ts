import { Component, OnInit } from '@angular/core';
import { EnfantComponent } from '../enfant/enfant.component';
import { ApiCallService } from '../services/api-call.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [EnfantComponent, 
            HttpClientModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  providers: [ApiCallService]
})

export class ParentComponent implements OnInit {
  data: any;

  constructor(private apiCallService: ApiCallService,
  ) {}

  ngOnInit(): void {
    this.apiCallService.getData().subscribe((res) => {
      this.data = res
    })
  }

}
