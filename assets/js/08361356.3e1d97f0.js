"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9215],{93428:function(e){e.exports=JSON.parse('{"url":"https://api.czertainly.com/doc-openapi-core-local.yaml","themeId":"theme-redoc","isSpecFile":false,"spec":{"openapi":"3.0.1","info":{"title":"CZERTAINLY Local API","description":"REST API for local administration operations without authentication","contact":{"name":"CZERTAINLY","url":"https://www.czertainly.com","email":"getinfo@czertainly.com"},"license":{"name":"MIT License","url":"https://github.com/3KeyCompany/CZERTAINLY/blob/develop/LICENSE.md"},"x-logo":{"url":"images/czertainly_color_H.svg"}},"externalDocs":{"description":"CZERTAINLY Documentation","url":"https://docs.czertainly.com"},"servers":[{"url":"http://localhost:8080","description":"Generated server url"}],"tags":[{"name":"Local API","description":"API only accessible from localhost"}],"paths":{"/v1/local/admins":{"post":{"tags":["Local API"],"summary":"Create Administrator","operationId":"addAdmin","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AddUserRequestDto"}}},"required":true},"responses":{"200":{"description":"Admin created","content":{"application/json":{"schema":{"$ref":"#/components/schemas/UserDetailDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}}},"components":{"schemas":{"AddUserRequestDto":{"required":["username"],"type":"object","properties":{"username":{"type":"string","description":"Username of the user","example":"user1"},"description":{"type":"string","description":"Description of the user"},"firstName":{"type":"string","description":"First name of the user"},"lastName":{"type":"string","description":"Last name of the user"},"email":{"type":"string","description":"Email of the user"},"enabled":{"type":"boolean","description":"Status of the user. True = Enabled, False = Disabled"},"certificateData":{"type":"string","description":"Base64 Content of the user certificate"},"certificateUuid":{"type":"string","description":"UUID of the existing certificate in the Inventory"}}},"ErrorMessageDto":{"required":["message"],"type":"object","properties":{"message":{"type":"string","description":"Error message detail","example":"Error message"}}},"RoleDto":{"required":["name","systemRole","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"description":{"type":"string","description":"Description of the user"},"systemRole":{"type":"boolean","description":"Is system role. True = Yes, False = No"}},"description":"Roles for the user"},"UserCertificateDto":{"required":["fingerprint","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the certificate"},"fingerprint":{"type":"string","description":"Fingerprint of the certificate"}},"description":"User Certificate details"},"UserDetailDto":{"required":["enabled","roles","systemUser","username","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the User","example":"5b5f0784-2519-11ed-861d-0242ac120002"},"username":{"type":"string","description":"Username of the user","example":"user1"},"firstName":{"type":"string","description":"First name of the user"},"lastName":{"type":"string","description":"Last name of the user"},"email":{"type":"string","description":"Email of the user"},"description":{"type":"string","description":"Description of the user"},"enabled":{"type":"boolean","description":"Status of the user. True = Enabled, False = Disabled"},"systemUser":{"type":"boolean","description":"Is System user. True = Yes, False = No"},"certificate":{"$ref":"#/components/schemas/UserCertificateDto"},"roles":{"type":"array","description":"Roles for the user","items":{"$ref":"#/components/schemas/RoleDto"}}}}}}}}')}}]);