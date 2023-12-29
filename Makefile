# Define variables
CONTAINER_NAME = digg-support-modal-app
IMAGE_NAME = digg-support-modal-app-image

# Build the Docker image
build-supportmodalapp:
	docker build -t $(IMAGE_NAME) .

# Run the Docker container
run-supportmodalapp:
	docker run -d -p 8080:80 --rm --name $(CONTAINER_NAME) $(IMAGE_NAME)

# Stop the Docker container
stop:
	docker stop $(CONTAINER_NAME)

# Remove the Docker container
rm:
	docker rm $(CONTAINER_NAME)

# Remove the Docker image
rmi:
	docker rmi $(IMAGE_NAME)