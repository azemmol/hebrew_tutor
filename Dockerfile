FROM golang:1.24-alpine

WORKDIR /app

# Copy go mod files from root directory
COPY go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy all backend source code
COPY backend/ .

# Build the application
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .

# Expose port
EXPOSE 8080

# Run the application
CMD ["./main"] 