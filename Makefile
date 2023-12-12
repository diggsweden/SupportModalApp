# Define variables
CONTAINER_NAME = digg-help-modal
IMAGE_NAME = digg-help-modal-image

# Build the Docker image
build-helpmodal:
	docker build -t $(IMAGE_NAME) .

# Run the Docker container
run-helpmodal:
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