let contactMeData = {
  sectionHeader: 'Get in touch with me now!',
  leadName : '',
  leadEmail : '',
  leadMsg : '',
  personalDetails: {
    name: 'John Doe',
    number: '+1(000) 000 0000',
    email: 'john.doe@some.domain',
    location: 'Texas, USA'
  },
  onContactMeClink: () => {
    console.log('Contact me clicked');
    console.log(this.leadEmail);
    console.log(this.leadName);
    console.log(this.leadMsg);
  }
};
