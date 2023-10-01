// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
require('jest-localstorage-mock');

jest.mock('react-intl', () => {
    const reactIntl = jest.requireActual('react-intl');
    const enUS = jest.requireActual('./i18n/locales/en-US.json');
    const intl = reactIntl.createIntl({
        locale: 'en-US',
        messages: enUS
    });

    return {
        ...reactIntl,
        useIntl: () => intl
    };
});
