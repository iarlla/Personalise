#!/bin/bash

oc delete -n personalise -f security/rbac.yaml
oc delete -n personalise -f secrets/mysql-secret.yaml
oc delete -n personalise -f services/mysql-service.yaml
oc delete -n personalise -f deployments/mysql.yaml
oc delete -n personalise -f deployments/frontend.yaml
oc delete -n personalise -f deployments/backend.yaml
oc delete -n personalise -f services/backend-service.yaml
oc delete -n personalise -f services/frontend-service.yaml
oc delete -n personalise -f services/route-front.yaml

if [[ $# -gt 0  && "$1" == "keeppvc" ]]
then
    echo "Keeping namespace and persistent volume claim"
else
    oc delete -n personalise -f volumes/mysql-persistent-storage.yaml
    oc delete project personalise
fi