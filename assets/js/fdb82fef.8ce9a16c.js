"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[2669],{13883:function(e){e.exports=JSON.parse('{"url":"https://api.czertainly.com/doc-openapi-core-ra-profile.yaml","themeId":"theme-redoc","isSpecFile":false,"spec":{"openapi":"3.0.1","info":{"title":"CZERTAINLY RA Profile API","description":"REST API for managing RA Profiles in the platform","contact":{"name":"CZERTAINLY","url":"https://www.czertainly.com","email":"getinfo@czertainly.com"},"license":{"name":"MIT License","url":"https://github.com/3KeyCompany/CZERTAINLY/blob/develop/LICENSE.md"},"x-logo":{"url":"images/czertainly_color_H.svg"}},"externalDocs":{"description":"CZERTAINLY Documentation","url":"https://docs.czertainly.com"},"servers":[{"url":"http://localhost:8080","description":"Generated server url"}],"tags":[{"name":"RA Profile Management API","description":"RA Profile Management API"}],"paths":{"/v1/raprofiles/{uuid}/enable":{"put":{"tags":["RA Profile Management API"],"summary":"Enable RA Profiles","operationId":"enableRaProfile","parameters":[{"name":"uuid","in":"path","description":"RA Profile UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"RA Profile enabled"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/raprofiles/{uuid}/disable":{"put":{"tags":["RA Profile Management API"],"summary":"Disable RA Profiles","operationId":"disableRaProfile","parameters":[{"name":"uuid","in":"path","description":"RA Profile UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"RA Profile disabled"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/raprofiles/enable":{"put":{"tags":["RA Profile Management API"],"summary":"Enable multiple RA Profiles","operationId":"bulkEnableRaProfile","requestBody":{"description":"RA Profile UUIDs","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["c2f685d4-6a3e-11ec-90d6-0242ac120003","b9b09548-a97c-4c6a-a06a-e4ee6fc2da98"]}},"required":true},"responses":{"204":{"description":"RA Profiles enabled"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/raprofiles/disable":{"put":{"tags":["RA Profile Management API"],"summary":"Disable multiple RA Profiles","operationId":"bulkDisableRaProfile","requestBody":{"description":"RA Profile UUIDs","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["c2f685d4-6a3e-11ec-90d6-0242ac120003","b9b09548-a97c-4c6a-a06a-e4ee6fc2da98"]}},"required":true},"responses":{"204":{"description":"RA Profiles disabled"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/raprofiles/{uuid}/deactivateAcme":{"post":{"tags":["RA Profile Management API"],"summary":"Deactivate ACME for RA Profile","operationId":"deactivateAcmeForRaProfile","parameters":[{"name":"uuid","in":"path","description":"RA Profile UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"ACME deactivated"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessible Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/raprofiles/{uuid}/activateAcme":{"post":{"tags":["RA Profile Management API"],"summary":"Activate ACME for RA Profile","operationId":"activateAcmeForRaProfile","parameters":[{"name":"uuid","in":"path","description":"RA Profile UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ActivateAcmeForRaProfileRequestDto"}}},"required":true},"responses":{"204":{"description":"ACME activated","content":{"application/json":{"schema":{"$ref":"#/components/schemas/RaProfileAcmeDetailResponseDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessible Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/raprofiles/{uuid}":{"get":{"tags":["RA Profile Management API"],"summary":"Details of RA Profile","operationId":"getRaProfile","parameters":[{"name":"uuid","in":"path","description":"RA Profile UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"RA Profile details retrieved","content":{"application/json":{"schema":{"$ref":"#/components/schemas/RaProfileDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"post":{"tags":["RA Profile Management API"],"summary":"Edit RA Profile","operationId":"editRaProfile","parameters":[{"name":"uuid","in":"path","description":"RA Profile UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EditRaProfileRequestDto"}}},"required":true},"responses":{"204":{"description":"RA Profile updated","content":{"application/json":{"schema":{"$ref":"#/components/schemas/RaProfileDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessible Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"delete":{"tags":["RA Profile Management API"],"summary":"Delete RA Profile","operationId":"removeRaProfile","parameters":[{"name":"uuid","in":"path","description":"RA Profile UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"RA Profile deleted"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/raprofiles/compliance":{"post":{"tags":["RA Profile Management API"],"summary":"Initiate Certificate Compliance Check","operationId":"checkCompliance","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RaProfileComplianceCheckDto"}}},"required":true},"responses":{"204":{"description":"Compliance check initiated"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/raprofiles":{"get":{"tags":["RA Profile Management API"],"summary":"List of available RA Profiles by Status","operationId":"listRaProfiles_1","parameters":[{"name":"isEnabled","in":"query","required":true,"schema":{"type":"boolean"}}],"responses":{"200":{"description":"RA Profiles retrieved","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/RaProfileDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"post":{"tags":["RA Profile Management API"],"summary":"Add RA Profile","operationId":"addRaProfile","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AddRaProfileRequestDto"}}},"required":true},"responses":{"201":{"description":"RA Profile added","content":{"application/json":{"schema":{"$ref":"#/components/schemas/UuidDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessible Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"delete":{"tags":["RA Profile Management API"],"summary":"Delete multiple RA Profiles","operationId":"bulkRemoveRaProfile","requestBody":{"description":"RA Profile UUIDs","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["c2f685d4-6a3e-11ec-90d6-0242ac120003","b9b09548-a97c-4c6a-a06a-e4ee6fc2da98"]}},"required":true},"responses":{"204":{"description":"RA Profiles deleted"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessible Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/raprofiles/{uuid}/revoke/attributes":{"get":{"tags":["RA Profile Management API"],"summary":"Get revocation Attributes","operationId":"listRevokeCertificateAttributes","parameters":[{"name":"uuid","in":"path","description":"RA Profile UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Attributes list obtained","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/AttributeDefinition"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/raprofiles/{uuid}/listclients":{"get":{"tags":["RA Profile Management API"],"summary":"List authorized Clients of RA Profile","operationId":"listClients","parameters":[{"name":"uuid","in":"path","description":"RA Profile UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"List of clients of RA Profile","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/SimplifiedClientDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/raprofiles/{uuid}/issue/attributes":{"get":{"tags":["RA Profile Management API"],"summary":"Get issue Certificate Attributes","operationId":"listIssueCertificateAttributes","parameters":[{"name":"uuid","in":"path","description":"RA Profile UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Attributes list obtained","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/AttributeDefinition"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/raprofiles/{uuid}/acme":{"get":{"tags":["RA Profile Management API"],"summary":"Get ACME details for RA Profile","operationId":"getAcmeForRaProfile","parameters":[{"name":"uuid","in":"path","description":"RA Profile UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"ACME details retrieved","content":{"application/json":{"schema":{"$ref":"#/components/schemas/RaProfileAcmeDetailResponseDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessible Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}}},"components":{"schemas":{"ErrorMessageDto":{"required":["message"],"type":"object","properties":{"message":{"type":"string","description":"Error message detail","example":"Error message"}}},"ActivateAcmeForRaProfileRequestDto":{"required":["acmeProfileUuid","issueCertificateAttributes","revokeCertificateAttributes"],"type":"object","properties":{"acmeProfileUuid":{"type":"string","description":"ACME Profile UUID"},"issueCertificateAttributes":{"type":"array","description":"List of Attributes to issue Certificate","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"revokeCertificateAttributes":{"type":"array","description":"List of Attributes to revoke Certificate","items":{"$ref":"#/components/schemas/RequestAttributeDto"}}}},"RequestAttributeDto":{"required":["content","name"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"content":{"type":"object","description":"Content of the Attribute"}},"description":"List of Attributes to revoke Certificate"},"RaProfileAcmeDetailResponseDto":{"required":["directoryUrl","issueCertificateAttributes","name","revokeCertificateAttributes","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"directoryUrl":{"type":"string","description":"ACME Directory URL"},"issueCertificateAttributes":{"type":"array","description":"List of Attributes to issue Certificate","items":{"$ref":"#/components/schemas/ResponseAttributeDto"}},"revokeCertificateAttributes":{"type":"array","description":"List of Attributes to revoke Certificate","items":{"$ref":"#/components/schemas/ResponseAttributeDto"}},"acmeAvailable":{"type":"boolean"}}},"ResponseAttributeDto":{"required":["label","name","type"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"label":{"type":"string","description":"Label of the the Attribute","example":"Attribute Name"},"type":{"type":"string","description":"Type of the Attribute","enum":["STRING","INTEGER","SECRET","FILE","BOOLEAN","CREDENTIAL","DATE","FLOAT","JSON","TEXT","TIME","DATETIME"]},"content":{"type":"object","description":"Content of the Attribute"}},"description":"List of Attributes to revoke Certificate"},"EditRaProfileRequestDto":{"required":["attributes","authorityInstanceUuid"],"type":"object","properties":{"description":{"type":"string","description":"Description of RA Profile"},"authorityInstanceUuid":{"type":"string","description":"Authority instance UUID"},"attributes":{"type":"array","description":"List of Attributes for RA Profile","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"enabled":{"type":"boolean","description":"Enabled flag - true = enabled; false = disabled"}}},"RaProfileDto":{"required":["attributes","authorityInstanceName","authorityInstanceUuid","enabled","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"description":{"type":"string","description":"Description of RA Profile"},"authorityInstanceUuid":{"type":"string","description":"UUID of Authority provider"},"authorityInstanceName":{"type":"string","description":"Name of Authority instance"},"attributes":{"type":"array","description":"List of RA Profiles attributes","items":{"$ref":"#/components/schemas/ResponseAttributeDto"}},"enabled":{"type":"boolean","description":"Enabled flag - true = enabled; false = disabled"},"enabledProtocols":{"type":"array","description":"List of protocols enabled","items":{"type":"string","description":"List of protocols enabled"}},"complianceProfileName":{"type":"string","description":"Compliance Profile Name","example":"Compliance Profile 1"},"complianceProfileUuid":{"type":"string","description":"Compliance Profile UUID","example":"c35bc88c-d0ef-11ec-9d64-0242ac120003"}}},"RaProfileComplianceCheckDto":{"type":"object","properties":{"raProfileUuids":{"type":"array","description":"List of UUIDs of the RA Profiles","items":{"type":"string","description":"List of UUIDs of the RA Profiles"}}}},"AddRaProfileRequestDto":{"required":["attributes","authorityInstanceUuid","name"],"type":"object","properties":{"authorityInstanceUuid":{"type":"string","description":"UUID of the Authority instance"},"name":{"type":"string","description":"RA Profile name"},"description":{"type":"string","description":"RA Profile description"},"attributes":{"type":"array","description":"List of Attributes to create RA Profile","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"enabled":{"type":"boolean","description":"Enabled flag - true = enabled; false = disabled","default":false}}},"UuidDto":{"required":["uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier"}}},"AttributeCallback":{"required":["callbackContext","callbackMethod","mappings"],"type":"object","properties":{"callbackContext":{"type":"string","description":"Context part of callback URL"},"callbackMethod":{"type":"string","description":"HTTP method of the callback"},"mappings":{"uniqueItems":true,"type":"array","description":"Mappings for the callback method","items":{"$ref":"#/components/schemas/AttributeCallbackMapping"}}},"description":"Optional definition of callback for getting the content of the Attribute based on the action"},"AttributeCallbackMapping":{"required":["targets","to"],"type":"object","properties":{"from":{"type":"string","description":"Name of the attribute whose value is to be used as value of path variable or request param or body field.It is optional and must be set only if value is not set."},"attributeType":{"type":"string","description":"Type of the attribute. It is optional and must be set only if special behaviour is needed.","enum":["STRING","INTEGER","SECRET","FILE","BOOLEAN","CREDENTIAL","DATE","FLOAT","JSON","TEXT","TIME","DATETIME"]},"to":{"type":"string","description":"Name of the path variable or request param or body field which is to be used to assign value of attribute"},"targets":{"uniqueItems":true,"type":"array","description":"Set of targets for propagating value.","items":{"type":"string","description":"Set of targets for propagating value.","enum":["pathVariable","requestParameter","body"]}},"value":{"type":"object","description":"Static value to be propagated to targets. It is optional and is set only if the value is known at attribute creation time."}},"description":"Mappings for the callback method"},"AttributeDefinition":{"required":["label","list","multiSelect","name","readOnly","required","type","uuid","visible"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute for unique identification","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute that is used for identification","example":"Attribute"},"content":{"type":"object","description":"Content of the Attribute"},"label":{"type":"string","description":"Friendly name of the the Attribute","example":"Attribute Name"},"type":{"type":"string","description":"Type of the Attribute","enum":["STRING","INTEGER","SECRET","FILE","BOOLEAN","CREDENTIAL","DATE","FLOAT","JSON","TEXT","TIME","DATETIME"]},"required":{"type":"boolean","description":"Boolean determining if the Attribute is required. If true, the Attribute must be provided.","default":false},"readOnly":{"type":"boolean","description":"Boolean determining if the Attribute is read only. If true, the Attribute content cannot be changed.","default":false},"visible":{"type":"boolean","description":"Boolean determining if the Attribute is visible and can be displayed, otherwise it should be hidden to the user.","default":true},"list":{"type":"boolean","description":"Boolean determining if the Attribute contains list of values in the content","default":false},"description":{"type":"string","description":"Optional description of the Attribute, should contain helper text on what is expected"},"validationRegex":{"type":"string","description":"Optional regular expression used for validating the Attribute content"},"attributeCallback":{"$ref":"#/components/schemas/AttributeCallback"},"multiSelect":{"type":"boolean","description":"Boolean determining if the Attribute can have multiple values","default":false},"group":{"type":"string","description":"Group of the Attribute, used for the logical grouping of the Attribute","example":"requiredAttributes"}}},"SimplifiedClientDto":{"required":["enabled","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"enabled":{"type":"boolean","description":"Enabled flag - true = enabled; false = disabled"}}}}}}}')}}]);