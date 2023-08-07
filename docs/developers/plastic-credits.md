# Plastic credit developer docs

The Plastic Credits enable individuals and organizations to offset their plastic footprint by funding plastic recovery and recycling initiatives. 
This document provides instructions and guidelines for developers who would like to integrate the Plastic Credit API into their applications.

## Getting started
TODO

## Plastic Credit Metadata
On-chain Plastic Credits store metadata URLs that point to the data included in the credit. 
Those URLs are to be handled by client applications for EmpowerChain, so there’s no specific validation to them. 
However, Empower encourages to use a common Empower Data Format for better compatibility. 
With Empower  Data Format, URIs have to point at specific files called Plastic Credit Index Files. 
It is highly recommended for URIs to point to IPFS storage to ensure immutability of the data.
If you're looking for a quickstart to create Plastic Credit Metadata, check # 
Below you can see the JSON schema for Plastic Credit Index File:
```json
{
    "$schema":"http://json-schema.org/draft-07/schema",
    "type": "object",
    "properties": {
        "version": {
            "const": "v1"
        },
        "credit_props": {
            "type": "array",
            "allOf": [
                {
                    "contains": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "const": "empower_credit_events_data"
                            },
                            "type": {
                                "const": "empower_credit_data"
                            },
                            "content": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "id": {
                                            "const": "event_data"
                                        },
                                        "type": {
                                            "const": "empower_event_data"
                                        },
                                        "content": {
                                            "type": "array",
                                            "allOf": [
                                                {
                                                    "contains": {
                                                        "type": "object",
                                                        "properties": {
                                                            "id": {
                                                                "const": "location"
                                                            },
                                                            "type": {
                                                                "const": "coordinates"
                                                            },
                                                            "content": {
                                                                "type": "object",
                                                                "properties": {
                                                                    "latitude": {
                                                                        "type": "number"
                                                                    },
                                                                    "longitude": {
                                                                        "type": "number"
                                                                    }
                                                                },
                                                                "required": [
                                                                    "latitude",
                                                                    "longitude"
                                                                ]
                                                            }
                                                        },
                                                        "required": [
                                                            "id",
                                                            "type",
                                                            "content"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "contains": {
                                                        "type": "object",
                                                        "properties": {
                                                            "id": {
                                                                "const": "amount"
                                                            },
                                                            "type": {
                                                                "const": "number"
                                                            },
                                                            "content": {
                                                                "type": "number"
                                                            }
                                                        },
                                                        "required": [
                                                            "id",
                                                            "type",
                                                            "content"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "contains": {
                                                        "type": "object",
                                                        "properties": {
                                                            "id": {
                                                                "const": "magnitude"
                                                            },
                                                            "type": {
                                                                "const": "text"
                                                            },
                                                            "content": {
                                                                "type": "string"
                                                            }
                                                        },
                                                        "required": [
                                                            "id",
                                                            "type",
                                                            "content"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "contains": {
                                                        "type": "object",
                                                        "properties": {
                                                            "id": {
                                                                "const": "material"
                                                            },
                                                            "type": {
                                                                "const": "property_map"
                                                            },
                                                            "content": {
                                                                "type": "array",
                                                                "items": [
                                                                    {
                                                                        "type": "object",
                                                                        "properties": {
                                                                            "key": {
                                                                                "type": "string"
                                                                            },
                                                                            "value": {
                                                                                "type": "string"
                                                                            }
                                                                        },
                                                                        "required": [
                                                                            "key",
                                                                            "value"
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        "required": [
                                                            "id",
                                                            "type",
                                                            "content"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "contains": {
                                                        "type": "object",
                                                        "properties": {
                                                            "id": {
                                                                "const": "registration_date"
                                                            },
                                                            "type": {
                                                                "const": "date"
                                                            },
                                                            "content": {
                                                                "type": "string"
                                                            }
                                                        },
                                                        "required": [
                                                            "id",
                                                            "type",
                                                            "content"
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    "required": [
                                        "id",
                                        "type",
                                        "content"
                                    ]
                                }
                            }
                        },
                        "required": [
                            "id",
                            "type",
                            "content"
                        ]
                    }
                },
                {
                    "contains": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "const": "credit_media"
                            },
                            "type": {
                                "const": "file_list"
                            },
                            "content": {
                                "type": "array",
                                "items": [
                                    {
                                        "type": "object",
                                        "properties": {
                                            "name": {
                                                "type": "string"
                                            },
                                            "url": {
                                                "type": "string"
                                            }
                                        },
                                        "required": [
                                            "name",
                                            "url"
                                        ]
                                    }
                                ]
                            } 
                        },
                        "required": [
                            "id",
                            "type",
                            "content"
                        ]
                    }
                },
                {
                    "contains": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "const": "credit_files"
                            },
                            "type": {
                                "const": "file_list"
                            },
                            "content": {
                                "type": "array",
                                "items": [
                                    {
                                        "type": "object",
                                        "properties": {
                                            "name": {
                                                "type": "string"
                                            },
                                            "url": {
                                                "type": "string"
                                            }
                                        },
                                        "required": [
                                            "name",
                                            "url"
                                        ]
                                    }
                                ]
                            } 
                        },
                        "required": [
                            "id",
                            "type",
                            "content"
                        ]
                    }
                },
                {
                    "contains": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "const": "issuance_date"
                            },
                            "type": {
                                "const": "date"
                            },
                            "content": {
                                "type": "string"
                            } 
                        },
                        "required": [
                            "id",
                            "type",
                            "content"
                        ]
                    }
                },
                {
                    "contains": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "const": "credit_type"
                            },
                            "type": {
                                "const": "text"
                            },
                            "content": {
                                "type": "string"
                            } 
                        },
                        "required": [
                            "id",
                            "type",
                            "content"
                        ]
                    }
                },
                {
                    "contains": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "const": "applicant_data"
                            },
                            "type": {
                                "const": "empower_applicant_data"
                            },
                            "content": {
                                "type": "object"
                            } 
                        },
                        "required": [
                            "id",
                            "type",
                            "content"
                        ]
                    }
                }
            ]
        }
    }
}
```

