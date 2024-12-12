package backend.nexus.exceptions;

import lombok.Getter;

public class CustomExceptions {

    @Getter
    public static class ResourceNotFoundException extends RuntimeException {
        private final String resourceName;
        private final String fieldName;
        private final Object fieldValue;

        public ResourceNotFoundException(String resourceName, String fieldName, Object fieldValue) {
            super(String.format("%s not found with %s : '%s'", resourceName, fieldName, fieldValue));
            this.resourceName = resourceName;
            this.fieldName = fieldName;
            this.fieldValue = fieldValue;
        }
    }

    public static class BadRequestException extends RuntimeException {
        public BadRequestException(String message) {
            super(message);
        }
    }

    public static class UnauthorizedException extends RuntimeException {
        public UnauthorizedException(String message) {
            super(message);
        }
    }
}
