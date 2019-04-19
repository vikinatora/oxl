import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../services/category.service';

@Injectable()
export class CategoriesResolver implements Resolve<any> {  
    constructor(private http: HttpClient,
        private categoriesService: CategoryService) {
        
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.categoriesService.getAll();
    }
}