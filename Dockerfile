# Stage 1: Builder
FROM maven:3.8.7-openjdk-18-slim AS build
WORKDIR /build
COPY nexus/pom.xml .
RUN mvn dependency:go-offline
COPY nexus/src ./src
RUN mvn clean package -DskipTests

# Stage 2: Runtime
FROM amazoncorretto:17
WORKDIR /app
COPY --from=build /build/target/nexus-0.0.1-SNAPSHOT.jar ./app.jar

EXPOSE 8080

USER 1001

# O perfil agora precisa ser definido diretamente no comando
CMD ["java", "-jar", "-Dspring.profiles.active=dev", "app.jar"]


