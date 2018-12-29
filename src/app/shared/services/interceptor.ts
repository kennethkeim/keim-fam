import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()
export class SetJwtInterceptor implements HttpInterceptor {
   intercept(req, next) {
      const jwt = localStorage.getItem('JWT');

      if (jwt) {
         const cloned = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + jwt)
         });
         
         return next.handle(cloned);
      } else {
         return next.handle(req);
      }

   }
}