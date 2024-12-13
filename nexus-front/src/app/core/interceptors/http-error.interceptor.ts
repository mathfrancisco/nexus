
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, throwError, of, map } from 'rxjs';
import { ToastrService } from 'ngx-toastr'; // Importe o serviço Toastr
import { inject } from '@angular/core';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  private toastr = inject(ToastrService); // Injete o ToastrService

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // Log de respostas de sucesso (opcional)
          // console.log('Success Response:', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Erro do lado do cliente
          errorMessage = `Client-side Error: ${error.error.message}`;
        } else {
          // Erro do lado do servidor
          errorMessage = `Server-side Error Code: ${error.status}\nMessage: ${error.message}`;

          // Tratamento de erros específicos do servidor (opcional)
          switch (error.status) {
            case 401: // Unauthorized
              // Redirecionar para login, limpar tokens, etc.
              this.toastr.error('You are not authorized to access this resource.', 'Unauthorized');
              break;
            case 403: // Forbidden
              this.toastr.error('You do not have permission to access this resource.', 'Forbidden');
              break;
            case 404: // Not Found
              this.toastr.error('The requested resource could not be found.', 'Not Found');
              break;
            case 500: // Internal Server Error
              this.toastr.error('An internal server error occurred.', 'Internal Server Error');
              break;
            default:
              this.toastr.error(`An unexpected error occurred (${error.status}).`, 'Error');
          }
        }

        console.error(errorMessage); // Log do erro no console

        // Retorna um Observable de erro para que os componentes possam tratá-lo
        return throwError(() => error);
      })
    );
  }
}

