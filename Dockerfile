FROM golang:1.24-alpine

WORKDIR /app

# Copy the entire backend directory
COPY backend/ .

# Download dependencies
RUN go mod download

# Build the application
RUN go build -o main .

# Expose port
EXPOSE 8080

# Run the application
CMD ["./main"] 