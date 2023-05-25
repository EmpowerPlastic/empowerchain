import {
  ApplicantBuilder,
  EventBuilder,
  FileBuilder,
  MaterialPropertyBuilder,
  PlasticCreditBuilder
} from '../src/plastic-credit-utils/empower-data-creator';

describe('Empower Data Creator', () => {
  it('test file builder', () => {
    const fileBuilder = new FileBuilder();
    const files = fileBuilder
      .addFile('file1', 'url1')
      .addFile('file2', 'url2')
      .build();
    expect(files).toEqual([
      {
        name: 'file1',
        url: 'url1'
      },
      {
        name: 'file2',
        url: 'url2'
      }
    ]);
  });
  it('test material property builder', () => {
    const materialPropertyBuilder = new MaterialPropertyBuilder();
    const properties = materialPropertyBuilder
      .addProperty('key1', 'value1')
      .addProperty('key2', 'value2')
      .build();
    expect(properties).toEqual([
      {
        key: 'key1',
        value: 'value1'
      },
      {
        key: 'key2',
        value: 'value2'
      }
    ]);
  });
  it('test applicant builder (happy path)', () => {
    const applicantBuilder = new ApplicantBuilder();
    const applicant = applicantBuilder
      .setName('name')
      .setDescription('description')
      .setWebRefs(['web1', 'web2'])
      .build();
    expect(applicant).toEqual({
      id: 'applicant_data',
      type: 'empower_applicant_data',
      content: {
        name: 'name',
        description: 'description',
        web_refs: ['web1', 'web2']
      }
    });
  });
  it('test applicant builder (empty name)', () => {
    const applicantBuilder = new ApplicantBuilder();
    expect(() => {
      applicantBuilder
        .setDescription('description')
        .setWebRefs(['web1', 'web2'])
        .build();
    }).toThrow('Name is required');
  });
  it('test applicant builder (empty description)', () => {
    const applicantBuilder = new ApplicantBuilder();
    expect(() => {
      applicantBuilder.setName('name').setWebRefs(['web1', 'web2']).build();
    }).toThrow('Description is required');
  });
  it('test applicant builder (no web refs)', () => {
    const applicantBuilder = new ApplicantBuilder();
    const applicant = applicantBuilder
      .setName('name')
      .setDescription('description')
      .build();
    expect(applicant).toEqual({
      id: 'applicant_data',
      type: 'empower_applicant_data',
      content: {
        name: 'name',
        description: 'description',
        web_refs: []
      }
    });
  });
  it('test event builder (happy path)', () => {
    const propertyBuilder = new MaterialPropertyBuilder();
    const eventBuilder = new EventBuilder();

    const materials = propertyBuilder.addProperty('key1', 'value1').build();
    const event = eventBuilder
      .setLocation({ latitude: 1.6456135113, longitude: 2 })
      .setAmount(123.123)
      .setMagnitude('kg')
      .setMaterial(materials)
      .setRegistrationDate(new Date(500000000000))
      .build();
    expect(event).toEqual({
      id: 'event_data',
      type: 'empower_event_data',
      content: [
        {
          id: 'location',
          type: 'coordinates',
          content: {
            latitude: 1.6456135113,
            longitude: 2
          }
        },
        {
          id: 'amount',
          type: 'number',
          content: 123.123
        },
        {
          id: 'magnitude',
          type: 'text',
          content: 'kg'
        },
        {
          id: 'material',
          type: 'property_map',
          content: [
            {
              key: 'key1',
              value: 'value1'
            }
          ]
        },
        {
          id: 'registration_date',
          type: 'date',
          content: new Date(500000000000).toISOString()
        }
      ]
    });
  });
  it('test event builder (empty location)', () => {
    const eventBuilder = new EventBuilder();
    expect(() => {
      eventBuilder
        .setAmount(123.123)
        .setMagnitude('kg')
        .setRegistrationDate(new Date(500000000000))
        .build();
    }).toThrow('Location is required');
  });
  it('test event builder (empty amount)', () => {
    const eventBuilder = new EventBuilder();
    expect(() => {
      eventBuilder
        .setLocation({ latitude: 1.6456135113, longitude: 2 })
        .setMagnitude('kg')
        .setRegistrationDate(new Date(500000000000))
        .build();
    }).toThrow('Amount is required');
  });
  it('test event builder (empty magnitude)', () => {
    const eventBuilder = new EventBuilder();
    expect(() => {
      eventBuilder
        .setLocation({ latitude: 1.6456135113, longitude: 2 })
        .setAmount(123.123)
        .setRegistrationDate(new Date(500000000000))
        .build();
    }).toThrow('Magnitude is required');
  });
  it('test event builder (empty material)', () => {
    const eventBuilder = new EventBuilder();
    expect(() => {
      eventBuilder
        .setLocation({ latitude: 1.6456135113, longitude: 2 })
        .setAmount(123.123)
        .setMagnitude('kg')
        .setRegistrationDate(new Date(500000000000))
        .build();
    }).toThrow('Material is required');
  });
  it('test event builder (empty registration date)', () => {
    const propertyBuilder = new MaterialPropertyBuilder();
    const eventBuilder = new EventBuilder();

    const materials = propertyBuilder.addProperty('key1', 'value1').build();
    expect(() => {
      eventBuilder
        .setLocation({ latitude: 1.6456135113, longitude: 2 })
        .setAmount(123.123)
        .setMagnitude('kg')
        .setMaterial(materials)
        .build();
    }).toThrow('Registration date is required');
  });
  it('test plastic credit builder (happy path)', () => {
    const fileBuilder = new FileBuilder();
    const propertyBuilder = new MaterialPropertyBuilder();
    const eventBuilder = new EventBuilder();
    const applicantBuilder = new ApplicantBuilder();
    const plasticCreditBuilder = new PlasticCreditBuilder();

    const files = fileBuilder
      .addFile('file1', 'url1')
      .addFile('file2', 'url2')
      .build();

    const mediaFiles = fileBuilder
      .addFile('mediaFile1', 'mediaUrl1')
      .addFile('mediaFile2', 'mediaUrl2')
      .build();

    const materials = propertyBuilder.addProperty('key1', 'value1').build();

    const event = eventBuilder
      .setLocation({ latitude: 1.6456135113, longitude: 2 })
      .setAmount(123.123)
      .setMagnitude('kg')
      .setMaterial(materials)
      .setRegistrationDate(new Date(500000000000))
      .build();

    const event2 = eventBuilder
      .setLocation({ latitude: 3.1361361351, longitude: 4 })
      .setAmount(456.456)
      .setMagnitude('kg')
      .setMaterial(materials)
      .setRegistrationDate(new Date(550000000000))
      .build();

    const applicant = applicantBuilder
      .setName('name')
      .setDescription('description')
      .setWebRefs(['web1', 'web2'])
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

    expect(plasticCredit).toEqual({
      version: 'v1',
      credit_props: [
        {
          id: 'credit_events_data',
          type: 'empower_credit_events_data',
          content: [
            {
              id: 'event_data',
              type: 'empower_event_data',
              content: [
                {
                  id: 'location',
                  type: 'coordinates',
                  content: {
                    latitude: 1.6456135113,
                    longitude: 2
                  }
                },
                {
                  id: 'amount',
                  type: 'number',
                  content: 123.123
                },
                {
                  id: 'magnitude',
                  type: 'text',
                  content: 'kg'
                },
                {
                  id: 'material',
                  type: 'property_map',
                  content: [
                    {
                      key: 'key1',
                      value: 'value1'
                    }
                  ]
                },
                {
                  id: 'registration_date',
                  type: 'date',
                  content: new Date(500000000000).toISOString()
                }
              ]
            },
            {
              id: 'event_data',
              type: 'empower_event_data',
              content: [
                {
                  id: 'location',
                  type: 'coordinates',
                  content: {
                    latitude: 3.1361361351,
                    longitude: 4
                  }
                },
                {
                  id: 'amount',
                  type: 'number',
                  content: 456.456
                },
                {
                  id: 'magnitude',
                  type: 'text',
                  content: 'kg'
                },
                {
                  id: 'material',
                  type: 'property_map',
                  content: [
                    {
                      key: 'key1',
                      value: 'value1'
                    }
                  ]
                },
                {
                  id: 'registration_date',
                  type: 'date',
                  content: new Date(550000000000).toISOString()
                }
              ]
            }
          ]
        },
        {
          id: 'credit_media',
          type: 'file_list',
          content: [
            {
              name: 'mediaFile1',
              url: 'mediaUrl1'
            },
            {
              name: 'mediaFile2',
              url: 'mediaUrl2'
            }
          ]
        },
        {
          id: 'credit_files',
          type: 'file_list',
          content: [
            {
              name: 'file1',
              url: 'url1'
            },
            {
              name: 'file2',
              url: 'url2'
            }
          ]
        },
        {
          id: 'issuance_date',
          type: 'date',
          content: new Date(550000000000).toISOString()
        },
        {
          id: 'credit_type',
          type: 'text',
          content: 'type'
        },
        {
          id: 'applicant_data',
          type: 'empower_applicant_data',
          content: {
            name: 'name',
            description: 'description',
            web_refs: ['web1', 'web2']
          }
        }
      ]
    });
  });
  it('test plastic credit builder (wrong event data)', () => {
    const fileBuilder = new FileBuilder();
    const applicantBuilder = new ApplicantBuilder();
    const plasticCreditBuilder = new PlasticCreditBuilder();

    const files = fileBuilder
      .addFile('file1', 'url1')
      .addFile('file2', 'url2')
      .build();

    const mediaFiles = fileBuilder
      .addFile('mediaFile1', 'mediaUrl1')
      .addFile('mediaFile2', 'mediaUrl2')
      .build();

    const applicant = applicantBuilder
      .setName('name')
      .setDescription('description')
      .setWebRefs(['web1', 'web2'])
      .build();

    expect(() => {
      plasticCreditBuilder
        .setIssuanceDate(new Date(550000000000))
        .setCreditType('type')
        .setApplicantData(applicant)
        .addCreditEventData({
          id: 'event_data',
          type: 'empower_event_data',
          content: 'invalid'
        })
        .addCreditFilesData(files)
        .addCreditMediaData(mediaFiles)
        .build();
    }).toThrow(
      'Invalid data format:\ninstance.credit_props does not match allOf schema [subschema 0] with 1 error[s]:\ninstance.credit_props must contain an item matching given schema\n'
    );
  });
});
