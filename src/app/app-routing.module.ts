// import thành phần mặc định
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// 2 template chính
import { AdminTemplateComponent } from './admin-template/admin-template.component';
// import { HomeTemplateComponent } from './home-template/home-template.component';
// component con
// import { HomeComponent } from './home-template/home/home.component';
// import { AboutComponent } from './home-template/about/about.component';
// import { ListMovieComponent } from './home-template/list-movie/list-movie.component';
import { HomeTemplateModule } from './home-template/home-template.module';

// Định nghĩa nhiều đường dẫn url trong mảng
const routes: Routes = [
    // 1. localhost: 4200 trỏ vào home
    // {
    //     path: '',
    //     component: HomeTemplateComponent,
    //     children: [
    //         // home
    //         {
    //             path: '',
    //             component: HomeComponent
    //         },
    //         // about
    //         {
    //             path: 'about',
    //             component: AboutComponent
    //         },
    //         // list movie
    //         {
    //             path: 'list-movie',
    //             component: ListMovieComponent
    //         }

    //     ]
    // },

    {
        path: '',
        loadChildren: () => HomeTemplateModule
    },

    // localhost: 4200/admin trỏ vào admin
    {
        path: 'admin',
        component: AdminTemplateComponent
    }
];

// forRoot là cái lớn nhất, truyền vào mảng đường dẫn
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}