exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').then(function() {
    // Inserts seed entries
    return knex('users').insert([
      {
        name: 'Rosaline Dales',
        password: 'BuTa4KQwRl',
        email: 'rdales8k@census.gov',
        phone: '648-502-4164',
        country: 'China',
        org_id: 3,
        role_id: 1,
      },
      {
        name: 'Erminie Pierson',
        password: 'HGeVsnwbn',
        email: 'epierson8l@dot.gov',
        phone: '282-493-1760',
        country: 'China',
        org_id: 3,
        role_id: 1,
      },
      {
        name: 'Arvy Chatwin',
        password: 'fLnZbEK',
        email: 'achatwin8m@accuweather.com',
        phone: '508-953-2286',
        country: 'Philippines',
        org_id: 3,
        role_id: 3,
      },
      {
        name: 'Orton Stedman',
        password: '6QII6Ba',
        email: 'ostedman8n@shinystat.com',
        phone: '466-994-5602',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Bond Biset',
        password: 'Db0KaE',
        email: 'bbiset8o@ebay.co.uk',
        phone: '844-114-7003',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Lynnette Ling',
        password: '0AyLhfg2xRNM',
        email: 'lling8p@cisco.com',
        phone: '112-888-5077',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Tait Edes',
        password: '6mJqunMfha',
        email: 'tedes8q@topsy.com',
        phone: '885-664-0105',
        country: 'Thailand',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Veradis Streetley',
        password: 'rkbpqh8VgK',
        email: 'vstreetley8r@posterous.com',
        phone: '542-373-2059',
        country: 'Kyrgyzstan',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Gloria Peasgood',
        password: 'k1biiZJZhOqm',
        email: 'gpeasgood8s@etsy.com',
        phone: '124-194-1852',
        country: 'Indonesia',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Wynn Duckham',
        password: 'pyIg2HYtnO',
        email: 'wduckham8t@netvibes.com',
        phone: '779-507-4841',
        country: 'Peru',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Winn McGirl',
        password: 'GIdypEaT',
        email: 'wmcgirl8u@furl.net',
        phone: '178-971-9670',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Helga Kennifick',
        password: 'cFn5QTS1a9',
        email: 'hkennifick8v@nationalgeographic.com',
        phone: '578-831-9241',
        country: 'Indonesia',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Emlen Rosbrough',
        password: 'BICBhUP',
        email: 'erosbrough8w@cbsnews.com',
        phone: '438-622-7187',
        country: 'Costa Rica',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Spike Aujouanet',
        password: 'HSu5Ocl8LIO',
        email: 'saujouanet8x@cbsnews.com',
        phone: '461-277-1537',
        country: 'Bulgaria',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Deck Mingaud',
        password: '6H3mt3s2eLC',
        email: 'dmingaud8y@pagesperso-orange.fr',
        phone: '991-925-6478',
        country: 'Norway',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Amalle McInteer',
        password: 'dLUxwb0gZmi7',
        email: 'amcinteer8z@gravatar.com',
        phone: '795-225-1496',
        country: 'Czech Republic',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Vinita Howcroft',
        password: 'uw4FTJeUR',
        email: 'vhowcroft90@wp.com',
        phone: '963-350-3889',
        country: 'Czech Republic',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Malynda Soame',
        password: '5IIcz7',
        email: 'msoame91@de.vu',
        phone: '164-606-9898',
        country: 'Indonesia',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Benedetto Dreier',
        password: 'bViQeD',
        email: 'bdreier92@istockphoto.com',
        phone: '551-409-5091',
        country: 'United Kingdom',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Howey Pitsall',
        password: 'ILgeuRg',
        email: 'hpitsall93@nsw.gov.au',
        phone: '136-141-0519',
        country: 'Philippines',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Stace Jellico',
        password: '0aAFCTxe',
        email: 'sjellico94@sohu.com',
        phone: '474-486-9030',
        country: 'Philippines',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Orville Hartburn',
        password: 'FlTfEd6NTN',
        email: 'ohartburn95@sohu.com',
        phone: '589-581-8753',
        country: 'Vietnam',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Pasquale Silkston',
        password: 'vpqSsu19',
        email: 'psilkston96@symantec.com',
        phone: '794-659-6093',
        country: 'South Korea',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Larine Lygo',
        password: 'qIrH1q3kW3',
        email: 'llygo97@google.cn',
        phone: '277-476-3442',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Michaela Gabbatt',
        password: 'BANRd6U02',
        email: 'mgabbatt98@blogger.com',
        phone: '349-882-7542',
        country: 'Greece',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Regen Brecon',
        password: 'XsGzU5aMLO',
        email: 'rbrecon99@drupal.org',
        phone: '388-878-5967',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Lewiss Sailor',
        password: 'Z2hruoovH4',
        email: 'lsailor9a@nifty.com',
        phone: '118-149-0964',
        country: 'Peru',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Loella Geelan',
        password: 'llsO4hobASk',
        email: 'lgeelan9b@latimes.com',
        phone: '151-268-7278',
        country: 'Kazakhstan',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Ainsley Vanetti',
        password: 'lkYMDcoob',
        email: 'avanetti2v@yahoo.co.jp',
        phone: '844-338-2144',
        country: 'Brazil',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Oralia Esby',
        password: 'QiZYQYdkRdo9',
        email: 'oesby2w@harvard.edu',
        phone: '189-220-3139',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Chiquia Millership',
        password: 'Hq4RCAy',
        email: 'cmillership2x@si.edu',
        phone: '732-617-8171',
        country: 'Peru',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Damian Fysh',
        password: 'UqrQEj4XO',
        email: 'dfysh2y@google.com.au',
        phone: '235-669-4269',
        country: 'Finland',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Roselia Honsch',
        password: 'mfEq1F',
        email: 'rhonsch2z@networkadvertising.org',
        phone: '531-873-4209',
        country: 'Poland',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Matti Okotobi',
        password: 'hZxfNfj',
        email: 'mmardee30@fastcompany.com',
        phone: '932-213-0538',
        country: 'Brazil',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Kerrill Handslip',
        password: 'THyv0K7',
        email: 'khandslip31@ted.com',
        phone: '463-747-9455',
        country: 'Poland',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Leonore Ortzen',
        password: 'nGRhpNB',
        email: 'lortzen32@washington.edu',
        phone: '622-134-7924',
        country: 'Bulgaria',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Alisander Bollans',
        password: 'lcJN21JPEn',
        email: 'abollans33@go.com',
        phone: '631-269-1968',
        country: 'Azerbaijan',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Caddric Hubner',
        password: '6GBcyFFwocN',
        email: 'chubner34@hao123.com',
        phone: '708-421-8206',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Betteanne Haggerwood',
        password: 'vtaadqTU',
        email: 'bhaggerwood35@usgs.gov',
        phone: '682-202-2959',
        country: 'Sweden',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Walsh Floyd',
        password: '3gIrQW',
        email: 'wfloyd36@ameblo.jp',
        phone: '979-873-8235',
        country: 'Guatemala',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Fredric McClarence',
        password: 'MATvGsZqp',
        email: 'fmcclarence37@squidoo.com',
        phone: '796-511-0185',
        country: 'Canada',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Julius Manuel',
        password: 'Rwia0Chqn',
        email: 'jmanuel38@marketwatch.com',
        phone: '897-697-2458',
        country: 'Morocco',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Towny Skittrall',
        password: '56oCGFBnq0',
        email: 'tskittrall39@home.pl',
        phone: '870-665-3139',
        country: 'Greece',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Aeriel Stobbart',
        password: 'u2K65gZjX',
        email: 'astobbart3a@cocolog-nifty.com',
        phone: '527-193-9812',
        country: 'Philippines',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Margalo Hasnip',
        password: 'BEFq7dhJKi',
        email: 'mhasnip3b@addtoany.com',
        phone: '665-419-8479',
        country: 'Malaysia',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Fletch Duckitt',
        password: 'DOjjZ9fQ',
        email: 'fduckitt3c@theguardian.com',
        phone: '472-740-5178',
        country: 'Kiribati',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Eddie Redsull',
        password: 'TsM0gMqIg',
        email: 'eredsull3d@sbwire.com',
        phone: '532-444-2700',
        country: 'Philippines',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Reggis Govey',
        password: 'HzBPsi',
        email: 'rgovey3e@prnewswire.com',
        phone: '184-659-2186',
        country: 'Indonesia',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Reube Routhorn',
        password: 'OWcXs8KH',
        email: 'rrouthorn3f@youku.com',
        phone: '724-499-0742',
        country: 'Brazil',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Jocelyne Suttie',
        password: 'SBcwM0lC8',
        email: 'jsuttie3g@army.mil',
        phone: '836-959-1350',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Gonzalo Dayes',
        password: 'Y0suoy',
        email: 'gdayes3h@cbslocal.com',
        phone: '869-481-1108',
        country: 'Norway',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Vera Finding',
        password: 'zACrvWCkb',
        email: 'vfinding3i@usnews.com',
        phone: '917-426-0692',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Wain McAughtry',
        password: 'UMtV7npRZ',
        email: 'wmcaughtry3j@harvard.edu',
        phone: '759-784-6004',
        country: 'Ivory Coast',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Lorenza Picardo',
        password: 'NRyWJXDZ1',
        email: 'lpicardo3k@squidoo.com',
        phone: '252-446-0633',
        country: 'Indonesia',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Ursula Spadollini',
        password: 'iFKLXZ',
        email: 'uspadollini3l@technorati.com',
        phone: '457-809-6415',
        country: 'Argentina',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Phillis Erasmus',
        password: 'fg31JV',
        email: 'perasmus3m@xrea.com',
        phone: '750-974-2571',
        country: 'Japan',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Gunilla Babinski',
        password: 'YSfQg5mYfCoz',
        email: 'gbabinski3n@gov.uk',
        phone: '574-288-0697',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Alanna Antrum',
        password: 'LYX7cllK',
        email: 'aantrum3o@sciencedaily.com',
        phone: '147-661-4369',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Merrie Spick',
        password: 'aJ6xhMuzwDZI',
        email: 'mspick3p@amazon.co.jp',
        phone: '452-146-0128',
        country: 'Brazil',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Bary Bavin',
        password: 'CX4wwS',
        email: 'bbavin3q@pen.io',
        phone: '155-123-4308',
        country: 'Honduras',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Garland Jorissen',
        password: 'KpO6qfyO5u',
        email: 'gjorissen3r@yale.edu',
        phone: '601-973-9194',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Waldo Kopacek',
        password: 'RvplrRBlIk',
        email: 'wkopacek3s@wp.com',
        phone: '676-799-9891',
        country: 'Indonesia',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Egor Mewburn',
        password: 'BxnYwGFfTnBa',
        email: 'emewburn3t@imdb.com',
        phone: '441-532-8053',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Rubetta Wallage',
        password: 'Pf3yOEI8Ncu',
        email: 'rwallage3u@flavors.me',
        phone: '851-555-4056',
        country: 'Jamaica',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Mill Iacobo',
        password: 'kJj3LFC',
        email: 'miacobo3v@wufoo.com',
        phone: '751-112-0905',
        country: 'Indonesia',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Elna Giddings',
        password: '1THiV2Rs',
        email: 'egiddings3w@homestead.com',
        phone: '622-927-7545',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Carly Hebson',
        password: '4qQbHMJC',
        email: 'chebson3x@cdbaby.com',
        phone: '624-225-2676',
        country: 'Uganda',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Guilbert Ellison',
        password: 'Z7W3t3F50p',
        email: 'gellison3y@icq.com',
        phone: '229-947-1125',
        country: 'United States',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Winnie Lacrouts',
        password: 'zPqqTOEj',
        email: 'wlacrouts3z@chron.com',
        phone: '216-684-7922',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Ingeborg Airds',
        password: 'NsuxFLCXfhvi',
        email: 'iairds40@kickstarter.com',
        phone: '718-528-3251',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Moselle Varnham',
        password: '6ZRWrKY',
        email: 'mvarnham41@so-net.ne.jp',
        phone: '323-315-0166',
        country: 'United States',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Payton Brenstuhl',
        password: 'sB2bDNyR2Dkj',
        email: 'pbrenstuhl42@reference.com',
        phone: '210-168-6226',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Filide Crowcher',
        password: 'QWnj8ZKhBz',
        email: 'fcrowcher43@ibm.com',
        phone: '521-430-6762',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Kacy Pooly',
        password: 'IWOY0mqM',
        email: 'kpooly44@webnode.com',
        phone: '264-536-3454',
        country: 'Thailand',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Ric Fewkes',
        password: '4gxSqevd',
        email: 'rfewkes45@redcross.org',
        phone: '409-519-1649',
        country: 'Ethiopia',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Edan Glas',
        password: 'a6zQwEpFWE',
        email: 'eglas46@bigcartel.com',
        phone: '221-678-6303',
        country: 'Belarus',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Nadeen Fraczkiewicz',
        password: '6Bl0AP',
        email: 'nfraczkiewicz47@wordpress.com',
        phone: '800-512-3863',
        country: 'Philippines',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Saidee Pietesch',
        password: 'AIHvbScVZ',
        email: 'spietesch48@livejournal.com',
        phone: '751-744-3144',
        country: 'Portugal',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Standford Mower',
        password: 'SfiTegGo6D',
        email: 'smower49@360.cn',
        phone: '355-512-2611',
        country: 'Pakistan',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Haleigh Stubbley',
        password: 'LaXJdkjF6x',
        email: 'hstubbley4a@sciencedirect.com',
        phone: '674-976-8990',
        country: 'Russia',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Loni Cottis',
        password: 'IjvZmPU2nQ4',
        email: 'lcottis4b@phpbb.com',
        phone: '610-865-2033',
        country: 'Indonesia',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Jeremias Terbeek',
        password: 'Fc1RSm9a',
        email: 'jterbeek4c@va.gov',
        phone: '686-758-6934',
        country: 'Russia',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Karim Farrance',
        password: 'c9FPNVq',
        email: 'kfarrance4d@xrea.com',
        phone: '598-298-2392',
        country: 'Norway',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Sindee Artingstall',
        password: 'tjY4OyM',
        email: 'sartingstall4e@rambler.ru',
        phone: '471-166-3511',
        country: 'Vietnam',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Gilbertina Falkous',
        password: 'WRMQWuhA9',
        email: 'gfalkous4f@sbwire.com',
        phone: '343-698-9117',
        country: 'Poland',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Krishnah Cater',
        password: 'GStwfL8gfywv',
        email: 'kcater4g@spiegel.de',
        phone: '269-248-1814',
        country: 'Portugal',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Emelda Kellough',
        password: 'ipZ83PVEkl4P',
        email: 'ekellough4h@webnode.com',
        phone: '803-500-3465',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Kelvin Menham',
        password: 'JSp22anI',
        email: 'kmenham4i@marriott.com',
        phone: '571-836-9827',
        country: 'Japan',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Llywellyn Leechman',
        password: '1aKiREw1H4r',
        email: 'lleechman4j@hhs.gov',
        phone: '904-590-1719',
        country: 'Brazil',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Justen Vanni',
        password: '6xbh6hH5',
        email: 'jvanni4k@newyorker.com',
        phone: '494-119-1960',
        country: 'Israel',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Morse Fellona',
        password: '9Rz2Ok',
        email: 'mfellona4l@rediff.com',
        phone: '843-645-9542',
        country: 'China',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Cull Duffan',
        password: 'VVqLmyXb',
        email: 'cduffan4m@nytimes.com',
        phone: '569-531-1831',
        country: 'Greece',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Bartholomew Aasaf',
        password: 'p2AZnMpA',
        email: 'baasaf4n@digg.com',
        phone: '678-671-0953',
        country: 'Peru',
        org_id: 3,
        role_id: 2,
      },
      {
        name: 'Graig Eamer',
        password: 'hVZUUQxX2R',
        email: 'geamer4o@free.fr',
        phone: '300-523-0869',
        country: 'Peru',
        org_id: 3,
        role_id: 2,
      },
    ]);
  });
};
