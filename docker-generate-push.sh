#!/bin/bash
set -eu pipefail  # Exit on error, undefined vars, and pipeline failures

# Define image names
IMAGE_NAME="clyppertechnology/jobinetto"
VERSION_TAG="${IMAGE_NAME}:0.0.3"
LATEST_TAG="${IMAGE_NAME}:latest"

echo "Building image ${VERSION_TAG}..."
docker build --no-cache -t "${VERSION_TAG}" .

echo "Tagging as latest..."
docker tag "${VERSION_TAG}" "${LATEST_TAG}"

echo "Pushing version tag ${VERSION_TAG}..."
docker push "${VERSION_TAG}"

echo "Pushing latest tag..."
docker push "${LATEST_TAG}"

echo "Done!"s