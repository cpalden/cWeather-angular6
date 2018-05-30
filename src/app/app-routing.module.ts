import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForecastComponent } from './forecast/forecast.component';

 const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',
      component: HomeComponent
    },
    { path: 'forecast',
      component: ForecastComponent
      /*children: [
        { path: '', component: GooglemapComponent }
      ]*/
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [HomeComponent,
                                  ForecastComponent
                                ];
