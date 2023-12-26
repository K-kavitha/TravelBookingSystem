import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TrainService } from '../../../service/train.service';

@Component({
  selector: 'app-train-create',
  templateUrl: './train-create.component.html',
  styleUrl: './train-create.component.css'
})
export class TrainCreateComponent {
  trainForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private trainService: TrainService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.trainForm = this.formBuilder.group({
      trainNumber: ['', Validators.required],
      trainName: ['', Validators.required],
      capacity: ['', [Validators.required, Validators.min(1)]],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      ticket_amount: ['', [Validators.required, Validators.min(1)]],
    });
  }
  ngOnInit(): void {
    this.trainForm = this.formBuilder.group({
      trainNumber: ['', Validators.required],
      trainName: ['', Validators.required],
      capacity: ['', [Validators.required, Validators.min(1)]],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      ticket_amount: ['', [Validators.required, Validators.min(1)]],
    });
  }
  onSubmit() {
    if (this.trainForm.valid) {
      const formData = this.trainForm.value;
      console.log('Form data submitted:', formData);
      this.trainService.createTrain(formData).subscribe((response: any) => {
        console.log('Train created successfully:', response);
        this.router.navigate(['/train-list']);
      });
    } else {
      alert('Something went wrong');
    }
  }
}
