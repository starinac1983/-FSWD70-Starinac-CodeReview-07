import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ImportantNumbersPageComponent } from  './important-numbers-page/important-numbers-page.component';
import { MyPhoneBookPageComponent } from  './my-phone-book-page/my-phone-book-page.component';

const routes: Routes = [
{
        path: "", component: HomePageComponent
},
{
        path:"Impo",component: ImportantNumbersPageComponent
},
{
        path:"Myph",component: MyPhoneBookPageComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
