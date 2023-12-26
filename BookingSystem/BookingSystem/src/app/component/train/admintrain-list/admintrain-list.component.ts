import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TrainService } from '../../../service/train.service';

@Component({
  selector: 'app-admintrain-list',
  templateUrl: './admintrain-list.component.html',
  styleUrl: './admintrain-list.component.css'
})
export class AdmintrainListComponent implements OnInit{

  train: any;
  user: any;
  constructor(
    private trainService: TrainService,
    public router: Router,
    private activateRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // Retrieve user data from session storage
    const userData = sessionStorage.getItem('admin');

    if (userData) {
      // Parse the JSON data to get the user object
      this.user = JSON.parse(userData);
      console.log('User Data:', this.user);
    }
    this.getAllTrain();
  }
  isAdmin(): boolean {
    return this.user ? this.user.userRole === 'admin' : false;
  }
  getAllTrain() {
    this.trainService.getAllTrain().subscribe((data: any) => {
      console.log(data);
      this.train = data;
    });
  }
  navigateToCreateTrain() {
    this.router.navigate(['/train-create']);
  }
  navigateToUpdateTrain(trainId: any) {
    this.router.navigate(['/train-update/'+trainId]);
  }

  deleteTrain(trainId: number) {
    this.trainService.deleteTrainById(trainId).subscribe(
      (response: any) => {
        console.log('Train deleted successfully:', response);
        alert('Train deleted successfully');
        window.location.reload();
      },
      (error: any) => {
        console.error('Error deleting Train:', error);
      }
    );
  }
  }
