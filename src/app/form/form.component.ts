import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  checked = false;
  showFixedBy =  false;
  showCheckbox =  false;
  entrytype = ['KPI', 'Rejects', 'CLVs'];
  locations = ['Banglore', 'Mumbai'];
  showAddress = false;

  userDetailsForm = this.fb.group({
    ClientNum: ['' , Validators.required , Validators.maxLength(16)],
    Checked: [false, Validators.required],
    trasNum: ['', Validators.required, Validators.maxLength(16)],
    entrytype: ['', Validators.required ],
    fixedby: ['', Validators.required ],
    locations: ['', Validators.required ],
    Address: ['', Validators.required ],
 });



  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

  onChangeEntity() {
    debugger
    if (this.userDetailsForm.value.entrytype == "Rejects") {
      this.showFixedBy = true;
    } else {
      this.showFixedBy = false;
    }

  }

  onChangeLocation() {
    debugger
    if (this.userDetailsForm.value.locations == "Mumbai" ) {
      this.showAddress = true;
    } else {
      this.showAddress = false;
    }
  }


  onKey(event:any) {
    debugger
    if( event.target.name == "ClientNum") {
      if (event.target.value == 123456) {
        this.showCheckbox =  true;
      } else {
        this.showCheckbox =  false;
      }
    }
  }
  onSubmitUserDetails() {

    debugger

    if(this.userDetailsForm.value.ClientNum == 123456){
      if(this.userDetailsForm.value.Checked == true) {
        localStorage.setItem('form-data', JSON.stringify(this.userDetailsForm.value))
      }
    } else {
      localStorage.setItem('form-data', JSON.stringify(this.userDetailsForm.value))
    }

  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }


}
