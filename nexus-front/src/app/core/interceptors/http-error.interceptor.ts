// core/interceptors/http-error.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        // Se for uma resposta de sucesso, retorne-a diretamente
        if (event instanceof HttpResponse) {
          return event;
        }
        return event; // Retorna outros eventos (progresso, etc.)
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.error(errorMessage);

        // Crie uma nova HttpResponse com o tipo correto
        const errorResponse = new HttpResponse<any>({ // <any> ou um tipo mais específico se souber
          status: error.status,
          body: { error: errorMessage }
        });

        return of(errorResponse);
      })
    );
  }
}

