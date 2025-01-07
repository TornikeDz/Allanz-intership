import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { SwiperComponent } from "./pages/swiper/swiper.component";
import { PaginationComponent } from "./pages/pagination/pagination.component";
import { NotificationsComponent } from "./pages/notifications/notifications.component";
import { PopUpComponent } from "./pages/pop-up/pop-up.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "swiper",
        component: SwiperComponent
    },
    {
        path: "pagination",
        component: PaginationComponent
    },
    {
        path: "notifications",
        component: NotificationsComponent
    },
    {
        path: "popup",
        component: PopUpComponent
    },
    {
        path: "**",
        redirectTo: "/"
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}