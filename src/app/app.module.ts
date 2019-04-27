import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {  MatButtonModule, MatInputModule, MatCardModule, MatDividerModule, MatTableModule, MatPaginatorModule,
  MatIconModule, MatFormFieldModule, MatProgressSpinnerModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatInputModule, MatCardModule, MatTableModule,
    MatIconModule, MatFormFieldModule, MatDividerModule, MatPaginatorModule, MatProgressSpinnerModule,
    MatSelectModule, MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
