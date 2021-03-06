import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module'
import { PostService } from './post.service';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'blog', component: PostListComponent},
  {path: 'blog/:id', component: PostDetailComponent}
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PostDashboardComponent, PostDetailComponent, PostListComponent, PostListItemComponent],
  exports:[PostDashboardComponent],
  providers: [PostService]
})
export class PostModule { }
