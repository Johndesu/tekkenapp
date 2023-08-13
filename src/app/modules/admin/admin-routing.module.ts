import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminArticleDetailComponent } from './components/admin-article/admin-article-detail/admin-article-detail.component';
import { AdminComponent } from './admin.component';
import { AdminCategoryComponent } from './components/admin-category/admin-category.component';
import { AdminCategoryAddComponent } from './components/admin-category/admin-category-add/admin-category-add.component';
import { AdminCategoryDetailComponent } from './components/admin-category/admin-category-detail/admin-category-detail.component';
import { AdminArticleComponent } from './components/admin-article/admin-article.component';
import { AdminArticleAddComponent } from './components/admin-article/admin-article-add/admin-article-add.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    //loadChildren: () => import('./admin.module').then(m => m.AdminModule)
    children:[
      {
        path: 'admin-article',
        component: AdminArticleComponent,
        loadChildren: () => import('./admin.module').then(m => m.AdminModule)
      },
      {
        path: 'admin-article-add',
        component: AdminArticleAddComponent,
        loadChildren: () => import('./admin.module').then(m => m.AdminModule)
      },
      {
        path: 'admin-article-detail',
        component: AdminArticleDetailComponent,
        loadChildren: () => import('./admin.module').then(m => m.AdminModule)
      },
      {
        path: 'admin-category',
        component: AdminCategoryComponent,
        loadChildren: () => import('./admin.module').then(m => m.AdminModule)
      },
      {
        path: 'admin-category-add',
        component: AdminCategoryAddComponent,
        loadChildren: () => import('./admin.module').then(m => m.AdminModule)
      },
      {
        path: 'admin-category-detail',
        component: AdminCategoryDetailComponent,
        loadChildren: () => import('./admin.module').then(m => m.AdminModule)
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }