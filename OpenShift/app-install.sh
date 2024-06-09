#!/bin/sh

oc new-project personalise
oc apply -n personalise -f security/rbac.yaml
oc apply -n personalise -f secrets/mysql-secret.yaml
oc apply -n personalise -f volumes/mysql-scripts-volume.yaml
oc apply -n personalise -f volumes/mysql-persistent-storage.yaml
oc apply -n personalise -f services/mysql-service.yaml
oc apply -n personalise -f deployments/mysql.yaml
while [ "$(oc get pods -l=app='mysql' -n personalise -o jsonpath='{.items[*].status.containerStatuses[0].ready}')" != "true" ]; do
   sleep 5
   echo "Waiting for mysql pod to change to running status"
done
oc apply -n personalise -f deployments/frontend.yaml
oc apply -n personalise -f deployments/backend.yaml
oc apply -n personalise -f services/backend-service.yaml
oc apply -n personalise -f services/frontend-service.yaml
oc apply -n personalise -f services/route-front.yaml
oc apply -n personalise -f services/route-back.yaml