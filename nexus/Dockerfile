# Use a imagem base OpenJDK
FROM openjdk:17-jdk-slim

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o JAR da sua aplicação para o container
COPY target/nexus-0.0.1-SNAPSHOT.jar app.jar
# Define a porta que a aplicação irá expor
EXPOSE 8080

# Comando para executar a aplicação
CMD ["java", "-jar", "app.jar"]
