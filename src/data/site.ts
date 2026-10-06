export const site = {
  navn: 'Midt Norge Dental AS',
  kortnavn: 'Midt Norge Dental',
  beskrivelse:
    'Midt Norge Dental er et autorisert tannteknisk laboratorium som holder til i Mosjøen. Vi leverer tanntekniske produkter av høy kvalitet til hele Norge.',
  adresse: 'Peter Bechs gate 8',
  poststed: '8656 Mosjøen',
  adresseMerknad: 'Inngang i bakgård',
  telefon: '751 13 370',
  telefonLenke: 'tel:+4775113370',
  epost: 'post@tanntekniker.no',
  facebook: 'https://www.facebook.com/midtnorgedental',
  kart: 'https://www.google.com/maps/search/?api=1&query=Peter+Bechs+gate+8%2C+8656+Mosj%C3%B8en',
};

export const meny = [
  { tekst: 'Om oss', href: '/#om-oss' },
  { tekst: 'Produkter', href: '/#produkter' },
  { tekst: 'Digital produksjon', href: '/#digital-produksjon' },
  { tekst: 'Ansatte', href: '/#ansatte' },
  { tekst: 'Kontakt', href: '/#kontakt' },
];

// Bildefilen ligger i src/assets/ansatte/<bilde>.jpg
export const ansatte = [
  { navn: 'Sverre Olav', tittel: '' /* 'Daglig leder' */, bilde: 'sverre-olav' },
  { navn: 'Sissel', tittel: '', bilde: 'sissel' },
  { navn: 'Frode', tittel: '', bilde: 'frode' },
  { navn: 'Mona', tittel: '', bilde: 'mona' },
  { navn: 'Anne Marie', tittel: '', bilde: 'anne-marie' },
  { navn: 'Anette', tittel: '', bilde: 'anette' },
];

export const historie = [
  {
    aar: '1977',
    tekst: 'Sverre O. Kjærvik begynner i lære hos tanntekniker-mester Lajos Galambos i Mosjøen.',
  },
  {
    aar: '1981',
    tekst: 'Svennebrev i tannteknikerfaget. Sverre Olav overtar driften, og bedriften får navnet Midt Norge Dental.',
  },
  {
    aar: '1982',
    tekst: 'Sverre O. får utstedt mesterbrev i tannteknikerfaget.',
  },
  {
    aar: '1991',
    tekst: 'Bedriften flytter fra O.T. Olsens gate 13 til nye lokaler på Rynes.',
  },
  {
    aar: '1997',
    tekst: 'Omorganisert fra enkeltmannsforetak til aksjeselskap: Midt Norge Dental AS.',
  },
  {
    aar: '2006',
    tekst: 'Første investering i dataassistert design og produksjon – skanner, programvare og fresemaskin.',
  },
  {
    aar: '2013',
    tekst: 'Flytting til Peter Bechs gate 8 i Mosjøen sentrum, og 2. generasjons CAD/CAM-utstyr.',
  },
  {
    aar: '2016',
    tekst: '3. generasjons CAD/CAM-utstyr: en avansert 5-akset fresemaskin med industristandard.',
  },
];
