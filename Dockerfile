FROM openjdk:17-jdk-slim

WORKDIR /app

COPY nexus/.mvn .mvn/
COPY nexus/mvnw .
COPY nexus/mvnw.cmd .
COPY nexus/pom.xml .

# Baixa as dependências (para evitar baixar a cada build)
RUN ./mvnw dependency:go-offline

COPY nexus/src ./src

# Empacota a aplicação
RUN ./mvnw package -DskipTests

# Copia o JAR para o diretório de trabalho
COPY nexus/target/nexus-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

USER 1001

CMD ["java", "-jar", "app.jar"]

HEALTHCHECK --interval=30s --timeout=10s CMD curl -f http://localhost:8080/actuator/health || exit 1
