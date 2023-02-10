"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[7461],{79390:function(e){e.exports=JSON.parse('{"url":"https://api.czertainly.com/1.6.0/doc-openapi-core-credential.yaml","themeId":"theme-redoc","isSpecFile":false,"spec":{"openapi":"3.0.1","info":{"title":"CZERTAINLY Credential API","description":"REST API for managing Credentials in the platform","contact":{"name":"CZERTAINLY","url":"https://www.czertainly.com","email":"getinfo@czertainly.com"},"license":{"name":"MIT License","url":"https://github.com/3KeyCompany/CZERTAINLY/blob/develop/LICENSE.md"},"version":"1.6.0","x-logo":{"url":"images/czertainly_color_H.svg"}},"externalDocs":{"description":"CZERTAINLY Documentation","url":"https://docs.czertainly.com"},"servers":[{"url":"http://localhost:8080","description":"Generated server url"}],"tags":[{"name":"Credential Management","description":"Credential Management API"}],"paths":{"/v1/credentials/{uuid}":{"get":{"tags":["Credential Management"],"summary":"Details of a Credentials","operationId":"getCredential","parameters":[{"name":"uuid","in":"path","description":"Credential UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Credential details retrieved","content":{"application/json":{"schema":{"$ref":"#/components/schemas/CredentialDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"put":{"tags":["Credential Management"],"summary":"Edit Credential","operationId":"editCredential","parameters":[{"name":"uuid","in":"path","description":"Credential UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CredentialUpdateRequestDto"}}},"required":true},"responses":{"200":{"description":"Credential updated","content":{"application/json":{"schema":{"$ref":"#/components/schemas/CredentialDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"delete":{"tags":["Credential Management"],"summary":"Delete Credential","operationId":"deleteCredential","parameters":[{"name":"uuid","in":"path","description":"Credential UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"Credential deleted"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/credentials":{"get":{"tags":["Credential Management"],"summary":"List of All Credentials","operationId":"listCredentials","responses":{"200":{"description":"List of all Credentials","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/CredentialDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"post":{"tags":["Credential Management"],"summary":"Add Credential","operationId":"createCredential","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CredentialRequestDto"}}},"required":true},"responses":{"201":{"description":"New Credential added","content":{"application/json":{"schema":{"$ref":"#/components/schemas/UuidDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"delete":{"tags":["Credential Management"],"summary":"Delete multiple Credentials","operationId":"bulkDeleteCredential","requestBody":{"description":"Credential UUIDs","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["c2f685d4-6a3e-11ec-90d6-0242ac120003","b9b09548-a97c-4c6a-a06a-e4ee6fc2da98"]}},"required":true},"responses":{"200":{"description":"Credentials deleted"},"204":{"description":"No Content"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessible Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/credentials/{uuid}/enable":{"patch":{"tags":["Credential Management"],"summary":"Enable Credential","operationId":"enableCredential","parameters":[{"name":"uuid","in":"path","description":"Credential UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"Credential enabled"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/credentials/{uuid}/disable":{"patch":{"tags":["Credential Management"],"summary":"Disable Credential","operationId":"disableCredential","parameters":[{"name":"uuid","in":"path","description":"Credential UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"Credential disabled"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}}},"components":{"schemas":{"AttributeCallback":{"required":["callbackContext","callbackMethod","mappings"],"type":"object","properties":{"callbackContext":{"type":"string","description":"Context part of callback URL"},"callbackMethod":{"type":"string","description":"HTTP method of the callback"},"mappings":{"uniqueItems":true,"type":"array","description":"Mappings for the callback method","items":{"$ref":"#/components/schemas/AttributeCallbackMapping"}}},"description":"Optional definition of callback for getting the content of the Attribute based on the action"},"AttributeCallbackMapping":{"required":["targets","to"],"type":"object","properties":{"from":{"type":"string","description":"Name of the attribute whose value is to be used as value of path variable or request param or body field.It is optional and must be set only if value is not set."},"attributeType":{"$ref":"#/components/schemas/AttributeType"},"attributeContentType":{"$ref":"#/components/schemas/AttributeContentType"},"to":{"type":"string","description":"Name of the path variable or request param or body field which is to be used to assign value of attribute"},"targets":{"uniqueItems":true,"type":"array","description":"Set of targets for propagating value.","items":{"$ref":"#/components/schemas/AttributeValueTarget"}},"value":{"type":"object","description":"Static value to be propagated to targets. It is optional and is set only if the value is known at attribute creation time."}},"description":"Mappings for the callback method"},"AttributeConstraintType":{"type":"string","description":"Attribute Constraint Type","enum":["regExp","range","dateTime"]},"AttributeContentType":{"type":"string","description":"Type of the attribute content. ","enum":["string","integer","secret","file","boolean","credential","date","float","object","text","time","datetime","codeblock"]},"AttributeType":{"type":"string","description":"Type of the attribute. It is optional and must be set only if special behaviour is needed.","enum":["data","group","info","meta","custom"]},"AttributeValueTarget":{"type":"string","description":"Set of targets for propagating value.","enum":["pathVariable","requestParameter","body"]},"BaseAttributeConstraint":{"required":["data","type"],"type":"object","properties":{"description":{"type":"string","description":"Description of the constraint"},"errorMessage":{"type":"string","description":"Error message to be displayed for wrong data"},"type":{"$ref":"#/components/schemas/AttributeConstraintType"},"data":{"type":"object","description":"Attribute Constraint Data"}},"description":"Optional regular expressions and constraints used for validating the Attribute content","oneOf":[{"$ref":"#/components/schemas/RegexpAttributeConstraint"},{"$ref":"#/components/schemas/RangeAttributeConstraint"},{"$ref":"#/components/schemas/DateTimeAttributeConstraint"}]},"BaseAttributeContentDto":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"object","description":"Content Data"}},"description":"Base Attribute content definition","oneOf":[{"$ref":"#/components/schemas/BooleanAttributeContent"},{"$ref":"#/components/schemas/CodeBlockAttributeContent"},{"$ref":"#/components/schemas/CredentialAttributeContent"},{"$ref":"#/components/schemas/DateAttributeContent"},{"$ref":"#/components/schemas/DateTimeAttributeContent"},{"$ref":"#/components/schemas/FileAttributeContent"},{"$ref":"#/components/schemas/FloatAttributeContent"},{"$ref":"#/components/schemas/IntegerAttributeContent"},{"$ref":"#/components/schemas/ObjectAttributeContent"},{"$ref":"#/components/schemas/SecretAttributeContent"},{"$ref":"#/components/schemas/StringAttributeContent"},{"$ref":"#/components/schemas/TextAttributeContent"},{"$ref":"#/components/schemas/TimeAttributeContent"}]},"BooleanAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"boolean","description":"Boolean attribute value"}}},"CodeBlockAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"$ref":"#/components/schemas/CodeBlockAttributeContentData"}}},"CodeBlockAttributeContentData":{"required":["code","language"],"type":"object","properties":{"language":{"$ref":"#/components/schemas/ProgrammingLanguageEnum"},"code":{"type":"string","description":"Block of the code in Base64. Formatting of the code is specified by variable language"}},"description":"CodeBlock attribute content data"},"CredentialAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"$ref":"#/components/schemas/CredentialAttributeContentData"}}},"CredentialAttributeContentData":{"required":["attributes","kind","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"kind":{"type":"string","description":"Credential Kind","example":"SoftKeyStore, Basic, ApiKey, etc"},"attributes":{"type":"array","description":"List of Credential Attributes","items":{"$ref":"#/components/schemas/DataAttribute"}}},"description":"Credential attribute content data"},"CredentialUpdateRequestDto":{"required":["attributes"],"type":"object","properties":{"attributes":{"type":"array","description":"List of Credential Attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"customAttributes":{"type":"array","description":"List of Custom Attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}}}},"DataAttribute":{"required":["contentType","name","properties","type","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute for unique identification","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute that is used for identification","example":"Attribute"},"description":{"type":"string","description":"Optional description of the Attribute, should contain helper text on what is expected"},"content":{"type":"array","description":"Content of the Attribute","items":{"$ref":"#/components/schemas/BaseAttributeContentDto"}},"type":{"$ref":"#/components/schemas/AttributeType"},"contentType":{"$ref":"#/components/schemas/AttributeContentType"},"properties":{"$ref":"#/components/schemas/DataAttributeProperties"},"constraints":{"type":"array","description":"Optional regular expressions and constraints used for validating the Attribute content","items":{"$ref":"#/components/schemas/BaseAttributeConstraint"}},"attributeCallback":{"$ref":"#/components/schemas/AttributeCallback"}},"description":"Data attribute allows to store and transfer dynamic data. Its content can be edited and send in requests to store."},"DataAttributeProperties":{"required":["label","list","multiSelect","readOnly","required","visible"],"type":"object","properties":{"label":{"type":"string","description":"Friendly name of the the Attribute","example":"Attribute Name"},"visible":{"type":"boolean","description":"Boolean determining if the Attribute is visible and can be displayed, otherwise it should be hidden to the user.","default":true},"group":{"type":"string","description":"Group of the Attribute, used for the logical grouping of the Attribute","example":"requiredAttributes"},"required":{"type":"boolean","description":"Boolean determining if the Attribute is required. If true, the Attribute must be provided.","default":false},"readOnly":{"type":"boolean","description":"Boolean determining if the Attribute is read only. If true, the Attribute content cannot be changed.","default":false},"list":{"type":"boolean","description":"Boolean determining if the Attribute contains list of values in the content","default":false},"multiSelect":{"type":"boolean","description":"Boolean determining if the Attribute can have multiple values","default":false}},"description":"Properties of the Attributes"},"DateAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"Date attribute value in format yyyy-MM-dd","format":"date"}}},"DateTimeAttributeConstraint":{"required":["type"],"type":"object","properties":{"description":{"type":"string","description":"Description of the constraint"},"errorMessage":{"type":"string","description":"Error message to be displayed for wrong data"},"type":{"$ref":"#/components/schemas/AttributeConstraintType"},"data":{"$ref":"#/components/schemas/DateTimeAttributeConstraintData"}}},"DateTimeAttributeConstraintData":{"type":"object","properties":{"from":{"type":"string","description":"Start of the datetime for validation","format":"date-time"},"to":{"type":"string","description":"End of the datetime for validation","format":"date-time"}},"description":"DateTime Range Attribute Constraint Data"},"DateTimeAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"DateTime attribute value in format yyyy-MM-ddTHH:mm:ss.SSSXXX","format":"date-time"}}},"FileAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"$ref":"#/components/schemas/FileAttributeContentData"}}},"FileAttributeContentData":{"required":["content","fileName","mimeType"],"type":"object","properties":{"content":{"type":"string","description":"File content"},"fileName":{"type":"string","description":"Name of the file"},"mimeType":{"$ref":"#/components/schemas/MimeType"}},"description":"File attribute content data"},"FloatAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"number","description":"Float attribute value","format":"float"}}},"IntegerAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"integer","description":"Integer attribute value","format":"int32"}}},"MimeType":{"type":"object","properties":{"type":{"type":"string"},"subtype":{"type":"string"},"parameters":{"type":"object","additionalProperties":{"type":"string"}},"wildcardType":{"type":"boolean"},"wildcardSubtype":{"type":"boolean"},"subtypeSuffix":{"type":"string"},"concrete":{"type":"boolean"},"charset":{"type":"string"}},"description":"Type of the file uploaded"},"ObjectAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"object","description":"Object attribute content data"}}},"ProgrammingLanguageEnum":{"type":"string","description":"Definition of programming languages used for code","example":"JAVA, PHP, C, etc","enum":["css","clike","javascript","abap","actionscript","ada","apacheconf","apl","applescript","arduino","arff","asciidoc","asm6502","aspnet","autohotkey","autoit","bash","basic","batch","bison","brainfuck","bro","c","csharp","cpp","coffeescript","clojure","crystal","csp","css-extras","d","dart","diff","django","docker","eiffel","elixir","elm","erb","erlang","fsharp","flow","fortran","gedcom","gherkin","git","glsl","gml","go","graphql","groovy","haml","handlebars","haskell","haxe","http","hpkp","hsts","ichigojam","icon","inform7","ini","io","j","java","jolie","json","julia","keyman","kotlin","latex","less","liquid","lisp","livescript","lolcode","lua","makefile","markdown","markup-templating","matlab","mel","mizar","monkey","n4js","nasm","nginx","nim","nix","nsis","objectivec","ocaml","opencl","oz","parigp","parser","pascal","perl","php","php-extras","plsql","powershell","processing","prolog","properties","protobuf","pug","puppet","pure","python","q","qore","r","jsx","tsx","renpy","reason","rest","rip","roboconf","ruby","rust","sas","sass","scss","scala","scheme","smalltalk","smarty","sql","soy","stylus","swift","tap","tcl","textile","tt2","twig","typescript","vbnet","velocity","verilog","vhdl","vim","visual-basic","wasm","wiki","xeora","xojo","xquery","yaml"]},"RangeAttributeConstraint":{"required":["type"],"type":"object","properties":{"description":{"type":"string","description":"Description of the constraint"},"errorMessage":{"type":"string","description":"Error message to be displayed for wrong data"},"type":{"$ref":"#/components/schemas/AttributeConstraintType"},"data":{"$ref":"#/components/schemas/RangeAttributeConstraintData"}}},"RangeAttributeConstraintData":{"type":"object","properties":{"from":{"type":"integer","description":"Start of the range for validation","format":"int32"},"to":{"type":"integer","description":"End of the range for validation","format":"int32"}},"description":"Integer Range Attribute Constraint Data"},"RegexpAttributeConstraint":{"required":["type"],"type":"object","properties":{"description":{"type":"string","description":"Description of the constraint"},"errorMessage":{"type":"string","description":"Error message to be displayed for wrong data"},"type":{"$ref":"#/components/schemas/AttributeConstraintType"},"data":{"type":"string","description":"Regular Expression Attribute Constraint Data"}}},"RequestAttributeDto":{"required":["content","name"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"content":{"type":"array","description":"Content of the Attribute","items":{"$ref":"#/components/schemas/BaseAttributeContentDto"}}},"description":"Request attribute to send attribute content for object"},"SecretAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"$ref":"#/components/schemas/SecretAttributeContentData"}}},"SecretAttributeContentData":{"type":"object","properties":{"secret":{"type":"string","description":"Secret attribute data"},"protectionLevel":{"type":"string","description":"Level of protection of the data"}},"description":"Secret attribute content data"},"StringAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"String attribute value"}}},"TextAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"Text attribute value"}}},"TimeAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"Time attribute value in format HH:mm:ss"}}},"ErrorMessageDto":{"required":["message"],"type":"object","properties":{"message":{"type":"string","description":"Error message detail","example":"Error message"}}},"AuthenticationServiceExceptionDto":{"required":["code","message","statusCode"],"type":"object","properties":{"statusCode":{"type":"integer","description":"Status code of the HTTP Request","format":"int32"},"code":{"type":"string","description":"Code of the result"},"message":{"type":"string","description":"Exception message"}}},"CredentialDto":{"required":["attributes","connectorName","connectorUuid","enabled","kind","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"kind":{"type":"string","description":"Credential Kind","example":"SoftKeyStore, Basic, ApiKey, etc"},"attributes":{"type":"array","description":"List of Credential Attributes","items":{"$ref":"#/components/schemas/ResponseAttributeDto"}},"customAttributes":{"type":"array","description":"List of Custom Attributes","items":{"$ref":"#/components/schemas/ResponseAttributeDto"}},"enabled":{"type":"boolean","description":"Enabled flag - true = enabled; false = disabled"},"connectorUuid":{"type":"string","description":"UUID of Credential provider Connector"},"connectorName":{"type":"string","description":"Name of Credential provider Connector"}}},"ResponseAttributeDto":{"required":["contentType","label","name","type"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"label":{"type":"string","description":"Label of the the Attribute","example":"Attribute Name"},"type":{"$ref":"#/components/schemas/AttributeType"},"contentType":{"$ref":"#/components/schemas/AttributeContentType"},"content":{"type":"array","description":"Content of the Attribute","items":{"$ref":"#/components/schemas/BaseAttributeContentDto"}}},"description":"Response attribute with content for object it belongs to"},"CredentialRequestDto":{"required":["attributes","connectorUuid","kind","name"],"type":"object","properties":{"name":{"type":"string","description":"Credential name"},"kind":{"type":"string","description":"Credential Kind","example":"SoftKeyStore, Basic, ApiKey, etc"},"attributes":{"type":"array","description":"List of Credential Attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"customAttributes":{"type":"array","description":"List of Custom Attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"connectorUuid":{"type":"string","description":"UUID of Credential provider Connector"}}},"UuidDto":{"required":["uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier"}}}}}}}')}}]);