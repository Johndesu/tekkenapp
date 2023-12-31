import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/modules/admin/models/article/article.model';
import { AdminArticleService } from 'src/app/modules/admin/services/admin-article/admin-article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit{

  articles$?: Observable<Article[]>;

  constructor(
    private articleService : AdminArticleService
  ) {}


  ngOnInit(): void {
    this.articles$ = this.articleService.getAllArticles();
  }

}
