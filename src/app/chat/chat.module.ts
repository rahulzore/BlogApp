import { NgModule } from '@angular/core';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'chat/detail', component: ChatDetailComponent },
  {path: 'chat', component: ChatListComponent }
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChatDetailComponent, ChatListComponent]
})
export class ChatModule { }
