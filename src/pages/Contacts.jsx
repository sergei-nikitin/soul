import React from 'react';

import Main from '../components/pageContacts/main';
import FormSection from '../components/pageContacts/form';
import { Soul } from '../components/home/soul';

export const Contacts = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Main />
      <FormSection />
      <Soul />
    </>
  );
};
