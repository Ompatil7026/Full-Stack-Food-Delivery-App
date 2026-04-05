FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app
COPY . .
RUN chmod +x mvnw
# Force rebuild - cache bust
RUN echo "build-$(date)" > /tmp/build-info
RUN ./mvnw clean package -DskipTests
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "target/foodiesapi-0.0.1-SNAPSHOT.jar"]