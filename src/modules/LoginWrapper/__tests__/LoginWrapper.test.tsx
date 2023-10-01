import React from 'react';
import LoginWrapper from '../LoginWrapper';
import {render, screen} from '@testing-library/react'
import GlobalContext from '../../../contexts/GlobalContext';
import {GoogleOAuthProvider} from "@react-oauth/google";

const getMockGlobalContext = (value: any) => ({children}: any) => (
    <GoogleOAuthProvider
        clientId="testGoogleOAuthClientId"
    >
        <GlobalContext.Provider
            value={value}
        >
            {children}
        </GlobalContext.Provider>
    </GoogleOAuthProvider>
)

test('LoginWrapper should show children if login', () => {
    render(<LoginWrapper>
        <div data-testid="test-content">test content</div>
    </LoginWrapper>, {
        wrapper: getMockGlobalContext({
            scoreValues: {
                mutate: () => {
                },
                error: '',
                isLoading: false,
                score: 0, advise: []
            },
            userInfo: {
                login: true,
            },
            reload: () => {
            },
            updateToken: () => {
            }
        })
    })
    expect(screen.getByTestId('test-content').textContent).toBe(
        'test content',
    )
});

test('LoginWrapper should show children if login', () => {
    render((
        <LoginWrapper>
            <div data-testid="test-content">test content</div>
        </LoginWrapper>
    ), {
        wrapper: getMockGlobalContext({
            scoreValues: {
                mutate: () => {
                },
                error: '',
                isLoading: false,
                score: 0, advise: []
            },
            userInfo: {
                login: false,
            },
            reload: () => {
            },
            updateToken: () => {
            }
        })
    })
    expect(screen.queryByTestId('test-content')).not.toBeInTheDocument()
});