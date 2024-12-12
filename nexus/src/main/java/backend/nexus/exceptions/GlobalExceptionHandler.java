package backend.nexus.exceptions;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(CustomExceptions.ResourceNotFoundException.class)
    public ResponseEntity<ProblemDetail> handleResourceNotFoundException( // Alterado para ProblemDetail
                                                                          CustomExceptions.ResourceNotFoundException ex, WebRequest request) {
        return createErrorResponse(ex, HttpStatus.NOT_FOUND, request);
    }

    @ExceptionHandler(IllegalArgumentException.class) // Use IllegalArgumentException
    public ResponseEntity<ProblemDetail> handleBadRequestException( // Alterado para ProblemDetail
                                                                    IllegalArgumentException ex, WebRequest request) {
        return createErrorResponse(ex, HttpStatus.BAD_REQUEST, request);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ProblemDetail> handleGlobalException( // Alterado para ProblemDetail
                                                                Exception ex, WebRequest request) {
        return createErrorResponse(ex, HttpStatus.INTERNAL_SERVER_ERROR, request);
    }

    private ResponseEntity<ProblemDetail> createErrorResponse(
            Exception ex, HttpStatus status, WebRequest request) {

        ProblemDetail problemDetail = ProblemDetail.forStatus(status);
        problemDetail.setTitle(status.getReasonPhrase());
        problemDetail.setDetail(ex.getMessage());
        problemDetail.setProperty("timestamp", LocalDateTime.now());
        problemDetail.setProperty("path", request.getDescription(false));

        log.error("Error occurred: {}", problemDetail, ex);
        return ResponseEntity.status(status).body(problemDetail);
    }
}
