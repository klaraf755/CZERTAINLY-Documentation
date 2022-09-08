"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4061],{88663:function(e){e.exports=JSON.parse('{"url":"https://api.czertainly.com/doc-openapi-core-client.yaml","themeId":"theme-redoc","isSpecFile":false,"spec":{"openapi":"3.0.1","info":{"title":"CZERTAINLY Client API","description":"REST API for managing Clients in the platform","contact":{"name":"CZERTAINLY","url":"https://www.czertainly.com","email":"getinfo@czertainly.com"},"license":{"name":"MIT License","url":"https://github.com/3KeyCompany/CZERTAINLY/blob/develop/LICENSE.md"},"x-logo":{"url":"images/czertainly_color_H.svg"}},"externalDocs":{"description":"CZERTAINLY Documentation","url":"https://docs.czertainly.com"},"servers":[{"url":"http://localhost:8080","description":"Generated server url"}],"tags":[{"name":"Client Management API","description":"Client Management API"}],"paths":{"/v1/clients/{uuid}/unauthorize/{raProfileUuid}":{"put":{"tags":["Client Management API"],"summary":"Unauthorize Client","operationId":"unauthorizeClient","parameters":[{"name":"uuid","in":"path","description":"Client UUID","required":true,"schema":{"type":"string"}},{"name":"raProfileUuid","in":"path","description":"RA Profile UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Client unauthorized with given profile"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/clients/{uuid}/enable":{"put":{"tags":["Client Management API"],"summary":"Enable a client","operationId":"enableClient","parameters":[{"name":"uuid","in":"path","description":"Client UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Client enabled"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/clients/{uuid}/disable":{"put":{"tags":["Client Management API"],"summary":"Disable a client","operationId":"disableClient","parameters":[{"name":"uuid","in":"path","description":"Client UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Client disabled"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/clients/{uuid}/authorize/{raProfileUuid}":{"put":{"tags":["Client Management API"],"summary":"Authorize a client","operationId":"authorizeClient","parameters":[{"name":"uuid","in":"path","description":"Client UUID","required":true,"schema":{"type":"string"}},{"name":"raProfileUuid","in":"path","description":"RA Profile UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Client authorized with given profile"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/clients/enable":{"put":{"tags":["Client Management API"],"summary":"Enable multiple client","operationId":"bulkEnableClient","requestBody":{"description":"List of client UUIDs","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["c2f685d4-6a3e-11ec-90d6-0242ac120003","b9b09548-a97c-4c6a-a06a-e4ee6fc2da98"]}},"required":true},"responses":{"204":{"description":"Client enabled"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/clients/disable":{"put":{"tags":["Client Management API"],"summary":"Disable multiple client","operationId":"bulkDisableClient","requestBody":{"description":"List of client UUIDs","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["c2f685d4-6a3e-11ec-90d6-0242ac120003","b9b09548-a97c-4c6a-a06a-e4ee6fc2da98"]}},"required":true},"responses":{"204":{"description":"Client disabled"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/clients/{uuid}":{"get":{"tags":["Client Management API"],"summary":"Get the details of a client","operationId":"getClient","parameters":[{"name":"uuid","in":"path","description":"Client UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Client details retrieved","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ClientDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"post":{"tags":["Client Management API"],"summary":"Edit a client","operationId":"editClient","parameters":[{"name":"uuid","in":"path","description":"Client UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EditClientRequestDto"}}},"required":true},"responses":{"200":{"description":"Client edited","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ClientDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"delete":{"tags":["Client Management API"],"summary":"Remove a client","operationId":"removeClient","parameters":[{"name":"uuid","in":"path","description":"Client UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Client Deleted"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/clients":{"get":{"tags":["Client Management API"],"summary":"Get the list of all clients","operationId":"listClients","responses":{"200":{"description":"Client list retrieved","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ClientDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"post":{"tags":["Client Management API"],"summary":"Add a new client","operationId":"addClient","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AddClientRequestDto"}}},"required":true},"responses":{"200":{"description":"New client added","content":{"application/json":{"schema":{"$ref":"#/components/schemas/UuidDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"delete":{"tags":["Client Management API"],"summary":"Remove multiple client","operationId":"bulkRemoveClient","requestBody":{"description":"Client UUIDs","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["c2f685d4-6a3e-11ec-90d6-0242ac120003","b9b09548-a97c-4c6a-a06a-e4ee6fc2da98"]}},"required":true},"responses":{"200":{"description":"Clients Deleted","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ForceDeleteMessageDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/clients/{uuid}/listauth":{"get":{"tags":["Client Management API"],"summary":"Get Authorized profiles","operationId":"listAuthorizations","parameters":[{"name":"uuid","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"List of authorized profiles","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/SimplifiedRaProfileDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}}},"components":{"schemas":{"ErrorMessageDto":{"required":["message"],"type":"object","properties":{"message":{"type":"string","description":"Error message detail","example":"Error message"}}},"EditClientRequestDto":{"type":"object","properties":{"description":{"type":"string","description":"Description of the client"},"clientCertificate":{"type":"string","description":"Base64 content of the certificate"},"certificateUuid":{"type":"string","description":"UUID of the existing certificate in inventory. Required if the Certificate is not provided"}}},"CertificateComplianceResultDto":{"required":["connectorName","ruleDescription","ruleName","status"],"type":"object","properties":{"connectorName":{"type":"string","description":"Name of the Compliance Provider","example":"Provider1"},"ruleName":{"type":"string","description":"Name of the rule","example":"RuleName"},"ruleDescription":{"type":"string","description":"Description of the rule","example":"Description sample"},"status":{"type":"string","description":"Status of the rule","example":"nok","enum":["ok","nok","na"]}},"description":"Certificate compliance check result"},"CertificateDto":{"required":["basicConstraints","certificateContent","commonName","fingerprint","issuerCommonName","issuerDn","keySize","keyUsage","notAfter","notBefore","publicKeyAlgorithm","serialNumber","signatureAlgorithm","status","subjectDn","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Certificate"},"commonName":{"type":"string","description":"Certificate common name"},"serialNumber":{"type":"string","description":"Certificate serial number"},"issuerCommonName":{"type":"string","description":"Certificate issuer common name"},"certificateContent":{"type":"string","description":"Base64 encoded Certificate content"},"issuerDn":{"type":"string","description":"Issuer DN of the Certificate"},"subjectDn":{"type":"string","description":"Subject DN of the Certificate"},"notBefore":{"type":"string","description":"Certificate validity start date","format":"date-time"},"notAfter":{"type":"string","description":"Certificate expiration date","format":"date-time"},"publicKeyAlgorithm":{"type":"string","description":"Public key algorithm"},"signatureAlgorithm":{"type":"string","description":"Certificate signature algorithm"},"keySize":{"type":"integer","description":"Certificate key size","format":"int32"},"extendedKeyUsage":{"type":"array","description":"Extended key usages","items":{"type":"string","description":"Extended key usages"}},"keyUsage":{"type":"array","description":"Key usages","items":{"type":"string","description":"Key usages"}},"basicConstraints":{"type":"string","description":"Basic Constraints"},"meta":{"type":"object","additionalProperties":{"type":"object","description":"Certificate meta data"},"description":"Certificate meta data"},"status":{"type":"string","description":"Status of the Certificate","enum":["valid","revoked","expired","unknown","expiring","new","invalid"]},"raProfile":{"$ref":"#/components/schemas/SimplifiedRaProfileDto"},"fingerprint":{"type":"string","description":"SHA256 fingerprint of the Certificate"},"subjectAlternativeNames":{"type":"object","additionalProperties":{"type":"object","description":"Subject alternative names"},"description":"Subject alternative names"},"locations":{"uniqueItems":true,"type":"array","description":"Locations associated to the Certificate","items":{"$ref":"#/components/schemas/LocationDto"}},"group":{"$ref":"#/components/schemas/GroupDto"},"owner":{"type":"string","description":"Certificate Owner"},"certificateType":{"type":"string","description":"Certificate type","enum":["X509","SSH"]},"issuerSerialNumber":{"type":"string","description":"Serial number of the issuer"},"certificateValidationResult":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/CertificateValidationDto"},"description":"Certificate validation result"},"nonCompliantRules":{"type":"array","description":"Certificate compliance check result","items":{"$ref":"#/components/schemas/CertificateComplianceResultDto"}},"complianceStatus":{"type":"string","description":"Certificate compliance status","enum":["ok","nok","na"]}},"description":"Client Certificate Information"},"CertificateInLocationDto":{"required":["certificateUuid","commonName","metadata","serialNumber"],"type":"object","properties":{"certificateUuid":{"type":"string","description":"UUID of the Certificate"},"commonName":{"type":"string","description":"Common Name of the Subject DN field of the Certificate"},"serialNumber":{"type":"string","description":"Serial number in HEX of the Certificate"},"metadata":{"type":"object","additionalProperties":{"type":"object","description":"Metadata of the Certificate in Location"},"description":"Metadata of the Certificate in Location"},"pushAttributes":{"type":"array","description":"Applied push attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"csrAttributes":{"type":"array","description":"Applied issue attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"withKey":{"type":"boolean","description":"If the Certificate in Location has associated private key","default":false}},"description":"List of Certificates in Location"},"CertificateValidationDto":{"type":"object","properties":{"status":{"type":"string","enum":["success","failed","warning","revoked","not_checked","invalid","expiring","expired"]},"message":{"type":"string"}},"description":"Certificate validation result"},"ClientDto":{"required":["certificate","description","enabled","name","serialNumber","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"serialNumber":{"type":"string","description":"Client serial Number"},"certificate":{"$ref":"#/components/schemas/CertificateDto"},"description":{"type":"string","description":"Client description"},"enabled":{"type":"boolean","description":"Status of the client / Is Client enabled?"}}},"GroupDto":{"required":["name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"description":{"type":"string","description":"Description of the Certificate Group"}},"description":"Group associated to the Certificate"},"LocationDto":{"required":["attributes","certificates","enabled","entityInstanceName","entityInstanceUuid","name","supportKeyManagement","supportMultipleEntries","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"description":{"type":"string","description":"Description of the Location"},"entityInstanceUuid":{"type":"string","description":"UUID of Entity instance"},"entityInstanceName":{"type":"string","description":"Name of Entity instance"},"attributes":{"type":"array","description":"List of Location attributes","items":{"$ref":"#/components/schemas/ResponseAttributeDto"}},"enabled":{"type":"boolean","description":"Enabled flag - true = enabled; false = disabled"},"supportMultipleEntries":{"type":"boolean","description":"If the location supports multiple Certificates","default":false},"supportKeyManagement":{"type":"boolean","description":"If the location supports key management operations","default":false},"certificates":{"type":"array","description":"List of Certificates in Location","items":{"$ref":"#/components/schemas/CertificateInLocationDto"}},"metadata":{"type":"object","additionalProperties":{"type":"object","description":"Location metadata"},"description":"Location metadata"}},"description":"Locations associated to the Certificate"},"RequestAttributeDto":{"required":["content","name"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"content":{"type":"object","description":"Content of the Attribute"}},"description":"Applied issue attributes"},"ResponseAttributeDto":{"required":["label","name","type"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"label":{"type":"string","description":"Label of the the Attribute","example":"Attribute Name"},"type":{"type":"string","description":"Type of the Attribute","enum":["STRING","INTEGER","SECRET","FILE","BOOLEAN","CREDENTIAL","DATE","FLOAT","JSON","TEXT","TIME","DATETIME"]},"content":{"type":"object","description":"Content of the Attribute"}},"description":"List of Location attributes"},"SimplifiedRaProfileDto":{"required":["enabled","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"enabled":{"type":"boolean","description":"Enabled flag - true = enabled; false = disabled"}},"description":"RA Profile associated to the Certificate"},"AddClientRequestDto":{"required":["name"],"type":"object","properties":{"clientCertificate":{"type":"string","description":"Base64 content of the client certificate"},"certificateUuid":{"type":"string","description":"UUID of the existing certificate in the Inventory. Required if the Certificate is not provided"},"name":{"type":"string","description":"Name of the client"},"description":{"type":"string","description":"Description of the Client"},"enabled":{"type":"boolean","description":"Enabled flag. true = enabled, false = disabled","default":false}}},"UuidDto":{"required":["uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier"}}},"ForceDeleteMessageDto":{"required":["message","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"message":{"type":"string","description":"Message describing the associations of the Connector which is preventing the delete operation","example":"Object is associated with other items"}}}}}}}')}}]);