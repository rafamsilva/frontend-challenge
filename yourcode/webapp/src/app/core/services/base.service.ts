import { environment } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export abstract class BaseService {

  public urlService = `${environment.url}?apikey=${environment.token}`;

  protected handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
