docker build -f ./docker-images/Dockerfile -t sonu-self-learning-portal-ui:latest .
kubectl apply -f ./kubernetes/deployment.yaml