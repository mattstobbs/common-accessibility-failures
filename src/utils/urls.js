export const urls = {
  lowContrastText: `${process.env.PUBLIC_URL}/low-contrast-text`,
  missingAltText: `${process.env.PUBLIC_URL}/missing-image-alt-text`,
  emptyLinks: `${process.env.PUBLIC_URL}/empty-links`,
  missingFormInputLabels: `${process.env.PUBLIC_URL}/missing-form-input-labels`,
  emptyButtons: `${process.env.PUBLIC_URL}/empty-buttons`,
  missingDocumentLanguage: `${process.env.PUBLIC_URL}/missing-document-language`,
};

export const pages = [
  { title: 'Low Contrast Text', href: urls.lowContrastText },
  {
    linkText: 'Missing Alt Text',
    title: 'Missing Alternative Text for Images',
    href: urls.missingAltText,
  },
  { title: 'Empty Links', href: urls.emptyLinks },
  { title: 'Missing Form Input Labels', href: urls.missingFormInputLabels },
  { title: 'Empty Buttons', href: urls.emptyButtons },
  { title: 'Missing Document Language', href: urls.missingDocumentLanguage },
];