For the Plastic Credit to be compatible with Empower Plastic Credit Marketplace, it needs credit_props defined in a specific way. 
Below you can find definitions for the Empower Plastic Credit Marketplace explained bit by bit.

## Empower Marketplace compatible Plastic Credit Index File data format
Required credit props:
1. empower_credit_data - data that describes plastic material and collection events
2. credit_media - URLs to media files related to credit
3. credit_files - URLs to other files related to credit
4. issuance_date - credit issuance date
5. Credit Type - credit class identifier
6. applicant_data - data related to the plastic collector responsible for delivering material, based on which credit is created

### empower_credit_data
empower_credit_data holds the data related to the material and collection events.

```json
{
    "type": "object",
    "properties": {
        "id": {
            "const": "empower_credit_events_data"
        },
        "type": {
            "const": "empower_credit_data"
        },
        "content": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "const": "event_data"
                    },
                    "type": {
                        "const": "empower_event_data"
                    },
                    "content": {
                        "type": "array"
                    }
                },
                "required": [
                    "id",
                    "type",
                    "content"
                ]
            }
        }
    }
}
```

Single event describes the magnitude of the material, location and time of the cleanup and other various properties.

Basic properties required for the event to work correctly with Empower Plastic Credit Marketplace are as follows:

**Location** - geographical coordinates describing the place of material collection/acquisition.
```json
{
    "contains": {
        "type": "object",
        "properties": {
            "id": {
                "const": "location"
            },
            "type": {
                "const": "coordinates"
            },
            "content": {
                "type": "object",
                "properties": {
                    "latitude": {
                        "type": "number"
                    },
                    "longitude": {
                        "type": "number"
                    }
                },
                "required": [
                    "latitude",
                    "longitude"
                ]
            }
        },
        "required": [
            "id",
            "type",
            "content"
        ]
    }
}
```

