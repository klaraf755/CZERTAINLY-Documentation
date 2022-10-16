"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[1602],{15192:function(e){e.exports=JSON.parse('{"url":"https://api.czertainly.com/doc-openapi-core-authority.yaml","themeId":"theme-redoc","isSpecFile":false,"spec":{"openapi":"3.0.1","info":{"title":"CZERTAINLY Authority API","description":"REST API for managing Authorities in the platform","contact":{"name":"CZERTAINLY","url":"https://www.czertainly.com","email":"getinfo@czertainly.com"},"license":{"name":"MIT License","url":"https://github.com/3KeyCompany/CZERTAINLY/blob/develop/LICENSE.md"},"x-logo":{"url":"images/czertainly_color_H.svg"}},"externalDocs":{"description":"CZERTAINLY Documentation","url":"https://docs.czertainly.com"},"servers":[{"url":"http://localhost:8080","description":"Generated server url"}],"tags":[{"name":"Authority Management API","description":"Authority Management API"}],"paths":{"/v1/authorities/{uuid}":{"get":{"tags":["Authority Management API"],"summary":"Details of an Authority instance","operationId":"getAuthorityInstance","parameters":[{"name":"uuid","in":"path","description":"Authority instance UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Authority instance details retrieved","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthorityInstanceDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"put":{"tags":["Authority Management API"],"summary":"Edit Authority instance","operationId":"editAuthorityInstance","parameters":[{"name":"uuid","in":"path","description":"Authority instance UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthorityInstanceUpdateRequestDto"}}},"required":true},"responses":{"200":{"description":"Authority instance details updated","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthorityInstanceDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"delete":{"tags":["Authority Management API"],"summary":"Delete Authority instance","operationId":"deleteAuthorityInstance","parameters":[{"name":"uuid","in":"path","description":"Authority instance UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"Authority instance deleted"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/authorities/{uuid}/attributes/raProfile/validate":{"post":{"tags":["Authority Management API"],"summary":"Validate RA Profile Attributes","operationId":"validateRAProfileAttributes","parameters":[{"name":"uuid","in":"path","description":"Authority instance UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/RequestAttributeDto"}}}},"required":true},"responses":{"200":{"description":"Attribute information validated"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/authorities":{"get":{"tags":["Authority Management API"],"summary":"List of available Authority instances","operationId":"listAuthorityInstances","responses":{"200":{"description":"List of Authority instances","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/AuthorityInstanceDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"post":{"tags":["Authority Management API"],"summary":"Add Authority instance","operationId":"createAuthorityInstance","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthorityInstanceRequestDto"}}},"required":true},"responses":{"201":{"description":"New Authority instance added","content":{"application/json":{"schema":{"$ref":"#/components/schemas/UuidDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"delete":{"tags":["Authority Management API"],"summary":"Delete multiple Authority instances","operationId":"bulkDeleteAuthorityInstance","requestBody":{"description":"Authority Instance UUIDs","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["c2f685d4-6a3e-11ec-90d6-0242ac120003","b9b09548-a97c-4c6a-a06a-e4ee6fc2da98"]}},"required":true},"responses":{"200":{"description":"Authority instances deleted","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/BulkActionMessageDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessible Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/authorities/{uuid}/endentityprofiles/{endEntityProfileId}/certificateprofiles":{"get":{"tags":["Authority Management API"],"operationId":"listCertificateProfiles","parameters":[{"name":"uuid","in":"path","description":"Authority instance UUID","required":true,"schema":{"type":"string"}},{"name":"endEntityProfileId","in":"path","required":true,"schema":{"type":"integer","format":"int32"}}],"responses":{"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/authorities/{uuid}/endentityprofiles/{endEntityProfileId}/cas":{"get":{"tags":["Authority Management API"],"operationId":"listCAsInProfile","parameters":[{"name":"uuid","in":"path","description":"Authority instance UUID","required":true,"schema":{"type":"string"}},{"name":"endEntityProfileId","in":"path","required":true,"schema":{"type":"integer","format":"int32"}}],"responses":{"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/authorities/{uuid}/endentityprofiles":{"get":{"tags":["Authority Management API"],"operationId":"listEntityProfiles","parameters":[{"name":"uuid","in":"path","description":"Authority instance UUID","required":true,"schema":{"type":"string"}}],"responses":{"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/authorities/{uuid}/attributes/raProfile":{"get":{"tags":["Authority Management API"],"summary":"List RA Profile Attributes","operationId":"listRAProfileAttributes","parameters":[{"name":"uuid","in":"path","description":"Authority instance UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Attribute information retrieved","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/AttributeDefinition"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/authorities/force":{"delete":{"tags":["Authority Management API"],"summary":"Force delete multiple Authority instances","operationId":"forceDeleteAuthorityInstances","requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}}}},"required":true},"responses":{"200":{"description":"Authority instances forced to delete","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/BulkActionMessageDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessible Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}}},"components":{"schemas":{"AuthorityInstanceUpdateRequestDto":{"required":["attributes"],"type":"object","properties":{"attributes":{"type":"array","description":"List of Authority instance Attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}}}},"RequestAttributeDto":{"required":["content","name"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"content":{"type":"object","description":"Content of the Attribute"}},"description":"List of Authority instance Attributes"},"ErrorMessageDto":{"required":["message"],"type":"object","properties":{"message":{"type":"string","description":"Error message detail","example":"Error message"}}},"AuthorityInstanceDto":{"required":["attributes","connectorName","connectorUuid","kind","name","status","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"attributes":{"type":"array","description":"List of Authority instance Attributes","items":{"$ref":"#/components/schemas/ResponseAttributeDto"}},"status":{"type":"string","description":"Status of Authority instance"},"connectorUuid":{"type":"string","description":"UUID of Authority provider"},"connectorName":{"type":"string","description":"Name of Authority provider"},"kind":{"type":"string","description":"Authority Instance Kind","example":"LegacyEjbca, ADCS, etc."}}},"ResponseAttributeDto":{"required":["label","name","type"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"label":{"type":"string","description":"Label of the the Attribute","example":"Attribute Name"},"type":{"type":"string","description":"Type of the Attribute","enum":["STRING","INTEGER","SECRET","FILE","BOOLEAN","CREDENTIAL","DATE","FLOAT","JSON","TEXT","TIME","DATETIME"]},"content":{"type":"object","description":"Content of the Attribute"}},"description":"List of Authority instance Attributes"},"AuthorityInstanceRequestDto":{"required":["attributes","connectorUuid","kind","name"],"type":"object","properties":{"name":{"type":"string","description":"Authority instance name"},"attributes":{"type":"array","description":"List of Authority instance Attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"connectorUuid":{"type":"string","description":"UUID of Authority provider"},"kind":{"type":"string","description":"Authority instance Kind","example":"LegacyEjbca, ADCS, etc"}}},"UuidDto":{"required":["uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier"}}},"AttributeCallback":{"required":["callbackContext","callbackMethod","mappings"],"type":"object","properties":{"callbackContext":{"type":"string","description":"Context part of callback URL"},"callbackMethod":{"type":"string","description":"HTTP method of the callback"},"mappings":{"uniqueItems":true,"type":"array","description":"Mappings for the callback method","items":{"$ref":"#/components/schemas/AttributeCallbackMapping"}}},"description":"Optional definition of callback for getting the content of the Attribute based on the action"},"AttributeCallbackMapping":{"required":["targets","to"],"type":"object","properties":{"from":{"type":"string","description":"Name of the attribute whose value is to be used as value of path variable or request param or body field.It is optional and must be set only if value is not set."},"attributeType":{"type":"string","description":"Type of the attribute. It is optional and must be set only if special behaviour is needed.","enum":["STRING","INTEGER","SECRET","FILE","BOOLEAN","CREDENTIAL","DATE","FLOAT","JSON","TEXT","TIME","DATETIME"]},"to":{"type":"string","description":"Name of the path variable or request param or body field which is to be used to assign value of attribute"},"targets":{"uniqueItems":true,"type":"array","description":"Set of targets for propagating value.","items":{"type":"string","description":"Set of targets for propagating value.","enum":["pathVariable","requestParameter","body"]}},"value":{"type":"object","description":"Static value to be propagated to targets. It is optional and is set only if the value is known at attribute creation time."}},"description":"Mappings for the callback method"},"AttributeDefinition":{"required":["label","list","multiSelect","name","readOnly","required","type","uuid","visible"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute for unique identification","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute that is used for identification","example":"Attribute"},"content":{"type":"object","description":"Content of the Attribute"},"label":{"type":"string","description":"Friendly name of the the Attribute","example":"Attribute Name"},"type":{"type":"string","description":"Type of the Attribute","enum":["STRING","INTEGER","SECRET","FILE","BOOLEAN","CREDENTIAL","DATE","FLOAT","JSON","TEXT","TIME","DATETIME"]},"required":{"type":"boolean","description":"Boolean determining if the Attribute is required. If true, the Attribute must be provided.","default":false},"readOnly":{"type":"boolean","description":"Boolean determining if the Attribute is read only. If true, the Attribute content cannot be changed.","default":false},"visible":{"type":"boolean","description":"Boolean determining if the Attribute is visible and can be displayed, otherwise it should be hidden to the user.","default":true},"list":{"type":"boolean","description":"Boolean determining if the Attribute contains list of values in the content","default":false},"description":{"type":"string","description":"Optional description of the Attribute, should contain helper text on what is expected"},"validationRegex":{"type":"string","description":"Optional regular expression used for validating the Attribute content"},"attributeCallback":{"$ref":"#/components/schemas/AttributeCallback"},"multiSelect":{"type":"boolean","description":"Boolean determining if the Attribute can have multiple values","default":false},"group":{"type":"string","description":"Group of the Attribute, used for the logical grouping of the Attribute","example":"requiredAttributes"}}},"BulkActionMessageDto":{"required":["message","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"message":{"type":"string","description":"Message describing the associations of the Objects which is preventing the delete operation","example":"Object is associated with other items"}}}}}}}')}}]);