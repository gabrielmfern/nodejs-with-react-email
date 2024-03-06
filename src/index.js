import React from 'react';

import { render } from '@react-email/components';
import { Email } from '../emails/email.js';

// this is how you render the email
//
// the first parameter is the React component
// the second is the properties that are passed into it (i.e. the props)
console.log(render(React.createElement(Email, null)));