**Amount** - numeric value describing the quantity of the material.
```json
{
    "contains": {
        "type": "object",
        "properties": {
            "id": {
                "const": "amount"
            },
            "type": {
                "const": "number"
            },
            "content": {
                "type": "number"
            }
        },
        "required": [
            "id",
            "type",
            "content"
        ]
    }
}
```

**Magnitude** - unit used to measure the amount of material.
```json
{
    "contains": {
        "type": "object",
        "properties": {
            "id": {
                "const": "magnitude"
            },
            "type": {
                "const": "text"
            },
            "content": {
                "type": "string"
            }
        },
        "required": [
            "id",
            "type",
            "content"
        ]
    }
}
```

**Material properties** - properties of the collected material. Can be any information.
```json
{
    "contains": {
        "type": "object",
        "properties": {
            "id": {
                "const": "material"
            },
            "type": {
                "const": "property_map"
            },
            "content": {
                "type": "array",
                "items": [
                    {
                        "type": "object",
                        "properties": {
                            "key": {
                                "type": "string"
                            },
                            "value": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "key",
                            "value"
                        ]
                    }
                ]
            }
        },
        "required": [
            "id",
            "type",
            "content"
        ]
    }
}
```

**Registration date** - date of material acquisition / clean up. Should be in ISO 8601 format.
```json
{
      "contains": {
          "type": "object",
          "properties": {
              "id": {
                  "const": "registration_date"
              },
              "type": {
                  "const": "date"
              },
              "content": {
                  "type": "string"
              }
          },
          "required": [
              "id",
              "type",
              "content"
          ]
      }
  }
```

### credit_media
credit_media holds the list of URLs to media files (currently only images are supported) related to Plastic Credit.

```json
{
    "contains": {
        "type": "object",
        "properties": {
            "id": {
                "const": "credit_files"
            },
            "type": {
                "const": "file_list"
            },
            "content": {
                "type": "array",
                "items": [
                    {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "url": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "name",
                            "url"
                        ]
                    }
                ]
            } 
        },
        "required": [
            "id",
            "type",
            "content"
        ]
    }
}
```

### credit_files
credit_files holds the list of URLs to non-media files (documents, other binary files) related to Plastic Credit.

```json
{
    "contains": {
        "type": "object",
        "properties": {
            "id": {
                "const": "credit_files"
            },
            "type": {
                "const": "file_list"
            },
            "content": {
                "type": "array",
                "items": [
                    {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "url": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "name",
                            "url"
                        ]
                    }
                ]
            } 
        },
        "required": [
            "id",
            "type",
            "content"
        ]
    }
}
```

### issuance_date
Official issuance date of the Plastic Credit. Should be formatted according to ISO 8601 standard.

```json
{
    "contains": {
        "type": "object",
        "properties": {
            "id": {
                "const": "issuance_date"
            },
            "type": {
                "const": "date"
            },
            "content": {
                "type": "string"
            } 
        },
        "required": [
            "id",
            "type",
            "content"
        ]
    }
}
```

### credit_type
Abbreviation of the Credit Type Plastic Credit belongs to

```json
{
    "contains": {
        "type": "object",
        "properties": {
            "id": {
                "const": "credit_type"
            },
            "type": {
                "const": "text"
            },
            "content": {
                "type": "string"
            } 
        },
        "required": [
            "id",
            "type",
            "content"
        ]
    }
}
```

### applicant_data
Description of the collector responsible for the clean up and material collection

```json
{
    "contains": {
        "type": "object",
        "properties": {
            "id": {
                "const": "applicant_data"
            },
            "type": {
                "const": "empower_applicant_data"
            },
            "content": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    },
                    "web_refs": {
                        "type": "array",
                        "items": [
                            {
                                "type": "string"
                            }
                        ]
                    }
                },
                "required": [
                    "name",
                    "description"
                ]
            } 
        },
        "required": [
            "id",
            "type",
            "content"
        ]
    }
}
```

