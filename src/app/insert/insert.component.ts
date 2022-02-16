import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class insertComponent implements OnInit {
  insert:any;
  data:any;
  message:any;
  AddCustomer: any;
  

  constructor(private myservice:MyserviceService ,private router:Router) { }

  ngOnInit(): void {
    this.AddCustomer=new FormGroup(
      {
        First_Name:new FormControl(),
        Last_Name:new FormControl(),
        Country:new FormControl(),
        Created_Date:new FormControl()
  });
}

onSubmit()
{
  
  this.data=this.insert.value;
  this.myservice.AddCustomer(this.data)
  .subscribe ((res=>{if(res)
  
      {
        this.message="data inserted one";

      }
      else
      {
        this.message="error in data";
      }
      //this.router.navigate(['/View']);
    
    }));
}


  

get First_Name()
{
  return this.insert.get('First_Name');
}
get Last_Name()
{
  return this.insert.get('Last_Name');
}

get Country()
{
  return this.insert.get('Country');
}
get Created_Date()
{
  return this.insert.get('Created_Date');
}
}

 

