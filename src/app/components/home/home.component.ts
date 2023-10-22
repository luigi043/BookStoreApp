import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  showMore: boolean = false;
  showBtnTxt:string = "Show more..";

  toggleShowMore(){
    this.showMore = !this.showMore;

    if(this.showMore)
    {
      this.showBtnTxt = "Show less..";
    } else{
      this.showBtnTxt = "Show more.."
    }
  }

}
