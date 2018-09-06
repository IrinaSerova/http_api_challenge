import { Component } from '@angular/core';
import { ReversePhoneService } from './reverse-phone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'whitepages';
  current_addresses;
  historical_addresses;
  associated_people;
  alternate_phones;
  constructor(private _config: ReversePhoneService){
  this.fetch();
  
  }

  fetch() {
    this._config.getData()
     .subscribe((res: any) => {
       console.log(res)
       this.current_addresses = res.current_addresses;
       this.historical_addresses = res.historical_addresses;
       this.associated_people = res.associated_people;
       this.alternate_phones = res.alternate_phones;
       console.log(this.current_addresses);
       console.log(this.historical_addresses);
       console.log(this.associated_people);
        console.log(this.alternate_phones);
      }, err => {
        console.log(err)
      })
  }
  

}

