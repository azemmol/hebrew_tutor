FROM golang:1.24-alpine

WORKDIR /app

# Copy go mod files first for better caching
COPY backend/go.mod backend/go.sum ./

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