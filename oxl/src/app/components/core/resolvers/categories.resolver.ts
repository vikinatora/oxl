<<<<<<< HEAD
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
=======
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
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
}