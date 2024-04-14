import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enfant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.css'
})
export class EnfantComponent {
  @Input() data: any;
}
