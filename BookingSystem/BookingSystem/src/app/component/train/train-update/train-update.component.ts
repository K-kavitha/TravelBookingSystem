import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TrainService } from '../../../service/train.service';

@Component({
  selector: 'app-train-update',
  templateUrl: './train-update.component.html',
  styleUrl: './train-update.component.css'
})
export class TrainUpdateComponent implements OnInit{

  trainForm!: FormGroup;
  trainId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private trainService: TrainService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.trainForm = this.formBuilder.group({
      trainId: ['', Validators.required],
      trainNumber: ['', Validators.required],
      trainName: ['', Validators.required],
      capacity: ['', [Validators.required, Validators.min(1)]],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      ticket_amount: ['', [Validators.required, Validators.min(0)]]
    });


    this.activatedRoute.params.subscribe(params => {
      this.trainId = +params['id'];

      this.trainService.getTrainById(this.trainId).subscribe((trainData: { [key: string]: any; }) => {
        this.trainForm.patchValue(trainData);
      });
    });
  }

  onSubmit() {
    console.log(this.trainForm)
    if (this.trainForm.valid) {
      const formData = this.trainForm.value;

      this.trainService.updateTrain(formData).subscribe((response: any) => {
        console.log('Train updated successfully:', response);

        this.router.navigate(['/train-list']);
      });
    } else {
      alert('Sorry invalid data to update train details')
    }
  }

}

