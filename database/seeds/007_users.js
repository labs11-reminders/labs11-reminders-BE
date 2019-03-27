exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').then(function() {
    // Inserts seed entries
    return knex('users').insert([
      {
        name: 'Ollie Clemson',
        password: 'cpLp8RUUK46',
        email: 'oclemsonby@latimes.com',
        phone: '404-248-1529',
        country: 'United States',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Batholomew Yeskin',
        password: 'jFVyfh',
        email: 'byeskinbz@un.org',
        phone: '600-205-3247',
        country: 'France',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Derwin Applegate',
        password: '8YLg4F',
        email: 'dapplegatec0@xing.com',
        phone: '600-933-2240',
        country: 'China',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Darci Conan',
        password: 'CVgKVT569Jr',
        email: 'dconanc1@apple.com',
        phone: '625-223-0954',
        country: 'Russia',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Dora Haldon',
        password: 'vrS5GD3Hpy',
        email: 'dhaldonc2@gizmodo.com',
        phone: '113-506-9102',
        country: 'China',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Arabel Baelde',
        password: 'KBrDR5',
        email: 'abaeldec3@hp.com',
        phone: '989-583-1715',
        country: 'Morocco',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Shay Barbrick',
        password: '91p3Nng',
        email: 'sbarbrickc4@cnet.com',
        phone: '575-237-2978',
        country: 'France',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Vevay Arundel',
        password: 'Qsvn4SpYis',
        email: 'varundelc5@latimes.com',
        phone: '971-569-7197',
        country: 'United States',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Victor McJarrow',
        password: 'gpTljDtQlL',
        email: 'vmcjarrowc6@squidoo.com',
        phone: '412-103-6693',
        country: 'Mexico',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Page Lamming',
        password: 'IQdkZjF',
        email: 'plammingc7@miitbeian.gov.cn',
        phone: '589-920-6231',
        country: 'Portugal',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Magda Regorz',
        password: 'np4ardDAi1a',
        email: 'mregorzc8@miibeian.gov.cn',
        phone: '914-662-3480',
        country: 'Indonesia',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Jemima Walker',
        password: 'Wt5kwzPUoA',
        email: 'jwalkerc9@desdev.cn',
        phone: '179-879-2629',
        country: 'Sierra Leone',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Corey Biffin',
        password: 'nDnxNwNU',
        email: 'cbiffinca@blogtalkradio.com',
        phone: '531-950-3111',
        country: 'Pakistan',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Joseito Wathey',
        password: 'ZzqnkNhn',
        email: 'jwatheycb@rakuten.co.jp',
        phone: '801-205-0092',
        country: 'Greece',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Netta Lautie',
        password: 'VQSOyy',
        email: 'nlautiecc@mlb.com',
        phone: '291-225-1989',
        country: 'Russia',
        org_id: 1,
        role_id: 1,
      },
      {
        name: 'Brigid Gynni',
        password: 'fuTAvMFT6sCR',
        email: 'bgynnicd@wix.com',
        phone: '119-495-7821',
        country: 'Montserrat',
        org_id: 1,
        role_id: 1,
      },
      {
        name: 'Roby Conrath',
        password: 'YY9mgjH',
        email: 'rconrathce@tripod.com',
        phone: '250-955-6358',
        country: 'Uzbekistan',
        org_id: 1,
        role_id: 3,
      },
      {
        name: 'Keenan Barehead',
        password: '8M7vg3V',
        email: 'kbareheadcf@ebay.co.uk',
        phone: '880-764-8796',
        country: 'Brazil',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Jan Davenhill',
        password: 'RW6cSNpG',
        email: 'jdavenhillcg@hugedomains.com',
        phone: '340-471-2119',
        country: 'Indonesia',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Gwenneth Tabbernor',
        password: '8mFPyJlo7K6a',
        email: 'gtabbernorch@npr.org',
        phone: '237-147-7191',
        country: 'Comoros',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Miller Paule',
        password: 'vNM0Jt',
        email: 'mpauleci@hhs.gov',
        phone: '503-329-8982',
        country: 'Russia',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Theadora Ayshford',
        password: 'YP7w4WasBrVh',
        email: 'tayshfordcj@irs.gov',
        phone: '641-106-9736',
        country: 'Bolivia',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Marina Kubas',
        password: 'XsXFjh',
        email: 'mkubasck@cbslocal.com',
        phone: '722-131-8736',
        country: 'China',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Lynna Dory',
        password: 'KFI1zWSD4W',
        email: 'ldorycl@netvibes.com',
        phone: '649-571-8538',
        country: 'Philippines',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Tallou Villaron',
        password: '9Mu53Umi3CKO',
        email: 'tvillaroncm@marriott.com',
        phone: '131-198-2872',
        country: 'France',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Marcille Riccardelli',
        password: 'URzOJWCv7n',
        email: 'mriccardellicn@theguardian.com',
        phone: '584-786-5686',
        country: 'Philippines',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Zena Ownsworth',
        password: 'RoZD59nNOkA',
        email: 'zownsworthco@simplemachines.org',
        phone: '171-952-9844',
        country: 'Indonesia',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Doe Handy',
        password: 'LrYaQ2wgJv',
        email: 'dhandycp@tripadvisor.com',
        phone: '200-218-4733',
        country: 'China',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Karalee Kill',
        password: 'afgbes4',
        email: 'kkillcq@soup.io',
        phone: '223-356-6032',
        country: 'Indonesia',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Hobie Crowhurst',
        password: '7FR1OriI4',
        email: 'hcrowhurstcr@sourceforge.net',
        phone: '287-787-6185',
        country: 'Thailand',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Marti Vasilkov',
        password: 'i0yYHID6U25',
        email: 'mvasilkovcs@acquirethinamecom',
        phone: '500-510-2157',
        country: 'Brazil',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Stanwood Coda',
        password: 'cGOMx93KD7IX',
        email: 'scodact@imgur.com',
        phone: '434-750-9631',
        country: 'Japan',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Kacie Gaskamp',
        password: 'vFOM0NRel',
        email: 'kgaskampcu@instagram.com',
        phone: '563-789-0146',
        country: 'France',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Mimi Waymont',
        password: 'I2uH2TK7K',
        email: 'mwaymontcv@springer.com',
        phone: '376-430-1354',
        country: 'Lithuania',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Tamara Rizzotto',
        password: 'Pg9fle4CRsa',
        email: 'trizzottocw@washingtonpost.com',
        phone: '781-897-8468',
        country: 'El Salvador',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Cacilia Blight',
        password: 'cLhmYy1nf',
        email: 'cblightcx@google.com.br',
        phone: '386-880-2116',
        country: 'Cuba',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Jodie Adriaens',
        password: 'eWw4VQLgK',
        email: 'jadriaenscy@bravesites.com',
        phone: '346-198-1207',
        country: 'Portugal',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Laurent Shilburne',
        password: 'sZ8atXch',
        email: 'lshilburnecz@google.com.au',
        phone: '909-895-5084',
        country: 'Mongolia',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Yvor Josephy',
        password: 'ZZBBk2IWccx',
        email: 'yjosephyd0@rediff.com',
        phone: '363-460-0064',
        country: 'Kenya',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Theresa Creyke',
        password: 'Pwo6PSW2',
        email: 'tcreyked1@prnewswire.com',
        phone: '393-719-5052',
        country: 'Afghanistan',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Trenna De Lorenzo',
        password: 'LOcyjh9z',
        email: 'tded2@canalblog.com',
        phone: '818-405-9354',
        country: 'Japan',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Noelle Krollmann',
        password: '06FDLSjV9EiX',
        email: 'nkrollmannd3@amazon.com',
        phone: '697-855-3794',
        country: 'South Sudan',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Jesus Bartoshevich',
        password: 'wNV2cnBXLQXn',
        email: 'jbartoshevichd4@odnoklassniki.ru',
        phone: '807-380-3710',
        country: 'Greece',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Ashley Leverington',
        password: 'lQE7VTZs',
        email: 'aleveringtond5@shinystat.com',
        phone: '998-924-0831',
        country: 'Indonesia',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Pernell Conor',
        password: 'eZieSD0N',
        email: 'pconord6@mtv.com',
        phone: '711-301-6683',
        country: 'Russia',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Arri Bartkowiak',
        password: '8Bi8MXwh',
        email: 'abartkowiakd7@elegantthemes.com',
        phone: '572-245-2085',
        country: 'Sri Lanka',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Rowan Fosse',
        password: '2uoqrGADBqv',
        email: 'rfossed8@freewebs.com',
        phone: '531-877-8451',
        country: 'Saint Lucia',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Thor Meaders',
        password: 'zK2V5wOc0p1',
        email: 'tmeadersd9@opera.com',
        phone: '384-746-3637',
        country: 'Tunisia',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Mozelle Ralton',
        password: 'tFN65L',
        email: 'mraltonda@seattletimes.com',
        phone: '599-331-8108',
        country: 'Indonesia',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Torie Krolman',
        password: 'eIgVonUQn1TG',
        email: 'tkrolmandb@amazon.com',
        phone: '276-129-7083',
        country: 'Uzbekistan',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Carolann Vayne',
        password: 'NMq7Lj03Qw',
        email: 'cvaynedc@indiatimes.com',
        phone: '654-349-9037',
        country: 'Indonesia',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Ricoriki Spedroni',
        password: 'O1FEkms7fDK',
        email: 'rspedronidd@wordpress.org',
        phone: '205-333-6009',
        country: 'China',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Kirbie Hendrikse',
        password: '7xJTMv',
        email: 'khendriksede@booking.com',
        phone: '145-322-5158',
        country: 'Indonesia',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Boy Piburn',
        password: '6aDiyy',
        email: 'bpiburndf@hhs.gov',
        phone: '734-718-5311',
        country: 'Jamaica',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Hilary Boow',
        password: 'exDtQkvcR',
        email: 'hboowdg@amazon.de',
        phone: '319-445-9393',
        country: 'Indonesia',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Constantine Janes',
        password: 'xwfD9c',
        email: 'cjanesdh@t.co',
        phone: '118-243-6564',
        country: 'Brazil',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Lori Fend',
        password: '5zhgioLn',
        email: 'lfenddi@cbc.ca',
        phone: '155-355-5912',
        country: 'Portugal',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Giustino Pyford',
        password: 'tBFMYcG',
        email: 'gpyforddj@kickstarter.com',
        phone: '402-419-6560',
        country: 'United States',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Chrystel Eckert',
        password: 'ty6TfAJaVrp',
        email: 'ceckertdk@businessweek.com',
        phone: '753-435-7827',
        country: 'Norway',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Odilia Avrahamof',
        password: 'BoSypWwWm',
        email: 'oavrahamofdl@theglobeandmail.com',
        phone: '476-304-1588',
        country: 'Malawi',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Laverne Hedgecock',
        password: 'AbJvP8LvuG5L',
        email: 'lhedgecockdm@booking.com',
        phone: '149-998-8143',
        country: 'Indonesia',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Gwyneth Babber',
        password: 'rm9dEKE',
        email: 'gbabberdn@meetup.com',
        phone: '988-577-7842',
        country: 'Philippines',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Anne Fulbrook',
        password: 'IQ3slRxy',
        email: 'afulbrookdo@infoseek.co.jp',
        phone: '682-147-4016',
        country: 'Albania',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Seymour Nuzzti',
        password: 'U24qsyJfmZ',
        email: 'snuzztidp@newyorker.com',
        phone: '379-284-4981',
        country: 'China',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Pris Brodley',
        password: 'rOaiKR9jS3z',
        email: 'pbrodleydq@domainmarket.com',
        phone: '219-757-7943',
        country: 'Brazil',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Eugenia Braisby',
        password: 'zwAyK2',
        email: 'ebraisbydr@hibu.com',
        phone: '863-914-0063',
        country: 'Indonesia',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Magdaia Parke',
        password: 'UZCEyTO3j89',
        email: 'mparkeds@abc.net.au',
        phone: '796-753-9361',
        country: 'Russia',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Jamaal Footer',
        password: 'rCXmXxQ',
        email: 'jfooterdt@pinterest.com',
        phone: '272-783-6463',
        country: 'Indonesia',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Celia Rawsthorn',
        password: 'GLLHIDy9R',
        email: 'crawsthorndu@go.com',
        phone: '660-724-1916',
        country: 'Iran',
        org_id: 1,
        role_id: 2,
      },
      {
        name: 'Aldis Botte',
        password: 'T3suMLNCbN',
        email: 'abottedv@latimes.com',
        phone: '442-811-2245',
        country: 'Portugal',
        org_id: 1,
        role_id: 2,
      },
    ]);
  });
};