### Example Plastic Credit Index File
```json
{
  "version": "v1",
  "credit_props": [
    {
      "id": "empower_credit_events_data",
      "type": "empower_credit_data",
      "content": [
        {
          "id": "event_data",
          "type": "empower_event_data",
          "content": [
            {
              "id": "location",
              "type": "coordinates",
              "content": {
                "latitude": 41.40338,
                "longitude": 2.17403
              }
            },
            {
              "id": "amount",
              "type": "number",
              "content": 100
            },
            {
              "id": "magnitude",
              "type": "text",
              "content": "kg"
            },
            {
              "id": "material",
              "type": "propertyMap",
              "content": [
                {
                  "key": "type",
                  "value": "Recycled plastic"
                },
                {
                  "key": "origin",
                  "value": "ocean"
                }
              ]
            },
            {
              "id": "registration_date",
              "type": "date",
              "content": "2020-10-22T11:07:34Z"
            }
          ]
        }
      ]
    },
    {
      "id": "event_media",
      "type": "file_list",
      "content": [
        {
          "name": "empower_cleanup.png",
          "url": "ipfs://bafkreiguekxhlmgx5oe2n7a327ftgqwpzwspmblvx2pq7x5dxz5c2swfwi"
        }
      ]
    },
    {
      "id": "event_files",
      "type": "file_list",
      "content": [
        {
          "name": "Whitepaper.pdf",
          "url": "https://github.com/EmpowerPlastic/empowerchain/blob/main/Whitepaper.pdf"
        }
      ]
    },
    {
      "id": "issuance_date",
      "type": "date",
      "content": "2020-10-22T11:07:34Z"
    },
    {
      "id": "credit_type",
      "type": "text",
      "content": "PTEST"
    },
    {
      "id": "applicant_data",
      "type": "empower_applicant_data",
      "content": {
        "name": "Empower Plastic",
        "description": "Empower Plastic is a blockchain-based platform that incentivizes the collection of plastic waste from the ocean and the recycling of plastic waste into new products.",
        "web_refs": [
          "https://empower.eco",
          "https://empowerchain.io"
        ]
      }
    }
  ]
}
```

### EmpowerJS' Plastic Credit Builder

There is a set of JavaScript utilities available that allows for easy interaction with EmpowerChain, called `EmpowerJS`. You can use `Builders` available in `EmpowerJS` to create a Plastic Credit Metadata in code. To install `EmpowerJS` run:
```bash
npm i @empower-plastic/empowerjs
```
Example of building a Plastic Credit Metadata Index File:
```ts
import {
  ApplicantBuilder,
  EventBuilder,
  FileBuilder,
  MaterialPropertyBuilder,
  PlasticCreditBuilder
} from 'empowerjs';
    const files = fileBuilder
      .addFile('invoice.pdf', 'url1')
      .addFile('handover_doc.pdf', 'url2')
      .build();

    const mediaFiles = fileBuilder
      .addFile('cleanup_image_1.png', 'mediaUrl1')
      .addFile('cleanup_image_2.png', 'mediaUrl2')
      .build();

    const materials = propertyBuilder.addProperty('origin', 'ocean').addProperty('type', 'plastic').build();

    const event = eventBuilder
      .setLocation({ latitude: 1.13613613, longitude: 2.642513 })
      .setAmount(100)
      .setMagnitude('kg')
      .setMaterial(materials)
      .setRegistrationDate(new Date(550000000000))
      .build();

    const applicant = applicantBuilder
      .setName('Applicant')
      .setDescription('We\'re working towards the clean world!')
      .setWebRefs(['https://applicant.com', 'https://www.instagram.com/applicant/'])
      .build();

    const plasticCredit = plasticCreditBuilder
      .setIssuanceDate(new Date(550000000000))
      .setCreditType('type')
      .setApplicantData(applicant)
      .addCreditEventData(event)
      .addCreditEventData(event2)
      .addCreditFilesData(files)
      .addCreditMediaData(mediaFiles)
      .build();

    // actual data to be uploaded to IPFS and used as metadata URI for Plastic Credit
    const plasticCreditIndexFileData = JSON.stringify(plasticCredit, null, 2);
```